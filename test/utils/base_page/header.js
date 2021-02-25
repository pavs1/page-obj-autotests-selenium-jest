import {Collection} from '../base_elements/base_collection'
import {Element} from '../base_elements/base_element'

export class Header {
    constructor() {
        this.navigationButtons = new Collection("Navigation Buttons", '.nav-list .nav-list__item');
        this.logoButton = new Element("Logo Button", ".header__logo");
        this.btnNew = new Element('Button New', 'a[href="/new"]')
    };
};