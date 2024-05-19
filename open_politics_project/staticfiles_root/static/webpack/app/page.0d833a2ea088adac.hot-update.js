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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"(app-pages-browser)/./node_modules/next/dist/api/app-dynamic.js\");\n/* harmony import */ var _components_Search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Search */ \"(app-pages-browser)/./src/app/components/Search.tsx\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Header */ \"(app-pages-browser)/./src/app/components/Header.tsx\");\n/* harmony import */ var _components_WikipediaView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/WikipediaView */ \"(app-pages-browser)/./src/app/components/WikipediaView.tsx\");\n/* harmony import */ var _components_LeaderInfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/LeaderInfo */ \"(app-pages-browser)/./src/app/components/LeaderInfo.tsx\");\n/* harmony import */ var _components_Results__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Results */ \"(app-pages-browser)/./src/app/components/Results.tsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _components_ui_use_toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/ui/use-toast */ \"(app-pages-browser)/./src/components/ui/use-toast.ts\");\n/* harmony import */ var _components_theme_provider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/theme-provider */ \"(app-pages-browser)/./src/app/components/theme-provider.tsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./src/components/ui/button.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nconst Globe = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(()=>__webpack_require__.e(/*! import() */ \"_app-pages-browser_src_app_components_Globe_tsx\").then(__webpack_require__.bind(__webpack_require__, /*! ./components/Globe */ \"(app-pages-browser)/./src/app/components/Globe.tsx\")), {\n    loadableGenerated: {\n        modules: [\n            \"app/page.tsx -> \" + \"./components/Globe\"\n        ]\n    },\n    ssr: false\n});\n_c = Globe;\nconst HomePage = ()=>{\n    _s();\n    const geojsonUrl = \"http://localhost:8000/geojson/\";\n    const [results, setResults] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [articleContent, setArticleContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [country, setCountry] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [leaderInfo, setLeaderInfo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [currentTime, setCurrentTime] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Date().toLocaleString());\n    const [isSearchActive, setIsSearchActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isBrowseMode, setIsBrowseMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true); // New state for toggling modes\n    const globeRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const { toast } = (0,_components_ui_use_toast__WEBPACK_IMPORTED_MODULE_8__.useToast)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (country) {\n            const fetchLeaderInfo = async ()=>{\n                try {\n                    const response = await axios__WEBPACK_IMPORTED_MODULE_11__[\"default\"].get(\"http://localhost:8000/api/leaders/\".concat(country, \"/\"));\n                    setLeaderInfo(response.data);\n                } catch (error) {\n                    console.error(\"Error fetching leader info:\", error);\n                }\n            };\n            fetchLeaderInfo();\n        }\n    }, [\n        country\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const timer = setInterval(()=>{\n            setCurrentTime(new Date().toLocaleString());\n        }, 1000);\n        return ()=>clearInterval(timer);\n    }, []);\n    const handleCountryClick = async (countryName)=>{\n        setCountry(countryName);\n    };\n    const handleSearch = (results)=>{\n        setResults(results);\n        setIsSearchActive(true);\n        setIsBrowseMode(false); // Switch to detail mode\n        toast({\n            title: \"Search Completed\",\n            description: \"Your search results are now available.\"\n        });\n    };\n    const toggleMode = ()=>{\n        setIsBrowseMode(!isBrowseMode);\n        setIsSearchActive(!isSearchActive);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_theme_provider__WEBPACK_IMPORTED_MODULE_9__.ThemeProvider, {\n        attribute: \"class\",\n        defaultTheme: \"system\",\n        enableSystem: true,\n        disableTransitionOnChange: true,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto px-4 mt-4 min-h-screen\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"/root/open-politics/open_politics_project/frontend/next-generation-interface/src/app/page.tsx\",\n                    lineNumber: 75,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"mt-4 bg py-4 text-4xl text-center\",\n                    children: currentTime\n                }, void 0, false, {\n                    fileName: \"/root/open-politics/open_politics_project/frontend/next-generation-interface/src/app/page.tsx\",\n                    lineNumber: 76,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_12__.motion.div, {\n                    id: \"globe-container\",\n                    className: \"relative my-8\",\n                    animate: {\n                        width: isBrowseMode ? \"100%\" : \"250px\",\n                        height: isBrowseMode ? \"600px\" : \"200px\",\n                        top: isBrowseMode ? \"0px\" : \"60px\",\n                        left: isBrowseMode ? \"0px\" : \"550px\",\n                        position: isBrowseMode ? \"relative\" : \"absolute\"\n                    },\n                    transition: {\n                        duration: 0.5\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Globe, {\n                        ref: globeRef,\n                        geojsonUrl: geojsonUrl,\n                        setArticleContent: setArticleContent,\n                        onCountryClick: handleCountryClick\n                    }, void 0, false, {\n                        fileName: \"/root/open-politics/open_politics_project/frontend/next-generation-interface/src/app/page.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/root/open-politics/open_politics_project/frontend/next-generation-interface/src/app/page.tsx\",\n                    lineNumber: 77,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_10__.Button, {\n                    onClick: toggleMode,\n                    className: \"mt-4 px-4 py-2 primary text-white rounded\",\n                    children: isBrowseMode ? \"Show Detail View\" : \"Show Browse View\"\n                }, void 0, false, {\n                    fileName: \"/root/open-politics/open_politics_project/frontend/next-generation-interface/src/app/page.tsx\",\n                    lineNumber: 91,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_12__.motion.div, {\n                    className: \"search-container\",\n                    animate: {\n                        position: isBrowseMode ? \"absolute\" : \"relative\",\n                        top: isBrowseMode ? \"100%\" : \"0\",\n                        left: isBrowseMode ? \"80%\" : \"0\",\n                        transform: isBrowseMode ? \"translate(-50%, -50%)\" : \"none\",\n                        width: isBrowseMode ? \"80%\" : \"100%\"\n                    },\n                    transition: {\n                        duration: 0.5\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Search__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        setResults: handleSearch,\n                        setCountry: setCountry,\n                        globeRef: globeRef\n                    }, void 0, false, {\n                        fileName: \"/root/open-politics/open_politics_project/frontend/next-generation-interface/src/app/page.tsx\",\n                        lineNumber: 105,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/root/open-politics/open_politics_project/frontend/next-generation-interface/src/app/page.tsx\",\n                    lineNumber: 94,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_WikipediaView__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    content: articleContent\n                }, void 0, false, {\n                    fileName: \"/root/open-politics/open_politics_project/frontend/next-generation-interface/src/app/page.tsx\",\n                    lineNumber: 107,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-center mt-4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                        children: \"Hit CMD/ CTRL + K for more suggestions\"\n                    }, void 0, false, {\n                        fileName: \"/root/open-politics/open_politics_project/frontend/next-generation-interface/src/app/page.tsx\",\n                        lineNumber: 109,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/root/open-politics/open_politics_project/frontend/next-generation-interface/src/app/page.tsx\",\n                    lineNumber: 108,\n                    columnNumber: 9\n                }, undefined),\n                leaderInfo && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LeaderInfo__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    state: leaderInfo.State,\n                    headOfState: leaderInfo[\"Head of State\"],\n                    headOfStateImage: leaderInfo[\"Head of State Image\"],\n                    headOfGovernment: leaderInfo[\"Head of Government\"],\n                    headOfGovernmentImage: leaderInfo[\"Head of Government Image\"]\n                }, void 0, false, {\n                    fileName: \"/root/open-politics/open_politics_project/frontend/next-generation-interface/src/app/page.tsx\",\n                    lineNumber: 112,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Results__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    results: results\n                }, void 0, false, {\n                    fileName: \"/root/open-politics/open_politics_project/frontend/next-generation-interface/src/app/page.tsx\",\n                    lineNumber: 120,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/root/open-politics/open_politics_project/frontend/next-generation-interface/src/app/page.tsx\",\n            lineNumber: 74,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/root/open-politics/open_politics_project/frontend/next-generation-interface/src/app/page.tsx\",\n        lineNumber: 73,\n        columnNumber: 5\n    }, undefined);\n};\n_s(HomePage, \"DTeJpFccWKOzlSUpPfkLWcOeL2A=\", false, function() {\n    return [\n        _components_ui_use_toast__WEBPACK_IMPORTED_MODULE_8__.useToast\n    ];\n});\n_c1 = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c, _c1;\n$RefreshReg$(_c, \"Globe\");\n$RefreshReg$(_c1, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDhEQUFDaEMsMERBQU1BO29CQUFDd0QsU0FBU25CO29CQUFZTSxXQUFVOzhCQUNwQ3hCLGVBQWUscUJBQXFCOzs7Ozs7OEJBRXZDLDhEQUFDcEIsa0RBQU1BLENBQUMyQyxHQUFHO29CQUNUQyxXQUFVO29CQUNWRyxTQUFTO3dCQUNQSyxVQUFVaEMsZUFBZSxhQUFhO3dCQUN0QzhCLEtBQUs5QixlQUFlLFNBQVM7d0JBQzdCK0IsTUFBTS9CLGVBQWUsUUFBUTt3QkFDN0JzQyxXQUFXdEMsZUFBZSwwQkFBMEI7d0JBQ3BENEIsT0FBTzVCLGVBQWUsUUFBUTtvQkFDaEM7b0JBQ0FpQyxZQUFZO3dCQUFFQyxVQUFVO29CQUFJOzhCQUU1Qiw0RUFBQzlELDBEQUFNQTt3QkFBQ2UsWUFBWTRCO3dCQUFjeEIsWUFBWUE7d0JBQVlXLFVBQVVBOzs7Ozs7Ozs7Ozs4QkFFdEUsOERBQUM1QixpRUFBYUE7b0JBQUNpRSxTQUFTbkQ7Ozs7Ozs4QkFDeEIsOERBQUNtQztvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ2dCO2tDQUFHOzs7Ozs7Ozs7OztnQkFFTGhELDRCQUNDLDhEQUFDakIsOERBQVVBO29CQUNUa0UsT0FBT2pELFdBQVdrRCxLQUFLO29CQUN2QkMsYUFBYW5ELFVBQVUsQ0FBQyxnQkFBZ0I7b0JBQ3hDb0Qsa0JBQWtCcEQsVUFBVSxDQUFDLHNCQUFzQjtvQkFDbkRxRCxrQkFBa0JyRCxVQUFVLENBQUMscUJBQXFCO29CQUNsRHNELHVCQUF1QnRELFVBQVUsQ0FBQywyQkFBMkI7Ozs7Ozs4QkFHakUsOERBQUNoQiwyREFBT0E7b0JBQUNVLFNBQVNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUkxQjtHQTFHTUY7O1FBVWNOLDhEQUFRQTs7O01BVnRCTTtBQTRHTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFNlYXJjaCBmcm9tICcuL2NvbXBvbmVudHMvU2VhcmNoJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgV2lraXBlZGlhVmlldyBmcm9tICcuL2NvbXBvbmVudHMvV2lraXBlZGlhVmlldyc7XG5pbXBvcnQgTGVhZGVySW5mbyBmcm9tICcuL2NvbXBvbmVudHMvTGVhZGVySW5mbyc7XG5pbXBvcnQgUmVzdWx0cyBmcm9tICcuL2NvbXBvbmVudHMvUmVzdWx0cyc7IFxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IHVzZVRvYXN0IH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS91c2UtdG9hc3RcIjtcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwiLi9jb21wb25lbnRzL3RoZW1lLXByb3ZpZGVyXCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0AvY29tcG9uZW50cy91aS9idXR0b24nO1xuXG5jb25zdCBHbG9iZSA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuL2NvbXBvbmVudHMvR2xvYmUnKSwgeyBzc3I6IGZhbHNlIH0pO1xuXG5jb25zdCBIb21lUGFnZTogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IGdlb2pzb25VcmwgPSAnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2dlb2pzb24vJztcbiAgY29uc3QgW3Jlc3VsdHMsIHNldFJlc3VsdHNdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFthcnRpY2xlQ29udGVudCwgc2V0QXJ0aWNsZUNvbnRlbnRdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XG4gIGNvbnN0IFtjb3VudHJ5LCBzZXRDb3VudHJ5XSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbbGVhZGVySW5mbywgc2V0TGVhZGVySW5mb10gPSB1c2VTdGF0ZTxhbnkgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2N1cnJlbnRUaW1lLCBzZXRDdXJyZW50VGltZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKSk7XG4gIGNvbnN0IFtpc1NlYXJjaEFjdGl2ZSwgc2V0SXNTZWFyY2hBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpOyBcbiAgY29uc3QgW2lzQnJvd3NlTW9kZSwgc2V0SXNCcm93c2VNb2RlXSA9IHVzZVN0YXRlKHRydWUpOyAvLyBOZXcgc3RhdGUgZm9yIHRvZ2dsaW5nIG1vZGVzXG4gIGNvbnN0IGdsb2JlUmVmID0gdXNlUmVmPGFueT4obnVsbCk7XG4gIGNvbnN0IHsgdG9hc3QgfSA9IHVzZVRvYXN0KCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoY291bnRyeSkge1xuICAgICAgY29uc3QgZmV0Y2hMZWFkZXJJbmZvID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2xlYWRlcnMvJHtjb3VudHJ5fS9gKTtcbiAgICAgICAgICBzZXRMZWFkZXJJbmZvKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGxlYWRlciBpbmZvOicsIGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgZmV0Y2hMZWFkZXJJbmZvKCk7XG4gICAgfVxuICB9LCBbY291bnRyeV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBzZXRDdXJyZW50VGltZShuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCkpO1xuICAgIH0sIDEwMDApO1xuXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlQ291bnRyeUNsaWNrID0gYXN5bmMgKGNvdW50cnlOYW1lOiBzdHJpbmcpID0+IHtcbiAgICBzZXRDb3VudHJ5KGNvdW50cnlOYW1lKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTZWFyY2ggPSAocmVzdWx0czogYW55KSA9PiB7XG4gICAgc2V0UmVzdWx0cyhyZXN1bHRzKTtcbiAgICBzZXRJc1NlYXJjaEFjdGl2ZSh0cnVlKTsgXG4gICAgc2V0SXNCcm93c2VNb2RlKGZhbHNlKTsgLy8gU3dpdGNoIHRvIGRldGFpbCBtb2RlXG4gICAgdG9hc3Qoe1xuICAgICAgdGl0bGU6IFwiU2VhcmNoIENvbXBsZXRlZFwiLFxuICAgICAgZGVzY3JpcHRpb246IFwiWW91ciBzZWFyY2ggcmVzdWx0cyBhcmUgbm93IGF2YWlsYWJsZS5cIixcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCB0b2dnbGVNb2RlID0gKCkgPT4ge1xuICAgIHNldElzQnJvd3NlTW9kZSghaXNCcm93c2VNb2RlKTtcbiAgICBzZXRJc1NlYXJjaEFjdGl2ZSghaXNTZWFyY2hBY3RpdmUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFRoZW1lUHJvdmlkZXIgYXR0cmlidXRlPVwiY2xhc3NcIiBkZWZhdWx0VGhlbWU9XCJzeXN0ZW1cIiBlbmFibGVTeXN0ZW0gZGlzYWJsZVRyYW5zaXRpb25PbkNoYW5nZT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNCBtdC00IG1pbi1oLXNjcmVlblwiPlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJtdC00IGJnIHB5LTQgdGV4dC00eGwgdGV4dC1jZW50ZXJcIj57Y3VycmVudFRpbWV9PC9oMT5cbiAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICBpZD1cImdsb2JlLWNvbnRhaW5lclwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgbXktOFwiXG4gICAgICAgICAgYW5pbWF0ZT17e1xuICAgICAgICAgICAgd2lkdGg6IGlzQnJvd3NlTW9kZSA/ICcxMDAlJyA6ICcyNTBweCcsXG4gICAgICAgICAgICBoZWlnaHQ6IGlzQnJvd3NlTW9kZSA/ICc2MDBweCcgOiAnMjAwcHgnLFxuICAgICAgICAgICAgdG9wOiBpc0Jyb3dzZU1vZGUgPyAnMHB4JyA6ICc2MHB4JyxcbiAgICAgICAgICAgIGxlZnQ6IGlzQnJvd3NlTW9kZSA/ICcwcHgnIDogJzU1MHB4JyxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBpc0Jyb3dzZU1vZGUgPyAncmVsYXRpdmUnIDogJ2Fic29sdXRlJyxcbiAgICAgICAgICB9fVxuICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNSB9fVxuICAgICAgICA+XG4gICAgICAgICAgPEdsb2JlIHJlZj17Z2xvYmVSZWZ9IGdlb2pzb25Vcmw9e2dlb2pzb25Vcmx9IHNldEFydGljbGVDb250ZW50PXtzZXRBcnRpY2xlQ29udGVudH0gb25Db3VudHJ5Q2xpY2s9e2hhbmRsZUNvdW50cnlDbGlja30gLz5cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZU1vZGV9IGNsYXNzTmFtZT1cIm10LTQgcHgtNCBweS0yIHByaW1hcnkgdGV4dC13aGl0ZSByb3VuZGVkXCI+XG4gICAgICAgICAge2lzQnJvd3NlTW9kZSA/ICdTaG93IERldGFpbCBWaWV3JyA6ICdTaG93IEJyb3dzZSBWaWV3J31cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwic2VhcmNoLWNvbnRhaW5lclwiXG4gICAgICAgICAgYW5pbWF0ZT17e1xuICAgICAgICAgICAgcG9zaXRpb246IGlzQnJvd3NlTW9kZSA/ICdhYnNvbHV0ZScgOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgdG9wOiBpc0Jyb3dzZU1vZGUgPyAnMTAwJScgOiAnMCcsXG4gICAgICAgICAgICBsZWZ0OiBpc0Jyb3dzZU1vZGUgPyAnODAlJyA6ICcwJyxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogaXNCcm93c2VNb2RlID8gJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScgOiAnbm9uZScsXG4gICAgICAgICAgICB3aWR0aDogaXNCcm93c2VNb2RlID8gJzgwJScgOiAnMTAwJScsXG4gICAgICAgICAgfX1cbiAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjUgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxTZWFyY2ggc2V0UmVzdWx0cz17aGFuZGxlU2VhcmNofSBzZXRDb3VudHJ5PXtzZXRDb3VudHJ5fSBnbG9iZVJlZj17Z2xvYmVSZWZ9IC8+XG4gICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgPFdpa2lwZWRpYVZpZXcgY29udGVudD17YXJ0aWNsZUNvbnRlbnR9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtNFwiPlxuICAgICAgICAgIDxoNT5IaXQgQ01ELyBDVFJMICsgSyBmb3IgbW9yZSBzdWdnZXN0aW9uczwvaDU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7bGVhZGVySW5mbyAmJiAoXG4gICAgICAgICAgPExlYWRlckluZm9cbiAgICAgICAgICAgIHN0YXRlPXtsZWFkZXJJbmZvLlN0YXRlfVxuICAgICAgICAgICAgaGVhZE9mU3RhdGU9e2xlYWRlckluZm9bJ0hlYWQgb2YgU3RhdGUnXX1cbiAgICAgICAgICAgIGhlYWRPZlN0YXRlSW1hZ2U9e2xlYWRlckluZm9bJ0hlYWQgb2YgU3RhdGUgSW1hZ2UnXX1cbiAgICAgICAgICAgIGhlYWRPZkdvdmVybm1lbnQ9e2xlYWRlckluZm9bJ0hlYWQgb2YgR292ZXJubWVudCddfVxuICAgICAgICAgICAgaGVhZE9mR292ZXJubWVudEltYWdlPXtsZWFkZXJJbmZvWydIZWFkIG9mIEdvdmVybm1lbnQgSW1hZ2UnXX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICA8UmVzdWx0cyByZXN1bHRzPXtyZXN1bHRzfSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9UaGVtZVByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsImR5bmFtaWMiLCJTZWFyY2giLCJIZWFkZXIiLCJXaWtpcGVkaWFWaWV3IiwiTGVhZGVySW5mbyIsIlJlc3VsdHMiLCJheGlvcyIsInVzZVRvYXN0IiwiVGhlbWVQcm92aWRlciIsIm1vdGlvbiIsIkJ1dHRvbiIsIkdsb2JlIiwic3NyIiwiSG9tZVBhZ2UiLCJnZW9qc29uVXJsIiwicmVzdWx0cyIsInNldFJlc3VsdHMiLCJhcnRpY2xlQ29udGVudCIsInNldEFydGljbGVDb250ZW50IiwiY291bnRyeSIsInNldENvdW50cnkiLCJsZWFkZXJJbmZvIiwic2V0TGVhZGVySW5mbyIsImN1cnJlbnRUaW1lIiwic2V0Q3VycmVudFRpbWUiLCJEYXRlIiwidG9Mb2NhbGVTdHJpbmciLCJpc1NlYXJjaEFjdGl2ZSIsInNldElzU2VhcmNoQWN0aXZlIiwiaXNCcm93c2VNb2RlIiwic2V0SXNCcm93c2VNb2RlIiwiZ2xvYmVSZWYiLCJ0b2FzdCIsImZldGNoTGVhZGVySW5mbyIsInJlc3BvbnNlIiwiZ2V0IiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsInRpbWVyIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiaGFuZGxlQ291bnRyeUNsaWNrIiwiY291bnRyeU5hbWUiLCJoYW5kbGVTZWFyY2giLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwidG9nZ2xlTW9kZSIsImF0dHJpYnV0ZSIsImRlZmF1bHRUaGVtZSIsImVuYWJsZVN5c3RlbSIsImRpc2FibGVUcmFuc2l0aW9uT25DaGFuZ2UiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImlkIiwiYW5pbWF0ZSIsIndpZHRoIiwiaGVpZ2h0IiwidG9wIiwibGVmdCIsInBvc2l0aW9uIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwicmVmIiwib25Db3VudHJ5Q2xpY2siLCJvbkNsaWNrIiwidHJhbnNmb3JtIiwiY29udGVudCIsImg1Iiwic3RhdGUiLCJTdGF0ZSIsImhlYWRPZlN0YXRlIiwiaGVhZE9mU3RhdGVJbWFnZSIsImhlYWRPZkdvdmVybm1lbnQiLCJoZWFkT2ZHb3Zlcm5tZW50SW1hZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});