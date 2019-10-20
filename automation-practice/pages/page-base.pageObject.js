const { browser } = require("protractor")

class PageBase {
    constructor(pageUrl) {
        this.pageUrl = pageUrl
        this.waitTime = 10000
    }

    /*@def Basic method to go to page url 
    */
    async goTo() {
        await browser.get(this.pageUrl)
    }

    /*@def Uses @waitAndType method to wait, enter and confirm search for string
     *@param textToSend -  text to be send into selected element
     *@param selector - element to send text to 
    */
    async typeAndEnter(selector, textToSend) {
        await this.waitAndType(selector, textToSend + protractor.Key.ENTER)
    }

    /*@def Uses @waitFor method and then clicks on selected element
     *@param selector - Element to be clicked
    */
    async waitAndClick(selector) {
        await this.waitFor(selector)
        await selector.click()
    }

    /*@def Uses @waitFor method and then types in desired string to selected element
     *@param textToSend -  text to be send into selected element 
    */
    async waitAndType(selector, textToSend) {
        await this.waitFor(selector)
        await selector.sendKeys(textToSend)
    }

    /*@def Wait for elements. Used in other methods to skip writing same method over and over again
     *@param selector - Element to wait for
    */
    async waitFor(selector) {
        await browser.wait(ExpectedConditions.visibilityOf(selector), this.waitTime)
    }
}

module.exports = PageBase;