import {
  getAuth,
  UserCredential,
  signInWithPopup,
  GithubAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import {
  readOrCreateUserApi,
  readUserByAuthIdApi,
} from "services/user/api/user.api";

export const signInWithGitHubPopupAuth = async (): Promise<UserCredential> => {
  const user: UserCredential = await signInWithPopup(
    getAuth(),
    new GithubAuthProvider()
  );

  return user;
};

export const completeLoginFlow = async (): Promise<any> => {
  const firebaseUser: UserCredential = await signInWithGitHubPopupAuth();

  const userData = {
    name: firebaseUser.user.displayName ?? "",
    image: firebaseUser.user.photoURL ?? "",
    authId: firebaseUser.user.uid,
    githubId: firebaseUser.user.providerData[0].uid ?? "",
    githubUsername: firebaseUser.user.displayName ?? "",
  };
  const apiUser = await readOrCreateUserApi(userData);
  if (!apiUser) {
    throw new Error("Failed to create user in the API");
  }

  return apiUser;
};

export const readUserInSession = async (): Promise<any> => {
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
