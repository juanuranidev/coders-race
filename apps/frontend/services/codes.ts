import { request } from "lib/utils";

export const getRandomCodeByLanguageService = async (
  language: string | undefined | string[]
) => {
  try {
    const response = await request({
      method: "GET",
      url: "api/code/get-random",
      params: {
        language,
      },
    });

    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};
