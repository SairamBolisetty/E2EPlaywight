const BasePage = require('./BasePage');

class HomePage extends BasePage {
    constructor(page) {
        super(page);
        this.elements = page.locator("//*[text()='Elements']");

    }
}
module.exports = HomePage;
