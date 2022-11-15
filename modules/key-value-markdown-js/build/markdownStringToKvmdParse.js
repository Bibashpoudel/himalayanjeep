#!/usr/bin/env node
"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var s in t=arguments[r])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},__assign.apply(this,arguments)},__rest=this&&this.__rest||function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(a=Object.getOwnPropertySymbols(e);s<a.length;s++)t.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]])}return r};Object.defineProperty(exports,"__esModule",{value:!0}),exports.markdownStringToKvmdParse=void 0;var convert_case_1=require("convert-case"),make_test_1=require("make-test"),markdown_parse_js_1=require("markdown-parse-js"),example_1=require("./example"),getKvmdItemsRecursively_1=require("./getKvmdItemsRecursively"),markdownStringToKvmdParse=function(e,t){var r=(0,markdown_parse_js_1.mdToJsonParse)(e),a=r.parameters,s=r.content,n=(t.absolutePath,t.modelName),o=__rest(t,["absolutePath","modelName"]),i="parent_".concat((0,convert_case_1.camelCase)(n),"Slug");if(!s)return console.log("NO CONTENT FOUND"),{parameters:{},data:[]};var m=s.map((function(e){return(0,getKvmdItemsRecursively_1.getKvmdItemsRecursively)(e)})).flat().map((function(e){var t;return __assign(__assign(__assign({},e),o),((t={})[i]=e.categoryStackCalculated[e.categoryStackCalculated.length-1],t))}));return{parameters:a,data:m}};exports.markdownStringToKvmdParse=markdownStringToKvmdParse;var test=(0,make_test_1.makeTest)((function(){return(0,exports.markdownStringToKvmdParse)(example_1.exampleKvMdString,{modelName:"Test",absolutePath:"/ss/ss/s/s/testksjsk.md",operationName:null,projectRelativePath:"test.md"})}),(function(e){return JSON.stringify(e)===JSON.stringify(example_1.exampleKeyValueMarkdownParse)}));
//# sourceMappingURL=markdownStringToKvmdParse.js.map