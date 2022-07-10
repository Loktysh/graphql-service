import { gql } from 'apollo-server-express';

export const User = gql`
  type Query {
    jwt(email: String!, password: String!): Jwt
    user(userId: ID!): User
  }
  type Jwt {
    jwt: String!
  }
  type User {
    id: ID!
    firstName: String
    lastName: String
    password: String
    email: String!
  }
  input UserInput {
    firstName: String
    lastName: String
    password: String
    email: String!
    favouriteArtistIds: [String]
  }
  type Mutation {
    login(email: String, password: String): Jwt
    register(input: UserInput): User
  }
`;