const { setWorldConstructor, World } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const { setDefaultTimeout } = require('@cucumber/cucumber');

setDefaultTimeout(60 * 1000);

class CustomWorld extends World {
    constructor(options) {
        super(options);
        this.browser = null;
        this.context = null;
        this.page = null;
        this.page2 = null;
    }

    async launchBrowser() {
        this.browser = await chromium.launch({ headless: false });
        this.context = await this.browser.newContext();
        this.page = await this.context.newPage();
    
    }

    async navigateTo() {
        await this.page.goto('https://demoqa.com/');
    }

    async closeBrowser() {
        await this.browser.close();
    }
}

setWorldConstructor(CustomWorld);