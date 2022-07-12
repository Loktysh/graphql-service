import favouritesService from '../favourites/service';
import { Params } from '../setup/interfaces';
import genreService from '../genre/service';
import bandService from '../band/service';
import artistsService from '../artist/service';
import trackService from '../track/service';

export const favouritesResolvers = {
  Query: {
    favourites: async (_parent: any, _params: Params, { token }: any) => {
      const data = await favouritesService.favourites(token);

      const bands = await Promise.all(
        data.bandsIds.map((id: string) => bandService.getEntityById(id))
      );
      const genres = await Promise.all(
        data.genresIds.map((id: string) => genreService.getEntityById(id))
      );
      const artists = await Promise.all(
        data.artistsIds.map((id: string) => artistsService.getEntityById(id))
      );
      const tracks = await Promise.all(
        data.tracksIds.map((id: string) => trackService.getEntityById(id))
      );

      return {
        _id: data._id,
        userId: data.userId,
        bands,
        genres,
        artists,
        tracks,
      };
    },
  },
  Mutation: {
    addTrackToFavourites: async (_parent: any, { input }: any, { token }: any) => {
      return await favouritesService.addFavourites(input, token);
    },
    addBandToFavourites: async (_parent: any, { input }: any, { token }: any) => {
      return await favouritesService.addFavourites(input, token);
    },
    addArtistToFavourites: async (_parent: any, { input }: any, { token }: any) => {
      return await favouritesService.addFavourites(input, token);
    },
    addGenreToFavourites: async (_parent: any, { input }: any, { token }: any) => {
      return await favouritesService.addFavourites(input, token);
    },
  },
  Favourites: {
    id: (parent: any) => parent._id,
  },
};
