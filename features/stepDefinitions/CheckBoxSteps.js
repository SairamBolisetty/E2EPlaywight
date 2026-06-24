const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const CheckBoxPage = require('../../pageObjects/CheckBoxPage');

When('User performs actions on Check Box', async function () {
    const checkBoxPage = new CheckBoxPage(this.page);
    await checkBoxPage.checkBox.click();
    await checkBoxPage.homePlusIcon.click();
    await checkBoxPage.desktopPlusIcon.click();
    await checkBoxPage.notesCheckBox.check();
    await checkBoxPage.documentsPlusIcon.click();
    await checkBoxPage.officePlusIcon.click();
    await checkBoxPage.generalCheckBox.check();
    await checkBoxPage.downloadsPlusIcon.click();
    await checkBoxPage.excelFileCheckBox.check();
    await expect(checkBoxPage.results).toContainText('notesgeneralexcelFile');
    const resultsText = await checkBoxPage.results.textContent();
    console.log(resultsText);
    const selectedOptions = resultsText.split(':');
    console.log(selectedOptions);

    console.log(selectedOptions[1]);

});