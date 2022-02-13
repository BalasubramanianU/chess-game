import Strings from "../constants/Strings";
import {
  getKingPosition,
  initializeBoard,
  kingInCheck,
} from "../store/actions";
import { getValidPositions } from "./helperMethods";

const finder = (validPositions, row, column) => {
  console.log("row, column:", row, column);
  for (let i = 0; i < validPositions.length; i++) {
    // for (let j = 0; j < validPositions[i].length; j++) {
    const j = 0;
    if (validPositions[i][j] === row && validPositions[i][j + 1] === column) {
      console.log("reached king finder");
      return true;
    }
    // }
  }
};

export const isCheckMate = (board, row, column, kingPosition, dispatch) => {
  // console.log("column:", column);
  // console.log("row:", row);
  // console.log("board[row][column]:", board);
  if (board[row][column].includes("BLACK")) {
    let validPositions = [];
    if (Array.isArray(getValidPositions(board, row, column))) {
      validPositions.push(...getValidPositions(board, row, column));
      dispatch(getKingPosition(Strings.WHITE_KING));
      console.log("validPositions:", validPositions);
      // console.log("kingPosition:", kingPosition);
      // if (validPositions.includes([kingPosition.row, kingPosition.column])) {
      if (finder(validPositions, kingPosition.row, kingPosition.column)) {
        dispatch(kingInCheck(true));
        validPositions = getValidPositions(
          board,
          kingPosition.row,
          kingPosition.column
        );
        if (Array.isArray(validPositions) && validPositions.length === 0)
          return true;
        else return false;
      } else {
        dispatch(kingInCheck(false));
      }
    }
  } else {
    let validPositions = [];
    if (Array.isArray(getValidPositions(board, row, column))) {
      validPositions.push(...getValidPositions(board, row, column));
      dispatch(getKingPosition(Strings.BLACK_KING));
      if (finder(validPositions, kingPosition.row, kingPosition.column)) {
        dispatch(kingInCheck(true));
        validPositions = getValidPositions(
          board,
          kingPosition.row,
          kingPosition.column
        );
        if (Array.isArray(validPositions) && validPositions.length === 0)
          return true;
        else return false;
      } else {
        dispatch(kingInCheck(false));
      }
    }
  }
};
