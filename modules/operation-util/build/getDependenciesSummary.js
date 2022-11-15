"use strict";var __awaiter=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(a,i){function o(e){try{u(r.next(e))}catch(e){i(e)}}function c(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){var n;e.done?a(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,c)}u((r=r.apply(e,n||[])).next())}))},__generator=this&&this.__generator||function(e,n){var t,r,a,i,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;o;)try{if(t=1,r&&(a=2&i[0]?r.return:i[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,i[1])).done)return a;switch(r=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,r=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!(a=o.trys,(a=a.length>0&&a[a.length-1])||6!==i[0]&&2!==i[0])){o=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){o.label=i[1];break}if(6===i[0]&&o.label<a[1]){o.label=a[1],a=i;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(i);break}a[2]&&o.ops.pop(),o.trys.pop();continue}i=n.call(e,o)}catch(e){i=[6,e],r=0}finally{t=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.getDependenciesSummary=void 0;var database_1=require("database"),getDependenciesSummary=function(e){return __awaiter(void 0,void 0,void 0,(function(){var n,t,r,a;return __generator(this,(function(i){switch(i.label){case 0:return[4/*yield*/,database_1.db.get("TsImport",{operationName:e})];case 1:return n=i.sent(),t=n.filter((function(e){return["node","react"].includes(e.classification)})).map((function(e){return e.name})),r=n.filter((function(e){return["operation"].includes(e.classification)})).map((function(e){return e.name})),a=n.filter((function(e){return["package"].includes(e.classification)})).map((function(e){return e.name})),[2/*return*/,{coreDependencies:t,operationDependencies:r,packageDependencies:a}]}}))}))};exports.getDependenciesSummary=getDependenciesSummary;
//# sourceMappingURL=getDependenciesSummary.js.map