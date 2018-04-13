import { Component } from '@angular/core';

@Component({
    templateUrl: './model-validator-example.component.html'
})
export class ModelValidatorExampleComponent {

    data: any = {
        mobilePhone: '',
        verifyCode: ''
    };

    submit() {
        alert('通过了校验，提交成功了');
    }
}