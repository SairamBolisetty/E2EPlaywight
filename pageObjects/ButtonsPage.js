const BasePage = require('./BasePage');

class ButtonsPage extends BasePage {
    constructor(page) {
        super(page);
        this.buttons = page.locator("//span[text()='Buttons']");
        this.doubleClickButton = page.locator("#doubleClickBtn");
        this.rightClickButton = page.locator("#rightClickBtn");
        this.clickmeButton = page.locator("//button[text()='Click Me']");


}
}
module.exports = ButtonsPage;