`ui-scroll` 组件的触摸功能 <strong class="color-danger">未做PC端兼容</strong>，只有在模拟器或手机上才有效果，你可以点击右上角的按扭，新开一个窗口，在模拟器中查看。

如果内容过长，一般需要内容可以上下滚动，在 tanbo-ui-native 中，你可以通过 `ui-scroll` 来实现。

`ui-scroll` 组件除了可以实现内容滚动，还封装了一系列的常用功能，通过设置相应的属性，并监听部分事件，即可实现，如上拉加载、下拉刷新等功能。

```typescript
import { Component } from '@angular/core';

@Component({
    template:`
        <ui-page>
          <ui-header>
            <ui-navbar>
              <ui-title>标题</ui-title>
            </ui-navbar>
          </ui-header>
          <ui-content>
            <ui-scroll
              (dragging)="dragging($event)" 
              (refresh)="refresh($event)" 
              (infinite)="infinite($event)" 
              [openRefresh]="true"
              [doRefreshDistance]="60"
              [doLoadingDistance]="600">
              <!--这里是内容-->
            </ui-scroll>
          </ui-content>
        </ui-page>
    `
})

export class ScrollExampleComponent {
    dragging(progress: number) {
        console.log(`用户拖动的距离为${progress}`);
    }
    
    refresh(fn: () => void) {
        console.log('用户触发了下拉刷新！');
        // 异步获取数据
        setTimeout(() => {
            console.log('刷新完成了！');
            fn();
        }, 3000);
    }
    
    infinite(fn: () => void) {
        console.log('用户触发上拉加载了！');
        setTimeout(() => {
            console.log('加载完成了！');
            fn();
        }, 3000);
    }
}
```

### 输入属性 @Input()

| 输入属性名 | 输入类型  | 说明    |
| --        | --        | --        |
| `openRefresh`      | `boolean`   | 是否打开下拉刷新功能。 |
| `doRefreshDistance`  | `number`   | 触发下拉刷新的高度临界值，默认为 `60`。 |
| `doLoadingDistance`  | `number`   | 触发上拉加载的高度临界值，默认为 `600`。 |

### 输出事件 @Output()
| 输出事件名 | 输出值（$event）  | 说明    |
| --        | --        | --        |
| `dragging` | `number`   | 用户下拉拖动的距离。  |
| `refresh` | `() => void`   | 当用户触发下拉刷新时调用，参数为刷新完成后的回调。 |
| `infinite` | `() => void`   | 当用户触发上拉加载时调用。参数为刷新完成后的回调。为了防止用户拖动页面频繁触发，该事件只会触发一次，只有当调用回调函数或用户触发下拉加载后，才会再次触发。 |
