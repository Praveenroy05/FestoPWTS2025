// fixtures - automatically setting up and tear down the browser/environment

// browser, page

import {test, expect} from '@playwright/test'

test('browser fixture in playwright',  async function({browser}){
    // browser is a fixture that is automatically set up and tearn down for each test
    const context = await browser.newContext() // context on the browser that we have given inside configuration file
    const page = await context.newPage() // new page on the browsser context

    await page.goto("");
    await page.locator("input#username").fill("student");
    await page.locator("input#password").fill("Password123");
    await page.locator("button#submit").click()
    await expect(page.locator('.post-title')).toContainText("Successfully")

}) 

test('page fixture in playwright',  async function({page}){
    await page.goto("");
    await page.locator("input#username").fill("student");
    await page.locator("input#password").fill("Password123");
    await page.locator("button#submit").click()
    await expect(page.locator('.post-title')).toContainText("Successfully")

}) 