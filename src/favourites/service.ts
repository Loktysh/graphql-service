import config from '../setup/config';
import ApiBridge from '../setup/api-bridge';
import { Favorite, Params } from '../setup/interfaces';
import bandService from '../band/service';
import genreService from '../genre/service';
import artistsService from '../artist/service';
import trackService from '../track/service';

class FavouriteService extends ApiBridge<Favorite> {
  constructor() {
    super(config.FAVORITES_URL);
  }

  async addFavourites(body: any, token: string) {
    if (!token) throw new Error('Unauthorized');

    try {
      const { data } = await this.client.put(`add`, body, {
        headers: {
          authorization: token,
        },
      });

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
    } catch (e: any) {
      throw e.message;
    }
  }

  async favourites(token: string) {
    if (!token) throw new Error('Unauthorized');

    const { data } = await this.client.get(``, {
      headers: {
        authorization: token,
      },
    });

    return data;
  }
}

export default new FavouriteService();
