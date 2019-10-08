"use strict"

const LoginPage = require("../../pages/test_arena/login.pageObject")

describe("Happy Path tests", () => {
    var loginPage = new LoginPage();

    beforeAll( () => {
        browser.ignoreSynchronization = true
    })

    beforeEach( () => {
        loginPage.goTo();
    })

    afterAll( () => {
        browser.ignoreSynchronization = false
    })
        
    it("User should be able to log in successfuly with valid creds", async () => {
        await loginPage.logUserSuccessfuly()
        await expect(loginPage.arenaLogo.isDisplayed()).toBe(true)
      })
    
    it("User should be able to log out successfuly", async () => {
        await loginPage.logOut();
    })
})