"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},__assign.apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.BigButton=void 0;var jsx_runtime_1=require("react/jsx-runtime"),react_with_native_1=require("react-with-native"),fancy_loader_1=require("fancy-loader"),BigButton=function(e){var t="cancel"===e.stylePreset?"bg-red-800 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-400":"bg-blue-800 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-400";return(0,jsx_runtime_1.jsx)(react_with_native_1.Div,__assign({className:"cursor-pointer ".concat(t," p-3 rounded-md border-2 border-black"),onClick:e.onClick},{children:(0,jsx_runtime_1.jsxs)(react_with_native_1.Div,__assign({className:"flex flex-row gap-6"},{children:[e.isLoading?(0,jsx_runtime_1.jsx)(fancy_loader_1.FancyLoader,{}):e.icon?(0,jsx_runtime_1.jsx)(react_with_native_1.Svg,{src:e.icon,width:24,height:24}):e.emoji?(0,jsx_runtime_1.jsx)(react_with_native_1.P,__assign({className:"text-xl hover:scale-110"},{children:e.emoji})):e.component?(0,jsx_runtime_1.jsx)(react_with_native_1.Div,__assign({className:"h-7"},{children:e.component()})):null,(0,jsx_runtime_1.jsx)(react_with_native_1.P,__assign({className:"text-xs text-white"},{children:e.title}))]}))}))};exports.BigButton=BigButton;
//# sourceMappingURL=BigButton.js.map