// launch the url - page.goto()
// identify the click button which is havig an attribute as target and click on the click button
// Handle the popup event - const newPage = page.waitForEvent('popup')
// wait for newPage to be returned - const page1 = await newPage
// page1 - new page
// page


import {test, expect} from '@playwright/test'

test('Child window handling', async ({page})=>{
    await page.goto("https://demo.automationtesting.in/Windows.html")
    
    await page.getByRole('button', {name:'click'}).click()
    
    const page1 = page.waitForEvent('popup')

    const newPage = await page1

    await newPage.getByText('Downloads').click()
    await expect(newPage.locator("#bindings")).toContainText("Clients and WebDriver")

    await page.getByText('Home').click()
    await expect(page.getByPlaceholder('Email id for Sign Up')).toBeVisible()

})

