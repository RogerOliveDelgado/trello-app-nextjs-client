import { configureStore } from "@reduxjs/toolkit";
import boardSlice from "./slices/boardSlice";

const store = configureStore({
  reducer: {
    boardList: boardSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
