import axios, { AxiosInstance } from 'axios';
import api from './apiConfig';

let axiosInstance: AxiosInstance | null = null;

const useAxios = (): AxiosInstance => {
  if (axiosInstance == null) {
    axiosInstance = axios.create({
      baseURL: api.host,
      timeout: 5000,
    });

    return axiosInstance;
  } else {
    return axiosInstance;
  }
};

export default useAxios;
