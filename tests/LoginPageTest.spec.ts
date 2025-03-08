import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'


const url : string = "https://rahulshettyacademy.com/client"
const username: string = "test7lYM@gmail.com"
const password: string = "Test@123"
const incorrectPassword: string = "Testing"
const errorMessage:string = "Incorrect email or password"


//1. create an object for a page layer - page classes
//2. Launch the url
//3. Enter the username
//4. Enter the password
//5. Click on the login button
//6. Verify the login is successful

// const variable = new ClassName(parameter)

let loginPage : LoginPage

test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page) 
    await loginPage.launchURL(url)
})

test("Valid Login scenario", async ()=>{
    await loginPage.validLogin(username, password)
    await expect(loginPage.homePageIdentifier).toBeVisible()    
})

test("Invalid Login scenario", async ()=>{
    await loginPage.invalidLogin(username, incorrectPassword)
    await expect(loginPage.errorMessage).toContainText(errorMessage)
})
