import { Component } from '@angular/core';

@Component({
    templateUrl: './collection-example.component.html'
})
export class CollectionExampleComponent {
    sliding(progress: number) {
        console.log(`当前拖动进度为${progress}`);
    }

    slidingFinish(index: number) {
        console.log(`当前页面为第${index}页`);
    }
}