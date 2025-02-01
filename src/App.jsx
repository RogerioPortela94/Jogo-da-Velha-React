import { useState , useEffect} from 'react'
import './App.css'
import Menu from './components/Menu';
import Board from './components/Board';

function App() {
  const [gameModo, setGameModo] = useState();

  const handleSelectModo = (modo) => {
    console.log("O que aconteceu aqui? "+modo);
    setGameModo(modo);
    console.log("Game Modo: "+gameModo);
  };
  // useEffect para monitorar mudanças em gameModo
  useEffect(() => {
    console.log("Game Modo atualizado: " + gameModo);
  }, [gameModo]); // Executa sempre que gameModo mudar


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
