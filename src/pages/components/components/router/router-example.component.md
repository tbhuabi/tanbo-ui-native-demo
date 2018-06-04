@tanbo/ui-native 完全兼容 angular 的路由，但还是有一些问题，你是需要了解的。

<strong class="color-danger">@tanbo/ui-native 实现了自己的路由缓存策略，且是不能替换的，否则会引起路由异常</strong>

**如何返回上一个页面？**

如果需要返回，你可以调用 `history.back()` 方法。当然，在 angular 的场景中，不推荐这么做。你应该在你的组件中注入 `Location` 类，并调用 `back()` 方法，来实现。

如果是一般的场景，返回按扭通常在左上角，@tanbo/ui-native 封装了 `ui-back` 组件。你可以这样写：
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

**为什么点击浏览器前进按扭时，转场动画异常？**

因为在发生 `popstate` 事件时，并不能获取到用户到底是点了前进，还是后退。所以，在 `@tanbo/ui-native` 中，默认都为后退的动画，不过一般在 webview 中，是没有前进按扭的，所以并不会引起什么问题，如果你的应用场景，需要前进这个功能，请慎重考虑是否还需要使用 `@tanbo/ui-native`。
