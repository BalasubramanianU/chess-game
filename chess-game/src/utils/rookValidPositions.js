export const rookValidPositions = (board, currentRow, currentColumn) => {
  const validPosArray = [];
  for (let i = currentRow + 1; i <= 7; i++) {
    if (board[i][currentColumn] === "") {
      validPosArray.push([i, currentColumn]);
    } else if (
      board[currentRow][currentColumn].includes("BLACK") &&
      board[i][currentColumn].includes("BLACK")
    ) {
      break;
    } else if (
      board[currentRow][currentColumn].includes("BLACK") &&
      board[i][currentColumn].includes("WHITE")
    ) {
      validPosArray.push([i, currentColumn]);
      break;
    } else if (
      board[currentRow][currentColumn].includes("WHITE") &&
      board[i][currentColumn].includes("WHITE")
    ) {
      break;
    } else if (
      board[currentRow][currentColumn].includes("WHITE") &&
      board[i][currentColumn].includes("BLACK")
    ) {
      validPosArray.push([i, currentColumn]);
      break;
    }
  }
  for (let i = currentRow - 1; i >= 0; i--) {
    if (board[i][currentColumn] === "") {
      validPosArray.push([i, currentColumn]);
    } else if (
      board[currentRow][currentColumn].includes("BLACK") &&
      board[i][currentColumn].includes("BLACK")
    ) {
      break;
    } else if (
      board[currentRow][currentColumn].includes("BLACK") &&
      board[i][currentColumn].includes("WHITE")
    ) {
      validPosArray.push([i, currentColumn]);
      break;
    } else if (
      board[currentRow][currentColumn].includes("WHITE") &&
      board[i][currentColumn].includes("WHITE")
    ) {
      break;
    } else if (
      board[currentRow][currentColumn].includes("WHITE") &&
      board[i][currentColumn].includes("BLACK")
    ) {
      validPosArray.push([i, currentColumn]);
      break;
    }
  }
  for (let i = currentColumn + 1; i <= 7; i++) {
    if (board[currentRow][i] === "") {
      validPosArray.push([currentRow, i]);
    } else if (
      board[currentRow][currentColumn].includes("BLACK") &&
      board[currentRow][i].includes("BLACK")
    ) {
      break;
    } else if (
      board[currentRow][currentColumn].includes("BLACK") &&
      board[currentRow][i].includes("WHITE")
    ) {
      validPosArray.push([currentRow, i]);
      break;
    } else if (
      board[currentRow][currentColumn].includes("WHITE") &&
      board[currentRow][i].includes("WHITE")
    ) {
      break;
    } else if (
      board[currentRow][currentColumn].includes("WHITE") &&
      board[currentRow][i].includes("BLACK")
    ) {
      validPosArray.push([currentRow, i]);
      break;
    }
  }
  for (let i = currentColumn - 1; i >= 0; i--) {
    if (board[currentRow][i] === "") {
      validPosArray.push([currentRow, i]);
    } else if (
      board[currentRow][currentColumn].includes("BLACK") &&
      board[currentRow][i].includes("BLACK")
    ) {
      break;
    } else if (
      board[currentRow][currentColumn].includes("BLACK") &&
      board[currentRow][i].includes("WHITE")
    ) {
      validPosArray.push([currentRow, i]);
      break;
    } else if (
      board[currentRow][currentColumn].includes("WHITE") &&
      board[currentRow][i].includes("WHITE")
    ) {
      break;
    } else if (
      board[currentRow][currentColumn].includes("WHITE") &&
      board[currentRow][i].includes("BLACK")
    ) {
      validPosArray.push([currentRow, i]);
      break;
    }
  }
  return validPosArray;
};
