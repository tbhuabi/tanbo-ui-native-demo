ui-stop-propagation 可以阻止事件冒泡，默认为`click`事件

### 输入属性 @Input() 

| 输入属性名 | 输入类型  | 说明    |
| --        | --        | --        |
| `ui-stop-propagation`     | `string` / `Array<string>`   | 用于阻止事件冒泡，默认为`click`，可通过传值来覆盖 |

### 示例

```html
<button type="button" ui-stop-propagation>按扭</button>

<button type="button" ui-stop-propagation="mousedown">按扭</button>

<button type="button" [ui-stop-propagation]="'mousedown'">按扭</button>

<button type="button" [ui-stop-propagation]="['mousedown', 'click', 'mouseup']">按扭</button>
```