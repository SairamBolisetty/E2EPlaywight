const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const NestedFramesPage = require('../../pageObjects/NestedFramesPage');

Then('User navigates to Nested Frames Page', async function(){
const nestedFramesPage = new NestedFramesPage(this.page);
await nestedFramesPage.nestedFramesButton.click();
const childFrameText = await nestedFramesPage.childFrameText.textContent();
console.log(`Child Frame Text is : ${childFrameText}`)


})