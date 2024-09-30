import {
  Auth,
  getAuth,
  UserCredential,
  signInWithPopup,
  GithubAuthProvider,
} from "firebase/auth";
import { createUserApi } from "../api/user.api";

export const signInWithGitHubPopupAuth = async (): Promise<UserCredential> => {
  const auth: Auth = getAuth();

  const user: UserCredential = await signInWithPopup(
    auth,
    new GithubAuthProvider()
  );

  return user;
};

export const completeLoginFlow = async (): Promise<any> => {
  try {
    const firebaseUser = await signInWithGitHubPopupAuth();

    const userData = {
      uid: firebaseUser.user.uid,
      email: firebaseUser.user.email,
      displayName: firebaseUser.user.displayName,
      photoURL: firebaseUser.user.photoURL,
    };

    const apiUser = await createUserApi(userData);
    return apiUser;
  } catch (error) {
    console.error("Login flow failed:", error);
    throw error;
  }
};
