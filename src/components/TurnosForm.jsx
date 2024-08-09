import React, { useState } from 'react';
import { agregarTurno } from '../services/turnoService';

const TurnosForm = ({ turnos, setTurnos }) => {
  const [nombre, setNombre] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nombre || !fecha || !hora) {
      alert("Error: Debes proporcionar todos los datos del turno");
      return;
    }
    const nuevoTurno = await agregarTurno({ nombre, fecha, hora });
    setTurnos([...turnos, nuevoTurno]);
    setNombre('');
    setFecha('');
    setHora('');
  };

  return (
    <form className='formulario' onSubmit={handleSubmit}>
      <label>Nombre:</label>
      <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      <br />
      <label>Fecha:</label>
      <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />
      <br />
      <label>Hora:</label>
      <input type="time" value={hora} onChange={(e) => setHora(e.target.value)} />
      <br />
      <button type="submit">Agregar turno</button>
    </form>
  );
};

export default TurnosForm;
