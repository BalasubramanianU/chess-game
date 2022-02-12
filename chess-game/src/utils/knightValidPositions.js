import { isValidPosition } from "./helperMethods";

export const knightValidPositions = (board, currentRow, currentColumn) => {
  const validPosArray = [];
  if (currentRow + 2 <= 7) {
    if (
      currentColumn - 1 >= 0 &&
      isValidPosition(
        board,
        currentRow,
        currentColumn,
        currentRow + 2,
        currentColumn - 1
      )
    )
      validPosArray.push([currentRow + 2, currentColumn - 1]);

    if (
      currentColumn + 1 <= 7 &&
      isValidPosition(
        board,
        currentRow,
        currentColumn,
        currentRow + 2,
        currentColumn + 1
      )
    )
      validPosArray.push([currentRow + 2, currentColumn + 1]);
  }
  if (currentRow - 2 >= 0) {
    if (
      currentColumn - 1 >= 0 &&
      isValidPosition(
        board,
        currentRow,
        currentColumn,
        currentRow - 2,
        currentColumn - 1
      )
    )
      validPosArray.push([currentRow - 2, currentColumn - 1]);
    if (
      currentColumn + 1 <= 7 &&
      isValidPosition(
        board,
        currentRow,
        currentColumn,
        currentRow - 2,
        currentColumn + 1
      )
    )
      validPosArray.push([currentRow - 2, currentColumn + 1]);
  }
  if (currentColumn + 2 <= 7) {
    if (
      currentRow - 1 >= 0 &&
      isValidPosition(
        board,
        currentRow,
        currentColumn,
        currentRow - 1,
        currentColumn + 2
      )
    )
      validPosArray.push([currentRow - 1, currentColumn + 2]);
    if (
      currentRow + 1 <= 7 &&
      isValidPosition(
        board,
        currentRow,
        currentColumn,
        currentRow + 1,
        currentColumn + 2
      )
    )
      validPosArray.push([currentRow + 1, currentColumn + 2]);
  }
  if (currentColumn - 2 >= 0) {
    if (
      currentRow - 1 >= 0 &&
      isValidPosition(
        board,
        currentRow,
        currentColumn,
        currentRow - 1,
        currentColumn - 2
      )
    )
      validPosArray.push([currentRow - 1, currentColumn - 2]);
    if (
      currentRow + 1 <= 7 &&
      isValidPosition(
        board,
        currentRow,
        currentColumn,
        currentRow + 1,
        currentColumn - 2
      )
    )
      validPosArray.push([currentRow + 1, currentColumn - 2]);
  }
  return validPosArray;
};
