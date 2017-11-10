import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActionSheetExampleComponent } from '../pages/action-sheet/action-sheet-example.component';
import { AlertExampleComponent } from '../pages/alert/alert-example.component';
import { ConfirmExampleComponent } from '../pages/confirm/confirm-example.component';
import { CollectionExampleComponent } from '../pages/collection/collection-example.component';
import { ListExampleComponent } from '../pages/list/list-example.component';
import { ScrollExampleComponent } from '../pages/scroll/scroll-example.component';
import { RefreshExampleComponent } from '../pages/refresh/refresh-example.component';
import { SlideExampleComponent } from '../pages/slide/slide-example.component';

const appRoutes: Routes = [{
    path: 'action-sheet',
    component: ActionSheetExampleComponent,
    data: {
        ts: require('!!raw-loader!../pages/action-sheet/action-sheet-example.component'),
        html: require('../pages/action-sheet/action-sheet-example.component.html'),
        css: require('!!raw-loader!../pages/action-sheet/action-sheet-example.component.scss')
    }
}, {
    path: 'alert',
    component: AlertExampleComponent,
    data: {
        ts: require('!!raw-loader!../pages/alert/alert-example.component'),
        html: require('../pages/alert/alert-example.component.html'),
    }
}, {
    path: 'collection',
    component: CollectionExampleComponent,
    data: {
        ts: require('!!raw-loader!../pages/collection/collection-example.component'),
        html: require('../pages/collection/collection-example.component.html'),
        doc: require('../pages/collection/collection-example.component.md'),
    }
}, {
    path: 'confirm',
    component: ConfirmExampleComponent,
    data: {
        ts: require('!!raw-loader!../pages/confirm/confirm-example.component'),
        html: require('../pages/confirm/confirm-example.component.html'),
    }
}, {
    path: 'list',
    component: ListExampleComponent,
    data: {
        ts: require('!!raw-loader!../pages/list/list-example.component'),
        html: require('../pages/list/list-example.component.html'),
        doc: require('../pages/list/list-example.component.md')
    }
}, {
    path: 'scroll',
    component: ScrollExampleComponent,
    data: {
        ts: require('!!raw-loader!../pages/scroll/scroll-example.component'),
        html: require('../pages/scroll/scroll-example.component.html'),
        doc: require('../pages/scroll/scroll-example.component.md')
    }
}, {
    path: 'refresh',
    component: RefreshExampleComponent,
    data: {
        ts: require('!!raw-loader!../pages/refresh/refresh-example.component'),
        html: require('../pages/refresh/refresh-example.component.html'),
        doc: require('../pages/refresh/refresh-example.component.md')
    }
}, {
    path: 'slide',
    component: SlideExampleComponent,
    data: {
        ts: require('!!raw-loader!../pages/slide/slide-example.component'),
        html: require('../pages/slide/slide-example.component.html'),
        css: require('!!raw-loader!../pages/slide/slide-example.component.scss'),
        doc: require('../pages/slide/slide-example.component.md')
    }
}];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
