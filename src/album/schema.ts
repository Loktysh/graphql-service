import { gql } from 'apollo-server-express';

export const Album = gql`
  type Query {
    album(id: ID!): Album
    albums(limit: Int, offset: Int): [Album]
  }
  type Album {
    id: ID!
    name: String
    released: Int
    artists: [Artist]
    bands: [Band]
    tracks: [Track]
    genres: [Genre]
    image: String
  }
  
  input AlbumInput {
    name: String
    released: Int
    artistsIds: [ID]
    bandsIds: [ID]
    trackIds: [ID]
    genresIds: [ID]
  }
  
  type Mutation {
    createAlbum(inputAlbum: AlbumInput): Album
    updateAlbum(id: ID!, inputAlbum: AlbumInput): Album
    deleteAlbum(id: ID!): Delete
  }
`;

