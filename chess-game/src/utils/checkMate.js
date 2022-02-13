import Strings from "../constants/Strings";
import { getKingPosition, kingInCheck } from "../store/actions";
import { getValidPositions } from "./helperMethods";

const finder = (validPositions, row, column) => {
  for (let i = 0; i < validPositions.length; i++) {
    if (validPositions[i][0] === row && validPositions[i][1] === column)
      return true;
  }
};

export const isCheckMate = (board, row, column, kingPosition, dispatch) => {
  if (board[row][column].includes("BLACK")) {
    let validPositions = [];
    if (Array.isArray(getValidPositions(board, row, column))) {
      validPositions.push(...getValidPositions(board, row, column));
      dispatch(getKingPosition(Strings.WHITE_KING));
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
