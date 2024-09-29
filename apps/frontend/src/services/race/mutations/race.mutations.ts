import { useMutation } from "@tanstack/react-query";
import { createRaceApi } from "../api/race.api";

export function useCreateRaceMutation() {
  return useMutation({
    mutationFn: (data: any) => createRaceApi(data),
    onSuccess: () => {
      console.log("first");
    },
  });
}
