import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { UINativeModule, UI_ROUTER_ANIMATION_STEPS, UI_SCREEN_SCALE, UI_DO_REFRESH_DISTANCE } from '@tanbo/ui-native';

import { AppComponent } from './app';
import { HomeComponent } from '../pages/home/home.component';
import { SendDocService } from './send-doc.service';

import { routing } from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    UINativeModule.forRoot(),
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    HomeComponent
  ],
  providers: [
    SendDocService,
    {
      provide: UI_ROUTER_ANIMATION_STEPS,
      useValue: 30
    }, {
      provide: UI_SCREEN_SCALE,
      useValue: 1
    }, {
      provide: UI_DO_REFRESH_DISTANCE,
      useValue: 40
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
