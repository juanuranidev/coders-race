import axios, { AxiosResponse, AxiosRequestConfig, Method } from "axios";
import ENV from "lib/env";

type RequestProps<T = any> = {
  method: Method;
  url: string;
  params?: Record<string, any>;
  data?: T;
};

const request = async <ResponseType = any, RequestData = any>({
  method,
  url,
  params,
  data,
}: RequestProps<RequestData>): Promise<AxiosResponse<ResponseType>> => {
  const config: AxiosRequestConfig = {
    url,
    method,
    params,
    data,
    baseURL: ENV.BACKEND_BASE_URL,
  };

  const response: AxiosResponse<ResponseType> = await axios(config);

  return response;
};

export default request;
