import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  setUser as setUserReducer,
  getUser as getUserReducer,
} from "../reducers/user.reducers";

export interface UserState {
  name: string;
  email?: string;
  image?: string;
  uid?: string;
  accessToken?: string;
  refreshToken?: string;
  authId: string;
}

export const userSlice = createSlice({
  name: "user",
  initialState: null as UserState | null,
  reducers: {
    setUser: (state, action: PayloadAction<UserState | null>) =>
      setUserReducer(state, action),
    getUser: (state) => getUserReducer(state),
  },
});

export const { setUser, getUser } = userSlice.actions;
export default userSlice.reducer;
