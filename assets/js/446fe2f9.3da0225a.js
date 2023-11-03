"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5972],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(r),y=a,d=u["".concat(p,".").concat(y)]||u[y]||f[y]||o;return r?n.createElement(d,i(i({ref:t},l),{},{components:r})):n.createElement(d,i({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=y;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},4599:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={},i="Type Aliases \u578b\u5225\u5225\u540d",c={unversionedId:"typescript/Type Aliases \u578b\u5225\u5225\u540d f1a4af4116004aa8a3b4c0cd0e9442d7",id:"typescript/Type Aliases \u578b\u5225\u5225\u540d f1a4af4116004aa8a3b4c0cd0e9442d7",title:"Type Aliases \u578b\u5225\u5225\u540d",description:"- \u5e38\u914d\u5408 union",source:"@site/docs/typescript/Type Aliases \u578b\u5225\u5225\u540d f1a4af4116004aa8a3b4c0cd0e9442d7.md",sourceDirName:"typescript",slug:"/typescript/Type Aliases \u578b\u5225\u5225\u540d f1a4af4116004aa8a3b4c0cd0e9442d7",permalink:"/docs/typescript/Type Aliases \u578b\u5225\u5225\u540d f1a4af4116004aa8a3b4c0cd0e9442d7",draft:!1,editUrl:"https://github.com/Apriil15/apriil15.github.io/tree/master/docs/typescript/Type Aliases \u578b\u5225\u5225\u540d f1a4af4116004aa8a3b4c0cd0e9442d7.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tuple",permalink:"/docs/typescript/Tuple e0d81d2a054d47b5a835b00dd49a6015"},next:{title:"Type Assertion / Casting",permalink:"/docs/typescript/Type Assertion Casting 48ca06d1eec34f1db3cadfba7c113221"}},p={},s=[],l={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"type-aliases-\u578b\u5225\u5225\u540d"},"Type Aliases \u578b\u5225\u5225\u540d"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5e38\u914d\u5408 ",(0,a.kt)("inlineCode",{parentName:"li"},"union"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'type NumberOrString = number | string;\n\nfunction getLength(something: NumberOrString): number {\n  if (typeof something === "number") {\n    return something.toString().length;\n  } else if (typeof something === "string") {\n    return something.length;\n  }\n  throw new Error();\n}\n\nconsole.log(getLength(123));\nconsole.log(getLength("456"));\n')))}u.isMDXComponent=!0}}]);