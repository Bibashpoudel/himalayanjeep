"use strict";var __awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function l(e){try{u(n.next(e))}catch(e){i(e)}}function a(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(l,a)}u((n=n.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var r,n,o,i,l={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;l;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return l.label++,{value:i[1],done:!1};case 5:l.label++,n=i[1],i=[0];continue;case 7:i=l.ops.pop(),l.trys.pop();continue;default:if(!(o=l.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){l=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){l.label=i[1];break}if(6===i[0]&&l.label<o[1]){l.label=o[1],o=i;break}if(o&&l.label<o[2]){l.label=o[2],l.ops.push(i);break}o[2]&&l.ops.pop(),l.trys.pop();continue}i=t.call(e,l)}catch(e){i=[6,e],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.renameAll=void 0;var fs_util_1=require("fs-util"),path_1=__importDefault(require("path")),forAllFiles_1=require("./forAllFiles"),log_1=require("log"),renameAll=function(e){var t=e.filePaths,r=e.newFileName,n=e.newFilePath;return __awaiter(void 0,void 0,void 0,(function(){return __generator(this,(function(e){return[2/*return*/,(0,forAllFiles_1.forAllFiles)({filePaths:t,callback:function(e){return new Promise((function(t){return __awaiter(void 0,void 0,void 0,(function(){var o;return __generator(this,(function(i){switch(i.label){case 0:return fs_util_1.fs.existsSync(e)?(o=r?path_1.default.join((0,fs_util_1.getFolder)(e),r):null==n?void 0:n(e))?(console.log("renamed ".concat(e," to ").concat(o)),[4/*yield*/,fs_util_1.fs.rename(e,o)]):[2/*return*/,(0,log_1.log)("couldn't determine new path",{type:"error"})]:[3/*break*/,2];case 1:i.sent(),i.label=2;case 2:return t(),[2/*return*/]}}))}))}))}})]}))}))};exports.renameAll=renameAll;
//# sourceMappingURL=renameAll.js.map