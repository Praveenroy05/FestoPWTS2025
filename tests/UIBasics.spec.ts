import {test, expect} from '@playwright/test'

test.describe.configure({mode: 'parallel', timeout: 120000})

test('@smoke Handling input field',  async function({page}){
    //goto("url") - launching the url on the browser
    await page.goto("https://rahulshettyacademy.com/client")
    await page.getByPlaceholder('email@example.com').fill("test7lYM@gmail.com")
    await expect(page.getByPlaceholder('email@example.com')).toHaveValue("test7lYM@gmail.com")
    await page.getByPlaceholder('enter your passsword').pressSequentially("Test@123")
    await expect(page.getByPlaceholder('enter your passsword')).toHaveValue("Test@123")
    await page.getByRole('button', {name:'Login', exact :true}).click()
    await expect(page.locator("button[routerlink='/dashboard/']")).toBeVisible()

}) 

test('Radio button and checkbox handling', {tag: '@smoke'},async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/angularpractice/")
    test.step("Checkbox", async ()=>{
        await expect(page.locator("#exampleCheck1")).not.toBeChecked()
        await page.getByText("Love IceCreams!").check()
        await expect(page.locator("#exampleCheck1")).toBeChecked()
    })
    test.step("Radio button", async ()=>{
        await page.getByLabel('Employed').check()
        await expect(page.getByLabel('Employed')).toBeChecked()
    })
})


test('@regression Get the text from an element', async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/client")
    await page.getByPlaceholder('email@example.com').fill("test7lYM@gmail.com", {timeout: 100000})
    await expect(page.getByPlaceholder('email@example.com')).toHaveValue("test7lYM@gmail.com")
    await page.getByPlaceholder('enter your passsword').pressSequentially("Test@123")
    await expect(page.getByPlaceholder('enter your passsword')).toHaveValue("Test@123")
    await page.getByRole('button', {name:'Login', exact :true}).click()
    await expect(page.locator("button[routerlink='/dashboard/']")).toBeVisible()
    // first() - Return the first mtching element
    // last() - return last matching element out of all the element
    // nth(index) - return the index based matching element. index starts from 0
    // textContent() - get the text from an element
    const productText : null |string = await page.locator("div.card-body b").nth(1).textContent()
    console.log(productText)

    await expect(page.locator("div.card-body b").nth(1)).toContainText("ADIDAS ORIGINAL")


    const productTexts : string[] = await page.locator("div.card-body b").allTextContents()
    console.log(productTexts)
})