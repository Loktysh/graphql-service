import bandService from '../band/service';
import genreService from '../genre/service';
import { Params } from '../setup/interfaces';
import { artistResolvers } from '../artist/resolvers';
import artistsService from '../artist/service';

export const bandResolvers = {
  Query: {
    band: async (_parent: any, params: Params) => {
      return bandService.getEntityById(params.id);
    },
    bands: async (_parent: any, params: Params) => {
      return bandService.getEntities(params);
    },
  },

  Mutation: {
    createBand: async (_parent: any, { createBandInput }: any, { token }: any) => {
      return await bandService.createEntity(createBandInput, token);
    },
    updateBand: async (_parent: any, body: any, { token }: any) => {
      return await bandService.updateEntity(body.id, body.updateBandInput, token);
    },
    deleteBand: async (_parent: any, body: any, { token }: any) => {
      return await bandService.deleteEntity(body.id, token);
    },
  },

  Band: {
    id: (parent: any) => parent._id,
    genres: async ({ genresIds }: any) => {
      return await Promise.all(genresIds.map((id: string) => genreService.getEntityById(id)));
    },
    members: async ({ members }: any) => {
      const res = await Promise.all(
        members.map(async (id: string) => {
          const artist: any = await artistsService.getEntityById(id);

          return {
            artist: artist.firstName,
            instrument: artist.instruments,
            years: artist.birthDate ? [artist.birthDate] : [],
          };
        })
      );

      return res;
    },
  },
};
