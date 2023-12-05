import axios from "axios";
import { SERVER_URL, API_ROUTES } from "../../utils/routes";
import { UserEntry } from "../../types/UserEntry.type";

export const getConsents = async () => {
  const response = await axios.get(`${SERVER_URL}${API_ROUTES.getConsents}`);
  return response.data;
};

export const createConsent = async (data: UserEntry) => {
  const response = await axios.post(
    `${SERVER_URL}${API_ROUTES.createConsent}`,
    data
  );
  return response.data;
};
