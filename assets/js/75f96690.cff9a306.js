"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[653],{3905:(n,e,t)=>{t.d(e,{Zo:()=>p,kt:()=>b});var r=t(7294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function c(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var l=r.createContext({}),f=function(n){var e=r.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},p=function(n){var e=f(n.components);return r.createElement(l.Provider,{value:e},n.children)},u="mdxType",s={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,i=n.originalType,l=n.parentName,p=c(n,["components","mdxType","originalType","parentName"]),u=f(t),m=a,b=u["".concat(l,".").concat(m)]||u[m]||s[m]||i;return t?r.createElement(b,o(o({ref:e},p),{},{components:t})):r.createElement(b,o({ref:e},p))}));function b(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var i=t.length,o=new Array(i);o[0]=m;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=n,c[u]="string"==typeof n?n:a,o[1]=c;for(var f=2;f<i;f++)o[f]=t[f];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9001:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>f});var r=t(7462),a=(t(7294),t(3905));const i={},o="init function",c={unversionedId:"golang/Basis/init function ba25f0ecb84146bea2b5a6fa11cbec54",id:"golang/Basis/init function ba25f0ecb84146bea2b5a6fa11cbec54",title:"init function",description:"- package \u5167\u53ef\u4ee5\u5ba3\u544a\u591a\u500b init()\uff0c\u4e14\u6703\u4e00\u4e00\u57f7\u884c",source:"@site/docs/golang/Basis/init function ba25f0ecb84146bea2b5a6fa11cbec54.md",sourceDirName:"golang/Basis",slug:"/golang/Basis/init function ba25f0ecb84146bea2b5a6fa11cbec54",permalink:"/docs/golang/Basis/init function ba25f0ecb84146bea2b5a6fa11cbec54",draft:!1,editUrl:"https://github.com/Apriil15/apriil15.github.io/tree/master/docs/golang/Basis/init function ba25f0ecb84146bea2b5a6fa11cbec54.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"if statement",permalink:"/docs/golang/Basis/if statement d9c14bc5c4544405877990f6ae097ada"},next:{title:"interface",permalink:"/docs/golang/Basis/interface 0f319be3a7024dbd82a2e439c9e278de"}},l={},f=[],p={toc:f};function u(n){let{components:e,...t}=n;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"init-function"},"init function"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"package \u5167\u53ef\u4ee5\u5ba3\u544a\u591a\u500b ",(0,a.kt)("inlineCode",{parentName:"li"},"init()"),"\uff0c\u4e14\u6703\u4e00\u4e00\u57f7\u884c"),(0,a.kt)("li",{parentName:"ul"},"\u4f5c\u7528\u6642\u9593\u70ba main() \u4e4b\u524d")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport "fmt"\n\nfunc init() {\n    fmt.Println("init 1")\n}\n\nfunc init() {\n    fmt.Println("init 2")\n}\n\nfunc main() {\n    fmt.Println("Hello Go")\n}\n')),(0,a.kt)("p",null,"\u6703\u5370\u51fa\uff1a"),(0,a.kt)("p",null,"init 1\ninit 2\nHello Go"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"import package \u6642\uff0c\u5982\u679c\u53ea\u6703\u7528\u5230 init()\uff0c\u5c31\u5f97\u5728\u524d\u9762\u52a0\u4e0a ",(0,a.kt)("inlineCode",{parentName:"li"},"_"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n    _ "practice_go/init_test"\n)\n\nfunc main() {\n    fmt.Println("main")\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package init_test\n\nimport (\n    "fmt"\n)\n\nfunc init() {\n    fmt.Println("init")\n}\n\nfunc Test1() {\n    fmt.Println("test1")\n}\n\nfunc Test2() {\n    fmt.Println("test2")\n}\n')),(0,a.kt)("p",null,"\u6703\u5370\u51fa\uff1a"),(0,a.kt)("p",null,"init\nmain"))}u.isMDXComponent=!0}}]);