import { User } from "lib/interfaces/user/user.interfaces";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/shared/store";
import { setUser as setUserAction } from "store/user/slices/user.slices";

interface UserReducersReturn {
  user: User | null;
  setUser: (userData: User | null) => void;
  getUser: () => User | null;
}

export function useUserReducers(): UserReducersReturn {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  const setUser = (userData: User | null) => {
    dispatch(setUserAction(userData));
  };

  const getUser = () => {
    return user;
  };

  return { user, setUser, getUser };
}
