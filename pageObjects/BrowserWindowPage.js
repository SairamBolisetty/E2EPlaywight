const BasePage = require("./BasePage");
class BrowserWindowPage extends BasePage{
    constructor(page){
        super(page);
        this.afwbutton = this.page.locator("//h5[text()='Alerts, Frame & Windows']");
        this.browserWindows = this.page.locator("//span[text()='Browser Windows']");
        this.newTabButton = this.page.getByRole('Button', {name:'New Tab'})
        this.newWindowText = this.page.locator("//h1[text()='This is a sample page']")
    }
}
module.exports = BrowserWindowPage;