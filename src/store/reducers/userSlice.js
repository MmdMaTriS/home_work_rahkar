import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: ""
};

export const userSlice = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    toggleUserAccessToken: (state, action) => {
      state.accessToken = action.payload;
    }
  }
});

export const { toggleUserAccessToken } = userSlice.actions;
export default userSlice.reducer;
