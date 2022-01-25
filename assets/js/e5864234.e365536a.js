"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[600],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=p(n),d=o,b=f["".concat(c,".").concat(d)]||f[d]||u[d]||a;return n?r.createElement(b,l(l({ref:t},s),{},{components:n})):r.createElement(b,l({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9737:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return f}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),l=["components"],i={},c="Non-null assertion operator",p={unversionedId:"typescript/Non-null assertion operator fb773532dac04ac1b433d24632a3e57d",id:"typescript/Non-null assertion operator fb773532dac04ac1b433d24632a3e57d",title:"Non-null assertion operator",description:"- \u7c21\u55ae\u8b1b\u5c31\u662f\u544a\u8a34 TS compiler \u9019\u500b\u8b8a\u6578\u4e0d\u6703\u662f null | undefined\uff08\u6703\u662f defined\uff09",source:"@site/docs/typescript/Non-null assertion operator fb773532dac04ac1b433d24632a3e57d.md",sourceDirName:"typescript",slug:"/typescript/Non-null assertion operator fb773532dac04ac1b433d24632a3e57d",permalink:"/docs/typescript/Non-null assertion operator fb773532dac04ac1b433d24632a3e57d",editUrl:"https://github.com/Apriil15/apriil15.github.io/tree/master/docs/typescript/Non-null assertion operator fb773532dac04ac1b433d24632a3e57d.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Module",permalink:"/docs/typescript/Module be6611d03c3c492bbf5af7cd7b6ffcf1"},next:{title:"Object literal",permalink:"/docs/typescript/Object literal a405ee473baa42589c3ea5eed829c94e"}},s=[{value:"Ref",id:"ref",children:[],level:2}],u={toc:s};function f(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"non-null-assertion-operator"},"Non-null assertion operator"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7c21\u55ae\u8b1b\u5c31\u662f\u544a\u8a34 TS compiler \u9019\u500b\u8b8a\u6578\u4e0d\u6703\u662f ",(0,a.kt)("inlineCode",{parentName:"li"},"null | undefined"),"\uff08\u6703\u662f defined\uff09")),(0,a.kt)("p",null,"\u4f8b\u5b50\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"let nullable1: null | number;\nlet nullable2: undefined | string;\n\nlet foo = nullable1!; // type foo: number\nlet fooz = nullable2!; // type fooz: string\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"function validateEntity(e?: Entity) {\n  // Throw exception if e is null or invalid entity\n}\n\nfunction processEntity(e?: Entity) {\n  validateEntity(e);\n\n  // \u56e0\u70ba validateEntity \u5df2\u7d93\u9a57\u8b49\u5b8c\u4e86\uff0c\u6240\u4ee5 e \u4e00\u5b9a\u4e0d\u6703\u662f null\uff0c\u4f46\u4e0d\u52a0 ! \u6703\u5831\u932f\n  let s = e!.name; // Assert that e is non-null and access name\n}\n\nclass Entity {\n  constructor(public name?: string) {}\n}\n")),(0,a.kt)("h2",{id:"ref"},"Ref"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/38874928/operator-in-typescript-after-object-method"},"https://stackoverflow.com/questions/38874928/operator-in-typescript-after-object-method")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html"},"https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html")))}f.isMDXComponent=!0}}]);