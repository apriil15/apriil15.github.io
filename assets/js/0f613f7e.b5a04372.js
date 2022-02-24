"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2941],{3905:function(e,n,r){r.d(n,{Zo:function(){return u},kt:function(){return f}});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),m=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=m(e.components);return t.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=m(r),f=a,d=p["".concat(l,".").concat(f)]||p[f]||s[f]||o;return r?t.createElement(d,i(i({ref:n},u),{},{components:r})):t.createElement(d,i({ref:n},u))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var m=2;m<o;m++)i[m]=r[m];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},507:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return m},toc:function(){return u},default:function(){return p}});var t=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],c={},l="Pointer \u6307\u6a19",m={unversionedId:"golang/Basis/Pointer \u6307\u6a19 b7f0b049988b4cf2aa7a10cae420e361",id:"golang/Basis/Pointer \u6307\u6a19 b7f0b049988b4cf2aa7a10cae420e361",title:"Pointer \u6307\u6a19",description:"- pointer: \u5132\u5b58\u67d0\u4e00\u8b8a\u6578\u7684 memory address",source:"@site/docs/golang/Basis/Pointer \u6307\u6a19 b7f0b049988b4cf2aa7a10cae420e361.md",sourceDirName:"golang/Basis",slug:"/golang/Basis/Pointer \u6307\u6a19 b7f0b049988b4cf2aa7a10cae420e361",permalink:"/docs/golang/Basis/Pointer \u6307\u6a19 b7f0b049988b4cf2aa7a10cae420e361",editUrl:"https://github.com/Apriil15/apriil15.github.io/tree/master/docs/golang/Basis/Pointer \u6307\u6a19 b7f0b049988b4cf2aa7a10cae420e361.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Package",permalink:"/docs/golang/Basis/Package f4495ea63df14ce59b5039c6137fa3ef"},next:{title:"Read Command From Command Line",permalink:"/docs/golang/Basis/Read Command From Command Line 8ec0e52300a74bdab5c27691d7d99c2f"}},u=[],s={toc:u};function p(e){var n=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"pointer-\u6307\u6a19"},"Pointer \u6307\u6a19"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"pointer: \u5132\u5b58\u67d0\u4e00\u8b8a\u6578\u7684 ",(0,o.kt)("inlineCode",{parentName:"li"},"memory address")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"&"),": \u53d6\u51fa\u8b8a\u6578\u7684 memory address"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"*"),": \u6709\u5169\u7a2e\u610f\u601d",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"*int")," \u4ee3\u8868\u578b\u5225\u70ba int \u7684 pointer"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"variable")," \u4ee3\u8868 ",(0,o.kt)("inlineCode",{parentName:"li"},"dereference"),"\uff0c\u53d6\u5f97 point \u6307\u5411\u7684 memory address \u7684 value")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport "fmt"\n\nfunc main() {\n    a := 87\n    b := &a // b \u7684 value \u70ba a \u7684 memory address\n    c := &b // c \u7684 value \u70ba b \u7684 memory address\n\n    // \u9019\u5169\u500b\u6703\u4e00\u6a23\n    fmt.Println(&a) // 0xc000012088\n    fmt.Println(b)  // 0xc000012088\n\n    // dereference\n    // b \u5132\u5b58\u7684\u662f a \u7684 memory address\uff0c\u56e0\u6b64\u53d6\u5f97 memory address \u7684\u503c\uff0c\u4e5f\u5c31\u662f 87\n    fmt.Println(*b)\n\n    // \u9019\u5169\u500b\u6703\u4e00\u6a23\n    fmt.Println(&b) // 0xc000006028\n    fmt.Println(c)  // 0xc000006028\n\n    // c \u5132\u5b58\u7684\u662f b \u7684 memory address\uff0c\u56e0\u6b64\u53d6\u5f97 memory address \u7684\u503c\uff0c\u5176\u5be6\u5c31\u662f a \u7684 memory address\n    fmt.Println(*c) // 0xc000012088\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6b63\u5e38\u4f86\u8aaa\u503c\u4e0d\u6703\u6539\u8b8a\uff0c\u6539\u6210 pointer \u5c31\u6703\u6539\u8b8a\u60f9")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport "fmt"\n\nfunc main() {\n    number := 5\n\n    becomeZero(&number)\n\n    fmt.Println(number) // 0\n}\n\n// copy memory address\nfunc becomeZero(number *int) {\n    *number = 0 // dereference\n}\n')))}p.isMDXComponent=!0}}]);