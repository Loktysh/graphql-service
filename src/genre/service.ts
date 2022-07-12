import config from '../setup/config';
import ApiBridge from "../setup/api-bridge";
import { User } from "../setup/interfaces";

class GenreService extends ApiBridge<User>{
  constructor() {
    super(config.GENRES_URL)
  }

}

export default new GenreService();