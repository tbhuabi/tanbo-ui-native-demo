### DialogController

通过调用 `DialogController` 的 `show` 方法，并传入相应参数（参数类型：`DialogConfig`），即可显示弹窗。  

`show` 方法返回一个 `Promise` 实例对象，当按扭被点击后，对话框会隐藏，并会调用这个 `Promise` 对象的 `then` 方法中的回调，并传入对应结果。当第一个按扭点击后，值为 `true`；当第二个按扭后，值为 `false`。
 