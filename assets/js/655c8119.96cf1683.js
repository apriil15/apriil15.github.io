"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5768],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),f=l(n),d=a,m=f["".concat(i,".").concat(d)]||f[d]||s[d]||o;return n?r.createElement(m,c(c({ref:t},u),{},{components:n})):r.createElement(m,c({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=f;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,c[1]=p;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},338:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return u},default:function(){return f}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),c=["components"],p={},i="Module",l={unversionedId:"typescript/Module be6611d03c3c492bbf5af7cd7b6ffcf1",id:"typescript/Module be6611d03c3c492bbf5af7cd7b6ffcf1",title:"Module",description:"- \u95dc\u9375\u5b57\uff1aexport\u3001import",source:"@site/docs/typescript/Module be6611d03c3c492bbf5af7cd7b6ffcf1.md",sourceDirName:"typescript",slug:"/typescript/Module be6611d03c3c492bbf5af7cd7b6ffcf1",permalink:"/docs/typescript/Module be6611d03c3c492bbf5af7cd7b6ffcf1",editUrl:"https://github.com/Apriil15/apriil15.github.io/tree/master/docs/typescript/Module be6611d03c3c492bbf5af7cd7b6ffcf1.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Mapped Type",permalink:"/docs/typescript/Mapped Type 45fd9b5943e54b16a2562c7d4b98e83b"},next:{title:"Non-null assertion operator",permalink:"/docs/typescript/Non-null assertion operator fb773532dac04ac1b433d24632a3e57d"}},u=[],s={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"module"},"Module"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u95dc\u9375\u5b57\uff1a",(0,o.kt)("inlineCode",{parentName:"li"},"export"),"\u3001",(0,o.kt)("inlineCode",{parentName:"li"},"import"))),(0,o.kt)("p",null,"student.ts"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"export class Student {\n  name: string;\n  constructor(name: string) {\n    this.name = name;\n  }\n  printName = () => {\n    console.log(this.name);\n  };\n}\n\nexport let age: number = 38;\n")),(0,o.kt)("p",null,"\u6709\u4e09\u7a2e\u65b9\u5f0f\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"import \u7279\u5b9a\u6771\u897f",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Student, age } from "./student";\n\nlet student = new Student("Kappa");\nstudent.printName();\n\nconsole.log(age);\n'))),(0,o.kt)("li",{parentName:"ul"},"\u6574\u500b import",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import * as Student from "./student";\n\nlet student = new Student.Student("Kappa");\nstudent.printName();\n\nconsole.log(Student.age);\n'))),(0,o.kt)("li",{parentName:"ul"},"import \u4e26\u4fee\u6539\u547d\u540d",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Student as Stu, age as ageTest } from "./student";\n\nlet student = new Stu("Kappa");\nstudent.printName();\n\nconsole.log(ageTest);\n')))))}f.isMDXComponent=!0}}]);