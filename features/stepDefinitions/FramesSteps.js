const {Given, When, Then} = require('@cucumber/cucumber');
const FramesPage = require('../../pageObjects/FramesPage')
const { expect } = require('@playwright/test');

Then('User navigates to Frames Page', async function(){
    const framesPage = new FramesPage(this.page);
    await framesPage.framesButton.click();
    const pageHeading = await framesPage.heading.textContent();
    console.log(`Page Heading is : ${pageHeading}`);
    const frame1Text=  await framesPage.frame1Text.textContent();
    console.log(`Frame1 Text is : ${frame1Text}`)
})
