"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getLocationPattern=void 0;var convert_case_1=require("convert-case"),pluralize_1=require("pluralize"),getLocationPattern=function(e,t,a){var r=a.operationRelativePath,o=a.projectRelativePath;if(r)return r;if(o)return o;var n=(0,pluralize_1.pluralize)((0,convert_case_1.kebabCase)(t));return"jsonMultiple"===e?"db/".concat(n,".json"):"keyValueMarkdown"===e?"db/".concat(n,".md"):"csv"===e?"db/".concat(n,".csv"):"jsonSingle"===e?"db/".concat(n,"/*.json"):"markdown"===e?"db/".concat(n,"/*.md"):void 0};exports.getLocationPattern=getLocationPattern;
//# sourceMappingURL=getLocationPattern.js.map