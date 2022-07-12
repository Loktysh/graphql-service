import config from '../setup/config';
import ApiBridge from '../setup/api-bridge';
import { Album } from '../setup/interfaces';

class ArtistsService extends ApiBridge<Album> {
  constructor() {
    super(config.ARTISTS_URL);
  }
}

export default new ArtistsService();
