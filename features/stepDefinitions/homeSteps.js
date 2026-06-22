const { Given, When, Then } = require('@cucumber/cucumber');
const HomePage = require('../../pageObjects/HomePage');

Given('User is on the Elements page', async function () {
    const homePage = new HomePage(this.page);
    await homePage.elements.click();
});