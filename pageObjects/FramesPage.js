const BasePage = require('./BasePage');
class FramesPage extends BasePage{
    constructor(page){
        super(page)
        this.framesButton = page.locator("//span[text()='Frames']");
        this.heading = page.locator("//h1[@class='text-center']");
        this.frame1 = this.page.frameLocator("//iframe[@id='frame1']");
        this.frame1Text = this.frame1.locator("//h1[@Id='sampleHeading']");

    }

}
module.exports= FramesPage;
