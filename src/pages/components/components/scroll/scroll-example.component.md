`ui-scroll` 组件的触摸功能 <strong class="color-danger">未做PC端兼容</strong>，只有在模拟器或手机上才有效果，你可以点击右上角的按扭，新开一个窗口，在模拟器中查看。

如果内容过长，一般需要内容可以上下滚动，在 @tanbo/ui-native 中，你可以通过 `ui-scroll` 来实现。

`ui-scroll` 组件除了可以实现内容滚动，还封装了一系列的常用功能，通过订阅 `PullDownRefreshController` 或 `PullUpLoadController`，并监听部分事件，即可实现，如上拉加载、下拉刷新等功能。你可以击左侧导航，查看**上拉加载/下拉刷新**的文档。



### 输入属性 @Input()

| 输入属性名 | 输入类型  | 说明    |
| --        | --        | --        |
| `openInfinite`      | `boolean`   | 是否打开上拉加载功能。 |
| `openRefresh`      | `boolean`   | 是否打开下拉刷新功能。 |

