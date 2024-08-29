import React from "react";
import { ScreenLoader } from "components";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { AUTH } from "lib/constants";

function AuthHandler({ auth, children }: any) {
  const { status } = useSession();
  const router = useRouter();

  if (status === AUTH.STATES.LOADING) {
    return <ScreenLoader />;
  }

  if (auth && status !== AUTH.STATES.AUTHENTICATED) {
    router.push(auth.unauthorized);
  }

  return children;
}

export default AuthHandler;
