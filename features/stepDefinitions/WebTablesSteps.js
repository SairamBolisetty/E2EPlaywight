const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const WebTablesPage = require('../../pageObjects/WebTablesPage');

Then('User performs actions on Web Tables', async function(){
    const webTablesPage = new WebTablesPage(this.page);

    await webTablesPage.webTablesButton.click();

})