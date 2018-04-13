import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule }  from '@angular/platform-browser';
import { UIComponentsModule, UIFormsModule, UIDirectivesModule } from 'tanbo-ui-native';

import { AppComponent } from './app';
import { HomeComponent } from '../pages/home/home.component';
import { SendDocService } from './send-doc.service';

import { routing } from './app.routing';

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
        HomeComponent
    ],
    providers: [
        SendDocService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
