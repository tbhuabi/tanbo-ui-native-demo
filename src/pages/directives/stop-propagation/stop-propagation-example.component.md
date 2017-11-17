uiStopPropagation 可以阻止事件冒泡，默认为`click`事件

### 输入属性 @Input() 

| 输入属性名 | 输入类型  | 说明    |
| --        | --        | --        |
| `uiStopPropagation`     | `string` / `Array<string>`   | 用于阻止事件冒泡，默认为`click`，可通过传值来覆盖 |

### 示例

```html
<button type="button" uiStopPropagation>按扭</button>

<button type="button" uiStopPropagation="mousedown">按扭</button>

<button type="button" [uiStopPropagation]="'mousedown'">按扭</button>

<button type="button" [uiStopPropagation]="['mousedown', 'click', 'mouseup']">按扭</button>
```