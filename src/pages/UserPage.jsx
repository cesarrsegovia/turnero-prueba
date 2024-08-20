import React from "react"
import { Link } from "react-router-dom"
import useFetchTurnos from '../hooks/useFetchTurnos'
import '../pages/style/user-page.css'
import logo from '../assets/logo.png'



export const UserPage = () => {
  const [turnos, setTurnos] = useFetchTurnos()
  
  return (
    <div className="wrapper-user">
      <img src={logo} className="user-img" alt="logo" />
      <h1 className="title-user">¡Bienvenido!</h1>
      <div className="list-user">
        <h2>Turnos asignados:</h2>
        <ul className="turnos-list-user">
          {turnos.map((turno) => (
            <li key={turno._id} className="turno-item-user">
              <span className="turno-nombre-user">{turno.nombre}</span>
              <span className="turno-fecha-user">{turno.fecha} - {turno.hora}</span>
            </li>
          ))}
        </ul>
      </div>
      <Link className="button-back-user" to="/">Salir</Link>
    </div>
  )
}
