import userService from './service';


export const userResolvers = {
  Query: {
    user: async (_parent: any, args: any) => {
      return userService.user(args.userId);
    },
    jwt: async (_parent: any, body: any) => {
      return userService.jwt(body.email, body.password);
    },
  },
  Mutation: {
    login: async (_: any, { email, password }: any) => {
      const res = await userService.jwt(email, password);
      const data = { jwt: res.jwt };
      return data;
    },
    register: async (_: any, { input }: any) => {
      return await userService.register(input);
    },
  },
};