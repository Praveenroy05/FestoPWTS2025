import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { DashboardPage } from '../pages/DashboardPage'

import datas from '../Test Data/multiple.json'

let loginPage :LoginPage
let dashboardPage :DashboardPage

for(let data of datas) {
    test.beforeEach(async ({page})=>{
        loginPage = new LoginPage(page)
        dashboardPage = new DashboardPage(page)
    })

    test(`Validate Product added to cart for ${data.productName}`, async ()=>{
        await loginPage.launchURL(data.url)
        await loginPage.validLogin(data.username, data.password)
        await expect(loginPage.homePageIdentifier).toBeVisible()
        await dashboardPage.searchProductAndAddToCart(data.productName)
        await expect(dashboardPage.addToCartSuccessMessage).toContainText(data.successMsg)
    })
}

/*
const array = [
    {
        "url" : "https://rahulshettyacademy.com/client",
        "username" : "test7lYM@gmail.com",
        "password" : "Test@123",
        "productName" : "ZARA COAT 3",
        "successMsg" : "Product Added To Cart"
    },

    {
        "url" : "https://rahulshettyacademy.com/client",
        "username" : "test7lYM@gmail.com",
        "password" : "Test@123",
        "productName" : "ADIDAS ORIGINAL",
        "successMsg" : "Product Added To Cart"
    },

    {
        "url" : "https://rahulshettyacademy.com/client",
        "username" : "testnHNk@gmail.com",
        "password" : "Testing@1234",
        "productName" : "IPHONE 13 PRO",
        "successMsg" : "Product Added To Cart"
    }
]
for(const ele of array){
    console.log(ele.productName);
}
    */




