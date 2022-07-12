import { gql } from 'apollo-server-express';

export const Track = gql`
  type Query {
    track(id: ID!): Track
    tracks(limit: Int, offset: Int): [Track]
  }
  type Track {
    id: ID!
    title: String!
    album: Album
    artists: [Artist]
    bands: [Band]
    duration: Int
    released: Int
    genres: [Genre]
  }
  
  input TrackInput {
    title: String
    albumId: String
    bandsIds: [String]
    artistsIds: [String]
    duration: Int
    released: Int
    genresIds: [String]
  }

  type Mutation {
    createTrack(inputTrack: TrackInput): Track
    updateTrack(id: ID!, inputTrack: TrackInput): Track
    deleteTrack(id: ID!): Delete
  }
`;

