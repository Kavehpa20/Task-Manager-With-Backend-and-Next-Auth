import axios from "axios";
import { BASE_URL } from "../utils/constants";

export const generateClient = () => {
  return axios.create({
    baseURL: BASE_URL,
  });
};
