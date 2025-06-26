import axios, { type AxiosRequestConfig } from 'axios';

export const instance = axios.create({ baseURL: '/' });
instance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (axios.isAxiosError(error)) {
      console.error('API Error:', error.response?.data);

      return Promise.reject(error.response?.data || error.message);
    }
    return Promise.reject(error);
  }
);
interface TypedAxiosInstance {
  get<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
  post<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T>;
  put<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T>;
  delete<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
  patch<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<T>;
}
export const api = instance as TypedAxiosInstance;
