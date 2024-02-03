import config from '@/config.js';
import puppeteer from 'puppeteer';
import sharp from 'sharp';
import { ToadScheduler, SimpleIntervalJob, AsyncTask } from 'toad-scheduler';
import { spawnSync } from 'child_process';

const scheduler = new ToadScheduler();

const task = new AsyncTask('simple task', () => {
  return screenshot().then(() => {
    const pythonProcess = spawnSync('venv/bin/python', ['main.py']);
    const result = pythonProcess.stdout.toString().trim();
    console.log(result);
    const error = pythonProcess.stderr.toString().trim();
    if (error) console.error(error);
  });
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
  const browser = await puppeteer.launch({
    headless: 'new',
    executablePath: '/usr/bin/chromium-browser',
  });

  const page = await browser.newPage();
  console.log('Setting viewport', config.DISPLAY_WIDTH, config.DISPLAY_HEIGHT);
  await page.setViewport({
    width: config.DISPLAY_WIDTH,
    height: config.DISPLAY_HEIGHT,
  });
  await page.goto(config.URL);
  await new Promise(r => setTimeout(r, config.LOAD_TIME));
  const screenshot = await page.screenshot();
  await browser.close();
  let sharpImage = sharp(screenshot);
  if (config.NEGATIVE) sharpImage = sharpImage.negate({ alpha: false });
  await sharpImage.toFile('screenshot.png');
}
