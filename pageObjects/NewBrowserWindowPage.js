const BasePage = require("./BasePage");
class NewBrowserWindowPage extends BasePage{
    constructor(page, page2){
        super(page, page2);

        this.newWindowText = this.page2.locator("//h1[text()='This is a sample page']")

    }
}
module.exports= NewBrowserWindowPage;