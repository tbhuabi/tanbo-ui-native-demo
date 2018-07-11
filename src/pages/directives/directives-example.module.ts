import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UINativeModule } from '@tanbo/ui-native';

import { routes } from './directives-example.routing';
import { StopPropagationExampleComponent } from './components/stop-propagation/stop-propagation-example.component';

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    UINativeModule
  ],
  declarations: [
    StopPropagationExampleComponent
  ]
})

export class DirectivesExampleModule {
}