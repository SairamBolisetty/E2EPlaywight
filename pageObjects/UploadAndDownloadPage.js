const BasePage = require("./BasePage");

class UploadAndDownloadPage extends BasePage {
    constructor(page) {
        super(page);
        this.uploadAndDownload = page.locator("//span[text()='Upload and Download']");
        this.uploadFile = page.locator("//input[@Id='uploadFile']");

        this.uploadedFilePath = page.locator('//p[@id="uploadedFilePath"]');
        this.fileDownload = page.locator('//a[@id="downloadButton"]');
        this.dynamicElements = page.locator("//span[text()='Dynamic Properties']");
        this.visibleAfter = page.locator("//button[@id='visibleAfter']");

        

}
}
module.exports = UploadAndDownloadPage;