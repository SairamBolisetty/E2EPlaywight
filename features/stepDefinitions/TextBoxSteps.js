const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const TextBoxPage = require('../../pageObjects/TextBoxPage');

Given('User performs actions on Text Box', async function () {
    const textBoxPage = new TextBoxPage(this.page);
    await textBoxPage.elements.click();
    await textBoxPage.textBox.click();
    await textBoxPage.fullNameInput.fill('John');
    await textBoxPage.emailInput.fill('sai@gmail.com');
    await textBoxPage.currentAddressInput.fill('123 Main St');
    await textBoxPage.permanentAddressInput.fill('456 St');
    await textBoxPage.submitButton.click();
    //await expect(textBoxPage.outputName).
    //await expect(textBoxPage.outputName).toHaveText('Name:John');
    //await expect(textBoxPage.outputName).toHaveText(/John/);
    await expect(textBoxPage.outputName).toContainText('John');

    await expect(textBoxPage.outputEmail).toBeVisible();
    
    console.log(await textBoxPage.outputName.textContent());
    console.log(await textBoxPage.outputEmail.textContent());
});