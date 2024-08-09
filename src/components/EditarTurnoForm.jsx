import React, { useState } from 'react';
import { editarTurno } from '../services/turnoService';

const EditarTurnoForm = ({ turnoAEditar, setTurnoAEditar, turnos, setTurnos }) => {
  const [nuevoNombre, setNuevoNombre] = useState(turnoAEditar.nombre);
  const [nuevaFecha, setNuevaFecha] = useState(turnoAEditar.fecha);
  const [nuevaHora, setNuevaHora] = useState(turnoAEditar.hora);

  const handleEdit = async (e) => {
    e.preventDefault();
    if (!nuevoNombre || !nuevaFecha || !nuevaHora) {
      alert("Error: Debes proporcionar todos los datos del turno");
      return;
    }
    const turnoEditado = await editarTurno(turnoAEditar._id, { nombre: nuevoNombre, fecha: nuevaFecha, hora: nuevaHora });
    setTurnos(turnos.map(turno => turno._id === turnoEditado._id ? turnoEditado : turno));
    setTurnoAEditar(null);
  };

  return (
    <form className='formulario' onSubmit={handleEdit}>
      <h2>Editar Turno</h2>
      <label>Nombre:</label>
      <input type="text" value={nuevoNombre} onChange={(e) => setNuevoNombre(e.target.value)} />
      <br />
      <label>Fecha:</label>
      <input type="date" value={nuevaFecha} onChange={(e) => setNuevaFecha(e.target.value)} />
      <br />
      <label>Hora:</label>
      <input type="time" value={nuevaHora} onChange={(e) => setNuevaHora(e.target.value)} />
      <br />
      <button type="submit">Guardar cambios</button>
    </form>
  );
};

export default EditarTurnoForm;
