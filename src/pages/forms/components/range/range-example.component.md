`ui-input[type=range]` 组件的触摸功能 <strong class="color-danger">未做PC端兼容</strong>，只有在模拟器或手机上才有效果，你可以点击右上角的按扭，新开一个窗口，在模拟器中查看。


### 输入属性 @Input() 

| 输入属性名 | 输入类型  | 说明    |
| --        | --        | --        |
| `name`     | `string`   | 用于设置表单的 name |
| `value`     | `string`   | 用于设置表单的 value |
| `forId`     | `string`   | 用于关联 label 标签的 for 属性  |
| `disabled`     | `string` / `boolean`   | 是否禁用当前控件  |
| `readonly`     | `string` / `boolean`   | 是否设置当前控件为只读  |
| `max`     | `number`   | 可选的最大值，默认为100  |
| `min`     | `string`   | 可选的最小值，默认为0  |
| `step`     | `string`   | 步长，默认为1  |
| `showProgress`     | `boolean`   | 在拖动的时候是否弹出进度  |

### 输出事件 @Output()

| 输出事件名 | 输出值（$event）  | 说明    |
| --        | --        | --        |
| `change` | `number`   | `$event` 为控件的 value。  |