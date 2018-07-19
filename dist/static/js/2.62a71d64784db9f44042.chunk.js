webpackJsonp([2],{502:function(t,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),o.d(n,"DirectivesExampleModule",function(){return u});var e=o(15),a=o(78),i=o(206),r=o(626),p=o(523),c=this&&this.__decorate||function(t,n,o,e){var a,i=arguments.length,r=i<3?n:null===e?e=Object.getOwnPropertyDescriptor(n,o):e;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,n,o,e);else for(var p=t.length-1;p>=0;p--)(a=t[p])&&(r=(i<3?a(r):i>3?a(n,o,r):a(n,o))||r);return i>3&&r&&Object.defineProperty(n,o,r),r},u=function(){function t(){}return t=c([Object(e.I)({imports:[a.h.forChild(r.a),i.e],declarations:[p.a]})],t)}()},523:function(t,n,o){"use strict";o.d(n,"a",function(){return i});var e=o(15),a=this&&this.__decorate||function(t,n,o,e){var a,i=arguments.length,r=i<3?n:null===e?e=Object.getOwnPropertyDescriptor(n,o):e;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,n,o,e);else for(var p=t.length-1;p>=0;p--)(a=t[p])&&(r=(i<3?a(r):i>3?a(n,o,r):a(n,o))||r);return i>3&&r&&Object.defineProperty(n,o,r),r},i=function(){function t(){}return t.prototype.parentHandle=function(){alert("父级被点击了")},t.prototype.childHandle=function(){alert("子级被点击了")},t=a([Object(e.n)({template:o(627),styles:[o(628)]})],t)}()},626:function(t,n,o){"use strict";o.d(n,"a",function(){return i});var e=o(136),a=o(523),i=[{path:"",component:a.a,canActivate:[e.a],data:{ts:o(630),html:o(631),css:o(632),doc:o(633)}}]},627:function(t,n){t.exports='<ui-page> <ui-header> <ui-navbar> <ui-back>首页</ui-back> <ui-title>StopPropagation</ui-title> </ui-navbar> </ui-header> <ui-content> <div class="parent" (click)="parentHandle()"> <p>我是父级</p> <button class="ui-btn ui-btn-primary" type="button" ui-stop-propagation (click)="childHandle()">点我不会冒泡</button> <button class="ui-btn ui-btn-primary" type="button" (click)="childHandle()">点我会冒泡</button> </div> </ui-content> </ui-page> '},628:function(t,n,o){var e=o(629);t.exports="string"==typeof e?e:e.toString()},629:function(t,n,o){n=t.exports=o(205)(!0),n.push([t.i,".parent{padding:40px;background-color:#ccc}.parent .child{padding:20px;background-color:#6684ff}","",{version:3,sources:["/Users/tanbo/Documents/libraries/tanbo-ui-native-demo/src/pages/directives/components/stop-propagation/stop-propagation-example.component.scss"],names:[],mappings:"AAAA,QACI,aAAa,AACb,qBAAsB,CAKzB,AAPD,eAIQ,aAAa,AACb,wBAAyB,CAC5B",file:"stop-propagation-example.component.scss",sourcesContent:[".parent {\n    padding: 40px;\n    background-color: #ccc;\n    .child {\n        padding: 20px;\n        background-color: #6684ff;\n    }\n}"],sourceRoot:""}])},630:function(t,n){t.exports="import { Component } from '@angular/core';\n\n@Component({\n    templateUrl: './stop-propagation-example.component.html',\n    styleUrls: ['./stop-propagation-example.component.scss']\n})\nexport class StopPropagationExampleComponent {\n    parentHandle() {\n        alert('父级被点击了');\n    }\n\n    childHandle() {\n        alert('子级被点击了');\n    }\n}"},631:function(t,n){t.exports='<ui-page>\n  <ui-header>\n    <ui-navbar>\n      <ui-back>首页</ui-back>\n      <ui-title>StopPropagation</ui-title>\n    </ui-navbar>\n  </ui-header>\n  <ui-content>\n    <div class="parent" (click)="parentHandle()">\n      <p>我是父级</p>\n      <button class="ui-btn ui-btn-primary" type="button" ui-stop-propagation (click)="childHandle()">点我不会冒泡</button>\n      <button class="ui-btn ui-btn-primary" type="button" (click)="childHandle()">点我会冒泡</button>\n    </div>\n  </ui-content>\n</ui-page>\n'},632:function(t,n){t.exports=".parent {\n    padding: 40px;\n    background-color: #ccc;\n    .child {\n        padding: 20px;\n        background-color: #6684ff;\n    }\n}"},633:function(t,n){t.exports='ui-stop-propagation 可以阻止事件冒泡，默认为`click`事件\n\n### 输入属性 @Input() \n\n| 输入属性名 | 输入类型  | 说明    |\n| --        | --        | --        |\n| `ui-stop-propagation`     | `string` / `Array<string>`   | 用于阻止事件冒泡，默认为`click`，可通过传值来覆盖 |\n\n### 示例\n\n```html\n<button type="button" ui-stop-propagation>按扭</button>\n\n<button type="button" ui-stop-propagation="mousedown">按扭</button>\n\n<button type="button" [ui-stop-propagation]="\'mousedown\'">按扭</button>\n\n<button type="button" [ui-stop-propagation]="[\'mousedown\', \'click\', \'mouseup\']">按扭</button>\n```'}});