import { Component } from '@angular/core';

@Component({
    templateUrl: './form-validator-example.component.html'
})
export class FormValidatorExampleComponent {

    data: any = {
        name: '',
        password: ''
    };

    submit() {
        alert('通过了校验，提交成功了');
    }
}