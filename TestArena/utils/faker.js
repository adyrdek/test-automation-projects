const faker = require("faker")

class DataGenerator {

    get randomEmail() {
        return faker.internet.email()
    }

    get randomPassword() {
        return faker.internet.password()
    }

    get randomString() {
        return faker.lorem.word()
    }
}

module.exports = DataGenerator;