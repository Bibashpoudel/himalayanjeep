#!/usr/bin/env node
"use strict";var __awaiter=this&&this.__awaiter||function(e,r,t,n){return new(t||(t=Promise))((function(o,a){function l(e){try{u(n.next(e))}catch(e){a(e)}}function i(e){try{u(n.throw(e))}catch(e){a(e)}}function u(e){var r;e.done?o(e.value):(r=e.value,r instanceof t?r:new t((function(e){e(r)}))).then(l,i)}u((n=n.apply(e,r||[])).next())}))},__generator=this&&this.__generator||function(e,r){var t,n,o,a,l={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;l;)try{if(t=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return l.label++,{value:a[1],done:!1};case 5:l.label++,n=a[1],a=[0];continue;case 7:a=l.ops.pop(),l.trys.pop();continue;default:if(!(o=l.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){l=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){l.label=a[1];break}if(6===a[0]&&l.label<o[1]){l.label=o[1],o=a;break}if(o&&l.label<o[2]){l.label=o[2],l.ops.push(a);break}o[2]&&l.ops.pop(),l.trys.pop();continue}a=r.call(e,l)}catch(e){a=[6,e],n=0}finally{t=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}};Object.defineProperty(exports,"__esModule",{value:!0});var removeAllFolders_1=require("../removeAllFolders"),_a=process.argv.slice(2),folderName=_a[0],basePath=_a[1],removeAllFoldersCli=function(){return __awaiter(void 0,void 0,void 0,(function(){return __generator(this,(function(e){switch(e.label){case 0:return[4/*yield*/,(0,removeAllFolders_1.removeAllFolders)({basePath:basePath,folderNames:[folderName]})];case 1:return e.sent(),console.log("DONE"),[2/*return*/]}}))}))};
// sure?
removeAllFoldersCli();
//# sourceMappingURL=removeAllFolders.cli.js.map