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

import {
    StopPropagationExampleComponent
} from '../pages/directives/stop-propagation/stop-propagation-example.component';

const appRoutes: Routes = [{
    path: 'action-sheet',
    component: ActionSheetExampleComponent,
    data: {
        ts: require('!!raw-loader!../pages/components/action-sheet/action-sheet-example.component'),
        html: require('../pages/components/action-sheet/action-sheet-example.component.html'),
        css: require('!!raw-loader!../pages/components/action-sheet/action-sheet-example.component.scss')
    }
}, {
    path: 'alert',
    component: AlertExampleComponent,
    data: {
        ts: require('!!raw-loader!../pages/components/alert/alert-example.component'),
        html: require('../pages/components/alert/alert-example.component.html'),
    }
}, {
    path: 'collection',
    component: CollectionExampleComponent,
    data: {
        ts: require('!!raw-loader!../pages/components/collection/collection-example.component'),
        html: require('../pages/components/collection/collection-example.component.html'),
        doc: require('../pages/components/collection/collection-example.component.md'),
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
    path: 'stop-propagation',
    component: StopPropagationExampleComponent,
    data: {
        ts: require('!!raw-loader!../pages/directives/stop-propagation/stop-propagation-example.component'),
        html: require('../pages/directives/stop-propagation/stop-propagation-example.component.html'),
        css: require('!!raw-loader!../pages/directives/stop-propagation/stop-propagation-example.component.scss'),
        doc: require('../pages/directives/stop-propagation/stop-propagation-example.component.md')
    }
}];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
