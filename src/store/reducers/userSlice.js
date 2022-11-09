import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: "",
  usersList: []
};

export const userSlice = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    toggleUserAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    toggleUserList: (state, action) => {
      state.usersList = action.payload;
    }
  }
});

export const { toggleUserAccessToken,toggleUserList } = userSlice.actions;
export default userSlice.reducer;
