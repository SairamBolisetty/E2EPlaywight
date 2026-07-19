const BasePage = require('./BasePage');
class DatePickerPage extends BasePage{
    constructor(page){
        super(page);
        this.datePickerBtn = page.locator("//span[text()='Date Picker']");
        this.datePicker = page.locator("//input[@id='datePickerMonthYearInput']");
        this.year = page.locator("(//div[@class='react-datepicker__month-container']//select)[2]")
        this.month = page.locator("(//div[@class='react-datepicker__month-container']//select)[1]")
        this.date = page.locator('//div[@role="rowgroup"][2]//div//div');

        this.dateAndTimePicker = page.locator("#dateAndTimePickerInput")


    }
}
module.exports = DatePickerPage;