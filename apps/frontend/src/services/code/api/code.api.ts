import { AxiosResponse } from "axios";
import { Code } from "lib/interfaces/code/code.interfaces";
import request from "services/request";

export const readRandomByLanguageApi = async (
  languageName: string
): Promise<Code> => {
  const response: AxiosResponse<Code> = await request({
    method: "GET",
    url: "/code/v1/read-random-by-language",
    params: { languageName },
  });

  return response.data;
};
