import axios, { AxiosInstance } from 'axios';

let axiosInstance: AxiosInstance | null = null;

const useAxios = (): AxiosInstance => {
  if (axiosInstance == null) {
    axiosInstance = axios.create({
      baseURL: 'http://127.0.0.1:3001',
      timeout: 5000,
    });

    return axiosInstance;
  } else {
    return axiosInstance;
  }
};

export default useAxios;
