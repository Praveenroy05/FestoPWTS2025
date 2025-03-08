
import {test, expect} from '@playwright/test'
import path from 'path'
import * as fs from 'fs';


// downloading the file 
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

// File not having type=file
test('Upload a file without input type=file', async ({ page }) => {
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")

    const promise = page.waitForEvent('filechooser')
    await page.locator("#filesToUpload").click()
    const fileChooser = await promise
    await fileChooser.setFiles(path.join(__dirname, "../Test Data/BDD Questions.txt"));

    await expect(page.locator("#fileList li").first()).toContainText('BDD Questions')
    await page.waitForTimeout(5000)
});

