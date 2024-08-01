import { useState, useEffect } from 'react';

function App() {
  const [turnos, setTurnos] = useState([]);
  const [nombre, setNombre] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  // Estados para editar turnos
  const [nuevoNombre, setNuevoNombre] = useState('');
  const [nuevaFecha, setNuevaFecha] = useState('');
  const [nuevaHora, setNuevaHora] = useState('');
  const [turnoAEeditar, setTurnoAEeditar] = useState(null);

  useEffect(() => {
    // Cargar turnos almacenados
    const storedTurnos = localStorage.getItem('turnos');
    if (storedTurnos) {
      setTurnos(JSON.parse(storedTurnos));
    }
  }, []);

  const agregarTurno = (e) => {
    e.preventDefault();
    if (!nombre || !fecha || !hora) {
      alert("Error: Debes proporcionar todos los datos del turno");
      return;
    }
    const nuevoTurno = { nombre, fecha, hora };
    setTurnos([...turnos, nuevoTurno]);
    localStorage.setItem('turnos', JSON.stringify([...turnos, nuevoTurno])); // Actualizar localStorage
    setNombre('');
    setFecha('');
    setHora('');
  };

  const eliminarTurno = (index) => {
    const nuevosTurnos = turnos.filter((_, i) => i !== index);
    setTurnos(nuevosTurnos);
    localStorage.setItem('turnos', JSON.stringify(nuevosTurnos)); // Actualizar localStorage
  };

  const editarTurno = (index, nombre, fecha, hora) => {
    setTurnoAEeditar({ index, nombre, fecha, hora });
    setNuevoNombre(nombre);
    setNuevaFecha(fecha);
    setNuevaHora(hora);
  };

  const guardarEdicion = (e) => {
    e.preventDefault();
    if (!nuevoNombre || !nuevaFecha || !nuevaHora) {
      alert("Error: Debes proporcionar todos los datos del turno");
      return;
    }
    const turnoEditado = { nombre: nuevoNombre, fecha: nuevaFecha, hora: nuevaHora };
    const nuevosTurnos = turnos.map((turno, i) => i === turnoAEeditar.index ? turnoEditado : turno);
    setTurnos(nuevosTurnos);
    localStorage.setItem('turnos', JSON.stringify(nuevosTurnos)); // Actualizar localStorage
    setTurnoAEeditar(null);
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
        <form onSubmit={agregarTurno}>
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
        
        {turnoAEeditar && ( // Si hay turnos para editar se muestra el formulario, sino no
          <form onSubmit={guardarEdicion}>
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
        )}
        <h2>Turnos asignados:</h2>
        <ul>
          {turnos.map((turno, index) => (
            <li key={index}>{turno.nombre} - {turno.fecha} {turno.hora}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;

// Hay una variable turnoAEeditar que guarda el turno que se está editando, si es null no se está editando ningún turno, tiene una e de mas en el nombre de la variable
