import axios, { AxiosInstance,  } from "axios";
import config from '../setup/config';
import { getApiClient } from "../setup/api-client";

class UserService {
  client: AxiosInstance;

  constructor() {
    this.client = getApiClient(config.USERS_URL);
  }

  async user(id: string) {
    const { data } = await this.client
      .get(`${id}`);

    return data;
  }

  async jwt(email: string, password: string) {
    const { data } = await this.client
      .post(`/login`, {
        email,
        password
      });

    return data;
  }

  async register(body: any) {
    const { data } = await this.client
      .post(`/register`, body);

    return {
      ...data,
      id: data._id
    };
  }
}

export default new UserService();