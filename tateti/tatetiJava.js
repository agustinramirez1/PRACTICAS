let player1Name;
let player2Name;
let player1Score = 0;
let player2Score = 0;

// Array que representa el tablero del juego
let gameBoard = ["", "", "", "", "", "", "", "", ""];

// Variable que mantiene un registro del jugador actual (X o O)
let currentPlayer = "X";

// Función que maneja el evento de clic en una casilla del tablero
function handleClick(square) {
  const squareIndex = parseInt(square.id);

  if (gameBoard[squareIndex] === "") {
    gameBoard[squareIndex] = currentPlayer;
    square.textContent = currentPlayer;
    square.classList.add(currentPlayer);

    if (checkWin()) {
      const winner = checkWin() === "draw" ? "Empate" : currentPlayer + " gana!";
      alert(winner);
      updateScoreboard();
      resetGame();
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
        if (gameBoard.includes("")) {
          return null;
        } else {
          const winner = gameBoard[X];
          if (winner === "X") {
            player1Score++;
          } else if(winner === "O") {
            player2Score++;
          }
      updateScoreboard();
          return winner;
        } 
    }
}
// Función que comprueba si hay un ganador o empate
function checkWin() {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < winConditions.length; i++) {
    const [a, b, c] = winConditions[i];

    if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      return gameBoard[a];
    }
  }

  if (gameBoard.includes("")) {
    return null; // Todavía hay casillas vacías, el juego continúa
  } else {
    return "draw"; // No hay ganador y no hay casillas vacías, es un empate
  }
  if (gameBoard.includes("")) {
    return null;
  } else {
    const winner = gameBoard[a];
    if (winner === "X") {
      player1Score++;
    } else {
      player2Score++;
    }
    updateScoreboard();
    return winner;
  }
}
// Función que reinicia el juego
function resetGame() {
  gameBoard = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";

  const squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.textContent = "";
    square.classList.remove("X", "O");
  });
  // Reiniciar nombres y puntuaciones de los jugadores
  player1Name = document.getElementById("player1").value;
  player2Name = document.getElementById("player2").value;
  player1Score = 0;
  player2Score = 0;
  updateScoreboard();
}
function updateScoreboard() {
    const player1Scoreboard = document.getElementById("player1-score");
    const player2Scoreboard = document.getElementById("player2-score");
    player1Scoreboard.textContent = `${player1Name}: ${player1Score}`;
    player2Scoreboard.textContent = `${player2Name}: ${player2Score}`;
}

// Asignar la función handleClick a cada casilla del tablero
const squares = document.querySelectorAll(".square");

squares.forEach((square) => {
  square.addEventListener("click", () => {
    handleClick(square);
  });
});
