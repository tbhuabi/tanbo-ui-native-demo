import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule }  from '@angular/platform-browser';
import { UIComponentsModule, UIFormsModule, UIDirectivesModule } from 'tanbo-ui-native';

import { AppComponent } from './app';
import { DocLoaderComponent } from '../components/doc-loader/doc-loader.component';
import { routing } from './app.routing';

import { ActionSheetExampleComponent } from '../pages/components/action-sheet/action-sheet-example.component';
import { AlertExampleComponent } from '../pages/components/alert/alert-example.component';
import { CollectionExampleComponent } from '../pages/components/collection/collection-example.component';
import { CollectionTabExampleComponent } from '../pages/components/collection-tab/collection-tab-example.component';
import { ConfirmExampleComponent } from '../pages/components/confirm/confirm-example.component';
import { ListExampleComponent } from '../pages/components/list/list-example.component';
import { ScrollExampleComponent } from '../pages/components/scroll/scroll-example.component';
import { RefreshExampleComponent } from '../pages/components/refresh/refresh-example.component';
import { SlideExampleComponent } from '../pages/components/slide/slide-example.component';
import { RouterExampleComponent } from '../pages/components/router/router-example.component';
import { ChildComponent } from '../pages/components/child/child.component';

import {
    StopPropagationExampleComponent
} from '../pages/directives/stop-propagation/stop-propagation-example.component';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        UIFormsModule,
        UIDirectivesModule,
        UIComponentsModule,
        routing
    ],
    declarations: [
        AppComponent,
        DocLoaderComponent,

        ActionSheetExampleComponent,
        AlertExampleComponent,
        CollectionExampleComponent,
        CollectionTabExampleComponent,
        ConfirmExampleComponent,
        ListExampleComponent,
        ScrollExampleComponent,
        RefreshExampleComponent,
        SlideExampleComponent,
        RouterExampleComponent,
        ChildComponent,

        StopPropagationExampleComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
