import React from 'react';
import { eliminarTurno } from '../services/turnoService';

const TurnosTable = ({ turnos, setTurnos, setTurnoAEditar }) => {
  const handleDelete = async (id) => {
    await eliminarTurno(id);
    setTurnos(turnos.filter(turno => turno._id !== id));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Fecha</th>
          <th>Hora</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {turnos.map((turno) => (
          <tr key={turno._id}>
            <td>{turno.nombre}</td>
            <td>{turno.fecha}</td>
            <td>{turno.hora}</td>
            <td>
              <button onClick={() => handleDelete(turno._id)}>Eliminar</button>
              <button onClick={() => setTurnoAEditar(turno)}>Editar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TurnosTable;
