// 2 Types of dropd down

// 1. static drop down 
// 2. dynamic drop down 


/*
1. <select> 
-> Launch the url
-> identify the element 
-> selectOption(value/textorlabel/index)


2. non- select tag <div>, <span> <ul> <li>
-> Launch the url
-> identify the element 
-> click on the drop down element
-> Click on the option that we are trying to select

*/

import {test, expect} from '@playwright/test'

test('Drop down developed using select tag', async ({page})=>{
    await page.goto('https://demoqa.com/select-menu')
    //selectOption() - use to select the value from the drop down
    await page.locator('#oldSelectMenu').selectOption({value:'4'})
    await page.waitForTimeout(2000)
    await page.locator('#oldSelectMenu').selectOption({label : 'Indigo'})
    await page.waitForTimeout(2000)
    await page.locator('#oldSelectMenu').selectOption({index : 6})
    await page.waitForTimeout(2000)

    await page.locator("#cars").selectOption(['volvo', 'Opel', 'Audi'])
    await page.waitForTimeout(2000)
})


test('Drop down developed using non select tag', async ({page})=>{
    await page.goto('https://demoqa.com/select-menu')
    await page.locator("#withOptGroup").click()
    await page.locator("#react-select-2-option-1-1").click()
    await page.waitForTimeout(2000)
    await page.locator("div.css-1hwfws3").last().click()
    await page.locator('#react-select-4-option-1').click()
    await page.locator("#react-select-4-option-3").click()
    await page.waitForTimeout(2000)
})

