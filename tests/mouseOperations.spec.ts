// click  - click()
// double click
// right click
// mouse hover
// drag and drop


import {test, expect, Locator} from '@playwright/test'

test('Mouse Operations', async({page})=>{
    await page.goto("https://demo.guru99.com/test/simple_context_menu.html")
    await page.getByText('right click me').click({button : 'right'})
    await page.getByText('Edit').click()
    await page.waitForTimeout(2000)
    await page.getByText('Double-Click Me To See Alert').dblclick({force:true})
})

test('Hover over on an element', async({page})=>{
    await page.goto("https://www.spicejet.com/")
    await page.getByText("Add-ons", {exact:true}).hover()
    await page.waitForTimeout(2000)
    await expect(page.getByTestId('test-id-SpiceMax')).toBeVisible()
})

