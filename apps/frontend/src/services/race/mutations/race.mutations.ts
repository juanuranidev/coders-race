import { useMutation } from "@tanstack/react-query";
import { createRaceApi } from "../api/race.api";

export function useCreateRaceMutation() {
  return useMutation({
    mutationFn: (data: {
      cps: number;
      codeId: number;
      userId: string;
      timeInMS: number;
    }) => createRaceApi(data),
  });
}
