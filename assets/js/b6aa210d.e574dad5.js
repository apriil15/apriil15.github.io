"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3108],{3905:(e,r,n)=>{n.d(r,{Zo:()=>i,kt:()=>d});var t=n(7294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=t.createContext({}),s=function(e){var r=t.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},i=function(e){var r=s(e.components);return t.createElement(u.Provider,{value:r},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=s(n),f=a,d=p["".concat(u,".").concat(f)]||p[f]||m[f]||o;return n?t.createElement(d,c(c({ref:r},i),{},{components:n})):t.createElement(d,c({ref:r},i))}));function d(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=f;var l={};for(var u in r)hasOwnProperty.call(r,u)&&(l[u]=r[u]);l.originalType=e,l[p]="string"==typeof e?e:a,c[1]=l;for(var s=2;s<o;s++)c[s]=n[s];return t.createElement.apply(null,c)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2094:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var t=n(7462),a=(n(7294),n(3905));const o={},c="Array",l={unversionedId:"typescript/Array 6f678f80ace64f04812d0468c097b0d3",id:"typescript/Array 6f678f80ace64f04812d0468c097b0d3",title:"Array",description:"- \u5beb\u6cd5",source:"@site/docs/typescript/Array 6f678f80ace64f04812d0468c097b0d3.md",sourceDirName:"typescript",slug:"/typescript/Array 6f678f80ace64f04812d0468c097b0d3",permalink:"/docs/typescript/Array 6f678f80ace64f04812d0468c097b0d3",draft:!1,editUrl:"https://github.com/Apriil15/apriil15.github.io/tree/master/docs/typescript/Array 6f678f80ace64f04812d0468c097b0d3.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tips To Use Docusaurus",permalink:"/docs/tips-to-use-docusaurus"},next:{title:"Basic Command",permalink:"/docs/typescript/Basic Command b01f701b556b466daf6dfdc2830c9968"}},u={},s=[],i={toc:s},p="wrapper";function m(e){let{components:r,...n}=e;return(0,a.kt)(p,(0,t.Z)({},i,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"array"},"Array"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5beb\u6cd5",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'// type + []\nlet arr1: number[] = [1, 2, 3];\narr1.push(4, 5);\nconsole.log(arr1);\n\n// \u6cdb\u578b\u5beb\u6cd5\nlet arr2: Array<number> = [1, 2, 3];\nconsole.log(arr2);\n\n// \u7528 any \u8868\u793a\u5141\u8a31\u4efb\u610f\u578b\u5225\nlet arr3: any[] = [1, "test", true, { name: "Kappa" }];\nconsole.log(arr3);\n'))),(0,a.kt)("li",{parentName:"ul"},"Function \u7528\u6cd5",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"filter","  \u7b26\u5408\u7684\u90fd\u56de\u50b3",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const numbers: number[] = [1, 2, 3, 4, 5];\n\nconst result: number[] = numbers.filter((number) => number > 3);\n\nconsole.log(result); // 4 5\n"))),(0,a.kt)("li",{parentName:"ul"},"find","  \u56de\u50b3\u7b26\u5408\u7684\u7b2c\u4e00\u500b\uff0c\u90fd\u4e0d\u7b26\u5408\u6703\u56de\u50b3 undefined",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const numbers: number[] = [1, 2, 3, 4, 5];\n\nconst result: number | undefined = numbers.find((number) => number > 3);\n\nconsole.log(result); // 4\n"))),(0,a.kt)("li",{parentName:"ul"},"map","  \u50b3\u4e00\u500b function \u9032\u53bb\uff0carray \u7684\u6bcf\u500b\u5143\u7d20\u90fd\u6703\u57f7\u884c\u8a72 function\uff0c\u4e26\u5c07\u56de\u50b3\u7684\u503c\uff0c\u56de\u50b3\u5230\u65b0\u7684\u9663\u5217",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const numbers: number[] = [1, 2, 3, 4, 5];\n\nconst result = numbers.map((number) => number * 2);\n\nconsole.log(result); // [ 2, 4, 6, 8, 10 ]\nconsole.log(numbers); // [ 1, 2, 3, 4, 5 ] \u539f\u672c\u7684 array \u4e0d\u6703\u6539\u8b8a\n")),"  \u8981\u9054\u5230\u540c\u6a23\u6548\u679c ",(0,a.kt)("inlineCode",{parentName:"li"},"foreach")," \u8981\u9019\u6a23\u5beb\uff0c\u7f3a\u9ede\u662f",(0,a.kt)("inlineCode",{parentName:"li"},"\u6703\u4fee\u6539\u5230\u539f\u9663\u5217"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const numbers: number[] = [1, 2, 3, 4, 5];\n\nnumbers.forEach((value, index) => {\n  numbers[index] = value * 2;\n});\n\nconsole.log(numbers);\n"))),(0,a.kt)("li",{parentName:"ul"},"reduce","  \u7b2c\u4e00\u500b\u53c3\u6578\u50b3\u4e00\u500b function\uff0c\u9019\u908a\u70ba\u7d2f\u52a0","  \u7b2c\u4e8c\u500b\u53c3\u6578\u70ba\u521d\u59cb\u503c (\u53ef\u4e0d\u5beb\uff0c\u521d\u59cb\u503c\u6703\u8b8a\u6210 array \u7684\u7b2c\u4e00\u500b\u503c)",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const numbers: number[] = [1, 2, 3, 4, 5];\n\n// 10 + 1 + 2 + 3 + 4 + 5\nconst result: number = numbers.reduce(\n  (previousValue, currentValue) => previousValue + currentValue,\n  10\n);\n\nconsole.log(result); // 25\n")))))))}m.isMDXComponent=!0}}]);