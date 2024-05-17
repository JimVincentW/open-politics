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

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"(app-pages-browser)/./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ \"(app-pages-browser)/./node_modules/next/dist/api/app-dynamic.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _components_Search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Search */ \"(app-pages-browser)/./src/app/components/Search.tsx\");\n/* harmony import */ var _components_WikipediaView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/WikipediaView */ \"(app-pages-browser)/./src/app/components/WikipediaView.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Globe = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(()=>__webpack_require__.e(/*! import() */ \"_app-pages-browser_src_app_components_Globe_tsx\").then(__webpack_require__.bind(__webpack_require__, /*! ./components/Globe */ \"(app-pages-browser)/./src/app/components/Globe.tsx\")), {\n    loadableGenerated: {\n        modules: [\n            \"app/page.tsx -> \" + \"./components/Globe\"\n        ]\n    },\n    ssr: false\n});\n_c = Globe;\nconst HomePage = ()=>{\n    _s();\n    const geojsonUrl = \"http://localhost:8000/geojson/\";\n    const [results, setResults] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [articleContent, setArticleContent] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [country, setCountry] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const globeRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto px-4 mt-4 min-h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-4xl text-center font-extrabold text-green-400\",\n                children: \"Search news from around the world\"\n            }, void 0, false, {\n                fileName: \"/root/open-politics/open_politics_project/frontend/next-generation-interface/src/app/page.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Search__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                setResults: setResults,\n                setCountry: setCountry,\n                globeRef: globeRef\n            }, void 0, false, {\n                fileName: \"/root/open-politics/open_politics_project/frontend/next-generation-interface/src/app/page.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"globe-container\",\n                className: \"relative mt-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Globe, {\n                    ref: globeRef,\n                    geojsonUrl: geojsonUrl,\n                    setArticleContent: setArticleContent\n                }, void 0, false, {\n                    fileName: \"/root/open-politics/open_politics_project/frontend/next-generation-interface/src/app/page.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/root/open-politics/open_politics_project/frontend/next-generation-interface/src/app/page.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_WikipediaView__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                content: articleContent\n            }, void 0, false, {\n                fileName: \"/root/open-politics/open_politics_project/frontend/next-generation-interface/src/app/page.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center mt-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    legacyBehavior: true,\n                    href: \"/new_page\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"text-blue-500 hover:underline\",\n                        children: \"Go to New Page\"\n                    }, void 0, false, {\n                        fileName: \"/root/open-politics/open_politics_project/frontend/next-generation-interface/src/app/page.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/root/open-politics/open_politics_project/frontend/next-generation-interface/src/app/page.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/root/open-politics/open_politics_project/frontend/next-generation-interface/src/app/page.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Results, {\n                results: results\n            }, void 0, false, {\n                fileName: \"/root/open-politics/open_politics_project/frontend/next-generation-interface/src/app/page.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/root/open-politics/open_politics_project/frontend/next-generation-interface/src/app/page.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\n_s(HomePage, \"Z26TMKMe0LDsMMYH5bmWKg4GkD0=\");\n_c1 = HomePage;\nconst Results = (param)=>{\n    let { results } = param;\n    if (!results) {\n        return null;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-7ed44e15f3367c7b\" + \" \" + \"fixed bottom-1 left-5 w-96 h-3/4 bg-gray-800 bg-opacity-20 rounded-lg p-4 text-green-400 shadow-lg overflow-hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"jsx-7ed44e15f3367c7b\" + \" \" + \"text-xl font-bold mb-2\",\n                children: \"Search Results\"\n            }, void 0, false, {\n                fileName: \"/root/open-politics/open_politics_project/frontend/next-generation-interface/src/app/page.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-7ed44e15f3367c7b\" + \" \" + \"inner-content h-full overflow-auto pr-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"jsx-7ed44e15f3367c7b\" + \" \" + \"flex justify-center mb-4\",\n                        children: results.images && results.images.map((image, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: image,\n                                alt: \"Image \".concat(index + 1),\n                                className: \"jsx-7ed44e15f3367c7b\" + \" \" + \"mb-2 w-1/5 h-auto rounded-md mx-1\"\n                            }, index, false, {\n                                fileName: \"/root/open-politics/open_politics_project/frontend/next-generation-interface/src/app/page.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/root/open-politics/open_politics_project/frontend/next-generation-interface/src/app/page.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"jsx-7ed44e15f3367c7b\",\n                        children: results.results && results.results.map((result, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"jsx-7ed44e15f3367c7b\" + \" \" + \"mb-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: result.url,\n                                        target: \"_blank\",\n                                        rel: \"noopener noreferrer\",\n                                        className: \"jsx-7ed44e15f3367c7b\" + \" \" + \"text-blue-400 hover:underline\",\n                                        children: result.title\n                                    }, void 0, false, {\n                                        fileName: \"/root/open-politics/open_politics_project/frontend/next-generation-interface/src/app/page.tsx\",\n                                        lineNumber: 52,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"jsx-7ed44e15f3367c7b\",\n                                        children: result.content\n                                    }, void 0, false, {\n                                        fileName: \"/root/open-politics/open_politics_project/frontend/next-generation-interface/src/app/page.tsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, index, true, {\n                                fileName: \"/root/open-politics/open_politics_project/frontend/next-generation-interface/src/app/page.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/root/open-politics/open_politics_project/frontend/next-generation-interface/src/app/page.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/root/open-politics/open_politics_project/frontend/next-generation-interface/src/app/page.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"7ed44e15f3367c7b\",\n                children: \".inner-content.jsx-7ed44e15f3367c7b::-webkit-scrollbar{width:0;height:0}.inner-content.jsx-7ed44e15f3367c7b{-ms-overflow-style:none;scrollbar-width:none}\"\n            }, void 0, false, void 0, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/root/open-politics/open_politics_project/frontend/next-generation-interface/src/app/page.tsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, undefined);\n};\n_c2 = Results;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Globe\");\n$RefreshReg$(_c1, \"HomePage\");\n$RefreshReg$(_c2, \"Results\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNnRDtBQUNiO0FBQ047QUFDWTtBQUNjO0FBRXZELE1BQU1PLFFBQVFKLHdEQUFPQSxDQUFDLElBQU0sNE5BQU87Ozs7OztJQUF5QkssS0FBSzs7S0FBM0REO0FBRU4sTUFBTUUsV0FBcUI7O0lBQ3pCLE1BQU1DLGFBQWE7SUFDbkIsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdYLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ1ksZ0JBQWdCQyxrQkFBa0IsR0FBR2IsK0NBQVFBLENBQVM7SUFDN0QsTUFBTSxDQUFDYyxTQUFTQyxXQUFXLEdBQUdmLCtDQUFRQSxDQUFnQjtJQUN0RCxNQUFNZ0IsV0FBV2YsNkNBQU1BLENBQU07SUFFN0IscUJBQ0UsOERBQUNnQjtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQXFEOzs7Ozs7MEJBQ25FLDhEQUFDZCwwREFBTUE7Z0JBQUNPLFlBQVlBO2dCQUFZSSxZQUFZQTtnQkFBWUMsVUFBVUE7Ozs7OzswQkFDbEUsOERBQUNDO2dCQUFJRyxJQUFHO2dCQUFrQkYsV0FBVTswQkFDbEMsNEVBQUNaO29CQUFNZSxLQUFLTDtvQkFBVVAsWUFBWUE7b0JBQVlJLG1CQUFtQkE7Ozs7Ozs7Ozs7OzBCQUVuRSw4REFBQ1IsaUVBQWFBO2dCQUFDaUIsU0FBU1Y7Ozs7OzswQkFDeEIsOERBQUNLO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDZixpREFBSUE7b0JBQUNvQixjQUFjO29CQUFDQyxNQUFLOzhCQUN4Qiw0RUFBQ0M7d0JBQUVQLFdBQVU7a0NBQWdDOzs7Ozs7Ozs7Ozs7Ozs7OzBCQUdqRCw4REFBQ1E7Z0JBQVFoQixTQUFTQTs7Ozs7Ozs7Ozs7O0FBR3hCO0dBdkJNRjtNQUFBQTtBQXlCTixNQUFNa0IsVUFBc0M7UUFBQyxFQUFFaEIsT0FBTyxFQUFFO0lBQ3RELElBQUksQ0FBQ0EsU0FBUztRQUNaLE9BQU87SUFDVDtJQUVBLHFCQUNFLDhEQUFDTztrREFBYzs7MEJBQ2IsOERBQUNVOzBEQUFhOzBCQUF5Qjs7Ozs7OzBCQUN2Qyw4REFBQ1Y7MERBQWM7O2tDQUNiLDhEQUFDQTtrRUFBYztrQ0FDWlAsUUFBUWtCLE1BQU0sSUFBSWxCLFFBQVFrQixNQUFNLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxPQUFPQyxzQkFDNUMsOERBQUNDO2dDQUFnQkMsS0FBS0g7Z0NBQU9JLEtBQUssU0FBbUIsT0FBVkgsUUFBUTswRUFBZTsrQkFBeERBOzs7Ozs7Ozs7O2tDQUdkLDhEQUFDZDs7a0NBQ0VQLFFBQVFBLE9BQU8sSUFBSUEsUUFBUUEsT0FBTyxDQUFDbUIsR0FBRyxDQUFDLENBQUNNLFFBQVFKLHNCQUMvQyw4REFBQ2Q7MEVBQTBCOztrREFDekIsOERBQUNRO3dDQUFFRCxNQUFNVyxPQUFPQyxHQUFHO3dDQUFFQyxRQUFPO3dDQUFTQyxLQUFJO2tGQUFnQztrREFDdEVILE9BQU9JLEtBQUs7Ozs7OztrREFFZiw4REFBQ0M7O2tEQUFHTCxPQUFPYixPQUFPOzs7Ozs7OytCQUpWUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQnRCO01BckNNTDtBQXVDTiwrREFBZWxCLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLnRzeD9mNjhhIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgU2VhcmNoIGZyb20gJy4vY29tcG9uZW50cy9TZWFyY2gnO1xuaW1wb3J0IFdpa2lwZWRpYVZpZXcgZnJvbSAnLi9jb21wb25lbnRzL1dpa2lwZWRpYVZpZXcnO1xuXG5jb25zdCBHbG9iZSA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuL2NvbXBvbmVudHMvR2xvYmUnKSwgeyBzc3I6IGZhbHNlIH0pO1xuXG5jb25zdCBIb21lUGFnZTogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IGdlb2pzb25VcmwgPSAnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2dlb2pzb24vJztcbiAgY29uc3QgW3Jlc3VsdHMsIHNldFJlc3VsdHNdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFthcnRpY2xlQ29udGVudCwgc2V0QXJ0aWNsZUNvbnRlbnRdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XG4gIGNvbnN0IFtjb3VudHJ5LCBzZXRDb3VudHJ5XSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuICBjb25zdCBnbG9iZVJlZiA9IHVzZVJlZjxhbnk+KG51bGwpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00IG10LTQgbWluLWgtc2NyZWVuXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgdGV4dC1jZW50ZXIgZm9udC1leHRyYWJvbGQgdGV4dC1ncmVlbi00MDBcIj5TZWFyY2ggbmV3cyBmcm9tIGFyb3VuZCB0aGUgd29ybGQ8L2gxPlxuICAgICAgPFNlYXJjaCBzZXRSZXN1bHRzPXtzZXRSZXN1bHRzfSBzZXRDb3VudHJ5PXtzZXRDb3VudHJ5fSBnbG9iZVJlZj17Z2xvYmVSZWZ9IC8+XG4gICAgICA8ZGl2IGlkPVwiZ2xvYmUtY29udGFpbmVyXCIgY2xhc3NOYW1lPVwicmVsYXRpdmUgbXQtNFwiPlxuICAgICAgICA8R2xvYmUgcmVmPXtnbG9iZVJlZn0gZ2VvanNvblVybD17Z2VvanNvblVybH0gc2V0QXJ0aWNsZUNvbnRlbnQ9e3NldEFydGljbGVDb250ZW50fSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8V2lraXBlZGlhVmlldyBjb250ZW50PXthcnRpY2xlQ29udGVudH0gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtNFwiPlxuICAgICAgICA8TGluayBsZWdhY3lCZWhhdmlvciBocmVmPVwiL25ld19wYWdlXCI+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC1ibHVlLTUwMCBob3Zlcjp1bmRlcmxpbmVcIj5HbyB0byBOZXcgUGFnZTwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgICA8UmVzdWx0cyByZXN1bHRzPXtyZXN1bHRzfSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgUmVzdWx0czogUmVhY3QuRkM8eyByZXN1bHRzOiBhbnkgfT4gPSAoeyByZXN1bHRzIH0pID0+IHtcbiAgaWYgKCFyZXN1bHRzKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgYm90dG9tLTEgbGVmdC01IHctOTYgaC0zLzQgYmctZ3JheS04MDAgYmctb3BhY2l0eS0yMCByb3VuZGVkLWxnIHAtNCB0ZXh0LWdyZWVuLTQwMCBzaGFkb3ctbGcgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgbWItMlwiPlNlYXJjaCBSZXN1bHRzPC9oMj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXItY29udGVudCBoLWZ1bGwgb3ZlcmZsb3ctYXV0byBwci00XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtYi00XCI+XG4gICAgICAgICAge3Jlc3VsdHMuaW1hZ2VzICYmIHJlc3VsdHMuaW1hZ2VzLm1hcCgoaW1hZ2UsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8aW1nIGtleT17aW5kZXh9IHNyYz17aW1hZ2V9IGFsdD17YEltYWdlICR7aW5kZXggKyAxfWB9IGNsYXNzTmFtZT1cIm1iLTIgdy0xLzUgaC1hdXRvIHJvdW5kZWQtbWQgbXgtMVwiIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHtyZXN1bHRzLnJlc3VsdHMgJiYgcmVzdWx0cy5yZXN1bHRzLm1hcCgocmVzdWx0LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJtYi0yXCI+XG4gICAgICAgICAgICAgIDxhIGhyZWY9e3Jlc3VsdC51cmx9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNDAwIGhvdmVyOnVuZGVybGluZVwiPlxuICAgICAgICAgICAgICAgIHtyZXN1bHQudGl0bGV9XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPHA+e3Jlc3VsdC5jb250ZW50fTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuaW5uZXItY29udGVudDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgfVxuICAgICAgICAuaW5uZXItY29udGVudCB7XG4gICAgICAgICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAgLyogSUUgYW5kIEVkZ2UgKi9cbiAgICAgICAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7ICAvKiBGaXJlZm94ICovXG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJkeW5hbWljIiwiTGluayIsIlNlYXJjaCIsIldpa2lwZWRpYVZpZXciLCJHbG9iZSIsInNzciIsIkhvbWVQYWdlIiwiZ2VvanNvblVybCIsInJlc3VsdHMiLCJzZXRSZXN1bHRzIiwiYXJ0aWNsZUNvbnRlbnQiLCJzZXRBcnRpY2xlQ29udGVudCIsImNvdW50cnkiLCJzZXRDb3VudHJ5IiwiZ2xvYmVSZWYiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImlkIiwicmVmIiwiY29udGVudCIsImxlZ2FjeUJlaGF2aW9yIiwiaHJlZiIsImEiLCJSZXN1bHRzIiwiaDIiLCJpbWFnZXMiLCJtYXAiLCJpbWFnZSIsImluZGV4IiwiaW1nIiwic3JjIiwiYWx0IiwicmVzdWx0IiwidXJsIiwidGFyZ2V0IiwicmVsIiwidGl0bGUiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});