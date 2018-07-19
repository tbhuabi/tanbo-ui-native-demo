## ui-switch 组件

### 输入属性 @Input() 

| 输入属性名 | 输入类型  | 说明    |
| --        | --        | --        |
| `name`     | `string`   | 用于设置表单的 name |
| `value`     | `string`   | 用于设置表单的 value |
| `forId`     | `string`   | 用于关联 label 标签的 for 属性  |
| `checked`     | `string` / `boolean`   | 是否选中当前项  |
| `disabled`     | `string` / `boolean`   | 是否禁用当前选项  |
| `readonly`     | `string` / `boolean`   | 当前项是否只读  |

### 输出事件 @Output()

| 输出事件名 | 输出值（$event）  | 说明    |
| --        | --        | --        |
| `uiChange` | `boolean`   |  |