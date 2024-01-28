import 'dotenv/config';
import { cleanEnv, str, num, url, bool } from 'envalid';

const config = cleanEnv(process.env, {
  NODE_ENV: str(),
  DISPLAY_WIDTH: num({
    desc: 'The width of the display',
    default: 1920,
  }),
  DISPLAY_HEIGHT: num({
    desc: 'The height of the display',
    default: 1080,
  }),
  LOAD_TIME: num({
    desc: 'The time to wait for the page to load',
    default: 5000,
  }),
  REFRESH_INTERVAL: num({
    desc: 'The time between refreshes',
    default: 60000,
  }),
  URL: url({
    desc: 'The URL to screenshot',
    default: 'https://google.com',
  }),
  NEAGTIVE: bool({
    desc: 'Whether to invert the image',
    default: false,
  }),
});
export default config;
