import {BasePage} from '../base_page/base_page'
import {Collection} from '../base_elements/base_collection'
import {driver} from '../../specs/index.test'
const { By } = require('selenium-webdriver')

export class NewPage extends BasePage {
    constructor() {
        super();
        this.url = "https://www.forbes.ru/new";
        this.sections = new Collection("Sections", ".nav-list .nav-list__item");
      };
    open() {
        super.open(this.url)
    }
    getCurrentUrl(){
        super.getCurrentUrl()
    }
    sectionTitle() {
       return driver.findElement(By.css('.section-name__title'))
    }
}