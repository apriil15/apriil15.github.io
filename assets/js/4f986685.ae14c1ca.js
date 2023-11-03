"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9380],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>s});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(t),g=a,s=u["".concat(c,".").concat(g)]||u[g]||f[g]||o;return t?r.createElement(s,i(i({ref:n},m),{},{components:t})):r.createElement(s,i({ref:n},m))}));function s(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=g;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},6679:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const o={},i="Package",l={unversionedId:"golang/Basis/Package f4495ea63df14ce59b5039c6137fa3ef",id:"golang/Basis/Package f4495ea63df14ce59b5039c6137fa3ef",title:"Package",description:"- \u91cd\u9ede\u5c31\u662f import \u7684\u8def\u5f91\u8981 follow go.mod \u53bb\u8a02",source:"@site/docs/golang/Basis/Package f4495ea63df14ce59b5039c6137fa3ef.md",sourceDirName:"golang/Basis",slug:"/golang/Basis/Package f4495ea63df14ce59b5039c6137fa3ef",permalink:"/docs/golang/Basis/Package f4495ea63df14ce59b5039c6137fa3ef",draft:!1,editUrl:"https://github.com/Apriil15/apriil15.github.io/tree/master/docs/golang/Basis/Package f4495ea63df14ce59b5039c6137fa3ef.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Operator \u904b\u7b97\u5b50",permalink:"/docs/golang/Basis/Operator \u904b\u7b97\u5b50 701a43ea335b49a19f8ebcbf90cdfa88"},next:{title:"Pointer \u6307\u6a19",permalink:"/docs/golang/Basis/Pointer \u6307\u6a19 b7f0b049988b4cf2aa7a10cae420e361"}},c={},p=[],m={toc:p},u="wrapper";function f(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"package"},"Package"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u91cd\u9ede\u5c31\u662f import \u7684\u8def\u5f91\u8981 follow ",(0,a.kt)("inlineCode",{parentName:"li"},"go.mod")," \u53bb\u8a02","  \u4f8b\u5982\uff0c\u4e00\u958b\u59cb\u9019\u6a23\u521d\u59cb\u5316\uff0cpath \u70ba ",(0,a.kt)("inlineCode",{parentName:"li"},"my_project"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"$ go mod init my_project\n")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"go.mod")," \u5c31\u6703\u50cf\u9019\u6a23",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-go"},"module my_project\n\ngo 1.16\n")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5c08\u6848\u7684\u7d50\u69cb","  ",(0,a.kt)("img",{parentName:"li",src:"https://i.imgur.com/ZvV42Qg.png",alt:"https://i.imgur.com/ZvV42Qg.png"})),(0,a.kt)("li",{parentName:"ul"},"main.go",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n    "my_project/module"\n    "my_project/module/inner"\n)\n\nfunc main() {\n    fmt.Println("main")\n\n    module.Output() // \u4f7f\u7528 module1.go\n\n    inner.Output() // \u4f7f\u7528 inner.go\n}\n\n'))),(0,a.kt)("li",{parentName:"ul"},"module1.go",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package module\n\nimport (\n    "fmt"\n)\n\nfunc Output() {\n    fmt.Println("module1")\n}\n\n'))),(0,a.kt)("li",{parentName:"ul"},"inner.go",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package inner\n\nimport (\n    "fmt"\n)\n\nfunc Output() {\n    fmt.Println("inner")\n}\n\n')))))}f.isMDXComponent=!0}}]);