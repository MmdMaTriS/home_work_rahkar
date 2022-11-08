import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducers/userSlice";
import appSlice from "./reducers/appSlice";

export const store = configureStore({
  reducer: {
    userReducer: userSlice,
    appReducer: appSlice
  }
});
console.log(store.getState());
