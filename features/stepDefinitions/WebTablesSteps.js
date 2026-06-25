const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const WebTablesPage = require('../../pageObjects/WebTablesPage');

Then('User performs actions on Web Tables', async function(){
    const webTablesPage = new WebTablesPage(this.page);

    await webTablesPage.webTablesButton.click();
    await webTablesPage.addButton.click();
    await webTablesPage.firstNameInput.fill('Dhanush');
    await webTablesPage.lastNameInput.fill('B');
    await webTablesPage.emailInput.fill('sai@gmail.com');
    await webTablesPage.ageInput.fill('25');
    await webTablesPage.salaryInput.fill('50000');
    await webTablesPage.departmentInput.fill('IT');
    await webTablesPage.submitButton.click();
    await webTablesPage.searchBox.fill('Dhanush');
    console.log(await webTablesPage.searchResultName.textContent());
    expect(await webTablesPage.searchResultName.textContent()).toBe('Dhanush');
    await this.page.waitForTimeout(2000);
    await webTablesPage.searchBox.clear();
    await webTablesPage.editIcon.click();
    await webTablesPage.salaryInput.clear();
    await webTablesPage.salaryInput.fill('25000');
    await webTablesPage.submitButton.click();
    
    // const salaryText = await webTablesPage.salary.textContent();
    // console.log(salaryText);
    const totalSalaryCount = await webTablesPage.salary.count();
    console.log(totalSalaryCount);
    
    
    for(let i=0; i<totalSalaryCount; i++){
        const salaryText = await webTablesPage.salary.nth(i).textContent();
        //console.log(salaryText);

        if(salaryText > 15000){
            const L1Employee = await webTablesPage.empName.nth(i).textContent();
            console.log(`L1Employee Name: ${L1Employee}, Salary: ${salaryText}`);
        }
        else{
            const L2Employee = await webTablesPage.empName.nth(i).textContent();
            console.log(`L2Employee Name: ${L2Employee}, Salary: ${salaryText}`);
        }
    }

})