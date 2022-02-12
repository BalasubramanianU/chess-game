import Strings from "../constants/Strings";
import { bishopValidPositions } from "./bishopValidPositions";
import { kingValidPositions } from "./kingValidPositions";
import { knightValidPositions } from "./knightValidPositions";
import { queenValidPositions } from "./queenValidPositions";
import { rookValidPositions } from "./rookValidPositions";
import {
  blackSoldierValidPositions,
  whiteSoldierValidPositions,
} from "./soldierValidPositions";

export const isValidCoordinates = (row, column) => {
  return row >= 0 && row <= 7 && column >= 0 && column <= 7 ? true : false;
};

export const isValidPosition = (
  board,
  currentRow,
  currentColumn,
  row,
  column
) => {
  if (board[row][column] === "") {
    return true;
  } else if (
    board[currentRow][currentColumn].includes("BLACK") &&
    board[row][column].includes("BLACK")
  ) {
    return false;
  } else if (
    board[currentRow][currentColumn].includes("BLACK") &&
    board[row][column].includes("WHITE")
  ) {
    return true;
  } else if (
    board[currentRow][currentColumn].includes("WHITE") &&
    board[row][column].includes("WHITE")
  ) {
    return false;
  } else if (
    board[currentRow][currentColumn].includes("WHITE") &&
    board[row][column].includes("BLACK")
  ) {
    return true;
  }
};

export const getValidPositions = (board, currentRow, currentColumn) => {
  switch (board[currentRow][currentColumn]) {
    case Strings.BLACK_SOLDIER:
      return blackSoldierValidPositions(board, currentRow, currentColumn);
    case Strings.WHITE_SOLDIER:
      return whiteSoldierValidPositions(board, currentRow, currentColumn);
    case Strings.BLACK_ROOK:
    case Strings.WHITE_ROOK:
      return rookValidPositions(board, currentRow, currentColumn);
    case Strings.BLACK_KNIGHT:
    case Strings.WHITE_KNIGHT:
      return knightValidPositions(board, currentRow, currentColumn);
    case Strings.BLACK_BISHOP:
    case Strings.WHITE_BISHOP:
      return bishopValidPositions(board, currentRow, currentColumn);
    case Strings.BLACK_QUEEN:
    case Strings.WHITE_QUEEN:
      return queenValidPositions(board, currentRow, currentColumn);
    case Strings.BLACK_KING:
    case Strings.WHITE_KING:
      return kingValidPositions(board, currentRow, currentColumn);
    default:
      break;
  }
};
