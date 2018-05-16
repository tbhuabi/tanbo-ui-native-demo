`ui-input[type=date]` 组件支持原生 `input` 的所有属性，你可以像原生 `input` 一样设置相应属性。同时也支持 `[(ngModel)]` 指令。

### 输入属性 @Input() 

| 输入属性名 | 输入类型  | 说明    |
| --        | --        | --        |
| `value`      | `string`/`Date`/`number`   | 字符串，Date对象或一个时间戳  |
| `name`      | `string`   | 表单的 name |
| `format`      | `string`   | 默认 `yyyy-MM-dd`，当传为 `''` 时，change 事件传回的 value 为选中时间的时间戳 |
| `displayFormat`      | `string`   | 默认 `yyyy-MM-dd`，显示在表单控件中的格式 |
| `title`      | `string`   | 弹出控件的标题 |
| `disabled`      | `boolean`   |  |
| `readonly`      | `boolean`   |  |
| `maxDate`      | `string`   | 最小时间，以年月日 时分秒的字符串传入，如2014-12-02、2103/03/23 09:34:09 |
| `minDate`      | `string`   | 最大时间，以年月日 时分秒的字符串传入，如2014-12-02、2103/03/23 09:34:09 |

### @Output()
| 输出属性名 | 输出值（$event）  | 说明    |
| --        | --        | --        |
| `change` | `number`/ `string`  | 根据 `format` 的不同，传回当前组件的 value |