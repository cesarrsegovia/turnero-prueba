import React from 'react';

const TurnosList = ({ turnos }) => {
  return (
    <div>
      <h2>Turnos asignados:</h2>
      <ul className="turnos-list">
        {turnos.map((turno) => (
          <li key={turno._id} className="turno-item">
            <span className="turno-nombre">{turno.nombre}</span>
            <span className="turno-fecha">{turno.fecha} {turno.hora}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TurnosList;
