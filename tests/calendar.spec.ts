import {test, expect} from '@playwright/test'

test('Calendar handling', async function({page}){
    await page.goto("https://www.hyrtutorials.com/p/calendar-practice.html")

    const year = "2027"
    const month = "May"
    const date = "25"
    await page.locator(".ui-datepicker-trigger").click()    
    const monthPicker = page.locator('.ui-datepicker-month')
    const yearPicker = page.locator('.ui-datepicker-year')

    while((await monthPicker.textContent() !== month) || (await yearPicker.textContent()!== year)){
        await page.getByText('Next').click()
    }
    //await page.locator(`td[data-handler='selectDay'] a:has-text(${date})`).first().click()
    await page.getByRole('cell', {name : `${date}`, exact: true}).click({force:true})
    await page.waitForTimeout(3000)



})