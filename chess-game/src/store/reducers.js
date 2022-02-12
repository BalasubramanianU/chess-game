import { createReducer, current } from "@reduxjs/toolkit";
import Strings from "../constants/Strings";
import types from "./types";

const chessGameReducer = createReducer(
  {
    board: new Array(8).fill("").map(() => new Array(8).fill("")),
    validPositions: [],
    currentPosition: {},
    kingPosition: {},
    canPieceMove: false,
    turn: "WHITE",
  },
  (builder) => {
    builder
      .addCase(types.INITIALIZE_BOARD, (state, action) => {
        state.board[0][0] = Strings.BLACK_ROOK;
        state.board[0][1] = Strings.BLACK_KNIGHT;
        state.board[0][2] = Strings.BLACK_BISHOP;
        state.board[0][3] = Strings.BLACK_KING;
        state.board[0][4] = Strings.BLACK_QUEEN;
        state.board[0][5] = Strings.BLACK_BISHOP;
        state.board[0][6] = Strings.BLACK_KNIGHT;
        state.board[0][7] = Strings.BLACK_ROOK;
        state.board[1][0] = Strings.BLACK_SOLDIER;
        state.board[1][1] = Strings.BLACK_SOLDIER;
        state.board[1][2] = Strings.BLACK_SOLDIER;
        state.board[1][3] = Strings.BLACK_SOLDIER;
        state.board[1][4] = Strings.BLACK_SOLDIER;
        state.board[1][5] = Strings.BLACK_SOLDIER;
        state.board[1][6] = Strings.BLACK_SOLDIER;
        state.board[1][7] = Strings.BLACK_SOLDIER;
        state.board[7][0] = Strings.WHITE_ROOK;
        state.board[7][1] = Strings.WHITE_KNIGHT;
        state.board[7][2] = Strings.WHITE_BISHOP;
        state.board[7][3] = Strings.WHITE_KING;
        state.board[7][4] = Strings.WHITE_QUEEN;
        state.board[7][5] = Strings.WHITE_BISHOP;
        state.board[7][6] = Strings.WHITE_KNIGHT;
        state.board[7][7] = Strings.WHITE_ROOK;
        state.board[6][0] = Strings.WHITE_SOLDIER;
        state.board[6][1] = Strings.WHITE_SOLDIER;
        state.board[6][2] = Strings.WHITE_SOLDIER;
        state.board[6][3] = Strings.WHITE_SOLDIER;
        state.board[6][4] = Strings.WHITE_SOLDIER;
        state.board[6][5] = Strings.WHITE_SOLDIER;
        state.board[6][6] = Strings.WHITE_SOLDIER;
        state.board[6][7] = Strings.WHITE_SOLDIER;
      })
      .addCase(types.MOVE_PIECE, (state, action) => {
        const { currentRow, currentColumn, targetRow, targetColumn, piece } =
          action.payload;
        state.board[currentRow][currentColumn] = "";
        state.board[targetRow][targetColumn] = piece;
        state.turn = state.turn === "WHITE" ? "BLACK" : "WHITE";
      })
      .addCase(types.STORE_CURRENT_POSITION, (state, action) => {
        const { row, column } = action.payload;
        state.currentPosition.row = row;
        state.currentPosition.column = column;
      })
      .addCase(types.STORE_VALID_POSITIONS, (state, action) => {
        state.validPositions = action.payload;
        state.canPieceMove = true;
      })
      .addCase(types.CLEAR_VALID_POSITIONS, (state, action) => {
        state.validPositions = [];
        state.canPieceMove = false;
      })
      .addCase(types.GET_KING_POSITION, (state, action) => {
        const currentState = current(state);
        for (let i = 0; i <= 7; i++) {
          for (let j = 0; j <= 7; j++) {
            if (currentState.board[i][j] === action.payload) {
              state.kingPosition.row = i;
              state.kingPosition.column = j;
              break;
            }
          }
        }
      });
  }
);

export default chessGameReducer;
