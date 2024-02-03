import 'dotenv/config';
import { cleanEnv, num, url, bool } from 'envalid';

const config = cleanEnv(process.env, {
  DISPLAY_WIDTH: num({
    desc: 'The width of the display',
    default: 1920,
  }),
  DISPLAY_HEIGHT: num({
    desc: 'The height of the display',
    default: 1080,
  }),
  LOAD_TIME: num({
    desc: 'The time to wait for the page to load in ms',
    default: 1000,
  }),
  REFRESH_INTERVAL: num({
    desc: 'The time between refreshes in seconds',
    default: 60,
  }),
  URL: url({
    desc: 'The URL to screenshot',
    default: 'https://google.com',
  }),
  NEGATIVE: bool({
    desc: 'Whether to invert the image',
    default: false,
  }),
});
export default config;
