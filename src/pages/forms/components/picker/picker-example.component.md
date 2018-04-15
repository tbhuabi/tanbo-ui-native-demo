`picker`， 级联选择器，可以通过 `columnSize` 灵活控制级联数

### 输入属性 @Input() 

| 输入属性名 | 输入类型  | 说明    |
| --        | --        | --        |
| `name`     | `string`   | 用于设置表单的 name |
| `value`     | `string`   | 用于设置表单的 value |
| `disabled`     | `string` / `boolean`   | 是否禁用当前控件  |
| `readonly`     | `string` / `boolean`   | 是否设置当前控件为只读  |
| `columnSize`     | `number`   | 设置级联层数  |

### 输出事件 @Output()

| 输出事件名 | 输出值（$event）  | 说明    |
| --        | --        | --        |
| `change` | `boolean`   | `$event` 为当前控件选中的数据。  |