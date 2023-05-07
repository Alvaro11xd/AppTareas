import FilaTarea from "./FilaTarea"

// eslint-disable-next-line react/prop-types
const ListaTareas = ({ tareas, cambioTarea, mostrarCompletados=false }) => {
    const TablaFilaTarea = (ValorHecho) => {
        return (
            tareas
                // filtrando las tareas echas
                .filter(tarea => tarea.done === ValorHecho)
                .map(tarea => (
                    <FilaTarea tarea={tarea} key={tarea.nombre} cambioTarea={cambioTarea} />
                ))
        )
    }
    return (
        <table className="table table-dark table-striped table-bordered border-secondary">
            <thead>
                <tr>
                    <th>Tarea</th>
                </tr>
            </thead>
            <tbody>
                {
                    TablaFilaTarea(mostrarCompletados)
                }
            </tbody>
        </table>
    )
}

export default ListaTareas
