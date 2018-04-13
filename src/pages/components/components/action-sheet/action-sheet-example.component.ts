import { Component } from '@angular/core';

@Component({
    templateUrl: './action-sheet-example.component.html',
    styleUrls: ['./action-sheet-example.component.scss']
})
export class ActionSheetExampleComponent {
    isShow: boolean = false;

    trigger(isShow: boolean) {
        this.isShow = isShow;
    }
}