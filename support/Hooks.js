const {Before, After, BeforeStep, AfterStep} = require('@cucumber/cucumber');

Before(async function () {
    await this.launchBrowser();
    await this.navigateTo();
});

BeforeStep(async function () {
    console.log("Before Step");
});

AfterStep(async function () {
    console.log("After Step");
});

// After(async function () {
//     await this.closeBrowser();
// });