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

export function useUserReadByAuthId(
  authId: string | undefined
): UseQueryResult<any> {
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
): UseQueryResult<any> {
  return useQuery({
    queryKey: ["user-read-profile", userId],
    queryFn: () => readUserProfileApi(userId),
    enabled: !!userId,
    placeholderData: keepPreviousData,
    refetchOnWindowFocus: false,
  });
}

export function useUserReadLeaderboard(): UseQueryResult<any> {
  return useQuery({
    queryKey: ["user-read-leaderboard"],
    queryFn: readUserLeaderboardApi,
    placeholderData: keepPreviousData,
    refetchOnWindowFocus: false,
  });
}
