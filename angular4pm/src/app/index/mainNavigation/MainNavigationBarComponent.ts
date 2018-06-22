import {Component} from '@angular/core';


@Component({
    selector: 'main-navigation-bar',
    templateUrl: 'main-navigation-bar.html',
    styles: ['main-navigation-bar.css'],
    host: {'[class.main-navigation-bar]': 'true'}
})
export class MainNavigationBarComponent {

    constructor() {

    }

   }
