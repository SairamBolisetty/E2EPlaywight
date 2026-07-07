const BasePage = require ('./BasePage');
class AlertsPage extends BasePage{
    constructor(page){
        super(page);
        this.AlertsButton = page.locator("//span[text()='Alerts']");
        this.alert = page.locator('//button[@id="alertButton"]');
        this.alertAfter5Sec = page.locator('//button[@id="timerAlertButton"]');
        this.confirmButton = page.locator('//button[@id="confirmButton"]');
        this.confirmedMessage = page.locator("//span[@id='confirmResult']");
        this.promptButton = page.locator("//button[@id='promtButton']");
        this.promptMessage = page.locator("//span[@id='promptResult']")
    }
}
module.exports = AlertsPage;

