const BasePage = require("./BasePage")
class PracticeFormPage extends BasePage {
    constructor(page){
        super(page);
        this.forms = page.locator("//h5[text()='Forms']");

        this.practiceForm = page.locator("//span[text()='Practice Form']");
        this.firstName = page.getByPlaceholder("First Name")
        this.lastName = page.getByPlaceholder("Last Name")
        this.email = page.locator("//label[text()='Email']//following::input[1]");
        this.gender = page.getByRole('radio', {name:'Male', exact :true});
        this.mobileNumber = page.getByPlaceholder("Mobile Number");
        this.dateOfBirth = page.locator('#dateOfBirthInput');
        this.subjects = page.locator("//label[text()='Subjects']//following::input[1]");
        this.computerScience = page.locator('(//input[@aria-autocomplete="list"])[1]//following::div[2]');
        this.sportsCheckbox = page.getByLabel('Sports');
        this.uploadPicture = page.locator('#uploadPicture');
        this.currentAddress = page.getByPlaceholder('Current Address');
        this.state = page.locator("//label[text()='State and City']/following::input[1]")
        //this.dd = page.locator("//div[contains(@id, 'react-select-3-option') and text()='NCR']")
        this.stateValue= page.getByRole('option', { name: 'Uttar Pradesh' });

        this.selectedState = page.locator("//label[text()='State and City']/following::input[1]/parent::div/parent::div");

        this.city = page.locator("//label[text()='State and City']/following::input[2]");
        this.cityValue = page.getByRole('option', { name: 'Agra' });
        this.selectedCity = page.locator("//label[text()='State and City']/following::input[2]/parent::div/parent::div");

        this.submitBtn = page.getByRole('button', {name:'Submit'});
        this.closeBtn = page.getByRole('button', {name:'Close'});



    }
    
}
module.exports = PracticeFormPage;