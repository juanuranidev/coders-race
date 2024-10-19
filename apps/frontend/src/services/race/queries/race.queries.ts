import { Race } from "lib/interfaces/race/race.interfaces";
import { getRacesByUserIdApi } from "../api/race.api";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export function useRacesReadByUserId(): UseQueryResult<Race[]> {
  return useQuery({
    queryKey: ["races-read-by-user-id"],
    queryFn: getRacesByUserIdApi,
  });
}
