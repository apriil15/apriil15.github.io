"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1817],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),f=l(n),m=a,d=f["".concat(s,".").concat(m)]||f[m]||u[m]||c;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<c;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2137:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return f}});var r=n(7462),a=n(3366),c=(n(7294),n(3905)),i=["components"],o={},s="Unit Test (Mocha + TS)",l={unversionedId:"typescript/Unit Test (Mocha + TS) 7f512124c38f48439f24e2126cc76079",id:"typescript/Unit Test (Mocha + TS) 7f512124c38f48439f24e2126cc76079",title:"Unit Test (Mocha + TS)",description:"- \u5b89\u88dd\u76f8\u95dc\u5957\u4ef6",source:"@site/docs/typescript/Unit Test (Mocha + TS) 7f512124c38f48439f24e2126cc76079.md",sourceDirName:"typescript",slug:"/typescript/Unit Test (Mocha + TS) 7f512124c38f48439f24e2126cc76079",permalink:"/docs/typescript/Unit Test (Mocha + TS) 7f512124c38f48439f24e2126cc76079",editUrl:"https://github.com/Apriil15/apriil15.github.io/tree/master/docs/typescript/Unit Test (Mocha + TS) 7f512124c38f48439f24e2126cc76079.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Type Assertion / Casting",permalink:"/docs/typescript/Type Assertion Casting 48ca06d1eec34f1db3cadfba7c113221"},next:{title:".d.ts file",permalink:"/docs/typescript/d ts file 7d7b65e579434621909180d4a6f6f750"}},p=[{value:"Reference",id:"reference",children:[],level:2}],u={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,c.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"unit-test-mocha--ts"},"Unit Test (Mocha + TS)"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"\u5b89\u88dd\u76f8\u95dc\u5957\u4ef6")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-powershell"},"npm install --global mocha\nnpm install @types/mocha --save-dev\n\nnpm install chai --save-dev\nnpm install @types/chai --save-dev\n\nnpm install assert --save-dev\nnpm install @types/assert--save-dev\n")),(0,c.kt)("p",null,"\u8981\u6e2c\u8a66\u7684 code"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"\u8def\u5f91\uff1aindex.ts")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-tsx"},"export function sum(x: number, y: number): number {\n  return x + y;\n}\n")),(0,c.kt)("p",null,"\u6e2c\u8a66\u5beb\u6cd5"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"\u8def\u5f91\uff1atest/test.ts")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-tsx"},'import { sum } from "../index";\nimport assert from "assert";\nimport * as chai from "chai";\n\ndescribe("index.ts", () => {\n  it("sum by assert", () => {\n    assert.strictEqual(3, sum(1, 2));\n  });\n\n  it("sum by chai", () => {\n    chai.expect(sum(2, 5)).to.equal(7);\n  });\n});\n')),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"package.json")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-json"},'// scripts \u52a0\u5165\n"test": "mocha --require ts-node/register test/*.ts"\n')),(0,c.kt)("p",null,"\u6700\u5f8c\u4ee5 ",(0,c.kt)("inlineCode",{parentName:"p"},"npm test")," \u57f7\u884c"),(0,c.kt)("h2",{id:"reference"},"Reference"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"https://medium.com/twelvefish/%E4%BD%BF%E7%94%A8-typescript-%E6%92%B0%E5%AF%AB-mocha%E6%B8%AC%E8%A9%A6-a4eda437fa53"},"\u4f7f\u7528 TypeScript \u64b0\u5beb mocha\u6e2c\u8a66")),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"https://mochajs.org/"},"Mocha - the fun, simple, flexible JavaScript test framework")))}f.isMDXComponent=!0}}]);