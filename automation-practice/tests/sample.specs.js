//Test file to check if methods work


const PageHeader = require("../pages/page-header.pageObject")

describe("xxx", () => {
    page = new PageHeader();

    beforeAll( () => {
        browser.ignoreSynchronization = true;
    })
    
    it("xxx", async () => {
        await page.goTo();
        await page.searchProduct("Dress")
    })
})