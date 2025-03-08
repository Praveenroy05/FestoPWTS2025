import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { DashboardPage } from '../pages/DashboardPage'

const url : string = "https://rahulshettyacademy.com/client"
const username: string = "test7lYM@gmail.com"
const password: string = "Test@123"
let productName: string = "ZARA COAT 3"
const successMsg: string= "Product Added To Cart"
let loginPage :LoginPage
let dashboardPage :DashboardPage

test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page)
    dashboardPage = new DashboardPage(page)
    await loginPage.launchURL(url)
    await loginPage.validLogin(username, password)
})

test('Validate Product added to cart', async ()=>{
    await expect(loginPage.homePageIdentifier).toBeVisible()
    await dashboardPage.searchProductAndAddToCart(productName)
    await expect(dashboardPage.addToCartSuccessMessage).toContainText(successMsg)
})

