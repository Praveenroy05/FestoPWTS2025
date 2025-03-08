// LoginPage - Locators and methods related to login page only

import { Locator, Page } from "playwright";

export class LoginPage{
// locators related to login page

private username : Locator
private page :Page
private password : Locator
private loginButton: Locator
homePageIdentifier : Locator
errorMessage : Locator

  constructor(page:Page) {
    this.page = page; // loginPage.page = page
    this.username = page.getByPlaceholder('email@example.com')
    this.password = this.page.getByPlaceholder('enter your passsword')
    this.loginButton = this.page.getByRole('button', {name:'Login', exact :true})
    this.homePageIdentifier = this.page.locator("button[routerlink='/dashboard/']")
    this.errorMessage = this.page.locator("#toast-container")
  }
  // methods related to login page

  async launchURL(url : string){
    await this.page.goto(url)
  }

  async enterUsername(username){
    await this.username.fill(username)
  }

  async enterPassword(password){
    await this.password.fill(password)
  }

  async clickOnLoginBtn(){
    await this.loginButton.click()
  }

  async validLogin(username:string, password:string){
    await this.enterUsername(username)
    await this.enterPassword(password)
    await this.clickOnLoginBtn()
  }

  async invalidLogin(username:string, incorrectPasssword:string){
    await this.username.fill(username)
    await this.password.fill(incorrectPasssword)
    await this.loginButton.click()
  }
}


// npx playwright test --grep '@smoke'
// npx playwright test --grep "(?=.*@smoke)(?=.*@regression)"
// npx playwright test --grep "@smoke^|@regression"
// npx playwright test --grep-invert '@smoke'
// npx playwright test
