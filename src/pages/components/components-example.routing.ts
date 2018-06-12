import { Routes } from '@angular/router';

import { SendDocService } from '../../app/send-doc.service';

import { ActionSheetExampleComponent } from './components/action-sheet/action-sheet-example.component';
import { AlertExampleComponent } from './components/alert/alert-example.component';
import { CollectionExampleComponent } from './components/collection/collection-example.component';
import { CollectionTabExampleComponent } from './components/collection-tab/collection-tab-example.component';
import { ConfirmExampleComponent } from './components/confirm/confirm-example.component';
import { FixedBarExampleComponent } from './components/fixed-bar/fixed-bar-example.component';
import { LifeCycleComponent } from './components/life-cycle/life-cycle.component';
import { ListExampleComponent } from './components/list/list-example.component';
import { ScrollExampleComponent } from './components/scroll/scroll-example.component';
import { RefreshExampleComponent } from './components/refresh/refresh-example.component';
import { SlideExampleComponent } from './components/slide/slide-example.component';
import { RouterExampleComponent } from './components/router/router-example.component';
import { ChildComponent } from './components/child/child.component';
import { TabExampleComponent } from './components/tab/tab-example.component';
import { TabChild1Component } from './components/tab/tab-child1/tab-child1.component';
import { TabChild2Component } from './components/tab/tab-child2/tab-child2.component';
import { TabChild3Component } from './components/tab/tab-child3/tab-child3.component';
import { TabChild4Component } from './components/tab/tab-child4/tab-child4.component';

export const routes: Routes = [{
    path: 'action-sheet',
    component: ActionSheetExampleComponent,
    canActivate: [SendDocService],
    data: {
        ts: require('!!raw-loader!./components/action-sheet/action-sheet-example.component'),
        html: require('!!raw-loader!./components/action-sheet/action-sheet-example.component.html'),
        css: require('!!raw-loader!./components/action-sheet/action-sheet-example.component.scss'),
        doc: require('./components/action-sheet/action-sheet-example.component.md')
    }
}, {
    path: 'alert',
    component: AlertExampleComponent,
    canActivate: [SendDocService],
    data: {
        ts: require('!!raw-loader!./components/alert/alert-example.component'),
        html: require('!!raw-loader!./components/alert/alert-example.component.html'),
        doc: require('./components/alert/alert-example.component.md')
    }
}, {
    path: 'collection',
    component: CollectionExampleComponent,
    canActivate: [SendDocService],
    data: {
        ts: require('!!raw-loader!./components/collection/collection-example.component'),
        html: require('!!raw-loader!./components/collection/collection-example.component.html'),
        doc: require('./components/collection/collection-example.component.md')
    }
}, {
    path: 'collection-tab',
    component: CollectionTabExampleComponent,
    canActivate: [SendDocService],
    data: {
        ts: require('!!raw-loader!./components/collection-tab/collection-tab-example.component'),
        html: require('!!raw-loader!./components/collection-tab/collection-tab-example.component.html'),
        css: require('!!raw-loader!./components/collection-tab/collection-tab-example.component.scss'),
        doc: require('./components/collection-tab/collection-tab-example.component.md')
    }
}, {
    path: 'confirm',
    component: ConfirmExampleComponent,
    canActivate: [SendDocService],
    data: {
        ts: require('!!raw-loader!./components/confirm/confirm-example.component'),
        html: require('!!raw-loader!./components/confirm/confirm-example.component.html'),
        doc: require('./components/confirm/confirm-example.component.md')
    }
}, {
    path: 'fixed-bar',
    component: FixedBarExampleComponent,
    canActivate: [SendDocService],
    data: {
        ts: require('!!raw-loader!./components/fixed-bar/fixed-bar-example.component'),
        html: require('!!raw-loader!./components/fixed-bar/fixed-bar-example.component.html'),
        css: require('!!raw-loader!./components/fixed-bar/fixed-bar-example.component.scss'),
        doc: require('./components/fixed-bar/fixed-bar-example.component.md')
    }
}, {
    path: 'life-cycle',
    component: LifeCycleComponent,
    canActivate: [SendDocService],
    data: {
        ts: require('!!raw-loader!./components/life-cycle/life-cycle.component'),
        html: require('!!raw-loader!./components/life-cycle/life-cycle.component.html'),
        doc: require('./components/life-cycle/life-cycle.component.md')
    }
}, {
    path: 'list',
    component: ListExampleComponent,
    canActivate: [SendDocService],
    data: {
        ts: require('!!raw-loader!./components/list/list-example.component'),
        html: require('!!raw-loader!./components/list/list-example.component.html'),
        doc: require('./components/list/list-example.component.md')
    }
}, {
    path: 'scroll',
    component: ScrollExampleComponent,
    canActivate: [SendDocService],
    data: {
        ts: require('!!raw-loader!./components/scroll/scroll-example.component'),
        html: require('!!raw-loader!./components/scroll/scroll-example.component.html'),
        doc: require('./components/scroll/scroll-example.component.md')
    }
}, {
    path: 'refresh',
    component: RefreshExampleComponent,
    canActivate: [SendDocService],
    data: {
        ts: require('!!raw-loader!./components/refresh/refresh-example.component'),
        html: require('!!raw-loader!./components/refresh/refresh-example.component.html'),
        css: require('!!raw-loader!./components/refresh/refresh-example.component.scss'),
        doc: require('./components/refresh/refresh-example.component.md')
    }
}, {
    path: 'slide',
    component: SlideExampleComponent,
    canActivate: [SendDocService],
    data: {
        ts: require('!!raw-loader!./components/slide/slide-example.component'),
        html: require('!!raw-loader!./components/slide/slide-example.component.html'),
        css: require('!!raw-loader!./components/slide/slide-example.component.scss'),
        doc: require('./components/slide/slide-example.component.md')
    }
}, {
    path: 'router',
    component: RouterExampleComponent,
    canActivate: [SendDocService],
    data: {
        ts: require('!!raw-loader!./components/router/router-example.component'),
        html: require('!!raw-loader!./components/router/router-example.component.html'),
        doc: require('./components/router/router-example.component.md')
    }
}, {
    path: 'child',
    component: ChildComponent
}, {
    path: 'tab',
    component: TabExampleComponent,
    canActivate: [SendDocService],
    data: {
        ts: require('!!raw-loader!./components/tab/tab-example.component.ts'),
        html: require('!!raw-loader!./components/tab/tab-example.component.html'),
        doc: require('./components/tab/tab-example.component.md')
    },
    children: [{
        path: '',
        redirectTo: '/components/tab/(route1:tab1//route2:tab2//route3:tab3//route4:tab4)',
        pathMatch: 'full'
    }, {
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
}];