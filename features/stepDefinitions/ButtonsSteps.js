const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const ButtonsPage = require('../../pageObjects/ButtonsPage');

Then('User performs actions on Buttons', async function (){
    const buttonsPage = new ButtonsPage(this.page);
    await buttonsPage.buttons.click();
    await buttonsPage.doubleClickButton.dblclick();
    await buttonsPage.rightClickButton.click({button: 'right'});
    
    await buttonsPage.clickmeButton.click();
})