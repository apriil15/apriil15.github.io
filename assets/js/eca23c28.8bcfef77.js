"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6361],{3905:(e,t,r)=>{r.d(t,{Zo:()=>g,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),i=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},g=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,g=c(e,["components","mdxType","originalType","parentName"]),s=i(r),m=a,f=s["".concat(p,".").concat(m)]||s[m]||u[m]||o;return r?n.createElement(f,l(l({ref:t},g),{},{components:r})):n.createElement(f,l({ref:t},g))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[s]="string"==typeof e?e:a,l[1]=c;for(var i=2;i<o;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6890:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var n=r(7462),a=(r(7294),r(3905));const o={},l="\u5b89\u88dd\u76f8\u95dc\u5957\u4ef6",c={unversionedId:"golang/gRPC/\u5b89\u88dd\u76f8\u95dc\u5957\u4ef6 0fa32e2693fc4ca5b9cb00e73882bce6",id:"golang/gRPC/\u5b89\u88dd\u76f8\u95dc\u5957\u4ef6 0fa32e2693fc4ca5b9cb00e73882bce6",title:"\u5b89\u88dd\u76f8\u95dc\u5957\u4ef6",description:"- \u5b89\u88dd compiler",source:"@site/docs/golang/gRPC/\u5b89\u88dd\u76f8\u95dc\u5957\u4ef6 0fa32e2693fc4ca5b9cb00e73882bce6.md",sourceDirName:"golang/gRPC",slug:"/golang/gRPC/\u5b89\u88dd\u76f8\u95dc\u5957\u4ef6 0fa32e2693fc4ca5b9cb00e73882bce6",permalink:"/docs/golang/gRPC/\u5b89\u88dd\u76f8\u95dc\u5957\u4ef6 0fa32e2693fc4ca5b9cb00e73882bce6",draft:!1,editUrl:"https://github.com/Apriil15/apriil15.github.io/tree/master/docs/golang/gRPC/\u5b89\u88dd\u76f8\u95dc\u5957\u4ef6 0fa32e2693fc4ca5b9cb00e73882bce6.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Gin",permalink:"/docs/golang/Gin 2296fd8a8a5c485ebc21d8b88b945b79"},next:{title:"\u6982\u5ff5",permalink:"/docs/golang/gRPC/\u6982\u5ff5 a05f6e5c0f034170a93be32f866d387b"}},p={},i=[{value:"Reference",id:"reference",level:2}],g={toc:i};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5b89\u88dd\u76f8\u95dc\u5957\u4ef6"},"\u5b89\u88dd\u76f8\u95dc\u5957\u4ef6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5b89\u88dd compiler","  \u4f9d\u7167 OS \u5b89\u88dd","  ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/protocolbuffers/protobuf/releases"},"Releases \xb7 protocolbuffers/protobuf"),"  \u628a\u89e3\u58d3\u7e2e\u5f8c\u7684\u8cc7\u6599\u593e\u653e\u5230 ",(0,a.kt)("inlineCode",{parentName:"li"},"C:\\Users\\user\\go"),"  ",(0,a.kt)("img",{parentName:"li",src:"https://i.imgur.com/qEukb3s.png",alt:"https://i.imgur.com/qEukb3s.png"}),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"bin \u88e1\u9762\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"protoc.exe")," \u653e\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"C:\\Users\\user\\go\\bin")," \u88e1\u9762")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"include  \u8cc7\u6599\u593e"),"\u76f4\u63a5\u62c9\u904e\u53bb"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/QWtNOX2.png",alt:"https://i.imgur.com/QWtNOX2.png"})),(0,a.kt)("p",{parentName:"li"},"\u78ba\u8a8d\u6709\u6210\u529f\u5b89\u88dd"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"protoc --version\n"))))),(0,a.kt)("li",{parentName:"ul"},"\u5b89\u88dd protoc-gen-go","  \u624d\u53ef\u4ee5\u5c07 proto buffer \u7de8\u8b6f\u6210 Golang \u53ef\u4f7f\u7528\u7684\u6a94\u6848",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"go get github.com/golang/protobuf/protoc-gen-go\n"))),(0,a.kt)("li",{parentName:"ul"},"\u5b89\u88dd gRPC","  \u624d\u53ef\u4ee5\u5728 Golang \u4e2d\u4f7f\u7528 gRPC",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"go get -u google.golang.org/grpc\n")))),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://pjchender.dev/golang/grpc-getting-started#grpc-%E7%9A%84%E5%9B%9B%E7%A8%AE%E9%A1%9E%E5%9E%8B"},"[gRPC] gRPC Getting Started | PJCHENder \u672a\u6574\u7406\u7b46\u8a18")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://ithelp.ithome.com.tw/articles/10250131"},"# Day31 Golang Protobuf \u4ecb\u7d39\u8207\u4f7f\u7528 - iT \u90a6\u5e6b\u5fd9::\u4e00\u8d77\u5e6b\u5fd9\u89e3\u6c7a\u96e3\u984c\uff0c\u62ef\u6551 IT \u4eba\u7684\u4e00\u5929")))}s.isMDXComponent=!0}}]);