import React from "react"
import { Link } from "react-router-dom"
import useFetchTurnos from '../hooks/useFetchTurnos'



export const UserPage = () => {
    const [turnos, setTurnos] = useFetchTurnos()
    return (

    <div className="wrapper">
        <h1>¡Bienvenido!</h1>
        <p>En esta página podrás ver los turnos que tienes asignados.</p>
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
        <Link to="/">Salir</Link>
    </div>
)
}
