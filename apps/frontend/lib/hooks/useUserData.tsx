import { useContext } from "react";
import { UserDataContext } from "contexts";

export default function useUserData() {
  const { userData }: any = useContext(UserDataContext);

  return userData;
}
