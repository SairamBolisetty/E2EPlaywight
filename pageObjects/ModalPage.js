const BasePage = require('./BasePage');
class ModalPage extends BasePage {
    constructor(page){
        super(page);
        this.modalDilougeButton = page.locator("//span[text()='Modal Dialogs']");
        this.smallModalButton = page.locator("#showSmallModal");
        this.smallModalDialogueTitle = page.locator("//div[text()='Small Modal']");
        this.smallModalText = page.locator(".modal-body");
        this.smallModalClose = page.locator("#closeSmallModal")


    }
}
module.exports = ModalPage;