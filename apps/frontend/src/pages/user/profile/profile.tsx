import { useUserReducers } from "hooks/user/useUserReducers";
import React from "react";
import { useUserReadByAuthId } from "services/user/queries/user.queries";

type Props = {};

export default function profile({}: Props) {
  const { user } = useUserReducers();
  const { data, isLoading, error } = useUserReadByAuthId(user?.authId);

  console.log(data);

  return <div>profile</div>;
}
