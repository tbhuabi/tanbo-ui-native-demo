import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UIComponentsModule, UIFormsModule } from 'tanbo-ui-native';

import { routes } from './forms-example.routing';

import { ButtonExampleComponent } from './components/button/button-example.component';
import { CheckboxExampleComponent } from './components/checkbox/checkbox-example.component';
import { RadioExampleComponent } from './components/radio/radio-example.component';
import { PickerExampleComponent } from './components/picker/picker-example.component';
import { RangeExampleComponent } from './components/range/range-example.component';
import { SelectExampleComponent } from './components/select/select-example.component';
import { SwitchExampleComponent } from './components/switch/switch-example.component';
import { FormValidatorExampleComponent } from './components/form-validator/form-validator-example.component';
import { ModelValidatorExampleComponent } from './components/model-validator/model-validator-example.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        UIFormsModule,
        UIComponentsModule,
        FormsModule
    ],
    declarations: [
        ButtonExampleComponent,
        CheckboxExampleComponent,
        RadioExampleComponent,
        PickerExampleComponent,
        RangeExampleComponent,
        SelectExampleComponent,
        SwitchExampleComponent,
        FormValidatorExampleComponent,
        ModelValidatorExampleComponent
    ]
})

export class FormsExampleModule {
}