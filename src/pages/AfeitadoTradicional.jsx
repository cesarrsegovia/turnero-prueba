import React from 'react';
import { Link } from 'react-router-dom';
import './style/afeitado-tradicional.css';

export const AfeitadoTradicional = () => {
    return (
        <div className="afeitado-tradicional-container">
            <h1 className="afeitado-tradicional-title">Afeitado Tradicional</h1>
            <p className="afeitado-tradicional-description">Una experiencia auténtica con navaja y toalla caliente.</p>
            <p className="afeitado-tradicional-price">Precio: $25</p>
            <Link className="back-link" to="/home">Volver</Link>
        </div>
    );
};