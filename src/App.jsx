
// import { useState, useEffect } from 'react';
// import './App.css'

// function App() {
//   const [turnos, setTurnos] = useState([]);
//   const [nombre, setNombre] = useState('');
//   const [fecha, setFecha] = useState('');
//   const [hora, setHora] = useState('');
//   // Para editar turnos
//   const [nuevoNombre, setNuevoNombre] = useState('');
//   const [nuevaFecha, setNuevaFecha] = useState('');
//   const [nuevaHora, setNuevaHora] = useState('');
//   const [turnoAEeditar, setTurnoAEeditar] = useState(null);

//   // Cargar turnos desde Backend
//   useEffect(() => {
//     const cargarTurnos = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/api/turnos');
//         const data = await response.json();
//         setTurnos(data);
//       } catch (error) {
//         console.log('Error al cargar los turnos:', error);
//       }
//     }

//     cargarTurnos();
//   }, []);


//   const agregarTurno = async (e) => {
//     e.preventDefault();
//     if (!nombre || !fecha || !hora) {
//       alert("Error: Debes proporcionar todos los datos del turno");
//       return;
//     }
//     try {
//       const response = await fetch('http://localhost:5000/api/turnos', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ nombre, fecha, hora })
//       });

//       const nuevoTurno = { nombre, fecha, hora };
//       setTurnos([...turnos, nuevoTurno]);
//       setNombre('');
//       setFecha('');
//       setHora('');
//     } catch (error) {
//       console.log('Error al agregar el turno:', error);
//     }
//   };

//   // Eliminar turno
//   const eliminarTurno = async (id) => {
//     try {
//       await fetch(`http://localhost:5000/api/turnos/${id}`, {
//         method: 'DELETE',
//       });
//       setTurnos(turnos.filter(turno => turno._id !== id));
//     } catch (error) {
//       console.error('Error al eliminar el turno:', error);
//     }
//   };

//   // Editar turno
//   const editarTurno = (turno) => {
//     setTurnoAEeditar(turno);
//     setNuevoNombre(turno.nombre);
//     setNuevaFecha(turno.fecha);
//     setNuevaHora(turno.hora);
//   };

//   const guardarEdicion = async (e) => {
//     e.preventDefault();
//     if (!nuevoNombre || !nuevaFecha || !nuevaHora) {
//       alert("Error: Debes proporcionar todos los datos del turno");
//       return;
//     }
//     try {
//       const response = await fetch(`http://localhost:5000/api/turnos/${turnoAEeditar._id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ nombre: nuevoNombre, fecha: nuevaFecha, hora: nuevaHora }),
//       });

//       // Editar el turno
//       const turnoEditado = await response.json();
//       setTurnos(turnos.map(turno => turno._id === turnoEditado._id ? turnoEditado : turno));
//       setTurnoAEeditar(null);
//       setNuevoNombre('');
//       setNuevaFecha('');
//       setNuevaHora('');
//     } catch (error) {
//       console.error('Error al editar el turno:', error);
//     }
//   }

//   return (
//     <>
//       <div className='container'>
//         <h1>Turnos</h1>
//         <table>
//           <thead>
//             <tr>
//               <th>Nombre</th>
//               <th>Fecha</th>
//               <th>Hora</th>
//               <th>Acciones</th>
//             </tr>
//           </thead>
//           <tbody>
//             {turnos.map((turno) => (
//               <tr key={turno._id}>
//                 <td>{turno.nombre}</td>
//                 <td>{turno.fecha}</td>
//                 <td>{turno.hora}</td>
//                 <td>
//                   <button onClick={() => eliminarTurno(turno._id)}>Eliminar</button>
//                   <button onClick={() => editarTurno(turno)}>Editar</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <form className='formulario' onSubmit={agregarTurno}>
//           <label>Nombre:</label>
//           <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
//           <br />
//           <label>Fecha:</label>
//           <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />
//           <br />
//           <label>Hora:</label>
//           <input type="time" value={hora} onChange={(e) => setHora(e.target.value)} />
//           <br />
//           <button type="submit">Agregar turno</button>
//         </form>

//         {/* Seccion para editar turno */}
//         {turnoAEeditar && (
//           <form className='formulario' onSubmit={guardarEdicion}>
//             <h2>Editar Turno</h2>
//             <label>Nombre:</label>
//             <input type="text" value={nuevoNombre} onChange={(e) => setNuevoNombre(e.target.value)} />
//             <br />
//             <label>Fecha:</label>
//             <input type="date" value={nuevaFecha} onChange={(e) => setNuevaFecha(e.target.value)} />
//             <br />
//             <label>Hora:</label>
//             <input type="time" value={nuevaHora} onChange={(e) => setNuevaHora(e.target.value)} />
//             <br />
//             <button type="submit">Guardar cambios</button>
//           </form>
//         )}
//         <h2>Turnos asignados:</h2>
//         <ul className="turnos-list">
//           {turnos.map((turno, index) => (
//             <li key={turno._id} className="turno-item">
//               <span className="turno-nombre">{turno.nombre}</span>
//               <span className="turno-fecha">{turno.fecha} {turno.hora}</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// }

// export default App;

// hay una variable turnoAEeditar que tiene una e de mas. Para revisar

import React, { useState } from 'react';
import useFetchTurnos from './hooks/useFetchTurnos';
import TurnosForm from './components/TurnosForm';
import EditarTurnoForm from './components/EditarTurnoForm';
import TurnosTable from './components/TurnosTable';
import TurnosList from './components/TurnosList';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  const [turnos, setTurnos] = useFetchTurnos();
  const [turnoAEditar, setTurnoAEditar] = useState(null);

  return (
    <div className='container'>
      <h1>Turnos</h1>
      <TurnosTable turnos={turnos} setTurnos={setTurnos} setTurnoAEditar={setTurnoAEditar} />
      <TurnosForm turnos={turnos} setTurnos={setTurnos} />
      {turnoAEditar && (
        <EditarTurnoForm 
          turnoAEditar={turnoAEditar} 
          setTurnoAEditar={setTurnoAEditar} 
          turnos={turnos} 
          setTurnos={setTurnos} 
        />
      )}
      <TurnosList turnos={turnos} />
      <Link to='/home'>volver</Link>
    </div>
  );
}

export default App;
