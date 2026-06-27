const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

const LinksPage = require('../../pageObjects/LinksPage');

Then('User Performs action on Links', async function () {
    const linksPage = new LinksPage(this.page);
    await linksPage.links.click();

    const [newPage] = await Promise.all([   
        this.page.waitForEvent('popup'),
        linksPage.homeLink.click(),
    ]);

    this.page2 = newPage;
    await this.page2.waitForLoadState('load');
    const pageTitle = await this.page2.title();
    expect(pageTitle).toBe('demosite');

    const newLinksPage = new LinksPage(this.page2);
    console.log(await newLinksPage.bookStore.textContent());
    await newLinksPage.bookStore.click();
});