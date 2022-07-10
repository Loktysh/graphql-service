import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: path.join(__dirname, '../../.env'),
});

export default {
  PORT: process.env['PORT'],
  GENRES_URL: process.env['GENRES_URL'],
  ARTISTS_URL: process.env['ARTISTS_URL'],
  BANDS_URL: process.env['BANDS_URL'],
  USERS_URL: process.env['USERS_URL'],
  ALBUMS_URL: process.env['ALBUMS_URL'],
  TRACKS_URL: process.env['TRACKS_URL'],
  FAVORITES_URL: process.env['FAVORITES_URL'],
};