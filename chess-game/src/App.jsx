import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Board from "./components/Board";
import Strings from "./constants/Strings";
import {
  clearValidPositions,
  getKingPosition,
  initializeBoard,
  movePiece,
  storeCurrentPosition,
  storeValidPositions,
} from "./store/actions";
import { bishopValidPositions } from "./utils/bishopValidPositions";
import { isCheckMate } from "./utils/checkMate";
import { getValidPositions } from "./utils/helperMethods";
import { kingValidPositions } from "./utils/kingValidPositions";
import { knightValidPositions } from "./utils/knightValidPositions";
import { queenValidPositions } from "./utils/queenValidPositions";
import { rookValidPositions } from "./utils/rookValidPositions";
import {
  blackSoldierValidPositions,
  whiteSoldierValidPositions,
} from "./utils/soldierValidPositions";
import "../src/styles/styles.css";

function App() {
  const dispatch = useDispatch();
  const {
    board,
    canPieceMove,
    currentPosition,
    kingPosition,
    turn,
    validPositions,
  } = useSelector((state) => state);

  React.useEffect(() => {
    dispatch(initializeBoard());
  }, []);

  const isClickValid = (validPositions, row, column) => {
    for (let i = 0; i < validPositions.length; i++) {
      for (let j = 0; j < validPositions[i].length; j++) {
        const k = 0;
        if (
          validPositions[i][j][k] === row &&
          validPositions[i][j][k + 1] === column
        )
          return true;
      }
    }
  };

  const handleClick = (row, column) => {
    if (canPieceMove) {
      if (isClickValid([validPositions], row, column)) {
        dispatch(
          movePiece({
            currentRow: currentPosition.row,
            currentColumn: currentPosition.column,
            targetRow: row,
            targetColumn: column,
            piece: board[currentPosition.row][currentPosition.column],
          })
        );
        dispatch(storeCurrentPosition({ row, column }));
        dispatch(clearValidPositions());
        if (isCheckMate(board, row, column, kingPosition, dispatch))
          alert("Check Mate! Game Over. Play again");
      } else {
        if (board[row][column] === "") {
          dispatch(storeCurrentPosition({ row, column }));
          dispatch(clearValidPositions());
        } else {
          dispatch(storeCurrentPosition({ row, column }));
          if (board[row][column].includes(turn))
            dispatch(
              storeValidPositions(getValidPositions(board, row, column))
            );
          else alert(turn + "'s move");
        }
      }
    } else {
      if (board[row][column] === "") {
        dispatch(storeCurrentPosition({ row, column }));
        dispatch(clearValidPositions());
      } else {
        dispatch(storeCurrentPosition({ row, column }));
        if (board[row][column].includes(turn))
          dispatch(storeValidPositions(getValidPositions(board, row, column)));
        else alert(turn + "'s move");
      }
    }
  };
  return (
    <div className="mainContainer">
      <div className="boardContainer">
        <Board
          board={board}
          handleClick={handleClick}
          validPositions={validPositions}
        />
      </div>
    </div>
  );
}

export default App;
