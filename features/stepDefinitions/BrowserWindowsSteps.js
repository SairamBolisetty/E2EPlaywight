const { Given} = require('@cucumber/cucumber');
const {expect} = require('@playwright/test');
const BrowserWindowPage = require('../../pageObjects/BrowserWindowPage');

Given('User perform actions on Windows page', async function(){

    const browserWindowPage = new BrowserWindowPage(this.page);
    await browserWindowPage.afwbutton.click();
    await browserWindowPage.browserWindows.click();

    const [newTab] = await Promise.all([   
            this.page.waitForEvent('popup'),
            browserWindowPage.newTabButton.click()
        ]);
    
        this.newTab = newTab;
        await this.newTab.waitForLoadState('load');
        const newBrowserWindowPage = new BrowserWindowPage(this.newTab);
        const Text = await newBrowserWindowPage.newWindowText.textContent();
        console.log(Text)
})