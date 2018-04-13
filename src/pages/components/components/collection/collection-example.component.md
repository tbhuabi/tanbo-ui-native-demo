`ui-collection` 组件的触摸功能 <strong class="color-danger">未做PC端兼容</strong>，只有在模拟器或手机上才有效果，你可以点击右上角的按扭，新开一个窗口，在模拟器中查看。

通过 `ui-collection` 组件和 `ui-collection-item` 组件的组合，即可实现一个当用户触摸时，左右或上下全屏滚动的视图。

```html
<ui-collection>
    <ui-collection-item>第一页</ui-collection-item>
    <ui-collection-item>第二页</ui-collection-item>
    <ui-collection-item>第三页</ui-collection-item>
</ui-collection>
```

### 输入属性 @Input()

| 输入属性名 | 输入类型  | 说明    |
| --        | --        | --        |
| `vertical`      | `boolean`   | 用于控制`ui-collection`是否垂直滚动，默认为水平滚动 |
| `index`      | `number`   | 用于控制`ui-collection`是显示第几张，设置时注册边际值。<br> 即：当 `ui-collection-item` 有3个时，`index` 的可选值为 `0`， `1`， `2` |

### 输出事件 @Output()
| 输出事件名 | 输出值（$event）  | 说明    |
| --        | --        | --        |
| `sliding` | `number`   | 当用户拖动页面时的回调，`$event` 为拖动的进度，进度区间根据 `ui-collection-item` 的数量不同而不同。<br> 如： `ui-collection-item` 组件有3个时，则 `$event` 的值为 0~3。  |
| `slidingFinish` | `number`   | 当用户切换完成一个页面后， `$event` 为当前页面的索引，以 0 开始 |
