"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5786],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=u(n),d=a,g=f["".concat(l,".").concat(d)]||f[d]||s[d]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3579:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return f}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={},l="HTTP",u={unversionedId:"golang/Basis/HTTP a18ce7d99fda47c7a005313f20689c19",id:"golang/Basis/HTTP a18ce7d99fda47c7a005313f20689c19",title:"HTTP",description:"",source:"@site/docs/golang/Basis/HTTP a18ce7d99fda47c7a005313f20689c19.md",sourceDirName:"golang/Basis",slug:"/golang/Basis/HTTP a18ce7d99fda47c7a005313f20689c19",permalink:"/docs/golang/Basis/HTTP a18ce7d99fda47c7a005313f20689c19",editUrl:"https://github.com/Apriil15/apriil15.github.io/tree/master/docs/golang/Basis/HTTP a18ce7d99fda47c7a005313f20689c19.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Goroutine",permalink:"/docs/golang/Basis/Goroutine 4cd92501f453408bab638e1586017332"},next:{title:"Map",permalink:"/docs/golang/Basis/Map f2432b435b724172ae41501781ad7011"}},p=[],s={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"http"},"HTTP"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "log"\n    "net/http"\n)\n\nfunc main() {\n    // route\n    http.HandleFunc("/hello", helloHandler)\n    http.HandleFunc("/bad", badHandler)\n    http.HandleFunc("/good", goodHandler)\n\n    err := http.ListenAndServe(":8080", nil)\n    log.Fatal(err)\n}\n\nfunc helloHandler(writer http.ResponseWriter, request *http.Request) {\n    write(writer, "Hello")\n}\n\nfunc badHandler(writer http.ResponseWriter, request *http.Request) {\n    write(writer, "Bad")\n}\n\nfunc goodHandler(writer http.ResponseWriter, request *http.Request) {\n    write(writer, "Good")\n}\n\nfunc write(writer http.ResponseWriter, str string) {\n    _, err := writer.Write([]byte(str))\n    if err != nil {\n        log.Fatal(err)\n    }\n}\n')))}f.isMDXComponent=!0}}]);