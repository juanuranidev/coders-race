import request from "services/request";

export const readOrCreateUserApi = async (user: {
  name: string;
  image: string;
  authId: string;
  githubId: string;
  githubUsername: string;
}) => {
  const response = await request({
    method: "POST",
    url: "/user/v1/read-or-create",
    data: {
      user,
    },
  });

  return response.data;
};

export const readUserByAuthIdApi = async (authId: string | undefined) => {
  const response = await request({
    method: "GET",
    url: "/user/v1/read-by-auth-id",
    params: {
      authId,
    },
  });

  return response.data;
};

export const readUserProfileApi = async (userId: string | undefined) => {
  const response = await request({
    method: "GET",
    url: "/user/v1/read-profile",
    params: {
      userId,
    },
  });

  return response.data;
};

export const readUserLeaderboardApi = async () => {
  const response = await request({
    method: "GET",
    url: "/user/v1/read-leaderboard",
  });

  return response.data;
};
