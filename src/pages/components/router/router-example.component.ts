import { Component } from '@angular/core';
import { UIRouter } from 'tanbo-ui-native';

@Component({
    templateUrl: './router-example.component.html'
})
export class RouterExampleComponent {
    constructor(private uiRouter: UIRouter) {

    }

    goToPage() {
        this.uiRouter.navigate(['../child']);
    }
}