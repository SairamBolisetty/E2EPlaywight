const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const ModalPage = require('../../pageObjects/ModalPage');

Then('User Performs Action on Modal Dialogs', async function(){
const modalPage = new ModalPage(this.page);

await modalPage.modalDilougeButton.click();
await modalPage.smallModalButton.click();
await expect(modalPage.smallModalDialogueTitle).toHaveText('Small Modal');
const smallModalTitle= await modalPage.smallModalDialogueTitle.textContent();
console.log(`Small Modal Title: ${smallModalTitle}`);
const smallModalText= await modalPage.smallModalText.textContent();
console.log(`Small Modal Text: ${smallModalText}`);
await modalPage.smallModalClose.click();
})
