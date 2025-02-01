import { useState} from 'react'
import './App.css'
import Menu from './components/Menu';
import Board from './components/Board';

function App() {
  const [gameModo, setGameModo] = useState();

  const handleSelectModo = (modo) => {
    setGameModo(modo);
  };

  return (
    <div>
      {!gameModo ? (
        <Menu onSelectModo={handleSelectModo} />
      ) : (
        <Board modo={gameModo} />
      )}
    </div>
  );
}

export default App
