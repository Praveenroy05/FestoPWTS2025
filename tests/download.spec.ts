import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test('Download a file and verify it exists', async ({ page }) => {
  await page.goto('https://www.sample-videos.com/');

  const promise = page.waitForEvent('download')
  await page.locator("[user_id='same_configuration_id=126']").click() 

  const download = await promise
  const fileName = download.suggestedFilename();
  console.log(`Downloading: ${fileName}`);

  const filePath = `./downloads/${fileName}`;

  await download.saveAs(filePath);

  expect(fs.existsSync(filePath)).toBeTruthy();

  console.log(`File successfully downloaded at: ${filePath}`);
});
