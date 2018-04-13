`ui-slide` 组件封装了常见的轮播图，通过和 `ui-slide-item` 的组合，即可实现轮播任何内容。  
`ui-slide` 目前只实现了淡入淡出，后续会有更多功能加入。要使用 `ui-slide` 组件，你需要遵循以下格式：

```html
<ui-slide [speed]="2000" [initIndex]="0">
  <ui-slide-item>
    <!--你要轮播的内容-->
  </ui-slide-item>
  <ui-slide-item>
    <!--你要轮播的内容-->
  </ui-slide-item>
  <ui-slide-item>
    <!--你要轮播的内容-->
  </ui-slide-item>
</ui-slide>
```



### 输入属性 @Input()

| 输入属性名 | 输入类型  | 说明    |
| --        | --        | --        |
| `initIndex`  | `number`   | 从哪一张开始轮播。 |
| `speed`  | `number`   | 轮播的间隔时间，默认为 `2000`。 |
| `steps`  | `number`   | 动画帧数。 |
