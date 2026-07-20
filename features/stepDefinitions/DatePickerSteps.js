const { Given, When, Then }= require('@cucumber/cucumber');
const DatePickerPage = require('../../pageObjects/DatePickerPage');
const {expect} = require('@playwright/test')

Then('User Performs actions on Date Pickers', async function(){
    const datePickerPage = new DatePickerPage(this.page);
    await datePickerPage.datePickerBtn.click();
    await datePickerPage.datePicker.click();
    await expect(datePickerPage.year).toBeVisible();
    await datePickerPage.year.selectOption('2029')
    await datePickerPage.month.selectOption('June')
    const day = 1
    const dateSelector= datePickerPage.date.filter({hasText: new RegExp(`^${day}$`)})

    if (day < 7){
        await dateSelector.first().click();
    }
    else{
        await dateSelector.last().click();
    }

    await datePickerPage.dateAndTimePicker.click();
})