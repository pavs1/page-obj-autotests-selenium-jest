import {BasePage} from './base_page/base_page'
import {HomePage} from './home_page/home_page'
import { NewPage } from './new_page/new_page';

export class PageFactory {
    static getPage(pageName) {
        switch (pageName) {
            case "Home":
                return new HomePage();
            case 'New':
                return new NewPage();
            default:
                return new BasePage();        
        };
    };
};