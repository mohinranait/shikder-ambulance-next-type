import { BASE_URL } from "@/config/accessEnv";
import axios from "axios";
export const instance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

const useAxios = () => {
  return instance;
};

export default useAxios;
