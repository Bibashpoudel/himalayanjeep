"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.test=void 0;const general_1=require("./general"),make_test_1=require("make-test");exports.test=(0,make_test_1.makeTest)((()=>{const e=[".gitignore","package.json","Podfile"],t=e.map(general_1.renameToTemplateFile).map(general_1.renameTemplateToNormalFile);return(0,general_1.isEqualArray)(e,t)}));
//# sourceMappingURL=test.js.map