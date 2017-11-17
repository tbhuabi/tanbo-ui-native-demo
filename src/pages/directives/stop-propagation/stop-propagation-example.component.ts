import { Component } from '@angular/core';

@Component({
    templateUrl: './stop-propagation-example.component.html',
    styleUrls: ['./stop-propagation-example.component.scss']
})
export class StopPropagationExampleComponent {
    parentHandle() {
        alert('父级被点击了');
    }

    childHandle() {
        alert('子级被点击了');
    }
}