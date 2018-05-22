import { Component } from '@angular/core';

@Component({
    templateUrl: './collection-tab-example.component.html',
    styleUrls: ['./collection-tab-example.component.scss']
})
export class CollectionTabExampleComponent {
    viewIndex: number = 0;

    setIndex(n: number) {
        this.viewIndex = n;
    }
}