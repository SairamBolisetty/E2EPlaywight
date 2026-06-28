const { Given, When, Then } = require('@cucumber/cucumber');
const {expect} = require('@playwright/test')

const UploadAndDownloadPage = require('../../pageObjects/UploadAndDownloadPage');

Then('User performs actions on Upload and Download', async function () {
    const uploadAndDownloadPage = new UploadAndDownloadPage(this.page);
    await uploadAndDownloadPage.uploadAndDownload.click();
    //await uploadAndDownloadPage.uploadFile.click();
    const filePath = "C:/Users/bdhan/Downloads/demo.txt";
    
    await uploadAndDownloadPage.uploadFile.setInputFiles(filePath);

    console.log(await uploadAndDownloadPage.uploadedFilePath.textContent());

    await uploadAndDownloadPage.fileDownload.click();

    await uploadAndDownloadPage.dynamicElements.click();
    const elementVisible = await uploadAndDownloadPage.visibleAfter;
    await elementVisible.waitFor({state: 'visible', timeout: 7000})
    //await expect(uploadAndDownloadPage.visibleAfter).toBeVisible();
    console.log(await uploadAndDownloadPage.visibleAfter.textContent());
})
