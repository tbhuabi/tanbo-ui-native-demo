import { Component } from '@angular/core';

@Component({
    templateUrl: './button-example.component.html'
})
export class ButtonExampleComponent {
    loadingState: boolean = false;

    load() {
        this.loadingState = true;
        setTimeout(() => {
            this.loadingState = false;
        }, 3000);
    }
}