
import { useEffect, useState } from "react";
import "./App.css";
import { CreadorTareas } from "./components/CreadorTareas";
import ListaTareas from "./components/ListaTareas";
import ControladorVisibilidad from "./components/ControladorVisibilidad";
import Container from "./components/Container";

function App() {

  // Listar tareas
  const [listaTareas, setListaTareas] = useState([])

  const [mostrarCompletados, setMostrarCompletados] = useState(false)

  function crearNuevaTarea(nombreTarea) {
    if (!listaTareas.find(tarea => tarea.nombre === nombreTarea)) {
      setListaTareas([...listaTareas, { nombre: nombreTarea, done: false }])
    }
  }

  // mostrando datos en el local storage y
  // convirtiendolos a JSON
  useEffect(() => {
    let datos = localStorage.getItem('tareas')
    if (datos) {
      setListaTareas(JSON.parse(datos))
    }
  }, [])

  // limpiando tareas del local storage
  const limpiarTareas = () => {
    // filtrando las tareas hechas
    setListaTareas(listaTareas.filter(tarea => !tarea.done))
    // ocultando las tareas completadas
    setMostrarCompletados(false)
  }

  const cambioTarea = (tarea) => {
    setListaTareas(listaTareas.map((t) => (t.nombre === tarea.nombre ? { ...t, done: !t.done } : t)))
  }

  // guardando tareas en el local storage
  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(listaTareas))
  }, [listaTareas])

  // Manera de React
  // Creando un nuevo arreglo
  // a = [1,2,3]
  // const b = [...a, 4]
  // b = [1,2,3,4]


  return (

    <main className="bg-dark vh-100 text-white">
      <Container>
        {/* pasando una funcion a un componente */}
        <CreadorTareas crearNuevaTarea={crearNuevaTarea} />
        <ListaTareas tareas={listaTareas} cambioTarea={cambioTarea} />
        <ControladorVisibilidad
          isChecked={mostrarCompletados}
          setMostrarCompletados={(checked) => setMostrarCompletados(checked)}
          limpiarTareas={limpiarTareas}
        />
        {
          mostrarCompletados && (
            <ListaTareas tareas={listaTareas} cambioTarea={cambioTarea} mostrarCompletados={mostrarCompletados} />

          )
        }
      </Container>
    </main>

  );
}

export default App;
