import {driver} from '../../specs/index.test'
const {By} = require('selenium-webdriver')


export class Element {
    constructor(elementName, selector){
        this.element = driver.findElement(By.css(selector));
        this.elementName = elementName;
    }
    click() {
        return this.element.click();
    };
    async getText() {
        const elementText = await this.element.getText();
        return elementText;
    };
}