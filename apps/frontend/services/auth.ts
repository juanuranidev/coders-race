import { request } from "lib/utils";
import { UserType } from "lib/types";

export const loginService = async (data: UserType) => {
  try {
    const response = await request({
      method: "POST",
      url: "/api/auth/login",
      data: {
        data,
      },
    });

    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};
