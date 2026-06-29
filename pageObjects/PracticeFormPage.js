const BasePage = require("./BasePage")
class PracticeFormPage extends BasePage {
    constructor(page){
        super(page);
        this.forms = page.locator("//h5[text()='Forms']");

        this.practiceForm = page.locator("//span[text()='Practice Form']");

    }
    
}
module.exports = PracticeFormPage;