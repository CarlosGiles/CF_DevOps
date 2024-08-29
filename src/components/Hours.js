// Placeholder to host a component
import React from 'react';

const Hours = () => {
  const today = new Date();
  const day = today.getDay(); // 0 (Domingo) - 6 (Sábado)
  let hours;

  if (day >= 1 && day <= 5) { // Lunes a Viernes
    hours = '10 a.m. - 4 p.m.';
  } else { // Sábado y Domingo
    hours = '9 a.m. - 8 p.m.';
  }

  return (
    <div>
      <h2>Horario de hoy:</h2>
      <p>{hours}</p>
    </div>
  );
};

export default Hours;