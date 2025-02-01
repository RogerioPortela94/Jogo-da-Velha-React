// Função para a máquina fazer uma jogada
export function makeAIMove(squares) {
    console.log("chamou a função!");
    const availableMoves = [];
    squares.forEach((cell, index) => {
      if (!cell) {
        console.log("Avaliando casas vazias para jogar: "+index);
        availableMoves.push(index);
      }
    });
  
    if (availableMoves.length > 0) {
      const randomIndex = Math.floor(Math.random() * availableMoves.length);
      console.log("Numero para jogar: "+randomIndex);
      return availableMoves[randomIndex];
    }
  
    return null;
  }
  
  // Função para calcular o vencedor
  export function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
  
    return null;
  }