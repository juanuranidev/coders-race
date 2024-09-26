import { AxiosResponse } from "axios";
import { Language } from "lib/interfaces/language/language.interfaces";
import request from "services/request";

export const readAllLanguagesApi = async () => {
  const response: AxiosResponse<Language[]> = await request({
    method: "GET",
    url: "/language/v1/read-all",
  });

  return response.data;
};
