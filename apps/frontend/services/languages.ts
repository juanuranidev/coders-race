import { request } from "lib/utils";

export const getLanguagesService = async () => {
  try {
    const response = await request({
      method: "GET",
      url: "api/language",
    });

    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};
