import {BasePage} from '../base_page/base_page'
import {Collection} from '../base_elements/base_collection'
import {driver} from '../../specs/index.test'

export class HomePage extends BasePage {
    constructor() {
        super();
        this.url = "https://www.forbes.ru/";
        this.sections = new Collection("Sections", ".nav-list .nav-list__item");
      };
    open() {
        super.open(this.url)
    }
    getCurrentUrl(){
        super.getCurrentUrl()
    }
    get buttonNew() {
        return driver.findElement(By.xpath('//*[@id="__layout"]/div/div[3]/header/div[2]/div[1]/div[1]'))
    }
    get sectionTitle() {
       return driver.findElement(By.css('.section-name__title'))
    }
}