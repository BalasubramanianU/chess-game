import React from "react";
import "../styles/styles.css";

function Board(props) {
  const { board, handleClick, validPositions } = props;
  const boardArray = [];
  let colorSwitch = false;
  const loadColor = (
    validPositions,
    colorSwitch,
    currentRow,
    currentColumn
  ) => {
    let color;
    colorSwitch ? (color = "#eeeed2") : (color = "#769656");
    if (validPositions.length !== 0) {
      for (let i = 0; i < validPositions.length; i++) {
        const j = 0;
        console.log("validPositions[i][j][k]:", validPositions[i][j]);
        if (
          validPositions[i][j] === currentRow &&
          validPositions[i][j + 1] === currentColumn
        )
          color = "yellow";
      }
    }
    return color;
  };

  for (let i = 0; i <= 7; i++) {
    for (let j = 0; j <= 7; j++) {
      boardArray.push(
        <button
          className="square"
          style={{
            backgroundColor: loadColor(validPositions, colorSwitch, i, j),
          }}
          onClick={() => handleClick(i, j)}
        >
          {board[i][j] !== "" ? board[i][j] : `${i},${j}`}
        </button>
      );
      colorSwitch = !colorSwitch;
    }
    colorSwitch = !colorSwitch;
  }

  return boardArray;
}

export default Board;
