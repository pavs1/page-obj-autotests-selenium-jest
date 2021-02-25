const { Builder} = require('selenium-webdriver')
import {PageFactory} from '../utils/pageFactory'

export let driver;
describe("Forbes test", () => {
    beforeAll(async () => {
        driver = await new Builder().forBrowser('chrome').build()
    })

    afterAll(async () => driver.quit())

    it("click on new", async () => {
        await PageFactory.getPage("Home").open();
        await PageFactory.getPage('Home').Header.btnNew.click()
        const sectionTitleText = await PageFactory.getPage('New').MainBody.sectionTitle.getText()
        expect(sectionTitleText).toBe('Новое');
    });
    it("Count of nav list items should be 23", async () => {
        // const listItems = await driver.findElements(By.css('.nav-list .nav-list__item'))
        const listItems = await PageFactory.getPage('New').Header.navigationButtons.getCount()
        expect(listItems).toBe(23)
    })


})