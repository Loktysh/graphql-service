import { gql } from 'apollo-server-express';

export const Artist = gql`
  type Query {
    artist(id: ID!): Artist
    artists(limit: Int, offset: Int): [Artist]
  }
  type Artist {
    id: ID!
    firstName: String
    secondName: String
    middleName: String
    birthDate: String
    birthPlace: String
    country: String
    bands: [Band]
    instruments: [String]
  }
  
  input ArtistInput {
    firstName: String
    secondName: String
    middleName: String
    birthDate: String
    birthPlace: String
    country: String
    bands: [ID]
    instruments: [String]
  }
  
  type Mutation {
    createArtist(input: ArtistInput): Artist
    updateArtist(id: ID!, input: ArtistInput): Artist
    deleteArtist(id: ID!): Delete
  }
`;