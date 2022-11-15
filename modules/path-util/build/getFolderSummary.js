"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},__assign.apply(this,arguments)},__awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(i,s){function a(e){try{o(n.next(e))}catch(e){s(e)}}function u(e){try{o(n.throw(e))}catch(e){s(e)}}function o(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,u)}o((n=n.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var r,n,i,s,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function u(s){return function(u){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(i=2&s[0]?n.return:s[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,s[1])).done)return i;switch(n=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,n=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){a.label=s[1];break}if(6===s[0]&&a.label<i[1]){a.label=i[1],i=s;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(s);break}i[2]&&a.ops.pop(),a.trys.pop();continue}s=t.call(e,a)}catch(e){s=[6,e],n=0}finally{r=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,u])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.getFolderSummary=exports.sumSizeSummary=exports.getSizeSummary=exports.byteCount=void 0;var js_util_1=require("js-util"),fs_util_1=require("fs-util");
/**
 * This function will return the byte size of any UTF-8 string you pass to it.
 */
function byteCount(e){return encodeURI(e).split(/%..|./).length-1}exports.byteCount=byteCount;
/**
 * gets a size summary for a file path
 *
 * Does not calculate this for files that are too big (bigger than 1MB)
 */
var getSizeSummary=function(e){return __awaiter(void 0,void 0,void 0,(function(){var t,r,n,i,s,a,u,o,l;return __generator(this,(function(c){switch(c.label){case 0:return[4/*yield*/,fs_util_1.fs.stat(e)];case 1:return t=c.sent(),r=t.size,i=r/(n=r),a=n/(s=1),u=1,o=s,r>1048576?[2/*return*/,{bytes:r,lines:0,characters:n,bytesPerCharacter:i,charactersPerLine:a,linesPerFile:o,numberOfFiles:u}]:[4/*yield*/,fs_util_1.fs.readFile(e,"utf8")];case 2:return l=c.sent(),s=l.split("\n").length,[2/*return*/,{bytes:r,lines:0,characters:n,bytesPerCharacter:i,charactersPerLine:a,linesPerFile:o=s,numberOfFiles:u}]}}))}))};exports.getSizeSummary=getSizeSummary;var sumSizeSummary=function(e){return __awaiter(void 0,void 0,void 0,(function(){var t;return __generator(this,(function(r){switch(r.label){case 0:return[4/*yield*/,Promise.all(e.map(exports.getSizeSummary))];case 1:return t=r.sent(),[2/*return*/,(0,js_util_1.sumAllKeys)(t,["numberOfFiles","lines","characters","bytes"])]}}))}))};exports.sumSizeSummary=sumSizeSummary;
/**
 * calculates folder summary from a categorized file paths object
 */
var getFolderSummary=function(e){return __awaiter(void 0,void 0,void 0,(function(){var t,r;return __generator(this,(function(n){switch(n.label){case 0:return r={},[4/*yield*/,(0,exports.sumSizeSummary)(e.code)];case 1:return r.codeSize=n.sent(),[4/*yield*/,(0,exports.sumSizeSummary)(e.data)];case 2:return r.dataSize=n.sent(),[4/*yield*/,(0,exports.sumSizeSummary)(e.text)];case 3:return r.textSize=n.sent(),[2/*return*/,__assign(__assign({},t=r),{size:(0,js_util_1.sumAllKeys)(Object.values(t),["bytes","characters","lines","numberOfFiles"])})]}}))}))};exports.getFolderSummary=getFolderSummary;
//# sourceMappingURL=getFolderSummary.js.map