"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3490],{3905:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},o=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),u=p(n),f=a,d=u["".concat(l,".").concat(f)]||u[f]||m[f]||s;return n?r.createElement(d,c(c({ref:t},o),{},{components:n})):r.createElement(d,c({ref:t},o))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,c=new Array(s);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:a,c[1]=i;for(var p=2;p<s;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},422:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const s={},c="Unit Test",i={unversionedId:"typescript/Unit Test 7f512124c38f48439f24e2126cc76079",id:"typescript/Unit Test 7f512124c38f48439f24e2126cc76079",title:"Unit Test",description:"Using Mocha",source:"@site/docs/typescript/Unit Test 7f512124c38f48439f24e2126cc76079.md",sourceDirName:"typescript",slug:"/typescript/Unit Test 7f512124c38f48439f24e2126cc76079",permalink:"/docs/typescript/Unit Test 7f512124c38f48439f24e2126cc76079",draft:!1,editUrl:"https://github.com/Apriil15/apriil15.github.io/tree/master/docs/typescript/Unit Test 7f512124c38f48439f24e2126cc76079.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Type Assertion / Casting",permalink:"/docs/typescript/Type Assertion Casting 48ca06d1eec34f1db3cadfba7c113221"},next:{title:"@IsOptional()",permalink:"/docs/typescript/class-validator/@IsOptional() 3fdae292e33c4c15952d5807c02023c5"}},l={},p=[{value:"Reference",id:"reference",level:2}],o={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"unit-test"},"Unit Test"),(0,a.kt)("p",null,"Using ",(0,a.kt)("a",{parentName:"p",href:"https://mochajs.org/"},"Mocha")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5b89\u88dd\u76f8\u95dc\u5957\u4ef6")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"npm install --global mocha\nnpm install @types/mocha --save-dev\n\nnpm install chai --save-dev\nnpm install @types/chai --save-dev\n\nnpm install assert --save-dev\nnpm install @types/assert--save-dev\n")),(0,a.kt)("p",null,"\u8981\u6e2c\u8a66\u7684 code"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8def\u5f91\uff1aindex.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"export function sum(x: number, y: number): number {\n  return x + y;\n}\n")),(0,a.kt)("p",null,"\u6e2c\u8a66\u5beb\u6cd5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8def\u5f91\uff1atest/test.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { sum } from "../index";\nimport assert from "assert";\nimport * as chai from "chai";\n\ndescribe("index.ts", () => {\n  it("sum by assert", () => {\n    assert.strictEqual(3, sum(1, 2));\n  });\n\n  it("sum by chai", () => {\n    chai.expect(sum(2, 5)).to.equal(7);\n  });\n});\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"package.json")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'// scripts \u52a0\u5165\n"test": "mocha --require ts-node/register test/*.ts"\n')),(0,a.kt)("p",null,"\u6700\u5f8c\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"p"},"npm test")," \u57f7\u884c"),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://medium.com/twelvefish/%E4%BD%BF%E7%94%A8-typescript-%E6%92%B0%E5%AF%AB-mocha%E6%B8%AC%E8%A9%A6-a4eda437fa53"},"\u4f7f\u7528 TypeScript \u64b0\u5beb mocha\u6e2c\u8a66")))}m.isMDXComponent=!0}}]);