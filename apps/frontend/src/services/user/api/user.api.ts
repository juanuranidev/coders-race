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
