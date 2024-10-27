import {
  useQuery,
  keepPreviousData,
  type UseQueryResult,
} from "@tanstack/react-query";
import {
  readUserByAuthIdApi,
  readUserLeaderboardApi,
  readUserProfileApi,
} from "../api/user.api";
import { User } from "lib/interfaces/user/user.interfaces";

export function useUserReadByAuthId(
  authId: string | undefined
): UseQueryResult<User> {
  return useQuery({
    queryKey: ["user-read-by-auth-id", authId],
    queryFn: () => readUserByAuthIdApi(authId),
    enabled: !!authId,
    placeholderData: keepPreviousData,
    refetchOnWindowFocus: false,
  });
}

export function useUserReadProfile(
  userId: string | undefined
): UseQueryResult<User> {
  return useQuery({
    queryKey: ["user-read-profile", userId],
    queryFn: () => readUserProfileApi(userId),
    enabled: !!userId,
    placeholderData: keepPreviousData,
    refetchOnWindowFocus: false,
  });
}

export function useUserReadLeaderboard(): UseQueryResult<User[]> {
  return useQuery({
    queryKey: ["user-read-leaderboard"],
    queryFn: readUserLeaderboardApi,
    placeholderData: keepPreviousData,
    refetchOnWindowFocus: false,
  });
}
