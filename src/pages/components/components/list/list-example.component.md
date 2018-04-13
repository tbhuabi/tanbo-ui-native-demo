`ui-list` 组件的触摸功能（类似微信的侧滑删除） <strong class="color-danger">未做PC端兼容</strong>，只有在模拟器或手机上才有效果，你可以点击右上角的按扭，新开一个窗口，在模拟器中查看。


列表是由一组组件，通过不同的嵌套组合，即可实现 native 中常见的列表布局样式，其中，最基本的结构为：

```html
<!--普通列表-->
<ui-list>
  <ui-list-item>
    <!--任意内容-->
  </ui-list-item>
  <ui-list-item>
    <!--任意内容-->
  </ui-list-item>
  <ui-list-item>
    <!--任意内容-->
  </ui-list-item>
</ui-list>

<!--带箭头和点击高亮效果的列表-->
<ui-list>
  <button type="button" class="ui-list-item">
    <!--任意内容-->
  </button>
  <button type="button" class="ui-list-item">
    <!--任意内容-->
  </button>
  <button type="button" class="ui-list-item">
    <!--任意内容-->
  </button>
</ui-list>
```

### 组件简介

#### ui-list

列表最外层容器。

#### ui-list-item / button[class=ui-list-item]

列表每一项的容器。

#### ui-list-inner

带有底部边线和左侧缩进的列表单项内容容器。

#### ui-list-thumbnail

列表左侧的 icon 或图片的容器。

#### ui-list-sliding

带侧滑功能的列表单项内容容器，和 `ui-list-option` 一起出现，且在同一级。

#### ui-list-option

带侧滑功能的列表单项隐藏按扭容器，和 `ui-list-sliding` 一起出现，且在同一级。


