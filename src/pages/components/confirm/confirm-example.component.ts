import { Component } from '@angular/core';
import { ConfirmController, ConfirmConfig } from 'tanbo-ui-native';

@Component({
    templateUrl: './confirm-example.component.html'
})
export class ConfirmExampleComponent {
    constructor(private confirmController: ConfirmController) {
    }

    show() {
        const config: ConfirmConfig = {
            title: '标题',
            content: '弹出问题？',
            btnsText: ['取消', '确认']
        };
        this.confirmController.show(config).then((result: boolean) => {
            if (result) {
                console.log('你点击了确认按扭');
            } else {
                console.log('你点击了取消按扭');
            }
        });
    }
}