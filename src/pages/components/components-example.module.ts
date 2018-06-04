import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UIComponentsModule } from '@tanbo/ui-native';

import { routes } from './components-example.routing';

import { ActionSheetExampleComponent } from './components/action-sheet/action-sheet-example.component';
import { AlertExampleComponent } from './components/alert/alert-example.component';
import { CollectionExampleComponent } from './components/collection/collection-example.component';
import { CollectionTabExampleComponent } from './components/collection-tab/collection-tab-example.component';
import { ConfirmExampleComponent } from './components/confirm/confirm-example.component';
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

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        UIComponentsModule.forChild(),
        CommonModule
    ],
    declarations: [
        ActionSheetExampleComponent,
        AlertExampleComponent,
        CollectionExampleComponent,
        CollectionTabExampleComponent,
        ConfirmExampleComponent,
        LifeCycleComponent,
        ListExampleComponent,
        ScrollExampleComponent,
        RefreshExampleComponent,
        SlideExampleComponent,
        RouterExampleComponent,
        ChildComponent,
        TabExampleComponent,
        TabChild1Component,
        TabChild2Component,
        TabChild3Component,
        TabChild4Component
    ]
})
export class ComponentsExampleModule {
}