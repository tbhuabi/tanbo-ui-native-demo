`ui-refresh` 组件为 tanbo-ui-native 提供的下拉刷新效果的组件，你也可以自己实现。


### 输入属性 @Input()

| 输入属性名 | 输入类型  | 说明    |
| --        | --        | --        |
| `progress`      | `number`   | 下拉的进度 |
| `threshold`      | `number`   | 触发刷新事件的临界值 |
| `startThreshold`      | `number`   | 进度条开始绘制的的临界值 |
| `progressColor`      | `string`   | 进度条颜色，如： `#f00`, `rgb(255, 0, 0)`。 |
