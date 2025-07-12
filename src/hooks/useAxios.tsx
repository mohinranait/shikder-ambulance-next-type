import axios from "axios";
export const instance = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

const useAxios = () => {
  return instance;
};

export default useAxios;
