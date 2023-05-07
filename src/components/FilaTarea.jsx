
const FilaTarea = ({ tarea, cambioTarea }) => {
    return (
        <tr>
            <td className="d-flex justify-content-between">
                {tarea.nombre}
                <input type="checkbox"
                    checked={tarea.done}
                    onChange={() => cambioTarea(tarea)} />
            </td>
        </tr>
    )
}

export default FilaTarea
