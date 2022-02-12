import { bishopValidPositions } from "./bishopValidPositions";
import { rookValidPositions } from "./rookValidPositions";

export const queenValidPositions = (board, currentRow, currentColumn) => {
  const validPosArray = [];
  const rookValidPos = rookValidPositions(board, currentRow, currentColumn);
  const bishopValidPos = bishopValidPositions(board, currentRow, currentColumn);
  rookValidPos.length > 0 && validPosArray.push(...rookValidPos);
  bishopValidPos.length > 0 && validPosArray.push(...bishopValidPos);
  return validPosArray;
};
