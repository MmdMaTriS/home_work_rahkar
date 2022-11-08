import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true
};

export const appSlice = createSlice({
  name: "appReducer",
  initialState,
  reducers: {
    toggleAppLoading: (state, action) => {
      state.loading = action.payload;
    }
  }
});

export const { toggleAppLoading } = appSlice.actions;
export default appSlice.reducer;
