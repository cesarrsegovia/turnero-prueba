import { useState, useEffect } from 'react';

const useFetchTurnos = () => {
  const [turnos, setTurnos] = useState([]);

  useEffect(() => {
    const cargarTurnos = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/turnos');
        const data = await response.json();
        setTurnos(data);
      } catch (error) {
        console.log('Error al cargar los turnos:', error);
      }
    }

    cargarTurnos();
  }, []);

  return [turnos, setTurnos];
};

export default useFetchTurnos;
