import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UINativeModule } from '@tanbo/ui-native';

import { routes } from './forms-example.routing';

import { CheckboxExampleComponent } from './components/checkbox/checkbox-example.component';
import { DateExampleComponent } from './components/date/date-example.component';
import { RadioExampleComponent } from './components/radio/radio-example.component';
import { PickerExampleComponent } from './components/picker/picker-example.component';
import { RangeExampleComponent } from './components/range/range-example.component';
import { SegmentExampleComponent } from './components/segment/segment-example.component';
import { SelectExampleComponent } from './components/select/select-example.component';
import { SwitchExampleComponent } from './components/switch/switch-example.component';
import { FormValidatorExampleComponent } from './components/form-validator/form-validator-example.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UINativeModule,
    FormsModule
  ],
  declarations: [
    CheckboxExampleComponent,
    DateExampleComponent,
    RadioExampleComponent,
    PickerExampleComponent,
    RangeExampleComponent,
    SegmentExampleComponent,
    SelectExampleComponent,
    SwitchExampleComponent,
    FormValidatorExampleComponent
  ]
})

export class FormsExampleModule {
}