import { Component } from '@angular/core';
import { OnViewEnter, OnViewLeave } from '@tanbo/ui-native';

@Component({
    templateUrl: './life-cycle.component.html'
})
export class LifeCycleComponent implements OnViewLeave, OnViewEnter {
    uiOnViewEnter() {
        console.log('视图进入了');
    }

    uiOnViewLeave() {
        console.log('视图离开了');
    }
}