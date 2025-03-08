import {test, expect, Locator} from '@playwright/test'


// 1. launch the url
// 2. identify the iframe - const frames = page.frameLocator()
// 3. identify the element that you are trying to perform the action on frames.locator()

test('Drag to drop', async({page})=>{

    await page.goto("https://jqueryui.com/droppable/")

    const framePage = page.frameLocator('iframe.demo-frame')
    await framePage.locator('div#draggable').waitFor({state:'visible', timeout: 50000})
    const dragElement :Locator = await framePage.locator('div#draggable')
    const dropPlace :Locator = await framePage.locator('div#droppable')
    await dragElement.dragTo(dropPlace)
    await page.getByText('Demos', {exact:true}).click()
    await expect(page.locator('.entry-title')).toBeVisible()
    

})


