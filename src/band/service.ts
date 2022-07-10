import config from '../setup/config';
import ApiBridge from '../setup/api-bridge';
import { Band } from '../setup/interfaces';

class BandService extends ApiBridge<Band> {
  constructor() {
    super(config.BANDS_URL);
  }
}

export default new BandService();
