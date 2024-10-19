import axios, { AxiosResponse, AxiosRequestConfig, Method } from "axios";
import ENV from "lib/env";

type RequestProps<T = any> = {
  data?: T;
  url: string;
  method: Method;
  params?: Record<string, any>;
};

const request = async <ResponseType = any, RequestData = any>({
  url,
  data,
  method,
  params,
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
