import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../pages/home/home.component';
import { SendDocService } from './send-doc.service';

const appRoutes: Routes = [{
    path: 'home',
    component: HomeComponent,
    canActivate: [SendDocService],
    data: {
        // ts: require('!!raw-loader!../pages/home/home.component'),
        // html: require('!!raw-loader!../pages/home/home.component.html'),
        // css: require('!!raw-loader!../pages/home/home.component.scss'),
        doc: require('../pages/home/home.component.md')
    }
}, {
    path: 'components',
    loadChildren: '../pages/components/components-example.module#ComponentsExampleModule',
}, {
    path: 'directives',
    loadChildren: '../pages/directives/directives-example.module#DirectivesExampleModule'
}, {
    path: 'forms',
    loadChildren: '../pages/forms/forms-example.module#FormsExampleModule'
}, {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
}];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
