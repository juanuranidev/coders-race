import {
  Auth,
  getAuth,
  UserCredential,
  signInWithPopup,
  GithubAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { readOrCreateUserApi } from "services/user/api/user.api";

export const signInWithGitHubPopupAuth = async (): Promise<UserCredential> => {
  const auth: Auth = getAuth();

  const user: UserCredential = await signInWithPopup(
    auth,
    new GithubAuthProvider()
  );

  return user;
};

export const completeLoginFlow = async (): Promise<any> => {
  const firebaseUser: UserCredential = await signInWithGitHubPopupAuth();
  console.log({ firebaseUser });

  const userData = {
    name: firebaseUser.user.displayName ?? "",
    image: firebaseUser.user.photoURL ?? "",
    authId: firebaseUser.user.uid,
    githubId: firebaseUser.user.providerData[0].uid ?? "",
    githubUsername: firebaseUser.user.displayName ?? "",
  };
  console.log({ userData });
  const apiUser = await readOrCreateUserApi(userData);

  if (!apiUser) {
    throw new Error("Failed to create user in the API");
  }

  return apiUser;
};

export const readUserInSession = async (): Promise<any> => {
  // const auth: Auth = getAuth();
  // console.log(auth)
  // const user = auth.currentUser;
  const user = onAuthStateChanged(getAuth(), (user) => {
    console.log(user);

  });
  // const auth: Auth = getAuth();
  // const user = auth.currentUser;
  // console.log({ user });
  if (!user) {
    throw new Error("No user in session");
  }
  return user;
};

export const logoutUser = async (): Promise<void> => {
  const auth: Auth = getAuth();
  await auth.signOut();
};
