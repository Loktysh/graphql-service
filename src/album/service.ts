import config from '../setup/config';
import ApiBridge from '../setup/api-bridge';
import { Album } from '../setup/interfaces';

class AlbumService extends ApiBridge<Album> {
  constructor() {
    super(config.ALBUMS_URL);
  }
}

export default new AlbumService();
