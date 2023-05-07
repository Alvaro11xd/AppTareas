import { useState } from "react";

// recibiendo propiedades
export const CreadorTareas = ({ crearNuevaTarea }) => {
    // useState recibe dos parametros
    // una variable para guardar el dato
    // y una funcion para ejecutar el useState
    const [nuevaTarea, setNuevaTarea] = useState('');

    // manejando el evento de envio
    const handleSubmit = (e) => {
        e.preventDefault()
        // llamando funcion crear nueva tarea
        crearNuevaTarea(nuevaTarea)
        // guardando datos en el almacenamiento local
        // localStorage.setItem("tarea", nuevaTarea);
        // limpiando input
        setNuevaTarea("");
    };
    return (
        <div>
            <form onSubmit={handleSubmit} className="my-2 row">
                <div className="col-9">
                    {/* guardar datos que se escriben en el input */}
                    {/* lo guardamos en un estado */}
                    <input
                        type="text"
                        placeholder="Ingrese una nueva tarea"
                        value={nuevaTarea}
                        onChange={(e) => setNuevaTarea(e.target.value)}
                        className="form-control"
                    />
                </div>

                <div className="col-3">
                    <button className="btn btn-primary btn-sm">Guardar tarea</button>
                </div>

            </form>
        </div>
    );
};