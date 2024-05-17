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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"(app-pages-browser)/./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ \"(app-pages-browser)/./node_modules/next/dist/api/app-dynamic.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _components_Search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Search */ \"(app-pages-browser)/./src/app/components/Search.tsx\");\n/* harmony import */ var _components_WikipediaView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/WikipediaView */ \"(app-pages-browser)/./src/app/components/WikipediaView.tsx\");\n/* harmony import */ var _components_LeaderInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/LeaderInfo */ \"(app-pages-browser)/./src/app/components/LeaderInfo.tsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n// HomePage.tsx\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Globe = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(()=>__webpack_require__.e(/*! import() */ \"_app-pages-browser_src_app_components_Globe_tsx\").then(__webpack_require__.bind(__webpack_require__, /*! ./components/Globe */ \"(app-pages-browser)/./src/app/components/Globe.tsx\")), {\n    loadableGenerated: {\n        modules: [\n            \"app/page.tsx -> \" + \"./components/Globe\"\n        ]\n    },\n    ssr: false\n});\n_c = Globe;\nconst HomePage = ()=>{\n    _s();\n    const geojsonUrl = \"http://localhost:8000/geojson/\";\n    const [results, setResults] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [articleContent, setArticleContent] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [country, setCountry] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [leaderInfo, setLeaderInfo] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const globeRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null); // Create a ref for the Globe component\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (country) {\n            const fetchLeaderInfo = async ()=>{\n                try {\n                    const response = await axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].get(\"http://localhost:8000/api/leaders/\".concat(country, \"/\"));\n                    setLeaderInfo(response.data);\n                } catch (error) {\n                    console.error(\"Error fetching leader info:\", error);\n                }\n            };\n            fetchLeaderInfo();\n        }\n    }, [\n        country\n    ]);\n    const handleCountryClick = async (countryName)=>{\n        console.log(\"Country clicked:\", countryName);\n        setCountry(countryName);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto px-4 mt-4 min-h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"mt-4 pt-6 text-4xl text-center font-extrabold text-green-400\",\n                children: \"Search news from around the world\"\n            }, void 0, false, {\n                fileName: \"/root/open-politics/open_politics_project/frontend/next-generation-interface/src/app/page.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"globe-container\",\n                className: \"relative mt-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Globe, {\n                    ref: globeRef,\n                    geojsonUrl: geojsonUrl,\n                    setArticleContent: setArticleContent,\n                    onCountryClick: handleCountryClick\n                }, void 0, false, {\n                    fileName: \"/root/open-politics/open_politics_project/frontend/next-generation-interface/src/app/page.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/root/open-politics/open_politics_project/frontend/next-generation-interface/src/app/page.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Search__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                setResults: setResults,\n                setCountry: setCountry,\n                globeRef: globeRef\n            }, void 0, false, {\n                fileName: \"/root/open-politics/open_politics_project/frontend/next-generation-interface/src/app/page.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_WikipediaView__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                content: articleContent\n            }, void 0, false, {\n                fileName: \"/root/open-politics/open_politics_project/frontend/next-generation-interface/src/app/page.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center mt-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    href: \"/new_page\",\n                    legacyBehavior: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"text-blue-500 hover:underline\",\n                        children: \"Go to New Page\"\n                    }, void 0, false, {\n                        fileName: \"/root/open-politics/open_politics_project/frontend/next-generation-interface/src/app/page.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/root/open-politics/open_politics_project/frontend/next-generation-interface/src/app/page.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/root/open-politics/open_politics_project/frontend/next-generation-interface/src/app/page.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined),\n            leaderInfo && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LeaderInfo__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                state: leaderInfo.State,\n                headOfState: leaderInfo[\"Head of State\"],\n                headOfStateImage: leaderInfo[\"Head of State Image\"],\n                headOfGovernment: leaderInfo[\"Head of Government\"],\n                headOfGovernmentImage: leaderInfo[\"Head of Government Image\"]\n            }, void 0, false, {\n                fileName: \"/root/open-politics/open_politics_project/frontend/next-generation-interface/src/app/page.tsx\",\n                lineNumber: 55,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Results, {\n                results: results\n            }, void 0, false, {\n                fileName: \"/root/open-politics/open_politics_project/frontend/next-generation-interface/src/app/page.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/root/open-politics/open_politics_project/frontend/next-generation-interface/src/app/page.tsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, undefined);\n};\n_s(HomePage, \"PgQAANUGH1FADID4DSMaAI8OuKE=\");\n_c1 = HomePage;\nconst Results = (param)=>{\n    let { results } = param;\n    if (!results) {\n        return null;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-7ed44e15f3367c7b\" + \" \" + \"fixed left-0 bottom-0 w-96 h-2/4 bg-gray-800 bg-opacity-20 rounded-lg p-4 text-green-400 shadow-lg overflow-hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"jsx-7ed44e15f3367c7b\" + \" \" + \"text-xl font-bold mb-2\",\n                children: \"Search Results\"\n            }, void 0, false, {\n                fileName: \"/root/open-politics/open_politics_project/frontend/next-generation-interface/src/app/page.tsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-7ed44e15f3367c7b\" + \" \" + \"inner-content h-full overflow-auto pr-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"jsx-7ed44e15f3367c7b\" + \" \" + \"flex overflow-x-auto space-x-4 mb-4\",\n                        children: results.images && results.images.map((image, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: image,\n                                alt: \"Image \".concat(index + 1),\n                                className: \"jsx-7ed44e15f3367c7b\" + \" \" + \"w-32 h-32 object-cover rounded-md\"\n                            }, index, false, {\n                                fileName: \"/root/open-politics/open_politics_project/frontend/next-generation-interface/src/app/page.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/root/open-politics/open_politics_project/frontend/next-generation-interface/src/app/page.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"jsx-7ed44e15f3367c7b\",\n                        children: results.results && results.results.map((result, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"jsx-7ed44e15f3367c7b\" + \" \" + \"mb-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: result.url,\n                                        target: \"_blank\",\n                                        rel: \"noopener noreferrer\",\n                                        className: \"jsx-7ed44e15f3367c7b\" + \" \" + \"text-blue-400 hover:underline\",\n                                        children: result.title\n                                    }, void 0, false, {\n                                        fileName: \"/root/open-politics/open_politics_project/frontend/next-generation-interface/src/app/page.tsx\",\n                                        lineNumber: 84,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"jsx-7ed44e15f3367c7b\",\n                                        children: result.content.length > 300 ? \"\".concat(result.content.substring(0, 300), \"...\") : result.content\n                                    }, void 0, false, {\n                                        fileName: \"/root/open-politics/open_politics_project/frontend/next-generation-interface/src/app/page.tsx\",\n                                        lineNumber: 87,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, index, true, {\n                                fileName: \"/root/open-politics/open_politics_project/frontend/next-generation-interface/src/app/page.tsx\",\n                                lineNumber: 83,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/root/open-politics/open_politics_project/frontend/next-generation-interface/src/app/page.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/root/open-politics/open_politics_project/frontend/next-generation-interface/src/app/page.tsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"7ed44e15f3367c7b\",\n                children: \".inner-content.jsx-7ed44e15f3367c7b::-webkit-scrollbar{width:0;height:0}.inner-content.jsx-7ed44e15f3367c7b{-ms-overflow-style:none;scrollbar-width:none}\"\n            }, void 0, false, void 0, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/root/open-politics/open_politics_project/frontend/next-generation-interface/src/app/page.tsx\",\n        lineNumber: 73,\n        columnNumber: 5\n    }, undefined);\n};\n_c2 = Results;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Globe\");\n$RefreshReg$(_c1, \"HomePage\");\n$RefreshReg$(_c2, \"Results\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsZUFBZTs7OztBQUU0QztBQUN4QjtBQUNOO0FBQ1k7QUFDYztBQUNOO0FBQ3ZCO0FBRTFCLE1BQU1VLFFBQVFOLHdEQUFPQSxDQUFDLElBQU0sNE5BQU87Ozs7OztJQUF5Qk8sS0FBSzs7S0FBM0REO0FBRU4sTUFBTUUsV0FBcUI7O0lBQ3pCLE1BQU1DLGFBQWE7SUFDbkIsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdkLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ2UsZ0JBQWdCQyxrQkFBa0IsR0FBR2hCLCtDQUFRQSxDQUFTO0lBQzdELE1BQU0sQ0FBQ2lCLFNBQVNDLFdBQVcsR0FBR2xCLCtDQUFRQSxDQUFnQjtJQUN0RCxNQUFNLENBQUNtQixZQUFZQyxjQUFjLEdBQUdwQiwrQ0FBUUEsQ0FBYTtJQUN6RCxNQUFNcUIsV0FBV25CLDZDQUFNQSxDQUFNLE9BQU8sdUNBQXVDO0lBRTNFRCxnREFBU0EsQ0FBQztRQUNSLElBQUlnQixTQUFTO1lBQ1gsTUFBTUssa0JBQWtCO2dCQUN0QixJQUFJO29CQUNGLE1BQU1DLFdBQVcsTUFBTWYsNkNBQUtBLENBQUNnQixHQUFHLENBQUMscUNBQTZDLE9BQVJQLFNBQVE7b0JBQzlFRyxjQUFjRyxTQUFTRSxJQUFJO2dCQUM3QixFQUFFLE9BQU9DLE9BQU87b0JBQ2RDLFFBQVFELEtBQUssQ0FBQywrQkFBK0JBO2dCQUMvQztZQUNGO1lBRUFKO1FBQ0Y7SUFDRixHQUFHO1FBQUNMO0tBQVE7SUFFWixNQUFNVyxxQkFBcUIsT0FBT0M7UUFDaENGLFFBQVFHLEdBQUcsQ0FBQyxvQkFBb0JEO1FBQ2hDWCxXQUFXVztJQUNiO0lBRUEscUJBQ0UsOERBQUNFO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBK0Q7Ozs7OzswQkFDN0UsOERBQUNEO2dCQUFJRyxJQUFHO2dCQUFrQkYsV0FBVTswQkFDbEMsNEVBQUN2QjtvQkFBTTBCLEtBQUtkO29CQUFVVCxZQUFZQTtvQkFBWUksbUJBQW1CQTtvQkFBbUJvQixnQkFBZ0JSOzs7Ozs7Ozs7OzswQkFFdEcsOERBQUN2QiwwREFBTUE7Z0JBQUNTLFlBQVlBO2dCQUFZSSxZQUFZQTtnQkFBWUcsVUFBVUE7Ozs7OzswQkFDbEUsOERBQUNmLGlFQUFhQTtnQkFBQytCLFNBQVN0Qjs7Ozs7OzBCQUN4Qiw4REFBQ2dCO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDNUIsaURBQUlBO29CQUFDa0MsTUFBSztvQkFBWUMsY0FBYzs4QkFDbkMsNEVBQUNDO3dCQUFFUixXQUFVO2tDQUFnQzs7Ozs7Ozs7Ozs7Ozs7OztZQUdoRGIsNEJBQ0MsOERBQUNaLDhEQUFVQTtnQkFDVGtDLE9BQU90QixXQUFXdUIsS0FBSztnQkFDdkJDLGFBQWF4QixVQUFVLENBQUMsZ0JBQWdCO2dCQUN4Q3lCLGtCQUFrQnpCLFVBQVUsQ0FBQyxzQkFBc0I7Z0JBQ25EMEIsa0JBQWtCMUIsVUFBVSxDQUFDLHFCQUFxQjtnQkFDbEQyQix1QkFBdUIzQixVQUFVLENBQUMsMkJBQTJCOzs7Ozs7MEJBR2pFLDhEQUFDNEI7Z0JBQVFsQyxTQUFTQTs7Ozs7Ozs7Ozs7O0FBR3hCO0dBckRNRjtNQUFBQTtBQXVETixNQUFNb0MsVUFBc0M7UUFBQyxFQUFFbEMsT0FBTyxFQUFFO0lBQ3RELElBQUksQ0FBQ0EsU0FBUztRQUNaLE9BQU87SUFDVDtJQUNBLHFCQUNFLDhEQUFDa0I7a0RBQWM7OzBCQUNiLDhEQUFDaUI7MERBQWE7MEJBQXlCOzs7Ozs7MEJBQ3ZDLDhEQUFDakI7MERBQWM7O2tDQUNiLDhEQUFDQTtrRUFBYztrQ0FDWmxCLFFBQVFvQyxNQUFNLElBQUlwQyxRQUFRb0MsTUFBTSxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsT0FBZUMsc0JBQ3BELDhEQUFDQztnQ0FBZ0JDLEtBQUtIO2dDQUFPSSxLQUFLLFNBQW1CLE9BQVZILFFBQVE7MEVBQWU7K0JBQXhEQTs7Ozs7Ozs7OztrQ0FHZCw4REFBQ3JCOztrQ0FDRWxCLFFBQVFBLE9BQU8sSUFBSUEsUUFBUUEsT0FBTyxDQUFDcUMsR0FBRyxDQUFDLENBQUNNLFFBQWFKLHNCQUNwRCw4REFBQ3JCOzBFQUEwQjs7a0RBQ3pCLDhEQUFDUzt3Q0FBRUYsTUFBTWtCLE9BQU9DLEdBQUc7d0NBQUVDLFFBQU87d0NBQVNDLEtBQUk7a0ZBQWdDO2tEQUN0RUgsT0FBT0ksS0FBSzs7Ozs7O2tEQUVmLDhEQUFDQzs7a0RBQUdMLE9BQU9uQixPQUFPLENBQUN5QixNQUFNLEdBQUcsTUFBTSxHQUFvQyxPQUFqQ04sT0FBT25CLE9BQU8sQ0FBQzBCLFNBQVMsQ0FBQyxHQUFHLE1BQUssU0FBT1AsT0FBT25CLE9BQU87Ozs7Ozs7K0JBSm5GZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQnRCO01BcENNTDtBQXNDTiwrREFBZXBDLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLnRzeD9mNjhhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEhvbWVQYWdlLnRzeFxuJ3VzZSBjbGllbnQnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFNlYXJjaCBmcm9tICcuL2NvbXBvbmVudHMvU2VhcmNoJztcbmltcG9ydCBXaWtpcGVkaWFWaWV3IGZyb20gJy4vY29tcG9uZW50cy9XaWtpcGVkaWFWaWV3JztcbmltcG9ydCBMZWFkZXJJbmZvIGZyb20gJy4vY29tcG9uZW50cy9MZWFkZXJJbmZvJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IEdsb2JlID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJy4vY29tcG9uZW50cy9HbG9iZScpLCB7IHNzcjogZmFsc2UgfSk7XG5cbmNvbnN0IEhvbWVQYWdlOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgZ2VvanNvblVybCA9ICdodHRwOi8vbG9jYWxob3N0OjgwMDAvZ2VvanNvbi8nO1xuICBjb25zdCBbcmVzdWx0cywgc2V0UmVzdWx0c10gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2FydGljbGVDb250ZW50LCBzZXRBcnRpY2xlQ29udGVudF0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcbiAgY29uc3QgW2NvdW50cnksIHNldENvdW50cnldID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtsZWFkZXJJbmZvLCBzZXRMZWFkZXJJbmZvXSA9IHVzZVN0YXRlPGFueSB8IG51bGw+KG51bGwpO1xuICBjb25zdCBnbG9iZVJlZiA9IHVzZVJlZjxhbnk+KG51bGwpOyAvLyBDcmVhdGUgYSByZWYgZm9yIHRoZSBHbG9iZSBjb21wb25lbnRcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChjb3VudHJ5KSB7XG4gICAgICBjb25zdCBmZXRjaExlYWRlckluZm8gPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvbGVhZGVycy8ke2NvdW50cnl9L2ApO1xuICAgICAgICAgIHNldExlYWRlckluZm8ocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgbGVhZGVyIGluZm86JywgZXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBmZXRjaExlYWRlckluZm8oKTtcbiAgICB9XG4gIH0sIFtjb3VudHJ5XSk7XG5cbiAgY29uc3QgaGFuZGxlQ291bnRyeUNsaWNrID0gYXN5bmMgKGNvdW50cnlOYW1lOiBzdHJpbmcpID0+IHtcbiAgICBjb25zb2xlLmxvZygnQ291bnRyeSBjbGlja2VkOicsIGNvdW50cnlOYW1lKTtcbiAgICBzZXRDb3VudHJ5KGNvdW50cnlOYW1lKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNCBtdC00IG1pbi1oLXNjcmVlblwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cIm10LTQgcHQtNiB0ZXh0LTR4bCB0ZXh0LWNlbnRlciBmb250LWV4dHJhYm9sZCB0ZXh0LWdyZWVuLTQwMFwiPlNlYXJjaCBuZXdzIGZyb20gYXJvdW5kIHRoZSB3b3JsZDwvaDE+XG4gICAgICA8ZGl2IGlkPVwiZ2xvYmUtY29udGFpbmVyXCIgY2xhc3NOYW1lPVwicmVsYXRpdmUgbXQtNFwiPlxuICAgICAgICA8R2xvYmUgcmVmPXtnbG9iZVJlZn0gZ2VvanNvblVybD17Z2VvanNvblVybH0gc2V0QXJ0aWNsZUNvbnRlbnQ9e3NldEFydGljbGVDb250ZW50fSBvbkNvdW50cnlDbGljaz17aGFuZGxlQ291bnRyeUNsaWNrfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8U2VhcmNoIHNldFJlc3VsdHM9e3NldFJlc3VsdHN9IHNldENvdW50cnk9e3NldENvdW50cnl9IGdsb2JlUmVmPXtnbG9iZVJlZn0gLz5cbiAgICAgIDxXaWtpcGVkaWFWaWV3IGNvbnRlbnQ9e2FydGljbGVDb250ZW50fSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC00XCI+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvbmV3X3BhZ2VcIiBsZWdhY3lCZWhhdmlvcj5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNTAwIGhvdmVyOnVuZGVybGluZVwiPkdvIHRvIE5ldyBQYWdlPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtsZWFkZXJJbmZvICYmIChcbiAgICAgICAgPExlYWRlckluZm9cbiAgICAgICAgICBzdGF0ZT17bGVhZGVySW5mby5TdGF0ZX1cbiAgICAgICAgICBoZWFkT2ZTdGF0ZT17bGVhZGVySW5mb1snSGVhZCBvZiBTdGF0ZSddfVxuICAgICAgICAgIGhlYWRPZlN0YXRlSW1hZ2U9e2xlYWRlckluZm9bJ0hlYWQgb2YgU3RhdGUgSW1hZ2UnXX1cbiAgICAgICAgICBoZWFkT2ZHb3Zlcm5tZW50PXtsZWFkZXJJbmZvWydIZWFkIG9mIEdvdmVybm1lbnQnXX1cbiAgICAgICAgICBoZWFkT2ZHb3Zlcm5tZW50SW1hZ2U9e2xlYWRlckluZm9bJ0hlYWQgb2YgR292ZXJubWVudCBJbWFnZSddfVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIDxSZXN1bHRzIHJlc3VsdHM9e3Jlc3VsdHN9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBSZXN1bHRzOiBSZWFjdC5GQzx7IHJlc3VsdHM6IGFueSB9PiA9ICh7IHJlc3VsdHMgfSkgPT4ge1xuICBpZiAoIXJlc3VsdHMpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgbGVmdC0wIGJvdHRvbS0wIHctOTYgaC0yLzQgYmctZ3JheS04MDAgYmctb3BhY2l0eS0yMCByb3VuZGVkLWxnIHAtNCB0ZXh0LWdyZWVuLTQwMCBzaGFkb3ctbGcgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgbWItMlwiPlNlYXJjaCBSZXN1bHRzPC9oMj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXItY29udGVudCBoLWZ1bGwgb3ZlcmZsb3ctYXV0byBwci00XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBvdmVyZmxvdy14LWF1dG8gc3BhY2UteC00IG1iLTRcIj5cbiAgICAgICAgICB7cmVzdWx0cy5pbWFnZXMgJiYgcmVzdWx0cy5pbWFnZXMubWFwKChpbWFnZTogc3RyaW5nLCBpbmRleDogbnVtYmVyKSA9PiAoXG4gICAgICAgICAgICA8aW1nIGtleT17aW5kZXh9IHNyYz17aW1hZ2V9IGFsdD17YEltYWdlICR7aW5kZXggKyAxfWB9IGNsYXNzTmFtZT1cInctMzIgaC0zMiBvYmplY3QtY292ZXIgcm91bmRlZC1tZFwiIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHtyZXN1bHRzLnJlc3VsdHMgJiYgcmVzdWx0cy5yZXN1bHRzLm1hcCgocmVzdWx0OiBhbnksIGluZGV4OiBudW1iZXIpID0+IChcbiAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwibWItMlwiPlxuICAgICAgICAgICAgICA8YSBocmVmPXtyZXN1bHQudXJsfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgY2xhc3NOYW1lPVwidGV4dC1ibHVlLTQwMCBob3Zlcjp1bmRlcmxpbmVcIj5cbiAgICAgICAgICAgICAgICB7cmVzdWx0LnRpdGxlfVxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDxwPntyZXN1bHQuY29udGVudC5sZW5ndGggPiAzMDAgPyBgJHtyZXN1bHQuY29udGVudC5zdWJzdHJpbmcoMCwgMzAwKX0uLi5gIDogcmVzdWx0LmNvbnRlbnR9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5pbm5lci1jb250ZW50Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICB9XG4gICAgICAgIC5pbm5lci1jb250ZW50IHtcbiAgICAgICAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7ICAvKiBJRSBhbmQgRWRnZSAqL1xuICAgICAgICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTsgIC8qIEZpcmVmb3ggKi9cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsImR5bmFtaWMiLCJMaW5rIiwiU2VhcmNoIiwiV2lraXBlZGlhVmlldyIsIkxlYWRlckluZm8iLCJheGlvcyIsIkdsb2JlIiwic3NyIiwiSG9tZVBhZ2UiLCJnZW9qc29uVXJsIiwicmVzdWx0cyIsInNldFJlc3VsdHMiLCJhcnRpY2xlQ29udGVudCIsInNldEFydGljbGVDb250ZW50IiwiY291bnRyeSIsInNldENvdW50cnkiLCJsZWFkZXJJbmZvIiwic2V0TGVhZGVySW5mbyIsImdsb2JlUmVmIiwiZmV0Y2hMZWFkZXJJbmZvIiwicmVzcG9uc2UiLCJnZXQiLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwiaGFuZGxlQ291bnRyeUNsaWNrIiwiY291bnRyeU5hbWUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImlkIiwicmVmIiwib25Db3VudHJ5Q2xpY2siLCJjb250ZW50IiwiaHJlZiIsImxlZ2FjeUJlaGF2aW9yIiwiYSIsInN0YXRlIiwiU3RhdGUiLCJoZWFkT2ZTdGF0ZSIsImhlYWRPZlN0YXRlSW1hZ2UiLCJoZWFkT2ZHb3Zlcm5tZW50IiwiaGVhZE9mR292ZXJubWVudEltYWdlIiwiUmVzdWx0cyIsImgyIiwiaW1hZ2VzIiwibWFwIiwiaW1hZ2UiLCJpbmRleCIsImltZyIsInNyYyIsImFsdCIsInJlc3VsdCIsInVybCIsInRhcmdldCIsInJlbCIsInRpdGxlIiwicCIsImxlbmd0aCIsInN1YnN0cmluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});