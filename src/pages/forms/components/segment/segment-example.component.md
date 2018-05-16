## ui-segment

`ui-segment` 支持 `[(ngModel)]` 进行双向绑定。

### 输入属性 @Input() 

| 输入属性名 | 输入类型  | 说明    |
| --        | --        | --        |
| `selectedIndex`     | `number`   | 初始选中哪一项，默认为 0  |

### 输出事件 @Output()

| 输出事件名 | 输出值（$event）  | 说明    |
| --        | --        | --        |
| `change` | `number`   | `$event` 为控件的 value。  |


## ui-segment-button

### 输入属性 @Input() 

| 输入属性名 | 输入类型  | 说明    |
| --        | --        | --        |
| `value`     | `any`   | 当前选项的值 |
| `disabled`     | `string` / `boolean`   | 是否禁用当前控件  |
| `selected`     | `boolean`   | 是否默认选中当前控件 |


### 输出事件 @Output()

| 输出事件名 | 输出值（$event）  | 说明    |
| --        | --        | --        |
| `checked` | `SegmentButtonComponent`   | `$event` 为当前控件的实例。  |