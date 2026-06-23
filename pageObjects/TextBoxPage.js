const BasePage = require('./BasePage');

class TextBoxPage extends BasePage {
    constructor(page) {
        super(page);
        this.elements = page.locator("//*[text()='Elements']");
        this.textBox = page.locator("//span[text()='Text Box']");
        this.fullNameInput = page.getByPlaceholder('Full Name');
        this.emailInput = page.locator("#userEmail");

        this.currentAddressInput = page.getByPlaceholder('Current Address');
        this.permanentAddressInput = page.locator('#permanentAddress');

        this.submitButton = page.locator('#submit');

        this.outputName = page.locator('#name');

        this.outputEmail = page.locator("//p[text()='sai@gmail.com']");
        

    }
}
module.exports = TextBoxPage;
