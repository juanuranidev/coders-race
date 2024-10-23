import { configureStore } from "@reduxjs/toolkit";
import userReducer from "store/user/slices/user.slices";

export const stores = configureStore({
  reducer: {
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof stores.getState>;
export type AppDispatch = typeof stores.dispatch;
