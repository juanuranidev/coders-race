import { User } from "lib/interfaces/user/user.interfaces";
import { PayloadAction } from "@reduxjs/toolkit";

export const setUser = (
  _state: User | null,
  action: PayloadAction<User | null>
) => {
  return action.payload;
};

export const getUser = (state: User | null) => {
  return state;
};
