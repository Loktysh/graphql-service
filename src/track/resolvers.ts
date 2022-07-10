import trackService from "../track/service";
import { Params } from "../setup/interfaces";
import genreService from "../genre/service";
import { artistResolvers } from "../artist/resolvers";
import artistsService from "../artist/service";
import { bandResolvers } from "../band/resolvers";
import bandService from "../band/service";

export const trackResolvers = {
  Query: {
    track: async (_parent: any, params: Params) => {
      return trackService.getEntityById(params.id);
    },
    tracks: async (_parent: any, params: Params) => {
      return trackService.getEntities(params);
    },
  },
  Mutation: {
    createTrack: async (_parent: any, { inputTrack }: any, { token }: any) => {
      return await trackService.createEntity(inputTrack, token);
    },
    updateTrack: async (_parent: any, body: any, { token }: any) => {
      return await trackService.updateEntity(body.id, body.inputTrack, token);
    },
    deleteTrack: async (_parent: any, body: any, { token }: any) => {
      return await trackService.deleteEntity(body.id, token);
    },
  },
  Track: {
    id: (parent: any) => parent._id,
    artists: async ({ artistsIds }: any) => {
      return await Promise.all(artistsIds.map((id: string) =>
        artistsService.getEntityById(id)
      ));
    },
    bands: async ({  bandsIds }: any) => {
      return await Promise.all( bandsIds.map((id: string) =>
        bandService.getEntityById(id)
      ));
    },
    genres: async ({  genresIds }: any) => {
      return await Promise.all( genresIds.map((id: string) =>
        genreService.getEntityById(id)
      ));
    }
  }
};