"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9097],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),d=r,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return t?a.createElement(f,o(o({ref:n},c),{},{components:t})):a.createElement(f,o({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8518:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),o=["components"],s={},l="Class",p={unversionedId:"typescript/Class 65e28bc3551c428790ec07dbd93f3d7f",id:"typescript/Class 65e28bc3551c428790ec07dbd93f3d7f",title:"Class",description:"- \u6709\u4e09\u7a2e Access Modifiers \u53ef\u4ee5\u7528\uff1apublic\u3001private\u3001protected",source:"@site/docs/typescript/Class 65e28bc3551c428790ec07dbd93f3d7f.md",sourceDirName:"typescript",slug:"/typescript/Class 65e28bc3551c428790ec07dbd93f3d7f",permalink:"/docs/typescript/Class 65e28bc3551c428790ec07dbd93f3d7f",editUrl:"https://github.com/Apriil15/apriil15.github.io/tree/master/docs/typescript/Class 65e28bc3551c428790ec07dbd93f3d7f.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Basic Command",permalink:"/docs/typescript/Basic Command b01f701b556b466daf6dfdc2830c9968"},next:{title:"Decorator",permalink:"/docs/typescript/Decorator 120f4ebdcc594a5e946b21c4917d90cf"}},c=[],m={toc:c};function u(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"class"},"Class"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u6709\u4e09\u7a2e Access Modifiers \u53ef\u4ee5\u7528\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"public"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"private"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"protected")),(0,i.kt)("p",{parentName:"li"},"  protected: \u985e\u4f3c private\uff0c\u4f46\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"\u5b50\u985e\u5225\u88e1\u9762\u53ef\u4ee5\u88ab\u8abf\u7528"),"\n")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u7e7c\u627f\u7528\u95dc\u9375\u5b57 ",(0,i.kt)("inlineCode",{parentName:"p"},"extends"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"readonly"),": \u4e0d\u80fd\u518d\u88ab\u4fee\u6539")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u57fa\u672c\u5beb\u6cd5"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"class Animal {\n  public readonly name: string\n  constructor(name: string) {\n    this.name = name\n  }\n\n  public SayHi() {\n    console.log(`${this.name} say hi`)\n  }\n}\n\nconst animal = new Animal('test')\nconsole.log(animal)\n\n// readonly \u4e0d\u80fd\u88ab\u4fee\u6539\uff0c\u6703\u5831\u932f\nanimal.name = 'test2'\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"static \u975c\u614b\u5c6c\u6027\u3001\u65b9\u6cd5"),(0,i.kt)("p",{parentName:"li"},"  \u4e0d\u9700\u8981 instance\uff0c\u53ef\u4ee5\u76f4\u63a5\u7528 class \u540d\u7a31\u547c\u53eb"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'class Animal {\n  public name: string;\n  public static order = 1;\n\n  constructor(name: string) {\n    this.name = name;\n  }\n\n  static SayHi() {\n    console.log("Hi!");\n  }\n}\n\nAnimal.SayHi();\nconsole.log(Animal.order);\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Abstract Class"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u4f5c\u70ba\u57fa\u5e95")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u65b9\u6cd5\u53ef\u4ee5",(0,i.kt)("inlineCode",{parentName:"p"},"\u5be6\u73fe"),"\u6216\u5beb\u6210 ",(0,i.kt)("inlineCode",{parentName:"p"},"abstract"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5beb\u6210 abstract \u7684\u597d\u8655\u662f\u53ef\u4ee5\u5f37\u8feb ",(0,i.kt)("inlineCode",{parentName:"p"},"extends")," \u7684 class \u90fd\u8981\u5be6\u73fe\u65b9\u6cd5"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"abstract class Animal {\n  // \u5b50\u985e\u5225\u624d\u53ef\u8abf\u7528\n  protected name: string\n\n  constructor(name: string) {\n    this.name = name\n  }\n\n  abstract sayHi(): void\n}\n\nclass Dog extends Animal {\n  // \u5982\u679c\u5efa\u69cb\u5b50\u4e00\u6a23\uff0c\u53ef\u4ee5\u4e0d\u5beb\n  constructor(name: string) {\n    super(name)\n  }\n\n  // need to implement\n  sayHi(): void {\n    console.log(`${this.name} say hi!`)\n  }\n}\n\nconst dog: Dog = new Dog('Doggy')\ndog.sayHi()\n"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Parameter Properties\uff08\u7cbe\u7c21\u7684\u5beb\u6cd5\uff09"),(0,i.kt)("p",{parentName:"li"},"  \u628a\u4fee\u98fe\u8a5e\u5beb\u5728\u5efa\u69cb\u5b50\u88e1\u9762"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"class Student {\n  constructor(public name: string, private age: number) {}\n}\n\nconst student = new Student('Sam', 27)\n\nconsole.log(student.name)\n")),(0,i.kt)("p",{parentName:"li"},"  \u7b49\u540c\u6b64\u5beb\u6cd5"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"class Student {\n  name: string;\n  age: number;\n  constructor(name: string, age: number) {\n    this.name = name;\n    this.age = age;\n  }\n}\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Strict Class Initialization"),(0,i.kt)("p",{parentName:"li"},"  \u5c6c\u6027\u8981\u5728\u5efa\u69cb\u5b50\u76f4\u63a5\u7d66\u503c\u6216\u6709\u521d\u59cb\u503c"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"class C {\n  foo: number;\n  bar = \"hello\";\n  baz: boolean;\n  //  ~~~\n  //  Error! Property 'baz' has no initializer and is not definitely assigned in the\n  //         constructor.\n  constructor() {\n    this.foo = 42;\n  }\n}\n")),(0,i.kt)("p",{parentName:"li"},"  \u56e0\u70ba\u5728 _initialize() \u6703\u9593\u63a5\u7d66 foo \u503c\uff0c\u6240\u4ee5\u5728 foo \u5c6c\u6027\u52a0\u4e0a ",(0,i.kt)("inlineCode",{parentName:"p"},"!")," (definite assignment assertion)"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"class C {\n  foo!: number;\n  // ^\n  // Notice this '!' modifier.\n  // This is the \"definite assignment assertion\"\n  constructor() {\n    this._initialize(); // \u9593\u63a5\u521d\u59cb\u5316\n  }\n\n  private _initialize() {\n    this.foo = 0;\n  }\n}\n")),(0,i.kt)("p",{parentName:"li"},"  Ref: ",(0,i.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-7.html"},"https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-7.html")))))}u.isMDXComponent=!0}}]);