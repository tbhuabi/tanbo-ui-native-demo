import { Component, OnInit, OnDestroy } from '@angular/core';
import { PullDownRefreshController, PullUpLoadController } from 'tanbo-ui-native';
import { Subscription } from 'rxjs';

@Component({
    templateUrl: './refresh-example.component.html',
    styleUrls: ['./refresh-example.component.scss']
})
export class RefreshExampleComponent implements OnInit, OnDestroy {
    progress: number = 0;

    list: Array<number> = [];

    private index: number = 0;
    private subs: Array<Subscription> = [];

    constructor(private pullDownRefreshController: PullDownRefreshController,
                private pullUpLoadController: PullUpLoadController) {
    }

    ngOnInit() {
        this.subs.push(this.pullDownRefreshController.onStateChange.subscribe(n => {
            this.progress = n;
        }));

        this.subs.push(this.pullDownRefreshController.onRefresh.subscribe(() => {
            this.refresh();
        }));

        this.subs.push(this.pullUpLoadController.onLoading.subscribe(() => {
            this.infinite();
        }));

        // 从服务端获取数据
        setTimeout(() => {
            for (let i = 0; i < 30; i++) {
                this.list.push(Math.random());
                this.index = i;
            }
        }, 300);
    }

    ngOnDestroy() {
        this.subs.forEach(item => item.unsubscribe());
    }

    dragging(progress: number) {
        this.progress = progress;
    }

    refresh() {
        // 用户触发了下拉刷新
        setTimeout(() => {
            this.list = [];
            for (let i = 0; i < 30; i++) {
                this.list.push(Math.random());
                this.index = i;
            }
            // 刷新完成了
            this.pullDownRefreshController.refreshEnd();
        }, 3000);
    }

    infinite() {
        // 用户触发了下拉加载，从服务端获取更多数据
        setTimeout(() => {
            let min = this.index;
            let max = min + 30;
            for (; min < max; min++) {
                this.list.push(Math.random());
                this.index = min;
            }
            // 加载完成了
            this.pullUpLoadController.loaded();
        }, 3000);
    }
}