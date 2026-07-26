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


//     const systemDate = new Date();
//     const month = systemDate.toLocaleString("en-US", { month: "long" });
//     const dayDate = systemDate.getDate();
//     const year = systemDate.getFullYear();
//     const time = systemDate.toLocaleString("en-US", {
//   hour: "numeric",
//   minute: "2-digit",
//   hour12: true
// });
// const formatted = `${month} ${dayDate}, ${year} ${time}`;
// console.log(formatted);

//next week

    const systemDate = new Date();
    const nextWeek = new Date(systemDate.getTime() + 7 * 24 * 60 * 60 * 1000);
    const month = nextWeek.toLocaleString("en-US", { month: "long" });
    const dayDate = nextWeek.getDate();
    const year = nextWeek.getFullYear();
    const time = nextWeek.toLocaleString("en-US", {
    hour: "numeric",
     minute: "2-digit",
     hour12: true
});
const formatted = `${month} ${dayDate}, ${year} ${time}`;


console.log(formatted);
    await datePickerPage.dateAndTimePicker.clear();
    await datePickerPage.dateAndTimePicker.fill(formatted);
    await datePickerPage.dateAndTimePicker.press('Enter');
    const dateAndTimeValue = await datePickerPage.dateAndTimePicker.inputValue();
    console.log(dateAndTimeValue);
    await expect(dateAndTimeValue).toEqual(formatted);


})