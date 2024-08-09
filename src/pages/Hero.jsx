import React from 'react';
import { Link } from 'react-router-dom';
import './style/hero.css';
import logo from '../assets/logo.png';

const Hero = () => {
    return (
        <div className="hero-container">
            <img src={logo} className="hero-img" alt="logo" />
            <h1 className="hero-title">Bienvenido a La Barbería del Sur</h1>
            <p className="hero-description">Donde el estilo rústico y la tradición se encuentran con la modernidad. ¡Sentite como en casa!</p>
            <Link to="/home" className="hero-button">Reservar</Link>
        </div>
    );
};

export default Hero;
