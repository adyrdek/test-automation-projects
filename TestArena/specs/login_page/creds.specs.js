"use strict"

const LoginPage = require("../../pages/test_arena/login.pageObject")
const DataGenerator = require("../../utils/faker")

describe("Credentials test", () => {
    var loginPage = new LoginPage();
    var data = new DataGenerator();

    beforeAll( () => {
        browser.ignoreSynchronization = true
    })

    beforeEach( () => {
        loginPage.goTo();
    })

    afterAll( () => {
        browser.ignoreSynchronization = false
    })
        
    it("Should not be able to login with invalid email", async () => {
        await loginPage.logUser(data.randomEmail, loginPage.userPassword)
        await expect($(".login_form_error").getText()).toEqual("Adres e-mail i/lub hasło są niepoprawne.")
    })
           
    it("Should not be able to login with invalid password", async () => {
        await loginPage.logUser(loginPage.userLogin, data.randomPassword)
        await expect($(".login_form_error").getText()).toEqual("Adres e-mail i/lub hasło są niepoprawne.")
    })

    it("Should inform about wrong email format", async () => {
        await loginPage.logUser(data.randomString, loginPage.userPassword)

        //When there is no captcha
        //await expect(element(by.xpath("//*[@class='front-log']/div[2]/span/div")).getText()).toEqual("Nieprawidłowy format adresu e-mail. Wprowadź adres ponownie.")

        //When there is captcha
        await expect(element(by.xpath("//*[@class='front-log topmax']/div[2]/span/div")).getText()).toEqual("Nieprawidłowy format adresu e-mail. Wprowadź adres ponownie.")
    })
})