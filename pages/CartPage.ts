import { Locator, Page } from "playwright"

export class CartPage{

    private page: Page
    private cartBtn : Locator
    private checkoutBtn : Locator

    constructor(page:Page){
        this.page = page
        this.cartBtn = this.page.locator("[routerLink='/dashboard/cart']")
        this.checkoutBtn = this.page.getByText('Checkout')
    }

    async gotoCartPageAndClickOnCheckout(){
        await this.cartBtn.click()
        await this.checkoutBtn.click()
    }
}