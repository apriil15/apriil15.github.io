"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9500],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),f=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=f(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=f(n),u=o,d=s["".concat(l,".").concat(u)]||s[u]||m[u]||a;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:o,i[1]=c;for(var f=2;f<a;f++)i[f]=n[f];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},238:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>c,toc:()=>f});var r=n(7462),o=(n(7294),n(3905));const a={},i="Reflection",c={unversionedId:"golang/Basis/Reflection 17c75934f9b54990b7354562fe61f1c9",id:"golang/Basis/Reflection 17c75934f9b54990b7354562fe61f1c9",title:"Reflection",description:"Example",source:"@site/docs/golang/Basis/Reflection 17c75934f9b54990b7354562fe61f1c9.md",sourceDirName:"golang/Basis",slug:"/golang/Basis/Reflection 17c75934f9b54990b7354562fe61f1c9",permalink:"/docs/golang/Basis/Reflection 17c75934f9b54990b7354562fe61f1c9",draft:!1,editUrl:"https://github.com/Apriil15/apriil15.github.io/tree/master/docs/golang/Basis/Reflection 17c75934f9b54990b7354562fe61f1c9.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Read Command From Command Line",permalink:"/docs/golang/Basis/Read Command From Command Line 8ec0e52300a74bdab5c27691d7d99c2f"},next:{title:"Rune",permalink:"/docs/golang/Basis/Rune f98b591c73234f6b89d646417e6d377d"}},l={},f=[{value:"Example",id:"example",level:2}],p={toc:f};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"reflection"},"Reflection"),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n    "reflect"\n)\n\nfunc main() {\n    student := Student{26, "Test"}\n    myType := reflect.TypeOf(student)\n\n    fmt.Println(myType.Name())        // Student\n    fmt.Println(myType.Kind())        // struct\n    fmt.Println(myType.NumField())    // 2\n    fmt.Println(myType.Field(0).Name) // Age\n}\n\ntype Student struct {\n    Age  int\n    Name string\n}\n\n')))}s.isMDXComponent=!0}}]);