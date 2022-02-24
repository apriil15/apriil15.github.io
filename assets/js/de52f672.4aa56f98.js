"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2286],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=u(t),d=a,s=f["".concat(c,".").concat(d)]||f[d]||m[d]||i;return t?r.createElement(s,o(o({ref:n},p),{},{components:t})):r.createElement(s,o({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=f;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},3577:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return f}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),o=["components"],l={},c="new vs make",u={unversionedId:"golang/new vs make 6e652078954d46a1912015dfee26aae2",id:"golang/new vs make 6e652078954d46a1912015dfee26aae2",title:"new vs make",description:"new",source:"@site/docs/golang/new vs make 6e652078954d46a1912015dfee26aae2.md",sourceDirName:"golang",slug:"/golang/new vs make 6e652078954d46a1912015dfee26aae2",permalink:"/docs/golang/new vs make 6e652078954d46a1912015dfee26aae2",editUrl:"https://github.com/Apriil15/apriil15.github.io/tree/master/docs/golang/new vs make 6e652078954d46a1912015dfee26aae2.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Gin",permalink:"/docs/golang/Gin 2296fd8a8a5c485ebc21d8b88b945b79"},next:{title:"\u5728 Linux \u5b89\u88dd Golang",permalink:"/docs/golang/\u5728 Linux \u5b89\u88dd Golang f7016ebfe7224fb1b59a738b1f209909"}},p=[{value:"new",id:"new",children:[],level:2},{value:"make",id:"make",children:[],level:2},{value:"Reference",id:"reference",children:[],level:2}],m={toc:p};function f(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"new-vs-make"},"new vs make"),(0,i.kt)("h2",{id:"new"},"new"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u56de\u50b3 ",(0,i.kt)("inlineCode",{parentName:"li"},"pointer")),(0,i.kt)("li",{parentName:"ul"},"\u6703\u521d\u59cb\u5c0d\u61c9\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"zero value")," \uff08\u65b9\u4fbf\u7684\u5730\u65b9\uff0c\u53ef\u4ee5\u5feb\u901f\u521d\u59cb\u5316\uff09\nint \u2192 ",(0,i.kt)("inlineCode",{parentName:"li"},"0"),"\nstring \u2192 ",(0,i.kt)("inlineCode",{parentName:"li"},'""'),"\nslice, map, channel \u2192 ",(0,i.kt)("inlineCode",{parentName:"li"},"nil"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport "fmt"\n\nfunc main() {\n    // \u53ef\u4ee5\u5feb\u901f\u7684\u521d\u59cb\u5316\uff0c\u4f46\u7121\u6cd5\u5ba2\u88fd\u5316\n    student := new(Student)           // pointer\n    fmt.Printf("%#v\\n", student)      // &main.Student{Name:"", Age:0}\n    fmt.Printf("%#v\\n", student.Name) // ""\n    fmt.Println(student.Age)          // 0\n}\n\n// \u6bd4\u8f03\u5e38\u9019\u6a23\u505a\nfunc (s *Student) New(name string, age int) *Student {\n    return &Student{\n        Name: name,\n        Age:  age,\n    }\n}\n\ntype Student struct {\n    Name string\n    Age  int\n}\n')),(0,i.kt)("h2",{id:"make"},"make"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u56de\u50b3 type"),(0,i.kt)("li",{parentName:"ul"},"\u901a\u5e38\u7528\u65bc ",(0,i.kt)("inlineCode",{parentName:"li"},"slice"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"map"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"channel"))),(0,i.kt)("h2",{id:"reference"},"Reference"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://blog.wu-boy.com/2021/06/what-is-different-between-new-and-make-in-golang/"},"Go \u8a9e\u8a00\u5167 new \u8ddf make \u4f7f\u7528\u6642\u6a5f")))}f.isMDXComponent=!0}}]);