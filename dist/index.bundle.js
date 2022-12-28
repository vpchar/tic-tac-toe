(self["webpackChunktic_tac_toe"] = self["webpackChunktic_tac_toe"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {


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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsUUFBUTtBQUNoRDtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1osUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixzQkFBc0I7QUFDNUMsd0JBQXdCLHlCQUF5QjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix3QkFBd0I7QUFDaEQsMEJBQTBCLDZCQUE2QjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWixRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBCQUEwQix3QkFBd0I7QUFDbEQsNEJBQTRCLDZCQUE2QjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSwwQkFBMEIsd0JBQXdCO0FBQ2xELDRCQUE0Qiw2QkFBNkI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RpYy10YWMtdG9lLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuICAgIC8vIEtlZXAgdHJhY2sgb2YgdGhlIGdhbWUgc3RhdGVcbiAgICBjb25zdCBzcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zcXVhcmVcIik7XG4gICAgY29uc3QgcmVzZXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Jlc2V0QnV0dG9uXCIpO1xuICAgIGxldCBjdXJyZW50UGxheWVyID0gXCJYXCI7XG4gICAgbGV0IGdhbWVPdmVyID0gZmFsc2U7XG4gICAgbGV0IGdhbWVTdGF0ZSA9IFtcbiAgICAgIFtcIlwiLCBcIlwiLCBcIlwiXSxcbiAgICAgIFtcIlwiLCBcIlwiLCBcIlwiXSxcbiAgICAgIFtcIlwiLCBcIlwiLCBcIlwiXSxcbiAgICBdO1xuICAgIC8vYWRkZWQgYnkgdGhlIGh1bWFuIDstKSAgIFxuICAgIHJlc2V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT57XG4gICAgICAgaGFuZGxlUmVzZXQoKTtcbiAgICB9KVxuICAgIGNvbnN0IGhhbmRsZVJlc2V0ID0gKCkgPT4ge1xuICAgICAgY3VycmVudFBsYXllciA9IFwiWFwiO1xuICAgICAgIGdhbWVPdmVyID0gZmFsc2U7XG4gICAgICAgZ2FtZVN0YXRlID0gW1xuICAgICAgICBbXCJcIiwgXCJcIiwgXCJcIl0sXG4gICAgICAgIFtcIlwiLCBcIlwiLCBcIlwiXSxcbiAgICAgICAgW1wiXCIsIFwiXCIsIFwiXCJdLFxuICAgICAgXTsgIFxuICAgICAgc3F1YXJlcy5mb3JFYWNoKChzcXVhcmUpID0+IHtcbiAgICAgICAgc3F1YXJlLnRleHRDb250ZW50PVwiXCI7XG4gICAgICB9KTtcbiAgICAgIHJlc2V0QnRuLnRleHRDb250ZW50PVwiUmVzZXRcIlxuICAgIH1cbiAgICAvLyBBZGQgYW4gZXZlbnQgbGlzdGVuZXIgdG8gZWFjaCBzcXVhcmUgdG8gaGFuZGxlIGNsaWNrc1xuICAgIHNxdWFyZXMuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XG4gICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUNsaWNrKTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGV2ZW50KSB7XG4gICAgICAvLyBJZ25vcmUgY2xpY2tzIGlmIHRoZSBnYW1lIGlzIG92ZXIgb3IgaWYgdGhlIHNxdWFyZSBpcyBhbHJlYWR5IGZpbGxlZFxuICAgICAgaWYgKGdhbWVPdmVyIHx8IGV2ZW50LnRhcmdldC50ZXh0Q29udGVudCAhPT0gXCJcIikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFBsYWNlIHRoZSBjdXJyZW50IHBsYXllcidzIHN5bWJvbCBpbiB0aGUgc3F1YXJlXG4gICAgICBldmVudC50YXJnZXQudGV4dENvbnRlbnQgPSBjdXJyZW50UGxheWVyO1xuXG4gICAgICAvLyBVcGRhdGUgdGhlIGdhbWUgc3RhdGVcbiAgICAgIGNvbnN0IHJvdyA9IE1hdGguZmxvb3IoZXZlbnQudGFyZ2V0LmlkIC8gMyk7XG4gICAgICBjb25zdCBjb2wgPSBldmVudC50YXJnZXQuaWQgJSAzO1xuICAgICAgZ2FtZVN0YXRlW3Jvd11bY29sXSA9IGN1cnJlbnRQbGF5ZXI7XG5cbiAgICAgIC8vIENoZWNrIGZvciBhIHdpbiBvciBhIGRyYXdcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGNoZWNrUmVzdWx0KGdhbWVTdGF0ZSwgY3VycmVudFBsYXllcik7XG4gICAgICBpZiAocmVzdWx0ID09PSBcIlhcIiB8fCByZXN1bHQgPT09IFwiT1wiKSB7XG4gICAgICAgIC8vIEdhbWUgb3ZlciAtIHNob3cgYSBtZXNzYWdlIGFuZCBkaXNhYmxlIGNsaWNrcyBvbiB0aGUgc3F1YXJlc1xuICAgICAgICBnYW1lT3ZlciA9IHRydWU7XG4gICAgICAgIHJlc2V0QnRuLnRleHRDb250ZW50PShgUGxheWVyICR7cmVzdWx0fSB3aW5zIWApO1xuICAgICAgICAgc3F1YXJlcy5mb3JFYWNoKChzcXVhcmUpID0+IHtcbiAgICAgICAgICAgc3F1YXJlLnRleHRDb250ZW50PVwiXCI7XG4gICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PT0gXCJkcmF3XCIpIHtcbiAgICAgICAgLy8gR2FtZSBvdmVyIC0gc2hvdyBhIG1lc3NhZ2UgYW5kIGRpc2FibGUgY2xpY2tzIG9uIHRoZSBzcXVhcmVzXG4gICAgICAgIGdhbWVPdmVyID0gdHJ1ZTtcbiAgICAgICAgcmVzZXRCdG4udGV4dENvbnRlbnQ9KGBJdCdzIGEgZHJhdyFgKTtcbiAgICAgICAgLy8gc3F1YXJlcy5mb3JFYWNoKChzcXVhcmUpID0+IHtcbiAgICAgICAgLy8gICBzcXVhcmUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUNsaWNrKTtcbiAgICAgICAgLy8gfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBTd2l0Y2ggcGxheWVyc1xuICAgICAgICBjdXJyZW50UGxheWVyID0gY3VycmVudFBsYXllciA9PT0gXCJYXCIgPyBcIk9cIiA6IFwiWFwiO1xuXG4gICAgICAgIC8vIElmIGl0J3MgdGhlIGNvbXB1dGVyJ3MgdHVybiwgbGV0IHRoZSBjb21wdXRlciBtYWtlIGEgbW92ZVxuICAgICAgICBpZiAoY3VycmVudFBsYXllciA9PT0gXCJPXCIpIHtcbiAgICAgICAgICBtYWtlQ29tcHV0ZXJNb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja1Jlc3VsdChnYW1lU3RhdGUsIHBsYXllcikge1xuICAgICAgLy8gQ2hlY2sgZm9yIGEgd2luIGJ5IGNoZWNraW5nIGFsbCByb3dzLCBjb2x1bW5zLCBhbmQgZGlhZ29uYWxzXG4gICAgICBpZiAoXG4gICAgICAgIChnYW1lU3RhdGVbMF1bMF0gPT09IHBsYXllciAmJlxuICAgICAgICAgIGdhbWVTdGF0ZVswXVsxXSA9PT0gcGxheWVyICYmXG4gICAgICAgICAgZ2FtZVN0YXRlWzBdWzJdID09PSBwbGF5ZXIpIHx8XG4gICAgICAgIChnYW1lU3RhdGVbMV1bMF0gPT09IHBsYXllciAmJlxuICAgICAgICAgIGdhbWVTdGF0ZVsxXVsxXSA9PT0gcGxheWVyICYmXG4gICAgICAgICAgZ2FtZVN0YXRlWzFdWzJdID09PSBwbGF5ZXIpIHx8XG4gICAgICAgIChnYW1lU3RhdGVbMl1bMF0gPT09IHBsYXllciAmJlxuICAgICAgICAgIGdhbWVTdGF0ZVsyXVsxXSA9PT0gcGxheWVyICYmXG4gICAgICAgICAgZ2FtZVN0YXRlWzJdWzJdID09PSBwbGF5ZXIpIHx8XG4gICAgICAgIChnYW1lU3RhdGVbMF1bMF0gPT09IHBsYXllciAmJlxuICAgICAgICAgIGdhbWVTdGF0ZVsxXVswXSA9PT0gcGxheWVyICYmXG4gICAgICAgICAgZ2FtZVN0YXRlWzJdWzBdID09PSBwbGF5ZXIpIHx8XG4gICAgICAgIChnYW1lU3RhdGVbMF1bMV0gPT09IHBsYXllciAmJlxuICAgICAgICAgIGdhbWVTdGF0ZVsxXVsxXSA9PT0gcGxheWVyICYmXG4gICAgICAgICAgZ2FtZVN0YXRlWzJdWzFdID09PSBwbGF5ZXIpIHx8XG4gICAgICAgIChnYW1lU3RhdGVbMF1bMl0gPT09IHBsYXllciAmJlxuICAgICAgICAgIGdhbWVTdGF0ZVsxXVsyXSA9PT0gcGxheWVyICYmXG4gICAgICAgICAgZ2FtZVN0YXRlWzJdWzJdID09PSBwbGF5ZXIpIHx8XG4gICAgICAgIChnYW1lU3RhdGVbMF1bMF0gPT09IHBsYXllciAmJlxuICAgICAgICAgIGdhbWVTdGF0ZVsxXVsxXSA9PT0gcGxheWVyICYmXG4gICAgICAgICAgZ2FtZVN0YXRlWzJdWzJdID09PSBwbGF5ZXIpIHx8XG4gICAgICAgIChnYW1lU3RhdGVbMF1bMl0gPT09IHBsYXllciAmJlxuICAgICAgICAgIGdhbWVTdGF0ZVsxXVsxXSA9PT0gcGxheWVyICYmXG4gICAgICAgICAgZ2FtZVN0YXRlWzJdWzBdID09PSBwbGF5ZXIpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIHBsYXllcjtcbiAgICAgIH1cblxuICAgICAgLy8gQ2hlY2sgZm9yIGEgZHJhdyBieSBjaGVja2luZyBpZiBhbGwgc3F1YXJlcyBhcmUgZmlsbGVkXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdhbWVTdGF0ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGdhbWVTdGF0ZVtpXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGlmIChnYW1lU3RhdGVbaV1bal0gPT09IFwiXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gXCJkcmF3XCI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFrZUNvbXB1dGVyTW92ZSgpIHtcbiAgICAgIC8vIFVzZSB0aGUgbWluaW1heCBhbGdvcml0aG0gdG8gZmluZCB0aGUgYmVzdCBtb3ZlIGZvciB0aGUgY29tcHV0ZXJcbiAgICAgIGxldCBiZXN0U2NvcmUgPSAtSW5maW5pdHk7XG4gICAgICBsZXQgYmVzdFJvdyA9IG51bGw7XG4gICAgICBsZXQgYmVzdENvbCA9IG51bGw7XG4gICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBnYW1lU3RhdGUubGVuZ3RoOyByb3crKykge1xuICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBnYW1lU3RhdGVbcm93XS5sZW5ndGg7IGNvbCsrKSB7XG4gICAgICAgICAgaWYgKGdhbWVTdGF0ZVtyb3ddW2NvbF0gPT09IFwiXCIpIHtcbiAgICAgICAgICAgIGdhbWVTdGF0ZVtyb3ddW2NvbF0gPSBcIk9cIjtcbiAgICAgICAgICAgIGNvbnN0IHNjb3JlID0gbWluaW1heChnYW1lU3RhdGUsIDAsIGZhbHNlKTtcbiAgICAgICAgICAgIGdhbWVTdGF0ZVtyb3ddW2NvbF0gPSBcIlwiO1xuICAgICAgICAgICAgaWYgKHNjb3JlID4gYmVzdFNjb3JlKSB7XG4gICAgICAgICAgICAgIGJlc3RTY29yZSA9IHNjb3JlO1xuICAgICAgICAgICAgICBiZXN0Um93ID0gcm93O1xuICAgICAgICAgICAgICBiZXN0Q29sID0gY29sO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBNYWtlIHRoZSBiZXN0IG1vdmVcbiAgICAgIGdhbWVTdGF0ZVtiZXN0Um93XVtiZXN0Q29sXSA9IFwiT1wiO1xuICAgICAgc3F1YXJlc1tiZXN0Um93ICogMyArIGJlc3RDb2xdLnRleHRDb250ZW50ID0gXCJPXCI7XG4gICAgICBjdXJyZW50UGxheWVyID0gXCJYXCI7XG5cbiAgICAgIC8vIENoZWNrIGZvciBhIHdpbiBvciBhIGRyYXdcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGNoZWNrUmVzdWx0KGdhbWVTdGF0ZSwgXCJPXCIpO1xuICAgICAgaWYgKHJlc3VsdCA9PT0gXCJPXCIpIHtcbiAgICAgICAgLy8gR2FtZSBvdmVyIC0gc2hvdyBhIG1lc3NhZ2UgYW5kIGRpc2FibGUgY2xpY2tzIG9uIHRoZSBzcXVhcmVzXG4gICAgICAgIGdhbWVPdmVyID0gdHJ1ZTtcbiAgICAgICAgcmVzZXRCdG4udGV4dENvbnRlbnQ9KGBQbGF5ZXIgTyB3aW5zIWApO1xuICAgICAgICAvLyBzcXVhcmVzLmZvckVhY2goKHNxdWFyZSkgPT4ge1xuICAgICAgICAvLyAgIHNxdWFyZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQ2xpY2spO1xuICAgICAgICAvLyB9KTtcbiAgICAgIH0gZWxzZSBpZiAocmVzdWx0ID09PSBcImRyYXdcIikge1xuICAgICAgICAvLyBHYW1lIG92ZXIgLSBzaG93IGEgbWVzc2FnZSBhbmQgZGlzYWJsZSBjbGlja3Mgb24gdGhlIHNxdWFyZXNcbiAgICAgICAgZ2FtZU92ZXIgPSB0cnVlO1xuICAgICAgICByZXNldEJ0bi50ZXh0Q29udGVudD0oYEl0J3MgYSBkcmF3IWApO1xuICAgICAgICAvLyBzcXVhcmVzLmZvckVhY2goKHNxdWFyZSkgPT4ge1xuICAgICAgICAvLyAgIHNxdWFyZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQ2xpY2spO1xuICAgICAgICAvLyB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtaW5pbWF4KGdhbWVTdGF0ZSwgZGVwdGgsIGlzTWF4aW1pemluZykge1xuICAgICAgY29uc3QgcmVzdWx0ID0gY2hlY2tSZXN1bHQoZ2FtZVN0YXRlLCBpc01heGltaXppbmcgPyBcIk9cIiA6IFwiWFwiKTtcbiAgICAgIGlmIChyZXN1bHQgPT09IFwiT1wiKSB7XG4gICAgICAgIHJldHVybiAxMCAtIGRlcHRoO1xuICAgICAgfSBlbHNlIGlmIChyZXN1bHQgPT09IFwiWFwiKSB7XG4gICAgICAgIHJldHVybiBkZXB0aCAtIDEwO1xuICAgICAgfSBlbHNlIGlmIChyZXN1bHQgPT09IFwiZHJhd1wiKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNNYXhpbWl6aW5nKSB7XG4gICAgICAgIGxldCBiZXN0U2NvcmUgPSAtSW5maW5pdHk7XG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IGdhbWVTdGF0ZS5sZW5ndGg7IHJvdysrKSB7XG4gICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgZ2FtZVN0YXRlW3Jvd10ubGVuZ3RoOyBjb2wrKykge1xuICAgICAgICAgICAgaWYgKGdhbWVTdGF0ZVtyb3ddW2NvbF0gPT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgZ2FtZVN0YXRlW3Jvd11bY29sXSA9IFwiT1wiO1xuICAgICAgICAgICAgICBjb25zdCBzY29yZSA9IG1pbmltYXgoZ2FtZVN0YXRlLCBkZXB0aCArIDEsIGZhbHNlKTtcbiAgICAgICAgICAgICAgZ2FtZVN0YXRlW3Jvd11bY29sXSA9IFwiXCI7XG4gICAgICAgICAgICAgIGJlc3RTY29yZSA9IE1hdGgubWF4KGJlc3RTY29yZSwgc2NvcmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYmVzdFNjb3JlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGJlc3RTY29yZSA9IEluZmluaXR5O1xuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBnYW1lU3RhdGUubGVuZ3RoOyByb3crKykge1xuICAgICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IGdhbWVTdGF0ZVtyb3ddLmxlbmd0aDsgY29sKyspIHtcbiAgICAgICAgICAgIGlmIChnYW1lU3RhdGVbcm93XVtjb2xdID09PSBcIlwiKSB7XG4gICAgICAgICAgICAgIGdhbWVTdGF0ZVtyb3ddW2NvbF0gPSBcIlhcIjtcbiAgICAgICAgICAgICAgY29uc3Qgc2NvcmUgPSBtaW5pbWF4KGdhbWVTdGF0ZSwgZGVwdGggKyAxLCB0cnVlKTtcbiAgICAgICAgICAgICAgZ2FtZVN0YXRlW3Jvd11bY29sXSA9IFwiXCI7XG4gICAgICAgICAgICAgIGJlc3RTY29yZSA9IE1hdGgubWluKGJlc3RTY29yZSwgc2NvcmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYmVzdFNjb3JlO1xuICAgICAgfVxuICAgIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=