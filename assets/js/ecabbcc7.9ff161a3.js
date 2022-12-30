"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2341],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>b});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=l(r),y=a,b=u["".concat(p,".").concat(y)]||u[y]||d[y]||c;return r?n.createElement(b,i(i({ref:t},s),{},{components:r})):n.createElement(b,i({ref:t},s))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,i=new Array(c);i[0]=y;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var l=2;l<c;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},6877:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const c={},i="Literal type",o={unversionedId:"typescript/Literal type 073c0aa4bdcc424abc84e51db3d046d1",id:"typescript/Literal type 073c0aa4bdcc424abc84e51db3d046d1",title:"Literal type",description:"- String Literal \u5b57\u4e32\u5b57\u9762\u91cf\uff1a\u7528\u4f86\u9650\u5236\u53ea\u80fd\u662f\u5b9a\u7fa9\u7684\u5b57\u4e32\uff0c\u53ef\u4ee5\u914d\u5408 union",source:"@site/docs/typescript/Literal type 073c0aa4bdcc424abc84e51db3d046d1.md",sourceDirName:"typescript",slug:"/typescript/Literal type 073c0aa4bdcc424abc84e51db3d046d1",permalink:"/docs/typescript/Literal type 073c0aa4bdcc424abc84e51db3d046d1",draft:!1,editUrl:"https://github.com/Apriil15/apriil15.github.io/tree/master/docs/typescript/Literal type 073c0aa4bdcc424abc84e51db3d046d1.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Interface",permalink:"/docs/typescript/Interface ca1fa70e6f664792a1ac002ebfee50c8"},next:{title:"Mapped Type",permalink:"/docs/typescript/Mapped Type 45fd9b5943e54b16a2562c7d4b98e83b"}},p={},l=[],s={toc:l};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"literal-type"},"Literal type"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"String Literal \u5b57\u4e32\u5b57\u9762\u91cf\uff1a\u7528\u4f86\u9650\u5236\u53ea\u80fd\u662f\u5b9a\u7fa9\u7684\u5b57\u4e32\uff0c\u53ef\u4ee5\u914d\u5408 ",(0,a.kt)("inlineCode",{parentName:"li"},"union"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"type Language = 'TS' | 'Golang'\n\nfunction print(choice: Language): void {\n  if (choice == 'Golang') {\n    console.log(choice)\n    return\n  } else if (choice == 'TS') {\n    console.log(choice)\n    return\n  }\n  throw new Error()\n}\n\nprint('Golang')\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"useful pattern\n\u6240\u6709 type \u90fd\u6709\u4e00\u500b\u5171\u540c\u7684 field\uff0c\u800c\u4e14\u4f7f\u7528 string literal\uff0cTS \u6703\u63d0\u793a\u4e0d\u7528\u6015\u5beb\u932f")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"type Bird = {\n  type: 'bird'\n  flySpeed: number\n}\n\ntype Horse = {\n  type: 'horse'\n  runSpeed: number\n}\n\ntype Animal = Bird | Horse\n\nfunction print(animal: Animal) {\n  switch (animal.type) {\n    case 'bird': // \u4e0d\u7528\u6015\u5beb\u932f\n      console.log('i am bird')\n      break\n    case 'horse':\n      console.log('i am horse')\n      break\n  }\n}\n")))}u.isMDXComponent=!0}}]);