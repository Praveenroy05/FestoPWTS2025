import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { DashboardPage } from '../pages/DashboardPage'

import { ExcelUtils } from '../Utils/ExcelUtils'

const path = "C:/Users/prave/OneDrive/Documents/Praveen-PW/PWTSFesto2025/Test Data/excel.xlsx"

//const datas = ExcelUtils.getDataFromExcel(path, "Login")

let datas 

    try{
    datas = ExcelUtils.getDataFromExcel(path, "Login")

    }catch(error){
        console.log("File not found")
    }

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




