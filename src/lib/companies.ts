import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { Routes } from "../enums/routes.enum";
import { Companies } from "../interfaces/companies";

export function companiesLib() {
  const axiosInstance: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });

  async function getCompanies(token: string): Promise<Companies> {
    const config: AxiosRequestConfig = {
      method: 'post',
      url: Routes.GET_COMPANIES,
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }

    const response: Companies = await axiosInstance.request(config);
    return response;
  }

  return { getCompanies }
}

