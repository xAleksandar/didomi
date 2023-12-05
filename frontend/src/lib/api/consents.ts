import axios from "axios";
import { SERVER_URL, API_ROUTES } from "../../utils/routes";
import { UserEntry } from "../../types/UserEntry.type";
import { API_KEY } from "../constants";

const axiosInstance = axios.create({
  baseURL: SERVER_URL,
  headers: {
    common: {
      "Content-Type": "application/json",
      "x-api-key": API_KEY,
    },
  },
});

export const getConsents = async () => {
  const response = await axiosInstance.get(API_ROUTES.getConsents);
  return response.data;
};

export const createConsent = async (data: UserEntry) => {
  const response = await axiosInstance.post(API_ROUTES.createConsent, data);
  return response.data;
};
