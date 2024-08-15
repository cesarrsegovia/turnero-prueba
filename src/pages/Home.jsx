import React from 'react';
import { Link } from 'react-router-dom';
import './style/home.css';

export const Home = () => {
    return (
        <div className="home-container">
            <h1 className="home-title">¡Bienvenidos a La Barbería del Sur!</h1>
            <p className="home-description">
                Donde tradición y estilo se encuentran. Explorá nuestros servicios y descubrí lo que podemos hacer por vos.
            </p>
            
            <section className="home-services">
                <h2 className="section-title">Nuestros Servicios</h2>
                <div className="services-list">
                    <Link to="/corte-clasico" className="service-item-1">
                        <h3>Corte Clásico</h3>
                        <img className="service-cabello" src="./src/assets/cabello.png" alt="Imagen de un corte clásico de cabello" />
                        <p>El corte que nunca pasa de moda, siempre a tu estilo.</p>
                    </Link>
                    <Link to="/afeitado-tradicional" className="service-item-2">
                        <h3>Afeitado Tradicional</h3>
                        <img className="service-barba" src="./src/assets/vello-facial.png" alt="Imagen de un afeitado tradicional" />
                        <p>Una experiencia auténtica con navaja y toalla caliente.</p>
                    </Link>
                    <Link to="/arreglo-barba" className="service-item-3">
                        <h3>Arreglo de Barba</h3>
                        <img className="service-barba" src="./src/assets/barba.png" alt="Imagen de un arreglo de barba" />
                        <p>Para que tu barba luzca impecable, como debe ser.</p>
                    </Link>
                    <Link to="/corte-y-barba" className="service-item-4">
                        <h3>Corte y Barba</h3>
                        <img className="service-cyb" src="./src/assets/barba.png" alt="Imagen de un corte de cabello y barba" />
                        <p>Una combinación perfecta para un estilo completo.</p>
                    </Link>
                </div>
            </section>
            
            <div className="cta-buttons">
                <Link to="/app" className="cta-button">Reservar Ahora</Link>
                <Link to="/" className="cta-link">Volver al Inicio</Link>
            </div>
        </div>
    );
};


