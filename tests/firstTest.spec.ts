import {test, expect} from '@playwright/test'

test('First Test Case', {tag: '@regression'}, async function({page}){
    // launch the url
    // fill the username
    // fill the password
    // click on login button

    // Typescript is asynchronous PL

    await page.goto("");
    await page.locator("input#username").fill("student");
    await page.locator("input#password").fill("Password123");
    await page.locator("button#submit").click()
    await expect(page.locator('.post-title')).toContainText("Successfully")

}) 

test('@smoke @regression First Test Case1', async function({page}){
    // launch the url
    // fill the username
    // fill the password
    // click on login button

    // Typescript is asynchronous PL

    await page.goto("https://practicetestautomation.com/practice-test-login/");
    await page.locator("input#username").fill("student");
    await page.locator("input#password").fill("Password123");
    await page.locator("button#submit").click()
    await expect(page.locator('.post-title')).toContainText("Successfully")

}) 

test('First Test Case2', {tag: ['@smoke', '@regression']}, async function({page}){
    // launch the url
    // fill the username
    // fill the password
    // click on login button

    // Typescript is asynchronous PL

    await page.goto("");
    await expect(page.getByText('Test case 1: Positive LogIn test', {exact:true})).toBeVisible()
    await page.locator("input#username").fill("student");
    await page.locator("input#password").fill("Password123");
   // await page.locator("button#submit").click()
    await page.getByRole('button', {name : 'Submit', exact :true}).click()


    await expect(page.locator('.post-title')).toContainText("Successfully")
    await console.log("Testing is completed")
   // page.getByLabel()

}) 

test('Get By Locators', {tag: ['@smoke', '@regression']},async ({page})=>{

    await page.goto("https://demoqa.com/automation-practice-form")
    await page.getByPlaceholder("First Name").fill("Test")
    await page.waitForTimeout(3000)

})

test('Get By Locators1', async ({browser})=>{
    const context = await browser.newContext() // 
    const page = await context.newPage()

    await page.goto("https://demoqa.com/automation-practice-form")
    await page.getByPlaceholder("First Name").fill("Test")
    await page.waitForTimeout(3000)

})
