const BasePage = require("./BasePage");
class WebTablesPage extends BasePage {
    constructor(page) {
        super(page);
        this.webTablesButton = page.getByText('Web Tables');
        this.addButton = page.getByRole('button', {name: 'Add'});
        this.firstNameInput = page.getByPlaceholder('First Name');
        this.lastNameInput = page.getByPlaceholder('Last Name');
        this.emailInput = page.getByPlaceholder('name@example.com');
        this.ageInput = page.getByPlaceholder('Age');
        this.salaryInput = page.getByPlaceholder('Salary');
        this.departmentInput = page.getByPlaceholder('Department');
        this.submitButton = page.getByRole('button', {name: 'Submit'});
        this.searchBox = page.getByPlaceholder('Type to search');
        this.searchIcon = page.locator("//input[@placeholder='Type to search']//following::button[1]");
        this.searchResultName = page.locator("//tr/td[1]")
        this.editIcon = page.locator('tr').filter({ hasText: '12000' }).locator('[title="Edit"]');
        this.salary = page.locator('//tr/td[5]');
        this.empName = page.locator('//tr/td[1]');
    }
}
module.exports = WebTablesPage;