const BasePage = require('./BasePage');


class LinksPage extends BasePage{
    constructor(page) {
        super(page);
        this.links = page.locator("//span[text()='Links']");
        this.homeLink = page.locator("(//a[text()='Home'])[1]");
        this.bookStore = page.locator("//h5[text()='Book Store Application']");
    }
}
module.exports = LinksPage;