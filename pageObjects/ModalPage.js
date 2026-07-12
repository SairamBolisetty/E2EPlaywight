const BasePage = require('./BasePage');
class ModalPage extends BasePage {
    constructor(page){
        super(page);
        this.modalDilougeButton = page.locator("//span[text()='Modal Dialogs']");
        this.smallModalButton = page.locator("#showSmallModal");
        this.smallModalDialogueTitle = page.locator("//div[text()='Small Modal']");
        this.smallModalText = page.locator(".modal-body");
        this.smallModalClose = page.locator("#closeSmallModal")

        this.largeModalButton = page.locator("#showLargeModal");
        this.LargeModalTitle = page.locator("//div[text()='Large Modal']");
        this.largeModalText = page.locator(".modal-body");
        this.largeModalClose = page.locator("#closeLargeModal");


    }
}
module.exports = ModalPage;