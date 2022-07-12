import axios, { AxiosInstance } from 'axios';
import { Params } from "./interfaces";

class ApiBridge<T> {
  client: AxiosInstance;

  constructor(baseURL?: string) {
    this.client = axios.create({
      baseURL,
      headers: {
        Accept: 'application/json',
      },
    });
  }

  async getEntityById(id: string): Promise<T> {
    const { data } = await this.client
      .get(`${id}`);

    return data;
  }

  async getEntities({ limit = 15, offset = 0 }: Params) {
    const { data } = await this.client.get(``, {
      params: {
        limit,
        offset,
      }
    });

    return data.items;
  }
  async createEntity(body: any, token: string) {
    if (!token) throw new Error('Unauthorized');

    try {
      const { data } = await this.client.post(``, body, {
        headers: {
          'authorization': token
        }
      });
      return data;
    } catch (e: any) {
      throw e.message;
    }
  }
  async updateEntity(id: string, body: any, token: string) {
    if (!token) throw new Error('Unauthorized');
    try {
      const { data } = await this.client.put(id, body, {
        headers: {
          'authorization': token
        }
      });
      return data;
    } catch (e: any) {
      throw e.message;
    }
  }
  async deleteEntity(id: string, token: string) {
    if (!token) throw new Error('Unauthorized');
    try {
      const { data } = await this.client.delete(id, {
        headers: {
          'authorization': token
        }
      });
      return data;
    } catch (e: any) {
      throw e.message;
    }
  }
}

export default ApiBridge;