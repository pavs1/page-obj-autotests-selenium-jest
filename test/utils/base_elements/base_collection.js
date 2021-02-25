import {driver} from '../../specs/index.test'
const {By} = require('selenium-webdriver')

export class Collection {
    constructor(elementName, selector) {
        this.collection = driver.findElements(By.css(selector));
        this.elementName = elementName;
    };
    async getCount() {
        const collectionCount = await this.collection;
        return collectionCount.length;
    };
    async getTexts() {
        const arrayOfCollectionTexts = await this.collection.getText();
        return arrayOfCollectionTexts;
    };
    async clickElementByText(textToClick) {
        const arrayOfElementTexts = await this.collection
        const text = await arrayOfElementTexts
        const elementToClickIndex = text.indexOf(textToClick);
        if (elementToClickIndex === -1) {
            throw new Error(`No element with [${textToClick}] text found!`);
        }
        return this.collection.get(elementToClickIndex).click();
    };
};