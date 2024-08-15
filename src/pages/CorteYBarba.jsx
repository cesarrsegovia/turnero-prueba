import React from 'react';
import { Link } from 'react-router-dom';
import './style/corte-y-barba.css'

export const CorteYBarba = () => {
    return (
        <div className="corte-y-barba-container">
            <h1 className="corte-y-barba-title">Corte y Barba</h1>
            <p className="corte-y-barba-description">Una combinación perfecta para un estilo completo.</p>
            <p className="corte-y-barba-price">Precio: $45</p>
            <Link className="back-link" to="/home">Volver</Link>
        </div>
    );
};