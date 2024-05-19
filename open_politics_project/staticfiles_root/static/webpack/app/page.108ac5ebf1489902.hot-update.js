"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/Results.tsx":
/*!****************************************!*\
  !*** ./src/app/components/Results.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"(app-pages-browser)/./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ArticleCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ArticleCard */ \"(app-pages-browser)/./src/app/components/ArticleCard.tsx\");\n// components/Results.tsx\n\n\n\n\nconst Results = (param)=>{\n    let { results } = param;\n    if (!results) {\n        return null;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-7ed44e15f3367c7b\" + \" \" + \"relative mt-24 w-1/3 ml-6 h-1/3 bg-opacity-20 backdrop backdrop-blur-lg rounded-lg p-4 text-green-400 shadow-lg overflow-hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"jsx-7ed44e15f3367c7b\" + \" \" + \"text-xl font-bold mb-2\",\n                children: \"Articles\"\n            }, void 0, false, {\n                fileName: \"/root/open-politics/open_politics_project/frontend/next-generation-interface/src/app/components/Results.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-7ed44e15f3367c7b\" + \" \" + \"inner-content h-full overflow-auto pr-4\",\n                children: [\n                    results.images && results.images.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"jsx-7ed44e15f3367c7b\" + \" \" + \"flex overflow-x-auto space-x-4 mb-4\",\n                        children: results.images.map((image, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: image,\n                                alt: \"Image \".concat(index + 1),\n                                className: \"jsx-7ed44e15f3367c7b\" + \" \" + \"w-32 h-32 object-cover rounded-md\"\n                            }, index, false, {\n                                fileName: \"/root/open-politics/open_politics_project/frontend/next-generation-interface/src/app/components/Results.tsx\",\n                                lineNumber: 17,\n                                columnNumber: 15\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/root/open-politics/open_politics_project/frontend/next-generation-interface/src/app/components/Results.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"jsx-7ed44e15f3367c7b\",\n                        children: results.results && results.results.map((result, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ArticleCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                title: result.title,\n                                description: result.content.length > 300 ? \"\".concat(result.content.substring(0, 300), \"...\") : result.content,\n                                image: result.image,\n                                url: result.url\n                            }, index, false, {\n                                fileName: \"/root/open-politics/open_politics_project/frontend/next-generation-interface/src/app/components/Results.tsx\",\n                                lineNumber: 23,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/root/open-politics/open_politics_project/frontend/next-generation-interface/src/app/components/Results.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/root/open-politics/open_politics_project/frontend/next-generation-interface/src/app/components/Results.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"7ed44e15f3367c7b\",\n                children: \".inner-content.jsx-7ed44e15f3367c7b::-webkit-scrollbar{width:0;height:0}.inner-content.jsx-7ed44e15f3367c7b{-ms-overflow-style:none;scrollbar-width:none}\"\n            }, void 0, false, void 0, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/root/open-politics/open_politics_project/frontend/next-generation-interface/src/app/components/Results.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Results;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Results);\nvar _c;\n$RefreshReg$(_c, \"Results\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9SZXN1bHRzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEseUJBQXlCOzs7QUFDQztBQUNjO0FBRXhDLE1BQU1FLFVBQXNDO1FBQUMsRUFBRUMsT0FBTyxFQUFFO0lBQ3RELElBQUksQ0FBQ0EsU0FBUztRQUNaLE9BQU87SUFDVDtJQUVBLHFCQUNFLDhEQUFDQztrREFBYzs7MEJBQ2IsOERBQUNDOzBEQUFhOzBCQUF5Qjs7Ozs7OzBCQUN2Qyw4REFBQ0Q7MERBQWM7O29CQUNaRCxRQUFRRyxNQUFNLElBQUlILFFBQVFHLE1BQU0sQ0FBQ0MsTUFBTSxHQUFHLG1CQUN6Qyw4REFBQ0g7a0VBQWM7a0NBQ1pELFFBQVFHLE1BQU0sQ0FBQ0UsR0FBRyxDQUFDLENBQUNDLE9BQWVDLHNCQUNsQyw4REFBQ0M7Z0NBQWdCQyxLQUFLSDtnQ0FBT0ksS0FBSyxTQUFtQixPQUFWSCxRQUFROzBFQUFlOytCQUF4REE7Ozs7Ozs7Ozs7a0NBSWhCLDhEQUFDTjs7a0NBQ0VELFFBQVFBLE9BQU8sSUFBSUEsUUFBUUEsT0FBTyxDQUFDSyxHQUFHLENBQUMsQ0FBQ00sUUFBYUosc0JBQ3BELDhEQUFDVCxvREFBV0E7Z0NBRVZjLE9BQU9ELE9BQU9DLEtBQUs7Z0NBQ25CQyxhQUFhRixPQUFPRyxPQUFPLENBQUNWLE1BQU0sR0FBRyxNQUFNLEdBQW9DLE9BQWpDTyxPQUFPRyxPQUFPLENBQUNDLFNBQVMsQ0FBQyxHQUFHLE1BQUssU0FBT0osT0FBT0csT0FBTztnQ0FDcEdSLE9BQU9LLE9BQU9MLEtBQUs7Z0NBQ25CVSxLQUFLTCxPQUFPSyxHQUFHOytCQUpWVDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQm5CO0tBeENNUjtBQTBDTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvUmVzdWx0cy50c3g/NzY0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb21wb25lbnRzL1Jlc3VsdHMudHN4XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFydGljbGVDYXJkIGZyb20gJy4vQXJ0aWNsZUNhcmQnO1xuXG5jb25zdCBSZXN1bHRzOiBSZWFjdC5GQzx7IHJlc3VsdHM6IGFueSB9PiA9ICh7IHJlc3VsdHMgfSkgPT4ge1xuICBpZiAoIXJlc3VsdHMpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBtdC0yNCB3LTEvMyBtbC02IGgtMS8zIGJnLW9wYWNpdHktMjAgYmFja2Ryb3AgYmFja2Ryb3AtYmx1ci1sZyByb3VuZGVkLWxnIHAtNCB0ZXh0LWdyZWVuLTQwMCBzaGFkb3ctbGcgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgbWItMlwiPkFydGljbGVzPC9oMj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXItY29udGVudCBoLWZ1bGwgb3ZlcmZsb3ctYXV0byBwci00XCI+XG4gICAgICAgIHtyZXN1bHRzLmltYWdlcyAmJiByZXN1bHRzLmltYWdlcy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggb3ZlcmZsb3cteC1hdXRvIHNwYWNlLXgtNCBtYi00XCI+XG4gICAgICAgICAgICB7cmVzdWx0cy5pbWFnZXMubWFwKChpbWFnZTogc3RyaW5nLCBpbmRleDogbnVtYmVyKSA9PiAoXG4gICAgICAgICAgICAgIDxpbWcga2V5PXtpbmRleH0gc3JjPXtpbWFnZX0gYWx0PXtgSW1hZ2UgJHtpbmRleCArIDF9YH0gY2xhc3NOYW1lPVwidy0zMiBoLTMyIG9iamVjdC1jb3ZlciByb3VuZGVkLW1kXCIgLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHtyZXN1bHRzLnJlc3VsdHMgJiYgcmVzdWx0cy5yZXN1bHRzLm1hcCgocmVzdWx0OiBhbnksIGluZGV4OiBudW1iZXIpID0+IChcbiAgICAgICAgICAgIDxBcnRpY2xlQ2FyZFxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICB0aXRsZT17cmVzdWx0LnRpdGxlfVxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17cmVzdWx0LmNvbnRlbnQubGVuZ3RoID4gMzAwID8gYCR7cmVzdWx0LmNvbnRlbnQuc3Vic3RyaW5nKDAsIDMwMCl9Li4uYCA6IHJlc3VsdC5jb250ZW50fVxuICAgICAgICAgICAgICBpbWFnZT17cmVzdWx0LmltYWdlfSAvLyBFbnN1cmUgdGhpcyBwcm9wZXJ0eSBpcyBzZXQgaW4gdGhlIEFQSSByZXNwb25zZVxuICAgICAgICAgICAgICB1cmw9e3Jlc3VsdC51cmx9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuaW5uZXItY29udGVudDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgfVxuICAgICAgICAuaW5uZXItY29udGVudCB7XG4gICAgICAgICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAgLyogSUUgYW5kIEVkZ2UgKi9cbiAgICAgICAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7ICAvKiBGaXJlZm94ICovXG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlc3VsdHM7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJBcnRpY2xlQ2FyZCIsIlJlc3VsdHMiLCJyZXN1bHRzIiwiZGl2IiwiaDIiLCJpbWFnZXMiLCJsZW5ndGgiLCJtYXAiLCJpbWFnZSIsImluZGV4IiwiaW1nIiwic3JjIiwiYWx0IiwicmVzdWx0IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImNvbnRlbnQiLCJzdWJzdHJpbmciLCJ1cmwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Results.tsx\n"));

/***/ })

});