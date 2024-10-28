import {
  getAuth,
  UserCredential,
  signInWithPopup,
  GithubAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { User } from "lib/interfaces/user/user.interfaces";
import {
  readOrCreateUserApi,
  readUserByAuthIdApi,
} from "services/user/api/user.api";
import axios from "axios";

export const signInWithGitHubPopupAuth = async (): Promise<UserCredential> => {
  const user: UserCredential = await signInWithPopup(
    getAuth(),
    new GithubAuthProvider()
  );

  return user;
};

export const completeLoginFlow = async (): Promise<User> => {
  const firebaseUser: any = await signInWithGitHubPopupAuth();

  if (!firebaseUser?.user) {
    throw new Error("Failed to get GitHub username");
  }

  const userData = {
    authId: firebaseUser.user.uid,
    githubId: firebaseUser.user.providerData[0].uid,
    image: firebaseUser.user.providerData[0].photoURL,
    name: firebaseUser.user.providerData[0].displayName,
    githubUsername: firebaseUser.user.reloadUserInfo.screenName,
  };
  const apiUser = await readOrCreateUserApi(userData);
  if (!apiUser) {
    throw new Error("Failed to create user in the API");
  }

  axios.defaults.headers.common["Authorization"] = `Bearer ${apiUser.authId}`;

  return apiUser;
};

export const readUserInSession = async (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(getAuth(), async (user) => {
      try {
        if (!user) {
          resolve(null);
          return;
        }

        const apiUser = await readUserByAuthIdApi(user?.uid);

        if (!apiUser) {
          await logoutUser();
          reject(new Error("No user in session"));
          return;
        }
        resolve(apiUser);
      } catch (error) {
        await logoutUser();
        reject(error);
      }
    });
  });
};

export const logoutUser = async (): Promise<void> => {
  await getAuth().signOut();
};
