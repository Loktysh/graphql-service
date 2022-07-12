import userService from './userService';
const userResolvers = {
  Query: {
    user: async (parent, { id }, { dataSources }) => {
      return UsersAPI.getUser(id);
    },
    jwt: (parent, { authorizeUserInput }, { dataSources }) => {
      return UsersAPI.loginUser(authorizeUserInput);
    },
  },
  Mutation: {
    register: (parent, { registerUserInput }, { dataSources }) => {
      return UsersAPI.registerUser(registerUserInput);
    },
  },
  User: { id: (parent) => parent._id },
};
export default userResolvers