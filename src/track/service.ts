import ApiBridge from '../setup/api-bridge';
import { Track } from '../setup/interfaces';
import config from '../setup/config';

class TrackService extends ApiBridge<Track> {
  constructor() {
    super(config.TRACKS_URL);
  }
}

export default new TrackService();