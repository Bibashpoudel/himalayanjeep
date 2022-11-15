"use strict";var __awaiter=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{s(r.next(e))}catch(e){o(e)}}function u(e){try{s(r.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,u)}s((r=r.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=i.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.getAugmentedWordObject=exports.getAugmentedWords=exports.getBundleAugmentedWords=void 0;var fs_util_1=require("fs-util"),js_util_1=require("js-util"),get_path_1=require("get-path"),database_1=require("database"),js_util_2=require("js-util"),getBundleAugmentedWords=function(){return __awaiter(void 0,void 0,void 0,(function(){var e;return __generator(this,(function(t){switch(t.label){case 0:return[4/*yield*/,database_1.db.get("BundleConfig")];case 1:return e=t.sent(),[2/*return*/,e.map((function(e){return{queryPath:e.docsRelativeFolderPath,spoiler:e.name,type:"bundle",word:e.slug}}))]}}))}))};exports.getBundleAugmentedWords=getBundleAugmentedWords;
/**

Gets all augmented words of the entire project

- words with their definitions, if available (`/dictionary?word=x`)
- functions, interfaces, variables, operations (`/[operation-path]#name`)
- if this is a non-sensible-project, also bundles (`/[docs-path]`)

 */
var getAugmentedWords=function(e){return __awaiter(void 0,void 0,void 0,(function(){var t,n,r,a,o,i,u,s,c,d,l,p,_,f,m,g,h;return __generator(this,(function(v){switch(v.label){case 0:return[4/*yield*/,database_1.db.get("OperationIndex")];case 1:return t=v.sent(),[4/*yield*/,database_1.db.get("OperationConfig")];case 2:return n=v.sent(),r=t.map((function(t){var r,a=fs_util_1.path.join(e,t.projectRelativePath),o=(0,get_path_1.findOperationBasePath)(a);if(o){var i=null===(r=n.find((function(e){return e.operationName===t.operationName})))||void 0===r?void 0:r.markdown;return{queryPath:(0,get_path_1.makeRelative)(o,e),spoiler:i,type:"operation",word:t.name}}})).filter(js_util_2.notEmpty),[4/*yield*/,database_1.db.get("TsVariable",{manualProjectRoot:e})];case 3:return a=v.sent(),[4/*yield*/,database_1.db.get("TsFunction",{manualProjectRoot:e})];case 4:return o=v.sent(),[4/*yield*/,database_1.db.get("TsInterface",{manualProjectRoot:e})];case 5:return i=v.sent(),u=i.map((function(t){var n,r=fs_util_1.path.join(e,t.projectRelativePath),a=(0,get_path_1.findOperationBasePath)(r);
// NB: TODO: figure out of this is always correct, this path must exist!
if(a){var o=(0,get_path_1.makeRelative)(a,e);return{queryPath:"".concat(o,"#").concat(t.name),spoiler:null===(n=t.type.simplifiedSchema)||void 0===n?void 0:n.description,type:"type",word:t.name}}})).filter(js_util_2.notEmpty),s=o.map((function(t){
// NB: TODO: figure out of this is always correct, this path must exist!
var n=fs_util_1.path.join(e,t.projectRelativePath),r=(0,get_path_1.findOperationBasePath)(n);if(r){var a=(0,get_path_1.makeRelative)(r,e);return{queryPath:"".concat(a,"#").concat(t.name),spoiler:t.description,type:"function",word:t.name}}})).filter(js_util_2.notEmpty),c=a.map((function(t){var n,r=fs_util_1.path.join(e,t.projectRelativePath),a=(0,get_path_1.findOperationBasePath)(r);
// NB: TODO: figure out of this is always correct, this path must exist!
if(a){var o=(0,get_path_1.makeRelative)(a,e);return{queryPath:"".concat(o,"#").concat(t.name),spoiler:null===(n=t.type.simplifiedSchema)||void 0===n?void 0:n.description,type:"variable",word:t.name}}})).filter(js_util_2.notEmpty),d=[{referenceKey:"english_wordSlug"},{referenceKey:"root_wordSlug"},{referenceKey:"common_wordSlug"},{referenceKey:"definition_statementId"}],[4/*yield*/,database_1.db.get("Word",{manualProjectRoot:e,include:d})];case 6:return l=v.sent(),[4/*yield*/,database_1.db.get("MarkdownWord")];case 7:return p=v.sent(),[4/*yield*/,database_1.db.get("KvmdWord")];case 8:return _=v.sent(),f=_.map((function(e){return{queryPath:"dictionary?word=".concat(e.name),type:"word",spoiler:e.value?String(e.value):void 0,word:e.name,isCaseInsensitive:!0}})),m=p.map((function(e){return{queryPath:"dictionary?word=".concat(e.name),type:"word",spoiler:e.markdown,word:e.name,isCaseInsensitive:!0}})),g=l.map((function(e){var t;return{queryPath:"dictionary?word=".concat(e.slug),type:"word",spoiler:null===(t=e.definition_statement)||void 0===t?void 0:t.name,word:e.name,isCaseInsensitive:!0}})),(0,get_path_1.isSensibleProject)(e)?(h=void 0,[3/*break*/,11]):[3/*break*/,9];case 9:return[4/*yield*/,(0,exports.getBundleAugmentedWords)()];case 10:h=v.sent(),v.label=11;case 11:return[2/*return*/,[h,r,c,s,u,
//words
g,f,m].filter(js_util_2.notEmpty).flat()]}}))}))};exports.getAugmentedWords=getAugmentedWords;var cache=void 0,getAugmentedWordObject=function(e){return __awaiter(void 0,void 0,void 0,(function(){var t,n;return __generator(this,(function(r){switch(r.label){case 0:return cache?[2/*return*/,cache]:[4/*yield*/,(0,exports.getAugmentedWords)(e)];case 1:return t=r.sent().map((function(e){return(0,js_util_1.omitUndefinedValues)(e)})),n=(0,js_util_1.createMappedObject)(t,"word"),cache=n,[2/*return*/,n]}}))}))};exports.getAugmentedWordObject=getAugmentedWordObject;
//# sourceMappingURL=augmented-words.js.map