const BasePage = require('./BasePage');
class NestedFramesPage extends BasePage{
    constructor(page){
        super(page);
        this.nestedFramesButton = page.locator("//span[text()='Nested Frames']");
        this.parentFrame = this.page.frameLocator("#frame1");
        this.childFrame = this.parentFrame.frameLocator("iframe[srcdoc*= 'Child Iframe']");
        this.childFrameText = this.childFrame.locator("p");

    }

}
module.exports = NestedFramesPage;