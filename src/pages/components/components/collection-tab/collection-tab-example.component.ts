import { Component } from '@angular/core';

@Component({
    templateUrl: './collection-tab-example.component.html',
    styleUrls: ['./collection-tab-example.component.scss']
})
export class CollectionTabExampleComponent {
    viewIndex: number = 0;
    tabIndex: number = 0;

    setViewIndex(n: number) {
        this.viewIndex = n;
    }

    setTabIndex(n: number) {
        this.tabIndex = n;
    }
}