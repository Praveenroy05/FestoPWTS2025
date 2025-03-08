import {test, expect} from '@playwright/test'

test('Shadow dom handling', async({page})=>{
    await page.goto("https://books-pwakit.appspot.com/")
    await page.locator("#input").fill("Testing")
    await page.locator(".icon").click()
    await expect(page.locator(".books li").first()).toBeVisible()
    await page.waitForTimeout(2000)
})