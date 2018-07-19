### 输入属性 @Input() 

| 输入属性名 | 输入类型  | 说明    |
| --        | --        | --        |
| `name`     | `string`   | 用于设置表单的 name |
| `disabled`     | `string` / `boolean`   | 是否禁用当前控件  |
| `readonly`     | `string` / `boolean`   | 是否设置当前控件为只读  |
| `selectedIndex`     | `number`   | 初始选中哪一项，默认为 0  |
| `cancelText`     | `string`   | 取消按扭的文字  |

### 输出事件 @Output()

| 输出事件名 | 输出值（$event）  | 说明    |
| --        | --        | --        |
| `uiChange` | `number`   | `$event` 为控件的 value。  |


## ui-option 组件

### 输入属性 @Input() 

| 输入属性名 | 输入类型  | 说明    |
| --        | --        | --        |
| `value`     | `string`   | 用于设置一项的值 |
| `disabled`     | `string` / `boolean`   | 是否禁用当前选项  |
| `selected`     | `boolean`   | 初始是否选中  |

### 输出事件 @Output()

| 输出事件名 | 输出值（$event）  | 说明    |
| --        | --        | --        |
| `uiChecked` | `OptionComponent`   | `$event` 为当前控件的实例。  |