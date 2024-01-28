import config from '@/config.js';
import puppeteer from 'puppeteer';
import sharp from 'sharp';
import { ToadScheduler, SimpleIntervalJob, AsyncTask } from 'toad-scheduler';

const scheduler = new ToadScheduler();

const task = new AsyncTask('simple task', () => {
  return screenshot();
});
const job = new SimpleIntervalJob(
  { seconds: config.REFRESH_INTERVAL, runImmediately: true },
  task,
  {
    preventOverrun: true,
  },
);

scheduler.addSimpleIntervalJob(job);

async function screenshot() {
  console.log('Taking screenshot');
  const browser = await puppeteer.launch({ headless: 'new' });

  const page = await browser.newPage();
  await page.setViewport({
    width: config.DISPLAY_WIDTH,
    height: config.DISPLAY_HEIGHT,
  });
  await page.goto(config.URL);
  await new Promise(r => setTimeout(r, config.LOAD_TIME));
  const screenshot = await page.screenshot();
  await browser.close();
  let sharpImage = await sharp(screenshot);
  if (config.NEAGTIVE) sharpImage = sharpImage.negate({ alpha: false });
  await sharpImage.toFile('screenshot.png');
}
