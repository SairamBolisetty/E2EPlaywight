const BasePage = require('./BasePage');

class CheckBoxPage extends BasePage {
    constructor(page) {
        super(page);
        this.checkBox = page.locator("//span[text()='Check Box']");
        this.homePlusIcon = page.locator("//span[@title='Home']//parent::div/span[2]");
        this.desktopPlusIcon = page.locator("//span[@title='Desktop']//parent::div/span[2]");
        this.notesCheckBox = page.getByLabel('Select Notes');

        this.documentsPlusIcon = page.locator("//span[@title='Documents']//parent::div/span[2]");
        this.officePlusIcon = page.locator("//span[@title='Office']//parent::div/span[2]");
        this.generalCheckBox = page.getByLabel('Select General');

        this.downloadsPlusIcon = page.locator("//span[@title='Downloads']//parent::div/span[2]");
        this.excelFileCheckBox = page.getByLabel('Select Excel File.doc');

        this.results = page.locator("//div[@id='result']");
        

    }
}
module.exports = CheckBoxPage;