import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActionSheetExampleComponent } from '../pages/components/action-sheet/action-sheet-example.component';
import { AlertExampleComponent } from '../pages/components/alert/alert-example.component';
import { ConfirmExampleComponent } from '../pages/components/confirm/confirm-example.component';
import { CollectionExampleComponent } from '../pages/components/collection/collection-example.component';
import { CollectionTabExampleComponent } from '../pages/components/collection-tab/collection-tab-example.component';
import { ListExampleComponent } from '../pages/components/list/list-example.component';
import { ScrollExampleComponent } from '../pages/components/scroll/scroll-example.component';
import { RefreshExampleComponent } from '../pages/components/refresh/refresh-example.component';
import { SlideExampleComponent } from '../pages/components/slide/slide-example.component';
import { RouterExampleComponent } from '../pages/components/router/router-example.component';
import { ChildComponent } from '../pages/components/child/child.component';
import { TabExampleComponent } from '../pages/components/tab/tab-example.component';
import { TabChild1Component } from '../pages/components/tab/tab-child1/tab-child1.component';
import { TabChild2Component } from '../pages/components/tab/tab-child2/tab-child2.component';
import { TabChild3Component } from '../pages/components/tab/tab-child3/tab-child3.component';
import { TabChild4Component } from '../pages/components/tab/tab-child4/tab-child4.component';

import { ButtonExampleComponent } from '../pages/forms/button/button-example.component';
import { CheckboxExampleComponent } from '../pages/forms/checkbox/checkbox-example.component';
import { RadioExampleComponent } from '../pages/forms/radio/radio-example.component';
import { RangeExampleComponent } from '../pages/forms/range/range-example.component';
import { SelectExampleComponent } from '../pages/forms/select/select-example.component';
import { SwitchExampleComponent } from '../pages/forms/switch/switch-example.component';
import { FormValidatorExampleComponent } from '../pages/forms/form-validator/form-validator-example.component';
import { ModelValidatorExampleComponent } from '../pages/forms/model-validator/model-validator-example.component';

import {
    StopPropagationExampleComponent
} from '../pages/directives/stop-propagation/stop-propagation-example.component';

const appRoutes: Routes = [{
    path: 'action-sheet',
    component: ActionSheetExampleComponent,
    data: {
        ts: require('!!raw-loader!../pages/components/action-sheet/action-sheet-example.component'),
        html: require('../pages/components/action-sheet/action-sheet-example.component.html'),
        css: require('!!raw-loader!../pages/components/action-sheet/action-sheet-example.component.scss'),
        doc: require('../pages/components/action-sheet/action-sheet-example.component.md')
    }
}, {
    path: 'alert',
    component: AlertExampleComponent,
    data: {
        ts: require('!!raw-loader!../pages/components/alert/alert-example.component'),
        html: require('../pages/components/alert/alert-example.component.html'),
        doc: require('../pages/components/alert/alert-example.component.md')
    }
}, {
    path: 'collection',
    component: CollectionExampleComponent,
    data: {
        ts: require('!!raw-loader!../pages/components/collection/collection-example.component'),
        html: require('../pages/components/collection/collection-example.component.html'),
        doc: require('../pages/components/collection/collection-example.component.md')
    }
}, {
    path: 'collection-tab',
    component: CollectionTabExampleComponent,
    data: {
        ts: require('!!raw-loader!../pages/components/collection-tab/collection-tab-example.component'),
        html: require('../pages/components/collection-tab/collection-tab-example.component.html'),
        css: require('!!raw-loader!../pages/components/collection-tab/collection-tab-example.component.scss'),
        doc: require('../pages/components/collection-tab/collection-tab-example.component.md')
    }
}, {
    path: 'confirm',
    component: ConfirmExampleComponent,
    data: {
        ts: require('!!raw-loader!../pages/components/confirm/confirm-example.component'),
        html: require('../pages/components/confirm/confirm-example.component.html'),
        doc: require('../pages/components/confirm/confirm-example.component.md')
    }
}, {
    path: 'list',
    component: ListExampleComponent,
    data: {
        ts: require('!!raw-loader!../pages/components/list/list-example.component'),
        html: require('../pages/components/list/list-example.component.html'),
        doc: require('../pages/components/list/list-example.component.md')
    }
}, {
    path: 'scroll',
    component: ScrollExampleComponent,
    data: {
        ts: require('!!raw-loader!../pages/components/scroll/scroll-example.component'),
        html: require('../pages/components/scroll/scroll-example.component.html'),
        doc: require('../pages/components/scroll/scroll-example.component.md')
    }
}, {
    path: 'refresh',
    component: RefreshExampleComponent,
    data: {
        ts: require('!!raw-loader!../pages/components/refresh/refresh-example.component'),
        html: require('../pages/components/refresh/refresh-example.component.html'),
        css: require('!!raw-loader!../pages/components/refresh/refresh-example.component.scss'),
        doc: require('../pages/components/refresh/refresh-example.component.md')
    }
}, {
    path: 'slide',
    component: SlideExampleComponent,
    data: {
        ts: require('!!raw-loader!../pages/components/slide/slide-example.component'),
        html: require('../pages/components/slide/slide-example.component.html'),
        css: require('!!raw-loader!../pages/components/slide/slide-example.component.scss'),
        doc: require('../pages/components/slide/slide-example.component.md')
    }
}, {
    path: 'router',
    component: RouterExampleComponent,
    data: {
        ts: require('!!raw-loader!../pages/components/router/router-example.component'),
        html: require('../pages/components/router/router-example.component.html'),
        doc: require('../pages/components/router/router-example.component.md')
    }
}, {
    path: 'child',
    component: ChildComponent
}, {
    path: 'tab',
    component: TabExampleComponent,
    data: {
        ts: require('!!raw-loader!../pages/components/tab/tab-example.component.ts'),
        html: require('../pages/components/tab/tab-example.component.html'),
        doc: require('../pages/components/tab/tab-example.component.md')
    },
    children: [{
        path: 'tab1',
        component: TabChild1Component,
        outlet: 'route1'
    }, {
        path: 'tab2',
        component: TabChild2Component,
        outlet: 'route2'
    }, {
        path: 'tab3',
        component: TabChild3Component,
        outlet: 'route3'
    }, {
        path: 'tab4',
        component: TabChild4Component,
        outlet: 'route4'
    }]
}, {
    path: 'stop-propagation',
    component: StopPropagationExampleComponent,
    data: {
        ts: require('!!raw-loader!../pages/directives/stop-propagation/stop-propagation-example.component'),
        html: require('../pages/directives/stop-propagation/stop-propagation-example.component.html'),
        css: require('!!raw-loader!../pages/directives/stop-propagation/stop-propagation-example.component.scss'),
        doc: require('../pages/directives/stop-propagation/stop-propagation-example.component.md')
    }
}, {
    path: 'button',
    component: ButtonExampleComponent,
    data: {
        ts: require('!!raw-loader!../pages/forms/button/button-example.component'),
        html: require('../pages/forms/button/button-example.component.html'),
        doc: require('../pages/forms/button/button-example.component.md')
    }
}, {
    path: 'checkbox',
    component: CheckboxExampleComponent,
    data: {
        ts: require('!!raw-loader!../pages/forms/checkbox/checkbox-example.component'),
        html: require('../pages/forms/checkbox/checkbox-example.component.html'),
        doc: require('../pages/forms/checkbox/checkbox-example.component.md')
    }
}, {
    path: 'radio',
    component: RadioExampleComponent,
    data: {
        ts: require('!!raw-loader!../pages/forms/radio/radio-example.component'),
        html: require('../pages/forms/radio/radio-example.component.html'),
        doc: require('../pages/forms/radio/radio-example.component.md')
    }
}, {
    path: 'range',
    component: RangeExampleComponent,
    data: {
        ts: require('!!raw-loader!../pages/forms/range/range-example.component'),
        html: require('../pages/forms/range/range-example.component.html'),
        doc: require('../pages/forms/range/range-example.component.md')
    }
}, {
    path: 'select',
    component: SelectExampleComponent,
    data: {
        ts: require('!!raw-loader!../pages/forms/select/select-example.component'),
        html: require('../pages/forms/select/select-example.component.html'),
        doc: require('../pages/forms/select/select-example.component.md')
    }
}, {
    path: 'switch',
    component: SwitchExampleComponent,
    data: {
        ts: require('!!raw-loader!../pages/forms/switch/switch-example.component'),
        html: require('../pages/forms/switch/switch-example.component.html'),
        doc: require('../pages/forms/switch/switch-example.component.md')
    }
}, {
    path: 'form-validator',
    component: FormValidatorExampleComponent,
    data: {
        ts: require('!!raw-loader!../pages/forms/form-validator/form-validator-example.component'),
        html: require('../pages/forms/form-validator/form-validator-example.component.html'),
        doc: require('../pages/forms/form-validator/form-validator-example.component.md')
    }
}, {
    path: 'model-validator',
    component: ModelValidatorExampleComponent,
    data: {
        ts: require('!!raw-loader!../pages/forms/model-validator/model-validator-example.component'),
        html: require('../pages/forms/model-validator/model-validator-example.component.html'),
        doc: require('../pages/forms/model-validator/model-validator-example.component.md')
    }
}];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
