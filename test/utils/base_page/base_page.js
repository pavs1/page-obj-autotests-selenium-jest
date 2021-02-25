import {Header} from './header'
import {driver} from '../../specs/index.test'
import {MainBody} from './main_body'

export class BasePage {
constructor(){
    this.Header = new Header();
    this.MainBody = new MainBody();
}
    open(url){
        return driver.get(url)
    }
    async getCurrentUrl(){
        return driver.getCurrentUrl()
    }
}
