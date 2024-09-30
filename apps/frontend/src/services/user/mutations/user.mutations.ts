import { useMutation } from "@tanstack/react-query";
import { completeLoginFlow } from "../auth/user.auth";

export function useLoginMutation() {
  return useMutation({
    mutationFn: completeLoginFlow,
    onSuccess: (data) => {
      console.log("User logged in and created:", data);
    },
    onError: (error) => {
      console.error("Login failed:", error);
    },
  });
}
