"use strict"

const PageBase = require("../page-base.pageObject")

class LoginPage extends PageBase {
    constructor(
        pageUrl = "http://demo.testarena.pl/zaloguj"
    ) {
        super(pageUrl)

        //User credentials
        this.userLogin = "administrator@testarena.pl"
        this.userPassword = "sumXQQ72$L" //<- this would normally be put into script as parameter for more secure approach (especially if working directly on production)

        //Locators for Login Page
        this.emailField = $("#email")
        this.passwordField = $("#password")
        this.loginButton = $("#login")
        this.arenaLogo = $("#header_logo")
        this.logoutButton = $("[title='Wyloguj']")
    }

    //Methods for Login Page
    async logUser(username, password) {
        await this.sendToElement(this.emailField, username)
        await this.sendToElement(this.passwordField, password)
        await this.clickElement(this.loginButton)
    }

    async logUserSuccessfuly() {
        await this.logUser(this.userLogin, this.userPassword)
        await this.waitForElementToBeVisible(this.arenaLogo)
    }

    async logOut() {
        await this.clickElement(this.logoutButton)
    }
}

module.exports = LoginPage;