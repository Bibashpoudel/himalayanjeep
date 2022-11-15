"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},__assign.apply(this,arguments)},__awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(i,o){function a(e){try{u(n.next(e))}catch(e){o(e)}}function s(e){try{u(n.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}u((n=n.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var r,n,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(i=2&o[0]?n.return:o[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,o[1])).done)return i;switch(n=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,n=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],n=0}finally{r=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.getAllAppOperations=void 0;var database_1=require("database"),js_util_1=require("js-util"),getFirstEmoji_1=require("./getFirstEmoji"),isPortUsed_1=require("./isPortUsed"),getAllAppOperations=function(){return __awaiter(void 0,void 0,void 0,(function(){var e,t;return __generator(this,(function(r){switch(r.label){case 0:return[4/*yield*/,database_1.db.get("OperationConfig")];case 1:return e=r.sent(),[4/*yield*/,database_1.db.get("PackageJson")];case 2:return t=r.sent().filter((function(e){var t;return!!(null===(t=e.sensible)||void 0===t?void 0:t.appPort)})).map((function(t){var r,n;if(t.name&&(null===(r=t.sensible)||void 0===r?void 0:r.appPort)){var i=e.find((function(e){return e.operationName===t.operationName})),o=(null==i?void 0:i.markdown)||t.description;return{name:t.name,port:null===(n=t.sensible)||void 0===n?void 0:n.appPort,description:o,emoji:(0,getFirstEmoji_1.getFirstEmoji)(o)}}})).filter(js_util_1.notEmpty).sort((function(e,t){return e.port<t.port?-1:1})),[4/*yield*/,Promise.all(t.map((function(e){return __awaiter(void 0,void 0,void 0,(function(){var t;return __generator(this,(function(r){switch(r.label){case 0:return[4/*yield*/,(0,isPortUsed_1.isPortUsed)(e.port)];case 1:return t=r.sent(),[2/*return*/,__assign(__assign({},e),{isOnline:t})]}}))}))})))];case 3:return[2/*return*/,r.sent()]}}))}))};exports.getAllAppOperations=getAllAppOperations;
//# sourceMappingURL=getAllAppOperations.js.map