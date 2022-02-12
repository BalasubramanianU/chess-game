import { isValidCoordinates } from "./helperMethods";

export const blackSoldierValidPositions = (
  board,
  currentRow,
  currentColumn
) => {
  const validPosArray = [];
  if (currentRow === 1) {
    validPosArray.push([currentRow + 1, currentColumn]);
    validPosArray.push([currentRow + 2, currentColumn]);
  } else if (
    isValidCoordinates(currentRow + 1, currentColumn) &&
    board[currentRow + 1][currentColumn] === ""
  )
    validPosArray.push([currentRow + 1, currentColumn]);
  if (
    isValidCoordinates(currentRow + 1, currentColumn + 1) &&
    board[currentRow + 1][currentColumn + 1] !== "" &&
    board[currentRow + 1][currentColumn + 1].includes("WHITE")
  )
    validPosArray.push([currentRow + 1, currentColumn + 1]);
  if (
    isValidCoordinates(currentRow + 1, currentColumn - 1) &&
    board[currentRow + 1][currentColumn - 1] !== "" &&
    board[currentRow + 1][currentColumn - 1].includes("WHITE")
  )
    validPosArray.push([currentRow + 1, currentColumn - 1]);
  return validPosArray;
};

export const whiteSoldierValidPositions = (
  board,
  currentRow,
  currentColumn
) => {
  const validPosArray = [];
  if (currentRow === 6) {
    validPosArray.push([currentRow - 1, currentColumn]);
    validPosArray.push([currentRow - 2, currentColumn]);
  } else if (
    isValidCoordinates(currentRow - 1, currentColumn) &&
    board[currentRow - 1][currentColumn] === ""
  )
    validPosArray.push([currentRow - 1, currentColumn]);
  if (
    isValidCoordinates(currentRow - 1, currentColumn + 1) &&
    board[currentRow - 1][currentColumn + 1] !== "" &&
    board[currentRow - 1][currentColumn + 1].includes("BLACK")
  )
    validPosArray.push([currentRow - 1, currentColumn + 1]);
  if (
    isValidCoordinates(currentRow - 1, currentColumn - 1) &&
    board[currentRow - 1][currentColumn - 1] !== "" &&
    board[currentRow - 1][currentColumn - 1].includes("BLACK")
  )
    validPosArray.push([currentRow - 1, currentColumn - 1]);
  return validPosArray;
};
