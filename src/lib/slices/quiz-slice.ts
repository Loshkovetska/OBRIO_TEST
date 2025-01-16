import { InitialStateType, ScreenThemeType } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    quiz: {} as InitialStateType,
    subScreenTheme: undefined as ScreenThemeType | undefined,
  },
  reducers: {
    setInitialState(state, action) {
      state.quiz = action.payload;
    },
    toggleSubScreen(state, action) {
      state.subScreenTheme = action.payload;
    },
    updateState(state, action) {
      state.quiz[action.payload.key] = action.payload.label;
      state.subScreenTheme = action.payload.theme;
    },
  },
});

export const { setInitialState, updateState, toggleSubScreen } =
  quizSlice.actions;

export default quizSlice;
