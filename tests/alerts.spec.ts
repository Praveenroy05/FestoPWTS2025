import {test, expect} from '@playwright/test'


test('Handling alerts', async ({page})=>{
    await page.goto('https://demoqa.com/alerts')
    const text = "Testing"

    page.on('dialog', dialog =>{
        console.log(dialog.message());
        dialog.accept(text)
    })
    await page.locator('#promtButton').click()
    await expect(page.locator('#promptResult')).toContainText(`You entered ${text}`)
})
