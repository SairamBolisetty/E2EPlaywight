const BasePage = require('./BasePage');

class AutoCompletePage extends BasePage{
    constructor(page){
        super(page);
        this.widgetsButton = page.locator("//h5[text()='Widgets']");
        this.autoCompleteButton = page.locator("//span[text()='Auto Complete']");
        this.multipleColoursInput = page.locator("#autoCompleteMultiple input");
        this.singleColourInput = page.locator("#autoCompleteSingle input");

        this.multipleColours = page.locator("//div[contains(@aria-label, 'Remove')]//parent::div//child::div[1]");
        this.clearMultipleInput = page.locator("//div[contains(@aria-label, 'Remove')]");
        
    }
}
module.exports = AutoCompletePage