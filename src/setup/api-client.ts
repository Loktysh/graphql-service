import axios from "axios";

export const getApiClient = (baseURL?: string) => {
  return axios.create({
    baseURL,
    headers: {
      Accept: 'application/json',
    },
  });
}