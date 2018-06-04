### OnViewEnter

当视图进入的时候调用。即，不管是从缓存重新激活，还是新创建的视图，都会调用。

```typescript
import { Component } from '@angular/core';
import { OnViewEnter } from '@tanbo/ui-native';

@Component({
    template: '<div>生命周期示例</div>'
})
export class ExampleComponent implements OnViewEnter {
    uiOnViewEnter() {
        console.log('视图进入时，被调用了！');
    }
}
```


### OnViewLeave

当视图离开的时候调用。即，不管是销毁，还是推入缓存，都会被调用。

```typescript
import { Component } from '@angular/core';
import { OnViewLeave } from '@tanbo/ui-native';

@Component({
    template: '<div>生命周期示例</div>'
})
export class ExampleComponent implements OnViewLeave {
    uiOnViewLeave() {
        console.log('视图离开时，被调用了！');
    }
}
```