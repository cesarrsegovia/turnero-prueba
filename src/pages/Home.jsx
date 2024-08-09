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
                    <div className="service-item">
                        <h3>Corte Clásico</h3>
                        <p>El corte que nunca pasa de moda, siempre a tu estilo.</p>
                    </div>
                    <div className="service-item">
                        <h3>Afeitado Tradicional</h3>
                        <p>Una experiencia auténtica con navaja y toalla caliente.</p>
                    </div>
                    <div className="service-item">
                        <h3>Arreglo de Barba</h3>
                        <p>Para que tu barba luzca impecable, como debe ser.</p>
                    </div>
                    <div className="service-item">
                        <h3>Corte y Barba</h3>
                        <p>Una combinación perfecta para un estilo completo. ¡Transformate con nosotros!</p>
                    </div>
                </div>
            </section>
            
            <div className="cta-buttons">
                <Link to="/app" className="cta-button">Reservar Ahora</Link>
                <Link to="/" className="cta-link">Volver al Inicio</Link>
            </div>
        </div>
    );
};


