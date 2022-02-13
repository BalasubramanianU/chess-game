import React from "react";
import Strings from "../constants/Strings";
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
        if (
          validPositions[i][0] === currentRow &&
          validPositions[i][1] === currentColumn
        )
          color = "#f6f669";
      }
    }
    return color;
  };

  const loadPiece = (board, row, column) => {
    switch (board[row][column]) {
      case Strings.BLACK_SOLDIER:
        return "blackPawn icon";
      case Strings.WHITE_SOLDIER:
        return "whitePawn icon";
      case Strings.BLACK_ROOK:
        return "blackRook icon";
      case Strings.WHITE_ROOK:
        return "whiteRook icon";
      case Strings.BLACK_KNIGHT:
        return "blackKnight icon";
      case Strings.WHITE_KNIGHT:
        return "whiteKnight icon";
      case Strings.BLACK_BISHOP:
        return "blackBishop icon";
      case Strings.WHITE_BISHOP:
        return "whiteBishop icon";
      case Strings.BLACK_QUEEN:
        return "blackQueen icon";
      case Strings.WHITE_QUEEN:
        return "whiteQueen icon";
      case Strings.BLACK_KING:
        return "blackKing icon";
      case Strings.WHITE_KING:
        return "whiteKing icon";
      default:
        return "icon";
    }
  };

  for (let i = 0; i <= 7; i++) {
    for (let j = 0; j <= 7; j++) {
      boardArray.push(
        <div
          className="square"
          key={[i, j]}
          style={{
            backgroundColor: loadColor(validPositions, colorSwitch, i, j),
          }}
          onClick={() => handleClick(i, j)}
        >
          <div className={loadPiece(board, i, j)}></div>
        </div>
      );
      colorSwitch = !colorSwitch;
    }
    colorSwitch = !colorSwitch;
  }

  return boardArray;
}

export default Board;
