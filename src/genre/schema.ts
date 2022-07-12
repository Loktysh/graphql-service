import { gql } from 'apollo-server-express';

export const Genre = gql`
  type Query {
    genre(id: ID!): Genre
    genres(limit: Int, offset: Int): [Genre]
  }

  type Delete {
    acknowledged: Boolean
    deletedCount: Int
  }

  type Genre {
    id: ID!
    name: String
    description: String
    country: String
    year: Int
  }

  input GenreInput {
    name: String
    description: String
    country: String
    year: Int
  }

  type Mutation {
    createGenre(createInputGenre: GenreInput): Genre
    updateGenre(id: ID!, updateInputGenre: GenreInput): Genre
    deleteGenre(id: ID!): Delete
  }
`;