import { gql } from 'apollo-server-express';

export const Favourite = gql`
  type Query {
    favourites: Favourites!
  }
  type Favourites {
    id: ID!
    userId: ID
    bands: [Band]
    genres: [Genre]
    artists: [Artist]
    tracks: [Track]
  }
  input InputFavourite {
    type: String
    id: String
  }
  type Mutation {
    addTrackToFavourites(input: InputFavourite): Favourites
    addBandToFavourites(input: InputFavourite): Favourites
    addArtistToFavourites(input: InputFavourite): Favourites
    addGenreToFavourites(input: InputFavourite): Favourites
  }
`;