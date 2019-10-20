const PageBase = require("./page-base.pageObject")

class PageHeader extends PageBase {
    constructor(
        pageUrl = "http://automationpractice.com/index.php"
    ) {
        super(pageUrl)

        //Specific locators for PageHeader
        this.signInButton = $(".login")
        this.searchBox = $("#search_query_top")
    }

    //Methods of PageHeader
    
    /*@def Method to search for products with use of "Search" box
     *@product: string - Enter product name to look for ex. Dress, T-Shirt etc
    */
    async searchProduct(product) {
        await this.typeAndEnter(this.searchBox, product)
        await browser.wait(ExpectedConditions.textToBePresentInElement($(".lighter"), product.toUpperCase()), 5000)
    }
}

module.exports = PageHeader;