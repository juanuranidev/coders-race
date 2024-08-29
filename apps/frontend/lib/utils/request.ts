import axios from "axios";
import { BACKEND_BASE_URL } from "lib/env";

type Props = {
  method: "GET" | "POST" | "PUT" | "DELETE";
  url: string;
  params?: any;
  data?: any;
};

const request = async ({ method, url, params, data }: Props) => {
  try {
    const response: any = await axios({
      url: url,
      data: data,
      method: method,
      params: params,
      baseURL: BACKEND_BASE_URL,
    });

    return response;
  } catch (error) {
    throw error;
  }
};

export default request;
