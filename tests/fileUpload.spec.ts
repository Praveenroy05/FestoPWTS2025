import {test, expect} from '@playwright/test'
import path from 'path'

test("File upload handling", async ({page})=>{
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")
    await page.locator("#filesToUpload").setInputFiles(path.join(__dirname, "../Test Data/BDD Questions.txt"))
    await expect(page.locator("#fileList li")).toContainText('BDD Questions')
    await page.waitForTimeout(2000)

    await page.locator("#filesToUpload").setInputFiles(
        [path.join(__dirname, "../Test Data/BDD Questions.txt"), 
        path.join(__dirname, "../Test Data/class ApiUtils.txt")
        ])
    await expect(page.locator("#fileList li").first()).toContainText('BDD Questions')
    await expect(page.locator("#fileList li").last()).toContainText('class ApiUtils.txt')
    await page.waitForTimeout(2000)

    
})

test('Upload a file without input type=file', async ({ page }) => {
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")

    const promise = page.waitForEvent('filechooser')
    await page.locator("#filesToUpload").click()
    const fileChooser = await promise
    await fileChooser.setFiles(path.join(__dirname, "../Test Data/BDD Questions.txt"));

    await expect(page.locator("#fileList li").first()).toContainText('BDD Questions')
    await page.waitForTimeout(5000)
});
