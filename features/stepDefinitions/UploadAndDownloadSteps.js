const { Given, When, Then } = require('@cucumber/cucumber');

const UploadAndDownloadPage = require('../../pageObjects/UploadAndDownloadPage');

Then('User performs actions on Upload and Download', async function () {
    const uploadAndDownloadPage = new UploadAndDownloadPage(this.page);
    await uploadAndDownloadPage.uploadAndDownload.click();
    //await uploadAndDownloadPage.uploadFile.click();
    const filePath = "C:/Users/bdhan/Downloads/demo.txt";
    
    await uploadAndDownloadPage.uploadFile.setInputFiles(filePath);

    console.log(await uploadAndDownloadPage.uploadedFilePath.textContent());

    await uploadAndDownloadPage.fileDownload.click();
})
