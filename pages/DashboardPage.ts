import { Page , Locator} from "playwright";

export class DashboardPage{

    private page :Page
    private products : Locator
    addToCartSuccessMessage : Locator

    constructor(page: Page) {
        this.page = page
        this.products = this.page.locator("div.card-body")
        this.addToCartSuccessMessage = this.page.locator("#toast-container")
    }

    async searchProductAndAddToCart(productName :string){
        await this.products.first().waitFor()
        const productCount = await this.products.count() 
        for(let i=0; i<productCount; i++){
            const productText = await this.products.nth(i).locator("b").textContent() 
            if(productText === productName){
                await this.products.nth(i).locator("button").last().click()
                break
            }
        }
    }
}