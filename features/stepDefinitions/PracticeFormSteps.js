const { Given, When, Then }= require('@cucumber/cucumber')
const {expect} = require('@playwright/test')
const PracticeFormPage = require("../../pageObjects/PracticeFormPage")

Given('User opens Practice Form', async function(){
const practiceFormPage = new PracticeFormPage(this.page);
await practiceFormPage.forms.click();
await practiceFormPage.practiceForm.click();

})

Then('User fills the Form', async function() {
    const practiceFormPage = new PracticeFormPage(this.page);
    await practiceFormPage.firstName.fill('Sai');
    await practiceFormPage.lastName.fill('Ram');
    await practiceFormPage.email.fill('sai@123.com');
    await practiceFormPage.gender.click();
    await practiceFormPage.mobileNumber.fill('9876543210');
    
    await practiceFormPage.dateOfBirth.fill('12 Jul 2001')
    await practiceFormPage.dateOfBirth.press('Enter');
    await practiceFormPage.subjects.fill('Computer Science');
    console.log(await practiceFormPage.computerScience.textContent());
    await practiceFormPage.computerScience.click();

    await practiceFormPage.sportsCheckbox.check();
    const filePath = "C:/Users/bdhan/Downloads/demo.txt"
    await practiceFormPage.uploadPicture.setInputFiles(filePath);

    await practiceFormPage.currentAddress.fill('NCR');
    await practiceFormPage.state.click();
    await practiceFormPage.stateValue.click();
    const state =await practiceFormPage.selectedState.textContent();
    const city = await practiceFormPage.selectedCity.textContent();
    console.log(`Selected State: ${state}, Selected City: ${city}`)
    
    await practiceFormPage.city.click();
    await practiceFormPage.cityValue.click();
    await practiceFormPage.submitBtn.click();
    console.log(await practiceFormPage.closeBtn.textContent());
    await practiceFormPage.closeBtn.click();
})