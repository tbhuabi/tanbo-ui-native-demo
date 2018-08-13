### 项目起源

@tanbo/ui-native 架封装了移动端常用的功能，如：智能的上下文转场动画、侧滑返回、上拉加载、下拉刷新等。
经过大半年的开发，项目基本趋于稳定，为了防止自己遗忘，也想把这套框架分享给大家。
我并不是大神，只是兴趣使然，所以，框架难免有功能不完善、设计不优雅的地方，也请有兴趣的朋友，批评指正。


### 环境准备

#### 1、生成项目

你可以自已搭建，或采用 angular 官方的 cli 来生成一个项目，也可以用 <a class="color-primary" href="https://github.com/tbhuabi/quick-start-cli" target="_blank">quick-start-cli</a> 生成一个项目。
如果采用 `quick-start-cli`，请选择 angular + scss 初始化项目。

#### 2、安装框架

安装框架依赖
```bash
npm install @tweenjs/tween.js @types/tween.js better-scroll tanbo-bezier --save
```
安装框架
```bash
npm install @tanbo/ui-native --save
```
### 设置 viewport
复制以下代码到你的 index.html 的 head 标签内
```html
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=0.5, maximum-scale=0.5, minimum-scale=0.5, viewport-fit=cover">
```
### 在项目中导入 @tanbo/ui-native

```typescript
// # app.module.ts 入口模块

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { UINativeModule } from '@tanbo/ui-native';

import { AppComponent } from './app.component';

@NgModule({
    imports: [
        UINativeModule.forRoot(), // 如果是子模块或异步模块，如路由模块，则不要调用
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}
```

```typescript
// # app.component.ts 根组件

import { Component } from '@angular/core';

@Component({
    selector: '<my-app></my-app>',
    template: '<ui-app></ui-app>'
})
export class AppComponent {
}
```


### 在项目中导入 @tanbo/ui-native 的样式表

@tanbo/ui-native 的样式表采用 sass 开发，你可以导入 sass 源文件，进行定制化开发，也可以直接导入已编译好的 css 文件。

在 ts 文件中导入编译好的 css 文件
```typescript
// # main.ts
// 按照 angular 项目的约定，在 main.ts 里导入全局样式表
import '@tanbo/ui-native/index.min.css';
```

在 global.scss 中导入 scss 源文件和字体 css 文件，然后导入 global.scss 到 main.ts
```scss
// # global.scss
@import "~@tanbo/ui-native/assets/scss/varibles";
@import "~@tanbo/ui-native/assets/scss/components";
@import "~@tanbo/ui-native/assets/fonts/style.css";
```
```typescript
// # main.ts
// 按照 angular 项目的约定，在 main.ts 里导入全局样式表
import './global.scss';
```

### HTML 结构

要正常使用 @tanbo/ui-native 的触摸手势及路由转场动画，你的页面需要遵守以下一些约定，才能正常工作，合理的约定，并不会降低开发的灵活性，而是会大大降低出 bug 的机率。

```html
<ui-page>
  <ui-header>
    <!-- 如果不需要头部，ui-header 是可选的 -->
    <ui-navbar>
      <!-- ui-back 组件是可选的，只有在需要返回父页面才声明-->
      <ui-back>返回</ui-back>
      <!-- ui-buttons 组件不是必需的，只有在需要左上角有按扭时才声明-->
      <ui-buttons>
        <button>按扭</button>
      </ui-buttons>
      <!-- 如果需要头部，ui-navbar 是必需的，因为在 webview 全屏的情况下，ui-header 会有 20px 的 padding-top，用来显示手机的状态栏。如果你需要设置整个头部的背景颜色，则应该设置 ui-header 的背景，而不是 ui-navbar -->
      <ui-title>标题</ui-title>
      <!-- ui-buttons 组件不是必需的，只有在需要右上角有按扭时才声明-->
      <ui-buttons>
        <button>按扭</button>
      </ui-buttons>
    </ui-navbar>
  </ui-header>
  <ui-content>
    <!-- ui-content 是必需的，页面的主要内容应该放在这里 -->
    <ui-scroll>
    <!--ui-content 的内容是不可滚动的，如果需要内容可滚动，则需要把内容放在 ui-scroll 内。-->
    </ui-scroll>
  </ui-content>
  <ui-footer>
    <!-- 如果不需要固定底部，ui-footer 是可选的 -->
  </ui-footer>
</ui-page>
```