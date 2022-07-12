import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';

export class UsersAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:3004/v1/users';
  }
  willSendRequest(request) {
    request.headers.set('Authorization', `Bearer ${this.context.token}`);
  }
  getUser(id) {
    return this.get(`/${encodeURIComponent(id)}`);
  }
  registerUser(userData) {
    return this.post(`/register`, userData);
  }
  loginUser(userData) {
    return this.post(`/login`, userData);
  }
}