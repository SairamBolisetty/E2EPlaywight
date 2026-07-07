const {Given, When, Then } = require('@cucumber/cucumber')
const {expect} = require('@playwright/test')
const alertsPage = require('../../pageObjects/AlertsPage');
const AlertsPage = require('../../pageObjects/AlertsPage');

Then('User navigates to Alerts Page', async function(){
    const alertsPage = new AlertsPage(this.page);
    await alertsPage.AlertsButton.click();

    this.page.once('dialog', async dialog => {
        console.log('Dialog message:', dialog.message());
        await dialog.accept();  // or dialog.dismiss();
    });
    await alertsPage.alert.click();
    
    this.page.once('dialog', async dialog =>{
        const message = dialog.message()
        console.log('Dialog after 5 seconds: ',message);
        expect(message).toBe('This alert appeared after 5 seconds')
        await dialog.accept();
    })
    await alertsPage.alertAfter5Sec.click();
    await this.page.waitForTimeout(6000)


    this.page.once('dialog', async dialog =>{
        const message = dialog.message();
        console.log('Confirm Message: ', message);
        await dialog.accept();
    })
    await alertsPage.confirmButton.click();
    const confirmedMessage = await alertsPage.confirmedMessage.textContent();
    console.log(`Confirmed Message : ${confirmedMessage}`)

    this.page.once('dialog', async dialog =>{
        const message = dialog.message();
        console.log('Prompt Message : ', message);
        await dialog.accept('Dhanush');
    })
    await alertsPage.promptButton.click();
    const enteredName = await alertsPage.promptMessage.textContent();
    console.log(`Entered name is: ${enteredName}`)
   
 
 
})