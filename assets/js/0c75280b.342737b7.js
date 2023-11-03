"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6720],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),g=o,f=c["".concat(s,".").concat(g)]||c[g]||m[g]||i;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},1603:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const i={slug:"customize-windows-terminal",title:"Customize Windows Terminal",authors:"apriil15",tags:["terminal"]},a=void 0,l={permalink:"/blog/customize-windows-terminal",editUrl:"https://github.com/Apriil15/apriil15.github.io/tree/master/blog/2022-01-16-customize-windows-terminal/index.md",source:"@site/blog/2022-01-16-customize-windows-terminal/index.md",title:"Customize Windows Terminal",description:"\u5de5\u4f5c\u4e0a\u4f7f\u7528 Mac \u6709 iTerm2 + oh my zsh\uff0c\u9084\u6709 autosuggestions\uff08\u89e3\u6551\u84bc\u751f QQ\uff09",date:"2022-01-16T00:00:00.000Z",formattedDate:"January 16, 2022",tags:[{label:"terminal",permalink:"/blog/tags/terminal"}],readingTime:3.575,hasTruncateMarker:!0,authors:[{name:"apriil15",title:"Backend Engineer",url:"https://github.com/apriil15",imageURL:"https://github.com/apriil15.png",key:"apriil15"}],frontMatter:{slug:"customize-windows-terminal",title:"Customize Windows Terminal",authors:"apriil15",tags:["terminal"]},prevItem:{title:"Something you should know about Event Loop",permalink:"/blog/event-loop"},nextItem:{title:"\u56de\u9867 2021",permalink:"/blog/review-2021"}},s={authorsImageUrls:[void 0]},p=[],u={toc:p},c="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5de5\u4f5c\u4e0a\u4f7f\u7528 Mac \u6709 ",(0,o.kt)("a",{parentName:"p",href:"https://iterm2.com/"},"iTerm2")," + ",(0,o.kt)("a",{parentName:"p",href:"https://ohmyz.sh/"},"oh my zsh"),"\uff0c\u9084\u6709 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/zsh-users/zsh-autosuggestions"},"autosuggestions"),"\uff08\u89e3\u6551\u84bc\u751f QQ\uff09"),(0,o.kt)("p",null,"\u96d6\u7136\u5bb6\u88e1 Windows \u96fb\u8166\u5b89\u88dd\u4e86 WSL\uff0c\u4f46\u6709\u6642\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"gcloud"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl"),"\uff0c\u6703\u6709\u5f88\u6162\u7684\u554f\u984c"),(0,o.kt)("p",null,"PowerShell \u53c8\u4e00\u76f4\u89ba\u5f97\u96e3\u770b\u4e14\u4e0d\u597d\u7528 XD\uff0c\u56e0\u6b64\u641c\u5c0b\u4e86\u4e00\u4e0b\u600e\u9ebc\u4fee\u6539 Windows Terminal"),(0,o.kt)("p",null,"\u4e3b\u8981\u662f\u7b46\u8a18\u7d66\u672a\u4f86\u63db\u65b0\u96fb\u8166\u7684\u81ea\u5df1\uff0c\u4ee5\u53ca\u5206\u4eab\u7d66\u6709\u9700\u8981\u7684\u4eba"))}m.isMDXComponent=!0}}]);