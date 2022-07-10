import artistsService from '../artist/service';
import { Params } from '../setup/interfaces';
import genreService from '../genre/service';
import { bandResolvers } from '../band/resolvers';
import bandService from '../band/service';

export const artistResolvers = {
  Query: {
    artist: async (_parent: any, params: Params) => {
      return artistsService.getEntityById(params.id);
    },
    artists: async (_parent: any, params: Params) => {
      return artistsService.getEntities(params);
    },
  },
  Mutation: {
    createArtist: async (_parent: any, { input }: any, { token }: any) => {
      return await artistsService.createEntity(
        {
          ...input,
          bandsIds: input?.bands,
        },
        token
      );
    },
    updateArtist: async (_parent: any, body: any, { token }: any) => {
      return await artistsService.updateEntity(
        body.id,
        {
          ...body.input,
          bandsIds: body.input?.bands,
        },
        token
      );
    },
    deleteArtist: async (_parent: any, body: any, { token }: any) => {
      return await artistsService.deleteEntity(body.id, token);
    },
  },
  Artist: {
    id: (parent: any) => parent._id,
    bands: async ({ bandsIds }: any) => {
      return await Promise.all(bandsIds.map((id: string) => bandService.getEntityById(id)));
    },
  },
};
