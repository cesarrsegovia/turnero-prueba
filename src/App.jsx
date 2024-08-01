import { useState, useEffect } from 'react'

function App() {
  const [turnos, setTurnos] = useState([]);
  const [nombre, setNombre] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');

  useEffect(() => {
    // Cargar turnos almacenados
    const storedTurnos = localStorage.getItem('turnos');
    if (storedTurnos) {
      setTurnos(JSON.parse(storedTurnos));
    }
  }, []);

  const agregarTurno = () => {
    if (!nombre || !fecha || !hora) {
      alert("Error: Debes proporcionar todos los datos del turno");
      return;
    }
    const nuevoTurno = { nombre, fecha, hora };
    setTurnos([...turnos, nuevoTurno]);
    localStorage.setItem('turnos', JSON.stringify([...turnos, nuevoTurno])); // Actualizar localStorage
  };
  const eliminarTurno = (index) => {
    setTurnos(turnos.filter((turno, i) => i !== index));
    localStorage.setItem('turnos', JSON.stringify(turnos.filter((turno, i) => i !== index))); // Actualizar localStorage
  };

  const guardarEdicion = () => {
    if (!nuevoNombre || !nuevaFecha || !nuevaHora) {
      alert("Error: Debes proporcionar todos los datos del turno");
      return;
    }
    const turnoEditado = { nombre: nuevoNombre, fecha: nuevaFecha, hora: nuevaHora };
    setTurnos(turnos.map((turno, i) => i === turnoAEeditar.index ? turnoEditado : turno));
    turnoAEeditar = null;
    setNuevoNombre('');
    setNuevaFecha('');
    setNuevaHora('');
  };

  return (
    <>
      <div>
      <h1>Turnos</h1>
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
          {turnos.map((turno, index) => (
            <tr key={index}>
              <td>{turno.nombre}</td>
              <td>{turno.fecha}</td>
              <td>{turno.hora}</td>
              <td>
                <button onClick={() => eliminarTurno(index)}>Eliminar</button>
                <button onClick={() => editarTurno(index, turno.nombre, turno.fecha, turno.hora)}>Editar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <form>
        <label>Nombre:</label>
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        <br />
        <label>Fecha:</label>
        <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />
        <br />
        <label>Hora:</label>
        <input type="time" value={hora} onChange={(e) => setHora(e.target.value)} />
        <br />
        <button onClick={agregarTurno}>Agregar turno</button>
      </form>
      <h2>Turnos asignados:</h2>
      <ul>
        {turnos.map((turno, index) => (
          <li key={index}>{turno.nombre} - {turno.fecha} {turno.hora}</li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default App
