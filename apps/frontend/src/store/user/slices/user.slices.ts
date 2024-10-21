import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  setUser as setUserReducer,
  getUser as getUserReducer,
} from "../reducers/user.reducers";
import { User } from "lib/interfaces/user/user.interfaces";

export const userSlice = createSlice({
  name: "user",
  initialState: null as User | null,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) =>
      setUserReducer(state, action),
    getUser: (state) => getUserReducer(state),
  },
});

export const { setUser, getUser } = userSlice.actions;
export default userSlice.reducer;
