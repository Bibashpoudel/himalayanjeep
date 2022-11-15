"use strict";var __awaiter=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function u(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,u)}s((r=r.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.runTestsForOperation=void 0;
// monorepo
var get_path_1=require("get-path"),fs_util_1=require("fs-util"),log_1=require("log"),runTests_1=require("./runTests"),runTestsForOperation=function(e,t,n){return __awaiter(void 0,void 0,void 0,(function(){var t,r,o;return __generator(this,(function(i){switch(i.label){case 0:return[4/*yield*/,(0,get_path_1.getOperationPath)(e,{manualProjectRoot:n})];case 1:return(t=i.sent())?(r=fs_util_1.path.join(t,"build/index.js"),fs_util_1.fs.existsSync(r)?(o=require(r).test)?[2/*return*/,(0,runTests_1.runTests)(o,e)]:((0,log_1.log)("No tests found for ".concat(e),{type:"debug"}),[2/*return*/]):(console.log("Couldn't find operation build/index.js file",{operationName:e,operationIndexJsPath:r}),[2/*return*/])):(console.log("k-test:Couldn't find operation base path...",{operationName:e}),[2/*return*/])}}))}))};exports.runTestsForOperation=runTestsForOperation;
//# sourceMappingURL=runTestsForOperation.js.map