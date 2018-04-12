import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule }  from '@angular/platform-browser';
import { UIComponentsModule, UIFormsModule, UIDirectivesModule } from 'tanbo-ui-native';

import { AppComponent } from './app';
import { HomeComponent } from '../pages/home/home.component';
import { IntroComponent } from '../pages/intro/intro.component';
import { StartComponent } from '../pages/start/start.component';
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
import { TabExampleComponent } from '../pages/components/tab/tab-example.component';
import { TabChild1Component } from '../pages/components/tab/tab-child1/tab-child1.component';
import { TabChild2Component } from '../pages/components/tab/tab-child2/tab-child2.component';
import { TabChild3Component } from '../pages/components/tab/tab-child3/tab-child3.component';
import { TabChild4Component } from '../pages/components/tab/tab-child4/tab-child4.component';

import {
    StopPropagationExampleComponent
} from '../pages/directives/stop-propagation/stop-propagation-example.component';

import { ButtonExampleComponent } from '../pages/forms/button/button-example.component';
import { CheckboxExampleComponent } from '../pages/forms/checkbox/checkbox-example.component';
import { RadioExampleComponent } from '../pages/forms/radio/radio-example.component';
import { RangeExampleComponent } from '../pages/forms/range/range-example.component';
import { SelectExampleComponent } from '../pages/forms/select/select-example.component';
import { SwitchExampleComponent } from '../pages/forms/switch/switch-example.component';
import { FormValidatorExampleComponent } from '../pages/forms/form-validator/form-validator-example.component';
import { ModelValidatorExampleComponent } from '../pages/forms/model-validator/model-validator-example.component';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        UIFormsModule,
        UIDirectivesModule,
        UIComponentsModule.forRoot(),
        FormsModule,
        routing
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        IntroComponent,
        StartComponent,
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
        TabExampleComponent,
        TabChild1Component,
        TabChild2Component,
        TabChild3Component,
        TabChild4Component,

        StopPropagationExampleComponent,

        ButtonExampleComponent,
        CheckboxExampleComponent,
        RadioExampleComponent,
        RangeExampleComponent,
        SelectExampleComponent,
        SwitchExampleComponent,
        FormValidatorExampleComponent,
        ModelValidatorExampleComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
