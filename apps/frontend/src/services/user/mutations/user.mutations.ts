import { useMutation } from "@tanstack/react-query";
import { completeLoginFlow } from "../auth/user.auth";

export function useLoginMutation() {
  return useMutation({
    mutationFn: completeLoginFlow,
    onError: (error) => {
      console.error(
        "Login failed:",
        error instanceof Error ? error.message : "Unknown error"
      );
    },
  });
}
