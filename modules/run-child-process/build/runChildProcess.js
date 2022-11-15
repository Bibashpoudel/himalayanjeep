#!/usr/bin/env node
"use strict";var __awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{c(n.next(e))}catch(e){i(e)}}function l(e){try{c(n.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,l)}c((n=n.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.runChildProcess=void 0;var child_process_1=require("child_process"),fs_util_1=require("fs-util"),get_path_1=require("get-path"),js_util_1=require("js-util"),log_1=require("log"),runChildProcess=function(e){return __awaiter(void 0,void 0,void 0,(function(){var t,r,n,o,i,a;return __generator(this,(function(l){switch(l.label){case 0:return t=e.operationFolderName,r=e.scriptFileName,n=e.args,[4/*yield*/,(0,get_path_1.getOperationPath)(t)];case 1:return(o=l.sent())?(i=fs_util_1.path.join(o,"build/".concat(r,".js")),fs_util_1.fs.existsSync(i)?[4/*yield*/,(0,fs_util_1.canRead)(i)]:((0,log_1.log)("Couldn't find scriptFile ".concat(r," which should be at build/").concat(r,".js"),{type:"error"}),[2/*return*/])):((0,log_1.log)("Couldn't find childOperationPath for operation ".concat(t),{type:"error"}),[2/*return*/]);case 2:return l.sent()?(a="node ".concat(i," ").concat((null==n?void 0:n.filter(js_util_1.notEmpty).join(" "))||""),[2/*return*/,(0,child_process_1.spawnSync)(a,{shell:!0,stdio:"inherit",encoding:"utf8"}).output]):((0,log_1.log)("Can't read ".concat(i),{type:"error"}),[2/*return*/])}}))}))};exports.runChildProcess=runChildProcess;
//# sourceMappingURL=runChildProcess.js.map