`ui-tab` 的多页面功能，是通过 angular 的命名路由实现的，所以你在使用 `ui-tab` 时，需要先了解 angular 的命名路由的使用方法。也可以参考如下的代码示例：


**路由配置**

```typescript
export const routes: Routes = [{
   path: 'tab',
   component: TabExampleComponent,
   children: [{
       path: 'tab1',
       component: TabChild1Component,
       outlet: 'route1'
   }, {
       path: 'tab2',
       component: TabChild2Component,
       outlet: 'route2'
   }, {
       path: 'tab3',
       component: TabChild3Component,
       outlet: 'route3'
   }, {
       path: 'tab4',
       component: TabChild4Component,
       outlet: 'route4'
   }]
}, {
    path: '',
    redirectTo: '/tab/(route1:tab1//route2:tab2//route3:tab3//route4:tab4)',
    pathMatch: 'full'
}]
```
**HTML 结构**
```html
<ui-tab>
  <ui-tab-view>
    <ui-tab-view-item name="route1"></ui-tab-view-item>
    <ui-tab-view-item name="route2"></ui-tab-view-item>
    <ui-tab-view-item name="route3"></ui-tab-view-item>
    <ui-tab-view-item name="route4"></ui-tab-view-item>
  </ui-tab-view>
  <ui-tab-bar>
    <ui-tab-bar-item>Tab1</ui-tab-bar-item>
    <ui-tab-bar-item>Tab2</ui-tab-bar-item>
    <ui-tab-bar-item>Tab3</ui-tab-bar-item>
    <ui-tab-bar-item>Tab4</ui-tab-bar-item>
  </ui-tab-bar>
</ui-tab>
```