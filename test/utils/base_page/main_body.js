import {Collection} from '../base_elements/base_collection'
import {Element} from '../base_elements/base_element'

export class MainBody {
    constructor() {
        this.sectionTitle = new Element("Section Title", '.section-name__title');
        this.sections = new Collection("Sections", ".nav-list .nav-list__item");
    };
};