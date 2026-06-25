const BasePage = require("./BasePage");
class WebTablesPage extends BasePage {
    constructor(page) {
        super(page);
        this.webTablesButton = page.getByText('Web Tables');

    }
}
module.exports = WebTablesPage;