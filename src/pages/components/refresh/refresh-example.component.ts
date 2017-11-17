import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './refresh-example.component.html',
    styleUrls: ['./refresh-example.component.scss']
})
export class RefreshExampleComponent implements OnInit {
    progress: number = 0;

    list: Array<number> = [];

    private index: number = 0;

    ngOnInit() {
        // 从服务端获取数据
        setTimeout(() => {
            for (let i = 0; i < 30; i++) {
                this.list.push(Math.random());
                this.index = i;
            }
        }, 300);
    }

    dragging(progress: number) {
        this.progress = progress;
    }

    refresh(fn: () => void) {
        // 用户触发了下拉刷新
        setTimeout(() => {
            this.list = [];
            for (let i = 0; i < 30; i++) {
                this.list.push(Math.random());
                this.index = i;
            }
            // 刷新完成了
            fn();
        }, 3000);
    }

    infinite(fn: () => void) {
        // 用户触发了下拉加载，从服务端获取更多数据
        setTimeout(() => {
            let min = this.index;
            let max = min + 30;
            for (; min < max; min++) {
                this.list.push(Math.random());
                this.index = min;
            }
            // 加载完成了
            fn();
        }, 3000);
    }
}