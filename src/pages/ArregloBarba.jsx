import React from 'react';
import { Link } from 'react-router-dom';
import './style/arreglo-barba.css';

export const ArregloBarba = () => {
    return (
        <div className="arreglo-barba-container">
            <h1 className="arreglo-barba-title">Arreglo de Barba</h1>
            <p className="arreglo-barba-description">Para que tu barba luzca impecable, como debe ser.</p>
            <p className="arreglo-barba-price">Precio: $20</p>
            <Link className="back-link" to="/home">Volver</Link>
        </div>
    );
};