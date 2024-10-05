import { PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "../slices/user.slices";

export const setUser = (
    _state: UserState | null,
    action: PayloadAction<UserState | null>
) => {
    return action.payload;
};

export const getUser = (state: UserState | null) => {
    return state;
};