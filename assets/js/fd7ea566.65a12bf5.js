"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8806],{3905:function(e,t,n){n.d(t,{Zo:function(){return f},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},f=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),s=p(n),d=a,m=s["".concat(c,".").concat(d)]||s[d]||u[d]||o;return n?r.createElement(m,i(i({ref:t},f),{},{components:n})):r.createElement(m,i({ref:t},f))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},2272:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return f},default:function(){return s}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={},c="Operator \u904b\u7b97\u5b50",p={unversionedId:"golang/Basis/Operator \u904b\u7b97\u5b50 701a43ea335b49a19f8ebcbf90cdfa88",id:"golang/Basis/Operator \u904b\u7b97\u5b50 701a43ea335b49a19f8ebcbf90cdfa88",title:"Operator \u904b\u7b97\u5b50",description:"shift operator",source:"@site/docs/golang/Basis/Operator \u904b\u7b97\u5b50 701a43ea335b49a19f8ebcbf90cdfa88.md",sourceDirName:"golang/Basis",slug:"/golang/Basis/Operator \u904b\u7b97\u5b50 701a43ea335b49a19f8ebcbf90cdfa88",permalink:"/docs/golang/Basis/Operator \u904b\u7b97\u5b50 701a43ea335b49a19f8ebcbf90cdfa88",editUrl:"https://github.com/Apriil15/apriil15.github.io/tree/master/docs/golang/Basis/Operator \u904b\u7b97\u5b50 701a43ea335b49a19f8ebcbf90cdfa88.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Mutex \u4e92\u65a5\u9396",permalink:"/docs/golang/Basis/Mutex \u4e92\u65a5\u9396 3f467bf2e87548ac909c818b080fbb8f"},next:{title:"Package",permalink:"/docs/golang/Basis/Package f4495ea63df14ce59b5039c6137fa3ef"}},f=[{value:"&lt;&lt; and &gt;&gt; shift operator",id:"-and--shift-operator",children:[{value:"Concept",id:"concept",children:[],level:3},{value:"Example",id:"example",children:[],level:3}],level:2},{value:"AND / OR \u4f4d\u5143\u904b\u7b97\u5b50",id:"and--or-\u4f4d\u5143\u904b\u7b97\u5b50",children:[{value:"Concept",id:"concept-1",children:[],level:3},{value:"Example",id:"example-1",children:[],level:3}],level:2}],u={toc:f};function s(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"operator-\u904b\u7b97\u5b50"},"Operator \u904b\u7b97\u5b50"),(0,o.kt)("h2",{id:"-and--shift-operator"},"<< and >> shift operator"),(0,o.kt)("h3",{id:"concept"},"Concept"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"x << y")," \u2192 ",(0,o.kt)("inlineCode",{parentName:"li"},"x times 2, y times")," (x \u4e58\u4ee5 2\uff0c\u4e94\u6b21)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"x >> y")," \u2192 ",(0,o.kt)("inlineCode",{parentName:"li"},"x divided by 2, y times")," (x \u9664\u4ee5 2\uff0c\u4e94\u6b21)")),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport "fmt"\n\nfunc main() {\n    fmt.Println(1 << 5)  // 32\n    fmt.Println(32 >> 5) // 1\n}\n')),(0,o.kt)("h2",{id:"and--or-\u4f4d\u5143\u904b\u7b97\u5b50"},"AND / OR \u4f4d\u5143\u904b\u7b97\u5b50"),(0,o.kt)("h3",{id:"concept-1"},"Concept"),(0,o.kt)("p",null,"\u4f4d\u5143\u904b\u7b97\u5b50\uff1abitwise operator"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"AND"),": \u540c\u4f4d\u53bb\u6bd4\u8f03\uff0c\u5982\u679c\u90fd\u662f 1\uff0c\u624d\u6703\u662f 1"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"OR"),": \u540c\u4f4d\u53bb\u6bd4\u8f03\uff0c\u6709\u4e00\u500b\u662f 1\uff0c\u5c31\u6703\u662f 1"),(0,o.kt)("h3",{id:"example-1"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport "fmt"\n\nfunc main() {\n\n    // \u57fa\u672c\u7684\u4e8c\u9032\u4f4d\n    fmt.Printf("%02b\\n", 2) // 10\n    fmt.Printf("%02b\\n", 1) // 01\n\n    // AND OR \u4f4d\u5143\u904b\u7b97\u5b50\n    fmt.Printf("%02b\\n", 2&1) // 00\n    fmt.Printf("%02b\\n", 2|1) // 11\n}\n')))}s.isMDXComponent=!0}}]);