import { gql } from 'apollo-server-express';

export const usersTypeDefs = gql`
  type Query {
    user(id: ID!): User
    jwt(authorizeUserInput: AuthorizeUserInput!): JWT
  }

  input RegisterUserInput {
    firstName: String!
    lastName: String!
    password: String!
    email: String!
  }

  input AuthorizeUserInput {
    email: String!
    password: String!
  }

  type JWT {
    jwt: String
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    password: String!
    email: String!
  }

  type Mutation {
    register(registerUserInput: RegisterUserInput!): User
  }
`;