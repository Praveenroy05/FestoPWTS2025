import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { DashboardPage } from '../pages/DashboardPage'
import { CartPage } from '../pages/CartPage'

const url : string = "https://rahulshettyacademy.com/client"
const username: string = "test7lYM@gmail.com"
const password: string = "Test@123"
let productName: string = "ZARA COAT 3"
const successMsg: string= "Product Added To Cart"
let loginPage :LoginPage
let dashboardPage :DashboardPage
let cartPage :CartPage

test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page)
    dashboardPage = new DashboardPage(page)
    cartPage = new CartPage(page)
    await loginPage.launchURL(url)
    await loginPage.validLogin(username, password)
})

test('E2E product order validation', async ()=>{
    await expect(loginPage.homePageIdentifier).toBeVisible()
    await dashboardPage.searchProductAndAddToCart(productName)
    await expect(dashboardPage.addToCartSuccessMessage).toContainText(successMsg)
    await cartPage.gotoCartPageAndClickOnCheckout()
})
