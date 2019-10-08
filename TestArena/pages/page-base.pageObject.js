"use strict"

class PageBase {
    constructor(
        pageUrl
    ) {
        this.pageUrl = pageUrl
        this.waitTime = 10000
    }

    async goTo() {
        await browser.get(this.pageUrl)
    }

    async clickElement(selector) {
        await selector.click()
    }

    async sendToElement(selector, text) {
        await this.waitForElementToBeVisible(selector)
        await selector.sendKeys(text)
    }

    async waitForElementToBeVisible(selector) {
        await browser.wait(ExpectedConditions.visibilityOf(selector), this.waitTime)
    }
}

module.exports = PageBase;