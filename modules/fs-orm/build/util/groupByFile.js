"use strict";var __awaiter=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{l(r.next(e))}catch(e){i(e)}}function u(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,u)}l((r=r.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.groupByFile=void 0;var js_util_1=require("js-util"),getDbFileLocation_1=require("../convention/getDbFileLocation"),addDefaultValues_1=require("../convention/addDefaultValues"),storing_items_1=require("../convention/storing-items"),groupByFile=function(e,t,n){return __awaiter(void 0,void 0,void 0,(function(){var r;return __generator(this,(function(o){switch(o.label){case 0:return[4/*yield*/,Promise.all(e.map((function(e){return __awaiter(void 0,void 0,void 0,(function(){var r,o,i,a;return __generator(this,(function(u){switch(u.label){case 0:return e?(r=(0,addDefaultValues_1.addDefaultValues)(e),o=(0,storing_items_1.makeStoringItem)(r),i=(0,storing_items_1.getItemModelLocation)(r),[4/*yield*/,(0,getDbFileLocation_1.getDbFileLocation)(o,i.operationName,t,n)]):(console.log("WARN"),[2/*return*/]);case 1:return(a=u.sent())?[2/*return*/,{storingItem:o,dbFileLocation:a}]:[2/*return*/]}}))}))})))];case 1:return r=o.sent().filter(js_util_1.notEmpty),[2/*return*/,r.reduce((function(e,t){var n=t.dbFileLocation.absolutePath,r=e[n]?e[n].items.concat(t.storingItem):[t.storingItem];return e[n]={items:r,dbFileLocation:t.dbFileLocation},e}),{})]}}))}))};exports.groupByFile=groupByFile;
//# sourceMappingURL=groupByFile.js.map