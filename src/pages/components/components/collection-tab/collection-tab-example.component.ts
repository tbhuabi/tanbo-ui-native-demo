import { Component } from '@angular/core';

@Component({
    templateUrl: './collection-tab-example.component.html',
    styleUrls: ['./collection-tab-example.component.scss']
})
export class CollectionTabExampleComponent {
    left: number = 0;

    index: number = 0;

    updateLine(progress: number) {
        this.left = progress * 100;
    }

    setTabIndex(index: number) {
        this.index = index;
    }
}