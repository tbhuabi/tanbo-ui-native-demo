import { Component } from '@angular/core';
import { AlertController, AlertConfig } from '@tanbo/ui-native';

@Component({
    templateUrl: './alert-example.component.html'
})
export class AlertExampleComponent {
    constructor(private alertController: AlertController) {
    }

    show() {
        const alertConfig: AlertConfig = {
            title: '标题',
            content: '弹出成功了',
            btnText: '知道了'
        };
        this.alertController.show(alertConfig).then(() => {
            console.log('弹出框已关闭');
        });
    }
}