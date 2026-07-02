const { Given, When, Then } = require('@cucumber/cucumber');
const {expect} = require('@playwright/test');
const BrowserWindowPage = require('../../pageObjects/BrowserWindowPage');
const NewBrowserWindowPage = require('../../pageObjects/NewBrowserWindowPage');

Given('User perform actions on New Tab page', async function(){

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
        const Text = await newBrowserWindowPage.newTabText.textContent();
        await expect(newBrowserWindowPage.newTabText).toHaveText('This is a sample page');
        console.log(`The text on the new Tab is : ${Text}`);
        await newTab.close();
})

When('User perform actions on New Window page', async function(){
    const browserWindowPage = new BrowserWindowPage(this.page);
    if( await browserWindowPage.newWindowButton.isVisible()){
       console.log('User is on Windows page') 

    }
    else{
    await browserWindowPage.afwbutton.click();
    await browserWindowPage.browserWindows.click();
    }

     const[newTab] = await Promise.all([
        this.context.waitForEvent('page'),
            browserWindowPage.newWindowButton.click()
        ]);
        this.page2 = newTab;
        await this.page2.waitForLoadState('domcontentloaded');
        console.log('New Window opened')
})

Then('User navigates to New Window Page and verify the text', async function(){
        const newBrowserWindowPage = new NewBrowserWindowPage(this.page,this.page2);
        
        const newWindowText = await newBrowserWindowPage.newWindowText.textContent();
        console.log(`The text on the new Window is : ${newWindowText}`);
        
})