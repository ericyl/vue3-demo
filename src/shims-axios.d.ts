import axios from "axios";
import ResponseData from "@/types/ResponseData";

declare module "axios" {
  export interface AxiosResponse<T = any> {
    data: ResponseData<T>;
  }

  export interface AxiosInstance {
    post<T = any>(
      url: string,
      data?: any,
      config?: AxiosRequestConfig
    ): Promise<T>;
    get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
  }
}
