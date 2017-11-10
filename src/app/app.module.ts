import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule }  from '@angular/platform-browser';
import { UIComponentsModule, UIFormsModule, UIDirectivesModule } from 'tanbo-ui-native';

import { AppComponent } from './app';
import { DocLoaderComponent } from '../components/doc-loader/doc-loader.component';
import { routing } from './app.routing';

import { ActionSheetExampleComponent } from '../pages/action-sheet/action-sheet-example.component';
import { AlertExampleComponent } from '../pages/alert/alert-example.component';
import { ConfirmExampleComponent } from '../pages/confirm/confirm-example.component';
import { CollectionExampleComponent } from '../pages/collection/collection-example.component';
import { ListExampleComponent } from '../pages/list/list-example.component';
import { ScrollExampleComponent } from '../pages/scroll/scroll-example.component';
import { RefreshExampleComponent } from '../pages/refresh/refresh-example.component';
import { SlideExampleComponent } from '../pages/slide/slide-example.component';

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
        ConfirmExampleComponent,
        CollectionExampleComponent,
        ListExampleComponent,
        ScrollExampleComponent,
        RefreshExampleComponent,
        SlideExampleComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
