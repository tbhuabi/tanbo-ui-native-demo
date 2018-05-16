import { Routes } from '@angular/router';
import { SendDocService } from '../../app/send-doc.service';
import { ButtonExampleComponent } from './components/button/button-example.component';
import { CheckboxExampleComponent } from './components/checkbox/checkbox-example.component';
import { DateExampleComponent } from './components/date/date-example.component';
import { PickerExampleComponent } from './components/picker/picker-example.component';
import { RadioExampleComponent } from './components/radio/radio-example.component';
import { RangeExampleComponent } from './components/range/range-example.component';
import { SegmentExampleComponent } from './components/segment/segment-example.component';
import { SelectExampleComponent } from './components/select/select-example.component';
import { SwitchExampleComponent } from './components/switch/switch-example.component';
import { FormValidatorExampleComponent } from './components/form-validator/form-validator-example.component';
import { ModelValidatorExampleComponent } from './components/model-validator/model-validator-example.component';

export const routes: Routes = [{
    path: 'button',
    component: ButtonExampleComponent,
    canActivate: [SendDocService],
    data: {
        ts: require('!!raw-loader!./components/button/button-example.component'),
        html: require('!!raw-loader!./components/button/button-example.component.html'),
        doc: require('./components/button/button-example.component.md')
    }
}, {
    path: 'checkbox',
    component: CheckboxExampleComponent,
    canActivate: [SendDocService],
    data: {
        ts: require('!!raw-loader!./components/checkbox/checkbox-example.component'),
        html: require('!!raw-loader!./components/checkbox/checkbox-example.component.html'),
        doc: require('./components/checkbox/checkbox-example.component.md')
    }
}, {
    path: 'date',
    component: DateExampleComponent,
    canActivate: [SendDocService],
    data: {
        ts: require('!!raw-loader!./components/date/date-example.component'),
        html: require('!!raw-loader!./components/date/date-example.component.html'),
        doc: require('./components/date/date-example.component.md')
    }
}, {
    path: 'picker',
    component: PickerExampleComponent,
    canActivate: [SendDocService],
    data: {
        ts: require('!!raw-loader!./components/picker/picker-example.component'),
        html: require('!!raw-loader!./components/picker/picker-example.component.html'),
        css: require('!!raw-loader!./components/picker/picker-example.component.scss'),
        doc: require('./components/picker/picker-example.component.md')
    }
}, {
    path: 'radio',
    component: RadioExampleComponent,
    canActivate: [SendDocService],
    data: {
        ts: require('!!raw-loader!./components/radio/radio-example.component'),
        html: require('!!raw-loader!./components/radio/radio-example.component.html'),
        doc: require('./components/radio/radio-example.component.md')
    }
}, {
    path: 'range',
    component: RangeExampleComponent,
    canActivate: [SendDocService],
    data: {
        ts: require('!!raw-loader!./components/range/range-example.component'),
        html: require('!!raw-loader!./components/range/range-example.component.html'),
        doc: require('./components/range/range-example.component.md')
    }
}, {
    path: 'segment',
    component: SegmentExampleComponent,
    canActivate: [SendDocService],
    data: {
        ts: require('!!raw-loader!./components/segment/segment-example.component'),
        html: require('!!raw-loader!./components/segment/segment-example.component.html'),
        doc: require('./components/segment/segment-example.component.md')
    }
}, {
    path: 'select',
    component: SelectExampleComponent,
    canActivate: [SendDocService],
    data: {
        ts: require('!!raw-loader!./components/select/select-example.component'),
        html: require('!!raw-loader!./components/select/select-example.component.html'),
        doc: require('./components/select/select-example.component.md')
    }
}, {
    path: 'switch',
    component: SwitchExampleComponent,
    canActivate: [SendDocService],
    data: {
        ts: require('!!raw-loader!./components/switch/switch-example.component'),
        html: require('!!raw-loader!./components/switch/switch-example.component.html'),
        doc: require('./components/switch/switch-example.component.md')
    }
}, {
    path: 'form-validator',
    component: FormValidatorExampleComponent,
    canActivate: [SendDocService],
    data: {
        ts: require('!!raw-loader!./components/form-validator/form-validator-example.component'),
        html: require('!!raw-loader!./components/form-validator/form-validator-example.component.html'),
        doc: require('./components/form-validator/form-validator-example.component.md')
    }
}, {
    path: 'model-validator',
    component: ModelValidatorExampleComponent,
    canActivate: [SendDocService],
    data: {
        ts: require('!!raw-loader!./components/model-validator/model-validator-example.component'),
        html: require('!!raw-loader!./components/model-validator/model-validator-example.component.html'),
        doc: require('./components/model-validator/model-validator-example.component.md')
    }
}];