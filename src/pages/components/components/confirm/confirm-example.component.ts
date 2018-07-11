import { Component } from '@angular/core';
import { DialogController, DialogConfig } from '@tanbo/ui-native';

@Component({
    templateUrl: './confirm-example.component.html'
})
export class ConfirmExampleComponent {
    constructor(private dialogController: DialogController) {
    }

    show() {
        const config: DialogConfig = {
            title: '标题',
            content: '弹出问题？',
            btnsText: ['取消', '确认']
        };
        this.dialogController.show(config).then((result: boolean) => {
            if (result) {
                console.log('你点击了确认按扭');
            } else {
                console.log('你点击了取消按扭');
            }
        });
    }
}