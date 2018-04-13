import { Routes } from '@angular/router';

import { SendDocService } from '../../app/send-doc.service';
import { StopPropagationExampleComponent } from './components/stop-propagation/stop-propagation-example.component';

export const routes: Routes = [{
    path: '',
    component: StopPropagationExampleComponent,
    canActivate: [SendDocService],
    data: {
        ts: require('!!raw-loader!./components/stop-propagation/stop-propagation-example.component'),
        html: require('!!raw-loader!./components/stop-propagation/stop-propagation-example.component.html'),
        css: require('!!raw-loader!./components/stop-propagation/stop-propagation-example.component.scss'),
        doc: require('./components/stop-propagation/stop-propagation-example.component.md')
    }
}];