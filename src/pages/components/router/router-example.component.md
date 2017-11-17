`UIRouter` <strong class="color-danger">暂时不支持路由嵌套</strong>，在整页跳转目前没发现bug，但嵌套时，因为复用策略，会导致 angular 不能正常跳转。我将在近期想办法解决。

### uiRouterLink 指令

`uiRouterLink` 指令和 angular 官方的 `routerLink` 的使用方法是完全一样的，也就是说，你只需要把 `routerLink` 改为 `uiRouterLink`。

### UIRouter 服务

当你需要在 Typescript 中实现路由跳转，你需要通过 `UIRouter` 类的 `navigate()` / `navigateByUrl()` 方法来实现。  

`UIRouter` 的 `navigate()` / `navigateByUrl()` 方法，默认是通过当前路由来进行相对路径跳转的。即，相当于你调用 `Router` 类的 `navigate()` / `navigateByUrl()` 方法时，每次都设置了路由配置的 `relativeTo` 属性为 `ActivatedRoute`。

如果你不需要根据 `ActivatedRoute` 来进行跳转，你可以在调用时，设置相应参数来实现，即：

```typescript
this.uiRouter.navigate(['../targetUrl'], {
    byActivatedRoute: false // 默认为 true
})
```

**如何返回上一个页面？**

如果需要返回，你可以调用 `history.back()` 方法。当然，在 angular 的场景中，不推荐这么做。你应该在你的组件中注入 `Location` 类，并调用 `back()` 方法，来实现。

如果是一般的场景，返回按扭通常在左上角，tanbo-ui-native 封装了 `ui-back` 组件。你可以这样写：
```html
<ui-page>
  <ui-header>
    <ui-navbar>
      <ui-back>返回上一页</ui-back>
      <ui-title>子页面</ui-title>
    </ui-navbar>
  </ui-header>
  <ui-content>
    <p class="container">我是子页面</p>
  </ui-content>
</ui-page>
```

**为什么不能用 angular 官方的 Router？**

其实在 `UIRouter` 内部，调用的还是 angular 官方的 `Router` 类来实现的，不一样的是，当用户路由返回的时候，angular 会创建一个全新的 `ActivatedRoute` 实例，来进行下一步跳转。但 `UIRouter` 是直接从缓存读出来的，这会导致 `UIRouter` 把路由跳转事件委托到 `Router` 时，不能实现正常跳转。所以 `UIRouter` 内部，会在返回事件中，更新缓存的 `ActivatedRoute` 实例。

**为什么点击浏览器前进按扭时，转场动画异常？**

因为在发生 `popstate` 事件时，并不能获取到用户到底是点了前进，还是后退。所以，在 `UIRouter` 中，默认都为后退的动画，不过一般在 webview 中，是没有前进按扭的，所以并不会引起什么问题，如果你的应用场景，需要前进这个功能，请慎重考虑是否还需要使用 `tanbo-ui-native`。
