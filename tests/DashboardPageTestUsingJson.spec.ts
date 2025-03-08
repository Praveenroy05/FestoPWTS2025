import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { DashboardPage } from '../pages/DashboardPage'

import data from '../Test Data/product.json'
import { TestData } from '../Test Data/TestData'

let loginPage :LoginPage
let dashboardPage :DashboardPage
let testData : TestData


test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page)
    dashboardPage = new DashboardPage(page)
    testData = new TestData()
    await loginPage.launchURL(testData.url)
    await loginPage.validLogin(testData.username, testData.password)
})

test('Validate Product added to cart', async ()=>{
    await expect(loginPage.homePageIdentifier).toBeVisible()
    await dashboardPage.searchProductAndAddToCart(testData.productName)
    await expect(dashboardPage.addToCartSuccessMessage).toContainText(testData.successMsg)
})



