import React, { useState } from 'react';

function Menu({ onSelectModo }) {
  return (
    <div>
      <h1>Jogo da Velha</h1>
      <button onClick={() => onSelectModo('pvp')}>Player vs Player</button>
      <button onClick={() => onSelectModo('pvm')}>Player vs Máquina</button>
    </div>
  );
}

export default Menu;