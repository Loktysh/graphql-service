import { gql } from 'apollo-server-express';

export const Band = gql`
  type Query {
    band(id: ID!): Band
    bands(limit: Int, offset: Int): [Band]
  }
  type Band {
    id: ID!
    name: String
    origin: String
    members: [Member]
    website: String
    genres: [Genre]
  }

  type Member {
    artist: String
    instrument: [String]
    years: [String]
  }

  input BandInput {
    name: String!
    origin: String
    members: [String]
    website: String
    genresIds: [String]
  }

  input MemberInput {
    artist: String
    instrument: String
    years: [String]
  }

  type Query {
    bands(limit: Int, offset: Int): [Band]
    band(id: ID!): Band
  }

  type Mutation {
    createBand(createBandInput: BandInput): Band!
    updateBand(id: ID, updateBandInput: BandInput): Band!
    deleteBand(id: ID!): Delete
  }
`;