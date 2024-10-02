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
      user
    },
  });

  return response.data;
};

export const readUserByAuthIdApi = async (authId: string | undefined) => {
  const response = await request({
    method: "GET",
    url: `/user/v1/read-by-auth-id/${authId}`,
  });

  return response.data;
};