import genreService from '../genre/service';
import { Params } from '../setup/interfaces';

export const genreResolvers = {
  Query: {
    genre: async (_parent: any, params: Params) => {
      return genreService.getEntityById(params.id);
    },
    genres: async (_parent: any, params: Params) => {
      return genreService.getEntities(params);
    },
  },

  Mutation: {
    createGenre: async (_parent: any, { createInputGenre }: any, { token }: any) => {
      return await genreService.createEntity(createInputGenre, token);
    },
    updateGenre: async (_parent: any, body: any, { token }: any) => {
      return await genreService.updateEntity(body.id, body.updateInputGenre, token);
    },
    deleteGenre: async (_parent: any, body: any, { token }: any) => {
      return await genreService.deleteEntity(body.id, token);
    },
  },

  Genre: {
    id: (parent: any) => parent._id,
  },
};
