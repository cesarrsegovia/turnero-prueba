import React from 'react';
import { Link } from 'react-router-dom';
import './style/corte-clasico.css';

export const CorteClasico = () => {
    return (
        <div className="corte-clasico-container">
            <h1 className="corte-clasico-title">Corte Clásico</h1>
            <p className="corte-clasico-description">El corte que nunca pasa de moda, siempre a tu estilo.</p>
            <p className="corte-clasico-price">Precio: $30</p>
            <Link to="/home" className="back-link">Volver</Link>
        </div>
    );
};