const { Given, When, Then }= require('@cucumber/cucumber')
const {expect} = require('@playwright/test')
const PracticeFormPage = require("../../pageObjects/PracticeFormPage")

Given('User fills the Practice Form', async function(){
const practiceFormPage = new PracticeFormPage(this.page);
await practiceFormPage.forms.click();
await practiceFormPage.practiceForm.click();

})