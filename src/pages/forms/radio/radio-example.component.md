`ui-input[type=radio]` 组件支持原生 `input` 的所有属性，你可以像原生 `input` 一样设置相应属性。同时也支持 `[(ngModel)]` 指令。

### 输入属性 @Input() 

| 输入属性名 | 输入类型  | 说明    |
| --        | --        | --        |
| `name`     | `string`   | 用于设置表单的 name |
| `value`     | `string`   | 用于设置表单的 value |
| `forId`     | `string`   | 用于关联 label 标签的 for 属性  |
| `disabled`     | `string` / `boolean`   | 是否禁用当前控件  |
| `readonly`     | `string` / `boolean`   | 是否设置当前控件为只读  |
| `checked`     | `string` / `boolean`   | 设置是否选中  |
| `checkedIcon`     | `string`   | 当控件选中时，显示的 icon class 名  |
| `uncheckedIcon`     | `string`   | 当控件未选中时，显示的 icon class 名  |

### 输出事件 @Output()

| 输出事件名 | 输出值（$event）  | 说明    |
| --        | --        | --        |
| `change` | `string`   | `$event` 为当前选中控件的 value。  |