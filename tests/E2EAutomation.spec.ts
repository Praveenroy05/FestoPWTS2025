import {test, expect, Locator} from '@playwright/test'

let productName: string = "ADIDAS ORIGINAL"
let username: string = "test7lYM@gmail.com"
let country :string  = " Singapore"

test('E2E automation scenario', async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/client")
    await page.getByPlaceholder('email@example.com').fill(username)
    await expect(page.getByPlaceholder('email@example.com')).toHaveValue("test7lYM@gmail.com")
    await page.getByPlaceholder('enter your passsword').fill("Test@123")
    await expect(page.getByPlaceholder('enter your passsword')).toHaveValue("Test@123")
    await page.getByRole('button', {name:'Login', exact :true}).click()
    await expect(page.locator("button[routerlink='/dashboard/']")).toBeVisible()

    const products = page.locator("div.card-body") // div.card-body b
    await products.first().waitFor()
    const count = await products.count() // 3
    for(let i=0; i<count; i++){
        const productText = await products.nth(i).locator("b").textContent() // 
        if(productText === productName){
            await products.nth(i).locator("button").last().click()
            break
        }
    }
    await expect(page.locator("#toast-container")).toContainText("Product Added To Cart")
    await page.locator("[routerLink='/dashboard/cart']").click()
    await page.getByText('Checkout').click()
    await expect(page.locator(".user__name label")).toHaveText(username)
    await page.getByPlaceholder("Select Country").pressSequentially("in")
    await page.locator("section.ta-results").waitFor()
    const dropDownValues = await page.locator("section.ta-results button")
    const countryCount = await dropDownValues.count()

    for(let i=0; i<countryCount; i++){
        const countryText = await dropDownValues.nth(i).textContent() // 
        if(countryText === country){
            await dropDownValues.nth(i).click()
            break
        }
    }
    await page.getByText("Place Order ").click()
    await expect(page.locator('.hero-primary')).toBeVisible()
    const orderID: string|null = await page.locator(".em-spacer-1 label").last().textContent()
    console.log(orderID)
    await page.locator("[routerLink='/dashboard/myorders']").first().click()
    await expect(page.locator("table")).toBeVisible()
    const rows = await page.locator("tbody tr")
    const rowcount = await rows.count()
    let orderIDText
    for(let i=0; i<rowcount; i++){
        orderIDText = await rows.nth(i).locator('th').textContent()
        if(orderID.includes(orderIDText)){
            await rows.locator("td button").first().click()
            break
        }
    }

        await expect(page.locator("div.col-text")).toHaveText(orderIDText)

})