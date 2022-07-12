import albumService from "../album/service";
import artistsService from "../artist/service";
import bandService from "../band/service";
import genreService from "../genre/service";
import { trackResolvers } from "../track/resolvers";
import trackService from "../track/service";

export const albumResolvers = {
  Query: {
    album: async (_parent: any, params: any) => {
      return albumService.getEntityById(params.id);
    },
    albums: async (_parent: any, params: any) => {
      return albumService.getEntities(params);
    },
  },
  
  Mutation: {
    createAlbum: async (_parent: any, { inputAlbum }: any, { token }: any) => {
      return await albumService.createEntity(inputAlbum, token);
    },
    updateAlbum: async (_parent: any, body: any, { token }: any) => {
      return await albumService.updateEntity(body.id, body.inputAlbum, token);
    },
    deleteAlbum: async (_parent: any, body: any, { token }: any) => {
      return await albumService.deleteEntity(body.id, token);
    },
  },
  
  Album: {
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
    },
    tracks: async ({  trackIds }: any) => {
      return await Promise.all( trackIds.map((id: string) =>
        trackService.getEntityById(id)
      ));
    },
  }
};