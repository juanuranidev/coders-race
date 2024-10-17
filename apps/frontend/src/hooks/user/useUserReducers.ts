import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/shared/store";
import {
  setUser as setUserAction,
  UserState,
} from "store/user/slices/user.slices";

interface UserReducersReturn {
  user: UserState | null;
  setUser: (userData: UserState | null) => void;
  getUser: () => UserState | null;
}


export function useUserReducers(): UserReducersReturn {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  const setUser = (userData: UserState | null) => {
    dispatch(setUserAction(userData));
  };

  const getUser = () => {
    return user;
  };

  return { user, setUser, getUser };
}
