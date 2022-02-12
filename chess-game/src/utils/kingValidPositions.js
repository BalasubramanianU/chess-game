import { isValidPosition } from "./helperMethods";

export const kingValidPositions = (board, currentRow, currentColumn) => {
  const validPosArray = [];
  if (currentRow + 1 <= 7) {
    if (
      currentColumn - 1 >= 0 &&
      isValidPosition(
        board,
        currentRow,
        currentColumn,
        currentRow + 1,
        currentColumn - 1
      )
    )
      validPosArray.push([currentRow + 1, currentColumn - 1]);
    if (
      currentColumn + 1 <= 7 &&
      isValidPosition(
        board,
        currentRow,
        currentColumn,
        currentRow + 1,
        currentColumn + 1
      )
    )
      validPosArray.push([currentRow + 1, currentColumn + 1]);
    if (
      isValidPosition(
        board,
        currentRow,
        currentColumn,
        currentRow + 1,
        currentColumn
      )
    )
      validPosArray.push([currentRow + 1, currentColumn]);
  }
  if (currentRow - 1 >= 0) {
    if (
      currentColumn - 1 >= 0 &&
      isValidPosition(
        board,
        currentRow,
        currentColumn,
        currentRow - 1,
        currentColumn - 1
      )
    )
      validPosArray.push([currentRow - 1, currentColumn - 1]);
    if (
      currentColumn + 1 <= 7 &&
      isValidPosition(
        board,
        currentRow,
        currentColumn,
        currentRow - 1,
        currentColumn + 1
      )
    )
      validPosArray.push([currentRow - 1, currentColumn + 1]);
    if (
      isValidPosition(
        board,
        currentRow,
        currentColumn,
        currentRow - 1,
        currentColumn
      )
    )
      validPosArray.push([currentRow - 1, currentColumn]);
  }
  if (
    currentColumn - 1 >= 0 &&
    isValidPosition(
      board,
      currentRow,
      currentColumn,
      currentRow,
      currentColumn - 1
    )
  )
    validPosArray.push([currentRow, currentColumn - 1]);
  if (
    currentColumn + 1 <= 7 &&
    isValidPosition(
      board,
      currentRow,
      currentColumn,
      currentRow,
      currentColumn + 1
    )
  )
    validPosArray.push([currentRow, currentColumn + 1]);
  return validPosArray;
};
