import React, { useState } from 'react';
import { makeAIMove, calculateWinner } from './gameUtils'; // Importando as funções

function Board({ modo }) {
    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(""));
    const winner = calculateWinner(squares);
    let status;

    const handleClick = (i) => {
        if (squares[i] || calculateWinner(squares)) {
            return;
        }
        const newSquares = squares.slice();
        if(modo === "pvm"){
            // Se for o modo Player vs Máquina e for a vez da máquina
            if(!xIsNext){
                vezDaIa();
            }else{
                newSquares[i] = 'X'; // Jogador humano sempre joga como X
                setSquares(newSquares);
                setXIsNext(false);
                vezDaIa(newSquares);
            } 
        }else {
            newSquares[i] =  xIsNext ? 'X' : 'O' ;
            setSquares(newSquares);
            setXIsNext(!xIsNext);
        }
    };
    
    

    
   
    
    function vezDaIa(newSquares){
        const aiMove = makeAIMove(newSquares);
        if (aiMove !== null) {
            newSquares[aiMove] = 'O'; // Máquina sempre joga como O
            setSquares(newSquares);
            setXIsNext(true); // Passa a vez de volta para o jogador humano
        }
    }
   


    if(winner){
            status = "Vencedor: "+winner;
    }else{
        if(modo === 'pvp'){
            status = 'Próximo jogador:'+ (xIsNext ? 'X' : 'O'); 
        }else{
            status = 'Próximo jogador:'+ (xIsNext ? 'X (Você)' : 'O (Máquina)');
        }
    }
  

    return (
        <div>
        <div>{status}</div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30vh' }}>
                <div className="board">
                    {squares.map((cell, i) => (
                    <button key={i} onClick={() => handleClick(i)}>
                        {cell}
                    </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Board;