"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6432],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return y}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,p=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=u(n),y=o,f=d["".concat(p,".").concat(y)]||d[y]||l[y]||c;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,i=new Array(c);i[0]=d;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var u=2;u<c;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},198:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var r=n(7462),o=n(3366),c=(n(7294),n(3905)),i=["components"],a={},p="Sinon",u={unversionedId:"typescript/Sinon 51612e0ebf9340a4b628d00b39a8cc0c",id:"typescript/Sinon 51612e0ebf9340a4b628d00b39a8cc0c",title:"Sinon",description:"- spy: \u539f\u59cb\u7684\u51fd\u5f0f\u4f9d\u7136\u6703\u88ab\u547c\u53eb",source:"@site/docs/typescript/Sinon 51612e0ebf9340a4b628d00b39a8cc0c.md",sourceDirName:"typescript",slug:"/typescript/Sinon 51612e0ebf9340a4b628d00b39a8cc0c",permalink:"/docs/typescript/Sinon 51612e0ebf9340a4b628d00b39a8cc0c",editUrl:"https://github.com/Apriil15/apriil15.github.io/tree/master/docs/typescript/Sinon 51612e0ebf9340a4b628d00b39a8cc0c.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Override",permalink:"/docs/typescript/Override 7ce99c20d7984b38981a50eaea22ec7d"},next:{title:"Tuple",permalink:"/docs/typescript/Tuple e0d81d2a054d47b5a835b00dd49a6015"}},s=[{value:"spy",id:"spy",children:[],level:2}],l={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"sinon"},"Sinon"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"spy: \u539f\u59cb\u7684\u51fd\u5f0f\u4f9d\u7136\u6703\u88ab\u547c\u53eb"),(0,c.kt)("li",{parentName:"ul"},"stub: \u539f\u59cb\u51fd\u5f0f\u4e0d\u6703\u88ab\u547c\u53eb")),(0,c.kt)("h2",{id:"spy"},"spy"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-tsx"},"import { spy } from 'sinon'\n\nclass Student {\n  study() {\n    console.log('study')\n  }\n}\n\nconst student = new Student()\n\n// \u5efa\u7acb student.study() \u7684 spy\nconst studySpy = spy(student, 'study')\n\n// \u547c\u53eb\u5f8c spy \u90fd\u6703\u8a18\u9304\u8cc7\u8a0a\nstudent.study()\n\n// \u7528 spy \u6aa2\u8996\u8cc7\u8a0a\nconsole.log(studySpy.callCount) // 1\n\n// \u62c6\u9664 spy\nstudySpy.restore()\n\nstudent.study()\nconsole.log(studySpy.callCount) // \u7dad\u6301 1\n")))}d.isMDXComponent=!0}}]);