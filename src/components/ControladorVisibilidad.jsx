
const ControladorVisibilidad = ({ isChecked, setMostrarCompletados, limpiarTareas }) => {

    // manejando el evento de eliminar
    const handleDelete = () => {
        if (window.confirm('¿Estás seguro de eliminar las tareas completadas?')) {
            limpiarTareas()
        }
    }

    return (
        <div className="d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary">
            <div className="form-check form-switch">
                <input type="checkbox"
                    checked={isChecked}
                    onChange={e => setMostrarCompletados(e.target.checked)} />
            </div>
            <label>Mostrar tareas completadas</label>
            <button onClick={handleDelete} className="btn btn-danger btn-sm">Eliminar</button>
        </div>
    )
}

export default ControladorVisibilidad
