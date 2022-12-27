const squares = document.querySelectorAll('.square');
const resetButton = document.querySelector('#reset');
const modeButton = document.querySelector('#mode');
let gameOver = false;
let mode = 'easy';

function resetGame() {
  gameOver = false;
  squares.forEach(square => {
    square.textContent = '';
  });
}

function changeMode() {
  if (mode === 'easy') {
    mode = 'hard';
    modeButton.textContent = 'Easy Mode';
  } else {
    mode = 'easy';
    modeButton.textContent = 'Hard Mode';
  }
}

function makeMove(square) {
  if (gameOver || square.textContent !== '') {
    return;
  }
  square.textContent = 'X';
  checkForWin();
  if (gameOver) {
    return;
  }
  computerMove();
  checkForWin();
}

function computerMove() {
  let move;
  if (mode ==='easy') {
    // select a random square
    move = Math.floor(Math.random() * squares.length);
    } else {
    // use minimax algorithm to select optimal move
    move = minimax(squares, 'O').index;
    }
    squares[move].textContent = 'O';
    }
    
    function checkForWin() {
    // check rows
    for (let i = 0; i < 9; i += 3) {
    if (squares[i].textContent === squares[i + 1].textContent && squares[i].textContent === squares[i + 2].textContent && squares[i].textContent !== '') {
    gameOver = true;
    return;
    }
    }
    // check columns
    for (let i = 0; i < 3; i++) {
    if (squares[i].textContent === squares[i + 3].textContent && squares[i].textContent === squares[i + 6].textContent && squares[i].textContent !== '') {
    gameOver = true;
    return;
    }
    }
    // check diagonals
    if (squares[0].textContent === squares[4].textContent && squares[0].textContent === squares[8].textContent && squares[0].textContent !== '') {
    gameOver = true;
    return;
    }
    if (squares[2].textContent === squares[4].textContent && squares[2].textContent === squares[6].textContent && squares[2].textContent !== '') {
    gameOver = true;
    return;
    }
    // check for draw
    let emptySquares = false;
    squares.forEach(square => {
    if (square.textContent === '') {
    emptySquares = true;
    }
    });
    if (!emptySquares) {
    gameOver = true;
    }
    }
    
    function minimax(newSquares, player) {
    // check for terminal state (win or draw)
    let winner = checkForWin(newSquares);
    if (winner !== null) {
    if (winner === 'X') {
    return {score: -10};
    } else if (winner === 'O') {
    return {score: 10};
    } else {
    return {score: 0};
    }
    }
    // generate list of available moves
    let moves = [];
    newSquares.forEach((square, index) => {
    if (square.textContent === '') {
    let move = {index: index};
    square.textContent = player;
    if (player === 'O') {
    let result = minimax(newSquares, 'X');
    move.score = result.score;
    } else {
    let result = minimax(newSquares, 'O');
    move.score = result.score;
    }
    newSquares[index].textContent = '';
    moves.push(move);
    }
    });
    // choose best move
    let bestMove;
    if (player === 'O') {
    let bestScore = -Infinity;
    moves.forEach(move => {
    if (move.score > bestScore)
    {
        bestScore = move.score;
        bestMove = move;
        }
        });
        } else {
        let bestScore = Infinity;
        moves.forEach(move => {
        if (move.score < bestScore) {
        bestScore = move.score;
        bestMove = move;
        }
        });
        }
        // return best move
        return bestMove;
        }
        
        squares.forEach(square => {
        square.addEventListener('click', () => {
        makeMove(square);
        });
        });
        resetButton.addEventListener('click', resetGame);
        modeButton.addEventListener('click', changeMode);