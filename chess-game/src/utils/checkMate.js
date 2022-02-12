import Strings from "../constants/Strings";
import { getKingPosition } from "../store/actions";
import { getValidPositions } from "./helperMethods";

const finder = (validPositions, row, column) => {
  for (let i = 0; i < validPositions.length; i++) {
    // for (let j = 0; j < validPositions[i].length; j++) {
    const j = 0;
    if (validPositions[i][j] === row && validPositions[i][j + 1] === column)
      return true;
    // }
  }
};

export const isCheckMate = (
  board,
  currentRow,
  currentColumn,
  kingPosition,
  dispatch
) => {
  console.log(
    " board   currentRow ",
    board,
    currentRow,
    currentColumn,
    kingPosition,
    dispatch
  );
  if (board[currentRow][currentColumn].includes("BLACK")) {
    let validPositions = [];
    validPositions.push(getValidPositions(board, currentRow, currentColumn));
    dispatch(getKingPosition(Strings.WHITE_KING));
    // if (validPositions.includes([kingPosition.row, kingPosition.column])) {
    if (finder(validPositions, kingPosition.row, kingPosition.column)) {
      validPositions = getValidPositions(
        board,
        kingPosition.row,
        kingPosition.column
      );
      if (validPositions.length === 0) return true;
      else return false;
    }
  } else {
    let validPositions = [];
    validPositions.push(getValidPositions(board, currentRow, currentColumn));
    dispatch(getKingPosition(Strings.BLACK_KING));
    if (validPositions.includes([kingPosition.row, kingPosition.column])) {
      validPositions = getValidPositions(
        board,
        kingPosition.row,
        kingPosition.column
      );
      if (validPositions.length === 0) return true;
      else return false;
    }
  }
};
