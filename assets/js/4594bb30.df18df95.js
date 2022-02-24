"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7971],{3905:function(e,n,r){r.d(n,{Zo:function(){return d},kt:function(){return p}});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var m=t.createContext({}),l=function(e){var n=t.useContext(m),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},d=function(e){var n=l(e.components);return t.createElement(m.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},s=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,m=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=l(r),p=a,f=s["".concat(m,".").concat(p)]||s[p]||u[p]||o;return r?t.createElement(f,i(i({ref:n},d),{},{components:r})):t.createElement(f,i({ref:n},d))}));function p(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=s;var c={};for(var m in n)hasOwnProperty.call(n,m)&&(c[m]=n[m]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}s.displayName="MDXCreateElement"},3048:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return c},contentTitle:function(){return m},metadata:function(){return l},toc:function(){return d},default:function(){return s}});var t=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],c={},m="Read Command From Command Line",l={unversionedId:"golang/Basis/Read Command From Command Line 8ec0e52300a74bdab5c27691d7d99c2f",id:"golang/Basis/Read Command From Command Line 8ec0e52300a74bdab5c27691d7d99c2f",title:"Read Command From Command Line",description:"\u5176\u5be6\u5f88\u7c21\u55aeXD",source:"@site/docs/golang/Basis/Read Command From Command Line 8ec0e52300a74bdab5c27691d7d99c2f.md",sourceDirName:"golang/Basis",slug:"/golang/Basis/Read Command From Command Line 8ec0e52300a74bdab5c27691d7d99c2f",permalink:"/docs/golang/Basis/Read Command From Command Line 8ec0e52300a74bdab5c27691d7d99c2f",editUrl:"https://github.com/Apriil15/apriil15.github.io/tree/master/docs/golang/Basis/Read Command From Command Line 8ec0e52300a74bdab5c27691d7d99c2f.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Pointer \u6307\u6a19",permalink:"/docs/golang/Basis/Pointer \u6307\u6a19 b7f0b049988b4cf2aa7a10cae420e361"},next:{title:"Reflection",permalink:"/docs/golang/Basis/Reflection 17c75934f9b54990b7354562fe61f1c9"}},d=[],u={toc:d};function s(e){var n=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"read-command-from-command-line"},"Read Command From Command Line"),(0,o.kt)("p",null,"\u5176\u5be6\u5f88\u7c21\u55aeXD"),(0,o.kt)("p",null,"\u4e0d\u77e5\u9053\u901a\u5e38\u6703\u600e\u9ebc\u61c9\u7528\uff0c\u6211\u731c cobra \u6709\u7528\u5230"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n    "os"\n)\n\nfunc main() {\n\n    // \u6703\u56de\u50b3\u6211\u5011\u5f9e command line \u8f38\u5165\u7684\u5f15\u6578\u7684 slice\n    arr := os.Args\n\n    fmt.Println(arr)\n\n    // \u7b2c\u4e00\u500b\u4e0d\u9700\u8981\uff0c\u6240\u4ee5\u5be6\u52d9\u4e0a\u628a index = 0 \u62ff\u6389\n    fmt.Println(arr[1:])\n}\n')),(0,o.kt)("p",null,"\u6307\u4ee4\u8f38\u5165 ",(0,o.kt)("inlineCode",{parentName:"p"},"go run main.go 1 2 3")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"PS D:\\Projects\\FirstGoProject> go run main.go 1 2 3\n[C:\\Users\\user\\AppData\\Local\\Temp\\go-build1843040366\\b001\\exe\\main.exe 1 2 3]\n[1 2 3]\n")))}s.isMDXComponent=!0}}]);