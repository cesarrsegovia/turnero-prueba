const BASE_URL = 'http://localhost:5000/api/turnos';

export const agregarTurno = async (turno) => {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(turno),
  });
  return await response.json();
};

export const eliminarTurno = async (id) => {
  await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
  });
};

export const editarTurno = async (id, turnoEditado) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(turnoEditado),
  });
  return await response.json();
};
