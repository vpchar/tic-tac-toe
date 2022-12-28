
    // Keep track of the game state
    const squares = document.querySelectorAll(".square");
    const resetBtn = document.querySelector("#resetButton");
    let currentPlayer = "X";
    let gameOver = false;
    let gameState = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
    //added by the human ;-)   
    resetBtn.addEventListener("click",()=>{
       handleReset();
    })
    const handleReset = () => {
      currentPlayer = "X";
       gameOver = false;
       gameState = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ];  
      squares.forEach((square) => {
        square.textContent="";
      });
      resetBtn.textContent="Reset"
    }
    // Add an event listener to each square to handle clicks
    squares.forEach((square) => {
      square.addEventListener("click", handleClick);
    });

    function handleClick(event) {
      // Ignore clicks if the game is over or if the square is already filled
      if (gameOver || event.target.textContent !== "") {
        return;
      }

      // Place the current player's symbol in the square
      event.target.textContent = currentPlayer;

      // Update the game state
      const row = Math.floor(event.target.id / 3);
      const col = event.target.id % 3;
      gameState[row][col] = currentPlayer;

      // Check for a win or a draw
      const result = checkResult(gameState, currentPlayer);
      if (result === "X" || result === "O") {
        // Game over - show a message and disable clicks on the squares
        gameOver = true;
        resetBtn.textContent=(`Player ${result} wins!`);
         squares.forEach((square) => {
           square.textContent="";
         });
        
      } else if (result === "draw") {
        // Game over - show a message and disable clicks on the squares
        gameOver = true;
        resetBtn.textContent=(`It's a draw!`);
        // squares.forEach((square) => {
        //   square.removeEventListener("click", handleClick);
        // });
      } else {
        // Switch players
        currentPlayer = currentPlayer === "X" ? "O" : "X";

        // If it's the computer's turn, let the computer make a move
        if (currentPlayer === "O") {
          makeComputerMove();
        }
      }
    }

    function checkResult(gameState, player) {
      // Check for a win by checking all rows, columns, and diagonals
      if (
        (gameState[0][0] === player &&
          gameState[0][1] === player &&
          gameState[0][2] === player) ||
        (gameState[1][0] === player &&
          gameState[1][1] === player &&
          gameState[1][2] === player) ||
        (gameState[2][0] === player &&
          gameState[2][1] === player &&
          gameState[2][2] === player) ||
        (gameState[0][0] === player &&
          gameState[1][0] === player &&
          gameState[2][0] === player) ||
        (gameState[0][1] === player &&
          gameState[1][1] === player &&
          gameState[2][1] === player) ||
        (gameState[0][2] === player &&
          gameState[1][2] === player &&
          gameState[2][2] === player) ||
        (gameState[0][0] === player &&
          gameState[1][1] === player &&
          gameState[2][2] === player) ||
        (gameState[0][2] === player &&
          gameState[1][1] === player &&
          gameState[2][0] === player)
      ) {
        return player;
      }

      // Check for a draw by checking if all squares are filled
      for (let i = 0; i < gameState.length; i++) {
        for (let j = 0; j < gameState[i].length; j++) {
          if (gameState[i][j] === "") {
            return "";
          }
        }
      }

      return "draw";
    }

    function makeComputerMove() {
      // Use the minimax algorithm to find the best move for the computer
      let bestScore = -Infinity;
      let bestRow = null;
      let bestCol = null;
      for (let row = 0; row < gameState.length; row++) {
        for (let col = 0; col < gameState[row].length; col++) {
          if (gameState[row][col] === "") {
            gameState[row][col] = "O";
            const score = minimax(gameState, 0, false);
            gameState[row][col] = "";
            if (score > bestScore) {
              bestScore = score;
              bestRow = row;
              bestCol = col;
            }
          }
        }
      }

      // Make the best move
      gameState[bestRow][bestCol] = "O";
      squares[bestRow * 3 + bestCol].textContent = "O";
      currentPlayer = "X";

      // Check for a win or a draw
      const result = checkResult(gameState, "O");
      if (result === "O") {
        // Game over - show a message and disable clicks on the squares
        gameOver = true;
        resetBtn.textContent=(`Player O wins!`);
        // squares.forEach((square) => {
        //   square.removeEventListener("click", handleClick);
        // });
      } else if (result === "draw") {
        // Game over - show a message and disable clicks on the squares
        gameOver = true;
        resetBtn.textContent=(`It's a draw!`);
        // squares.forEach((square) => {
        //   square.removeEventListener("click", handleClick);
        // });
      }
    }

    function minimax(gameState, depth, isMaximizing) {
      const result = checkResult(gameState, isMaximizing ? "O" : "X");
      if (result === "O") {
        return 10 - depth;
      } else if (result === "X") {
        return depth - 10;
      } else if (result === "draw") {
        return 0;
      }

      if (isMaximizing) {
        let bestScore = -Infinity;
        for (let row = 0; row < gameState.length; row++) {
          for (let col = 0; col < gameState[row].length; col++) {
            if (gameState[row][col] === "") {
              gameState[row][col] = "O";
              const score = minimax(gameState, depth + 1, false);
              gameState[row][col] = "";
              bestScore = Math.max(bestScore, score);
            }
          }
        }
        return bestScore;
      } else {
        let bestScore = Infinity;
        for (let row = 0; row < gameState.length; row++) {
          for (let col = 0; col < gameState[row].length; col++) {
            if (gameState[row][col] === "") {
              gameState[row][col] = "X";
              const score = minimax(gameState, depth + 1, true);
              gameState[row][col] = "";
              bestScore = Math.min(bestScore, score);
            }
          }
        }
        return bestScore;
      }
    }