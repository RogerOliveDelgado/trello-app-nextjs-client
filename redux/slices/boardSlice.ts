import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CreateSliceOptions } from "@reduxjs/toolkit";

//We should call the API/backend to carry the information

export interface Board {
  _id: string;
  name: string;
  tasks: [];
  initDate?: string;
}

type BoardList = Board[];

const initialDataState: BoardList = [];

const boardSlice = createSlice({
  name: "boardList",
  initialState: initialDataState,
  reducers: {
    addBoard(state: BoardList, action: PayloadAction<Board>) {
      state.push(action.payload);
    },
    deleteBoard(state: BoardList, action: PayloadAction<Board>) {
      state.push(action.payload);
    },
    updateBoard(state: BoardList, action: PayloadAction<Board>) {
      state.push(action.payload);
    },
  },
});

export const boardActions = boardSlice.actions;

export default boardSlice;
