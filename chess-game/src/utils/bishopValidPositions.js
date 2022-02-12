export const bishopValidPositions = (board, currentRow, currentColumn) => {
  const validPosArray = [];
  for (
    let i = currentRow + 1, j = currentColumn + 1;
    i <= 7 && j <= 7;
    i++, j++
  ) {
    if (board[i][j] === "") {
      validPosArray.push([i, j]);
    } else if (
      board[currentRow][currentColumn].includes("BLACK") &&
      board[i][j].includes("BLACK")
    ) {
      break;
    } else if (
      board[currentRow][currentColumn].includes("BLACK") &&
      board[i][j].includes("WHITE")
    ) {
      validPosArray.push([i, j]);
      break;
    } else if (
      board[currentRow][currentColumn].includes("WHITE") &&
      board[i][j].includes("WHITE")
    ) {
      break;
    } else if (
      board[currentRow][currentColumn].includes("WHITE") &&
      board[i][j].includes("BLACK")
    ) {
      validPosArray.push([i, j]);
      break;
    }
  }
  for (
    let i = currentRow + 1, j = currentColumn - 1;
    i <= 7 && j >= 0;
    i++, j--
  ) {
    if (board[i][j] === "") {
      validPosArray.push([i, j]);
    } else if (
      board[currentRow][currentColumn].includes("BLACK") &&
      board[i][j].includes("BLACK")
    ) {
      break;
    } else if (
      board[currentRow][currentColumn].includes("BLACK") &&
      board[i][j].includes("WHITE")
    ) {
      validPosArray.push([i, j]);
      break;
    } else if (
      board[currentRow][currentColumn].includes("WHITE") &&
      board[i][j].includes("WHITE")
    ) {
      break;
    } else if (
      board[currentRow][currentColumn].includes("WHITE") &&
      board[i][j].includes("BLACK")
    ) {
      validPosArray.push([i, j]);
      break;
    }
  }
  for (
    let i = currentRow - 1, j = currentColumn + 1;
    i >= 0 && j <= 7;
    i--, j++
  ) {
    if (board[i][j] === "") {
      validPosArray.push([i, j]);
    } else if (
      board[currentRow][currentColumn].includes("BLACK") &&
      board[i][j].includes("BLACK")
    ) {
      break;
    } else if (
      board[currentRow][currentColumn].includes("BLACK") &&
      board[i][j].includes("WHITE")
    ) {
      validPosArray.push([i, j]);
      break;
    } else if (
      board[currentRow][currentColumn].includes("WHITE") &&
      board[i][j].includes("WHITE")
    ) {
      break;
    } else if (
      board[currentRow][currentColumn].includes("WHITE") &&
      board[i][j].includes("BLACK")
    ) {
      validPosArray.push([i, j]);
      break;
    }
  }
  for (
    let i = currentRow - 1, j = currentColumn - 1;
    i >= 0 && j >= 0;
    i--, j--
  ) {
    if (board[i][j] === "") {
      validPosArray.push([i, j]);
    } else if (
      board[currentRow][currentColumn].includes("BLACK") &&
      board[i][j].includes("BLACK")
    ) {
      break;
    } else if (
      board[currentRow][currentColumn].includes("BLACK") &&
      board[i][j].includes("WHITE")
    ) {
      validPosArray.push([i, j]);
      break;
    } else if (
      board[currentRow][currentColumn].includes("WHITE") &&
      board[i][j].includes("WHITE")
    ) {
      break;
    } else if (
      board[currentRow][currentColumn].includes("WHITE") &&
      board[i][j].includes("BLACK")
    ) {
      validPosArray.push([i, j]);
      break;
    }
  }
  return validPosArray;
};
