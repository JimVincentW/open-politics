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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"(app-pages-browser)/./node_modules/next/dist/api/app-dynamic.js\");\n/* harmony import */ var _components_Search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Search */ \"(app-pages-browser)/./src/app/components/Search.tsx\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Header */ \"(app-pages-browser)/./src/app/components/Header.tsx\");\n/* harmony import */ var _components_WikipediaView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/WikipediaView */ \"(app-pages-browser)/./src/app/components/WikipediaView.tsx\");\n/* harmony import */ var _components_LeaderInfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/LeaderInfo */ \"(app-pages-browser)/./src/app/components/LeaderInfo.tsx\");\n/* harmony import */ var _components_Results__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Results */ \"(app-pages-browser)/./src/app/components/Results.tsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _components_ui_use_toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/ui/use-toast */ \"(app-pages-browser)/./src/components/ui/use-toast.ts\");\n/* harmony import */ var _components_theme_provider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/theme-provider */ \"(app-pages-browser)/./src/app/components/theme-provider.tsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nconst Globe = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(()=>__webpack_require__.e(/*! import() */ \"_app-pages-browser_src_app_components_Globe_tsx\").then(__webpack_require__.bind(__webpack_require__, /*! ./components/Globe */ \"(app-pages-browser)/./src/app/components/Globe.tsx\")), {\n    loadableGenerated: {\n        modules: [\n            \"app/page.tsx -> \" + \"./components/Globe\"\n        ]\n    },\n    ssr: false\n});\n_c = Globe;\nconst HomePage = ()=>{\n    _s();\n    const geojsonUrl = \"http://localhost:8000/geojson/\";\n    const [results, setResults] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [articleContent, setArticleContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [country, setCountry] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [leaderInfo, setLeaderInfo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [currentTime, setCurrentTime] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Date().toLocaleString());\n    const [isSearchActive, setIsSearchActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isBrowseMode, setIsBrowseMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true); // New state for toggling modes\n    const globeRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const { toast } = (0,_components_ui_use_toast__WEBPACK_IMPORTED_MODULE_8__.useToast)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (country) {\n            const fetchLeaderInfo = async ()=>{\n                try {\n                    const response = await axios__WEBPACK_IMPORTED_MODULE_10__[\"default\"].get(\"http://localhost:8000/api/leaders/\".concat(country, \"/\"));\n                    setLeaderInfo(response.data);\n                } catch (error) {\n                    console.error(\"Error fetching leader info:\", error);\n                }\n            };\n            fetchLeaderInfo();\n        }\n    }, [\n        country\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const timer = setInterval(()=>{\n            setCurrentTime(new Date().toLocaleString());\n        }, 1000);\n        return ()=>clearInterval(timer);\n    }, []);\n    const handleCountryClick = async (countryName)=>{\n        setCountry(countryName);\n    };\n    const handleSearch = (results)=>{\n        setResults(results);\n        setIsSearchActive(true);\n        setIsBrowseMode(false); // Switch to detail mode\n        toast({\n            title: \"Search Completed\",\n            description: \"Your search results are now available.\"\n        });\n    };\n    const toggleMode = ()=>{\n        setIsBrowseMode(!isBrowseMode);\n        setIsSearchActive(!isSearchActive);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_theme_provider__WEBPACK_IMPORTED_MODULE_9__.ThemeProvider, {\n        attribute: \"class\",\n        defaultTheme: \"system\",\n        enableSystem: true,\n        disableTransitionOnChange: true,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto px-4 mt-4 min-h-screen\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"/root/open-politics/open_politics_project/frontend/next-generation-interface/src/app/page.tsx\",\n                    lineNumber: 74,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"mt-4 bg py-4 text-4xl text-center font-extrabold text-green-400\",\n                    children: currentTime\n                }, void 0, false, {\n                    fileName: \"/root/open-politics/open_politics_project/frontend/next-generation-interface/src/app/page.tsx\",\n                    lineNumber: 75,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_11__.motion.div, {\n                    id: \"globe-container\",\n                    className: \"relative my-4\",\n                    animate: {\n                        width: isBrowseMode ? \"100%\" : \"200px\",\n                        height: isBrowseMode ? \"500px\" : \"200px\",\n                        top: isBrowseMode ? \"0px\" : \"20px\",\n                        left: isBrowseMode ? \"0px\" : \"20px\",\n                        position: isBrowseMode ? \"relative\" : \"absolute\"\n                    },\n                    transition: {\n                        duration: 0.5\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Globe, {\n                        ref: globeRef,\n                        geojsonUrl: geojsonUrl,\n                        setArticleContent: setArticleContent,\n                        onCountryClick: handleCountryClick\n                    }, void 0, false, {\n                        fileName: \"/root/open-politics/open_politics_project/frontend/next-generation-interface/src/app/page.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/root/open-politics/open_politics_project/frontend/next-generation-interface/src/app/page.tsx\",\n                    lineNumber: 76,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: toggleMode,\n                    className: \"mt-4 px-4 py-2 bg-blue-500 text-white rounded\",\n                    children: isBrowseMode ? \"Show Detail View\" : \"Show Browse View\"\n                }, void 0, false, {\n                    fileName: \"/root/open-politics/open_politics_project/frontend/next-generation-interface/src/app/page.tsx\",\n                    lineNumber: 90,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Search__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    setResults: handleSearch,\n                    setCountry: setCountry,\n                    globeRef: globeRef\n                }, void 0, false, {\n                    fileName: \"/root/open-politics/open_politics_project/frontend/next-generation-interface/src/app/page.tsx\",\n                    lineNumber: 93,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_WikipediaView__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    content: articleContent\n                }, void 0, false, {\n                    fileName: \"/root/open-politics/open_politics_project/frontend/next-generation-interface/src/app/page.tsx\",\n                    lineNumber: 94,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-center mt-4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                        children: \"Hit CMD/ CTRL + K for more suggestions\"\n                    }, void 0, false, {\n                        fileName: \"/root/open-politics/open_politics_project/frontend/next-generation-interface/src/app/page.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/root/open-politics/open_politics_project/frontend/next-generation-interface/src/app/page.tsx\",\n                    lineNumber: 95,\n                    columnNumber: 9\n                }, undefined),\n                leaderInfo && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LeaderInfo__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    state: leaderInfo.State,\n                    headOfState: leaderInfo[\"Head of State\"],\n                    headOfStateImage: leaderInfo[\"Head of State Image\"],\n                    headOfGovernment: leaderInfo[\"Head of Government\"],\n                    headOfGovernmentImage: leaderInfo[\"Head of Government Image\"]\n                }, void 0, false, {\n                    fileName: \"/root/open-politics/open_politics_project/frontend/next-generation-interface/src/app/page.tsx\",\n                    lineNumber: 99,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Results__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    results: results\n                }, void 0, false, {\n                    fileName: \"/root/open-politics/open_politics_project/frontend/next-generation-interface/src/app/page.tsx\",\n                    lineNumber: 107,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/root/open-politics/open_politics_project/frontend/next-generation-interface/src/app/page.tsx\",\n            lineNumber: 73,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/root/open-politics/open_politics_project/frontend/next-generation-interface/src/app/page.tsx\",\n        lineNumber: 72,\n        columnNumber: 5\n    }, undefined);\n};\n_s(HomePage, \"DTeJpFccWKOzlSUpPfkLWcOeL2A=\", false, function() {\n    return [\n        _components_ui_use_toast__WEBPACK_IMPORTED_MODULE_8__.useToast\n    ];\n});\n_c1 = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c, _c1;\n$RefreshReg$(_c, \"Globe\");\n$RefreshReg$(_c1, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d0I7b0JBQU9DLFNBQVNwQjtvQkFBWU0sV0FBVTs4QkFDcEN4QixlQUFlLHFCQUFxQjs7Ozs7OzhCQUV2Qyw4REFBQzNCLDBEQUFNQTtvQkFBQ2MsWUFBWTRCO29CQUFjeEIsWUFBWUE7b0JBQVlXLFVBQVVBOzs7Ozs7OEJBQ3BFLDhEQUFDM0IsaUVBQWFBO29CQUFDZ0UsU0FBU25EOzs7Ozs7OEJBQ3hCLDhEQUFDbUM7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNnQjtrQ0FBRzs7Ozs7Ozs7Ozs7Z0JBRUxoRCw0QkFDQyw4REFBQ2hCLDhEQUFVQTtvQkFDVGlFLE9BQU9qRCxXQUFXa0QsS0FBSztvQkFDdkJDLGFBQWFuRCxVQUFVLENBQUMsZ0JBQWdCO29CQUN4Q29ELGtCQUFrQnBELFVBQVUsQ0FBQyxzQkFBc0I7b0JBQ25EcUQsa0JBQWtCckQsVUFBVSxDQUFDLHFCQUFxQjtvQkFDbERzRCx1QkFBdUJ0RCxVQUFVLENBQUMsMkJBQTJCOzs7Ozs7OEJBR2pFLDhEQUFDZiwyREFBT0E7b0JBQUNTLFNBQVNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUkxQjtHQTlGTUY7O1FBVWNMLDhEQUFRQTs7O01BVnRCSztBQWdHTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFNlYXJjaCBmcm9tICcuL2NvbXBvbmVudHMvU2VhcmNoJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgV2lraXBlZGlhVmlldyBmcm9tICcuL2NvbXBvbmVudHMvV2lraXBlZGlhVmlldyc7XG5pbXBvcnQgTGVhZGVySW5mbyBmcm9tICcuL2NvbXBvbmVudHMvTGVhZGVySW5mbyc7XG5pbXBvcnQgUmVzdWx0cyBmcm9tICcuL2NvbXBvbmVudHMvUmVzdWx0cyc7IFxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IHVzZVRvYXN0IH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS91c2UtdG9hc3RcIjtcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwiLi9jb21wb25lbnRzL3RoZW1lLXByb3ZpZGVyXCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcblxuY29uc3QgR2xvYmUgPSBkeW5hbWljKCgpID0+IGltcG9ydCgnLi9jb21wb25lbnRzL0dsb2JlJyksIHsgc3NyOiBmYWxzZSB9KTtcblxuY29uc3QgSG9tZVBhZ2U6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBnZW9qc29uVXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9nZW9qc29uLyc7XG4gIGNvbnN0IFtyZXN1bHRzLCBzZXRSZXN1bHRzXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbYXJ0aWNsZUNvbnRlbnQsIHNldEFydGljbGVDb250ZW50XSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xuICBjb25zdCBbY291bnRyeSwgc2V0Q291bnRyeV0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2xlYWRlckluZm8sIHNldExlYWRlckluZm9dID0gdXNlU3RhdGU8YW55IHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtjdXJyZW50VGltZSwgc2V0Q3VycmVudFRpbWVdID0gdXNlU3RhdGU8c3RyaW5nPihuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCkpO1xuICBjb25zdCBbaXNTZWFyY2hBY3RpdmUsIHNldElzU2VhcmNoQWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTsgXG4gIGNvbnN0IFtpc0Jyb3dzZU1vZGUsIHNldElzQnJvd3NlTW9kZV0gPSB1c2VTdGF0ZSh0cnVlKTsgLy8gTmV3IHN0YXRlIGZvciB0b2dnbGluZyBtb2Rlc1xuICBjb25zdCBnbG9iZVJlZiA9IHVzZVJlZjxhbnk+KG51bGwpO1xuICBjb25zdCB7IHRvYXN0IH0gPSB1c2VUb2FzdCgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGNvdW50cnkpIHtcbiAgICAgIGNvbnN0IGZldGNoTGVhZGVySW5mbyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9sZWFkZXJzLyR7Y291bnRyeX0vYCk7XG4gICAgICAgICAgc2V0TGVhZGVySW5mbyhyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBsZWFkZXIgaW5mbzonLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGZldGNoTGVhZGVySW5mbygpO1xuICAgIH1cbiAgfSwgW2NvdW50cnldKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgc2V0Q3VycmVudFRpbWUobmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpKTtcbiAgICB9LCAxMDAwKTtcblxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKHRpbWVyKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZUNvdW50cnlDbGljayA9IGFzeW5jIChjb3VudHJ5TmFtZTogc3RyaW5nKSA9PiB7XG4gICAgc2V0Q291bnRyeShjb3VudHJ5TmFtZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU2VhcmNoID0gKHJlc3VsdHM6IGFueSkgPT4ge1xuICAgIHNldFJlc3VsdHMocmVzdWx0cyk7XG4gICAgc2V0SXNTZWFyY2hBY3RpdmUodHJ1ZSk7IFxuICAgIHNldElzQnJvd3NlTW9kZShmYWxzZSk7IC8vIFN3aXRjaCB0byBkZXRhaWwgbW9kZVxuICAgIHRvYXN0KHtcbiAgICAgIHRpdGxlOiBcIlNlYXJjaCBDb21wbGV0ZWRcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIllvdXIgc2VhcmNoIHJlc3VsdHMgYXJlIG5vdyBhdmFpbGFibGUuXCIsXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlTW9kZSA9ICgpID0+IHtcbiAgICBzZXRJc0Jyb3dzZU1vZGUoIWlzQnJvd3NlTW9kZSk7XG4gICAgc2V0SXNTZWFyY2hBY3RpdmUoIWlzU2VhcmNoQWN0aXZlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxUaGVtZVByb3ZpZGVyIGF0dHJpYnV0ZT1cImNsYXNzXCIgZGVmYXVsdFRoZW1lPVwic3lzdGVtXCIgZW5hYmxlU3lzdGVtIGRpc2FibGVUcmFuc2l0aW9uT25DaGFuZ2U+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTQgbXQtNCBtaW4taC1zY3JlZW5cIj5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwibXQtNCBiZyBweS00IHRleHQtNHhsIHRleHQtY2VudGVyIGZvbnQtZXh0cmFib2xkIHRleHQtZ3JlZW4tNDAwXCI+e2N1cnJlbnRUaW1lfTwvaDE+XG4gICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgaWQ9XCJnbG9iZS1jb250YWluZXJcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIG15LTRcIlxuICAgICAgICAgIGFuaW1hdGU9e3tcbiAgICAgICAgICAgIHdpZHRoOiBpc0Jyb3dzZU1vZGUgPyAnMTAwJScgOiAnMjAwcHgnLFxuICAgICAgICAgICAgaGVpZ2h0OiBpc0Jyb3dzZU1vZGUgPyAnNTAwcHgnIDogJzIwMHB4JyxcbiAgICAgICAgICAgIHRvcDogaXNCcm93c2VNb2RlID8gJzBweCcgOiAnMjBweCcsXG4gICAgICAgICAgICBsZWZ0OiBpc0Jyb3dzZU1vZGUgPyAnMHB4JyA6ICcyMHB4JyxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBpc0Jyb3dzZU1vZGUgPyAncmVsYXRpdmUnIDogJ2Fic29sdXRlJyxcbiAgICAgICAgICB9fVxuICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNSB9fVxuICAgICAgICA+XG4gICAgICAgICAgPEdsb2JlIHJlZj17Z2xvYmVSZWZ9IGdlb2pzb25Vcmw9e2dlb2pzb25Vcmx9IHNldEFydGljbGVDb250ZW50PXtzZXRBcnRpY2xlQ29udGVudH0gb25Db3VudHJ5Q2xpY2s9e2hhbmRsZUNvdW50cnlDbGlja30gLz5cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZU1vZGV9IGNsYXNzTmFtZT1cIm10LTQgcHgtNCBweS0yIGJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcm91bmRlZFwiPlxuICAgICAgICAgIHtpc0Jyb3dzZU1vZGUgPyAnU2hvdyBEZXRhaWwgVmlldycgOiAnU2hvdyBCcm93c2UgVmlldyd9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8U2VhcmNoIHNldFJlc3VsdHM9e2hhbmRsZVNlYXJjaH0gc2V0Q291bnRyeT17c2V0Q291bnRyeX0gZ2xvYmVSZWY9e2dsb2JlUmVmfSAvPlxuICAgICAgICA8V2lraXBlZGlhVmlldyBjb250ZW50PXthcnRpY2xlQ29udGVudH0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC00XCI+XG4gICAgICAgICAgPGg1PkhpdCBDTUQvIENUUkwgKyBLIGZvciBtb3JlIHN1Z2dlc3Rpb25zPC9oNT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtsZWFkZXJJbmZvICYmIChcbiAgICAgICAgICA8TGVhZGVySW5mb1xuICAgICAgICAgICAgc3RhdGU9e2xlYWRlckluZm8uU3RhdGV9XG4gICAgICAgICAgICBoZWFkT2ZTdGF0ZT17bGVhZGVySW5mb1snSGVhZCBvZiBTdGF0ZSddfVxuICAgICAgICAgICAgaGVhZE9mU3RhdGVJbWFnZT17bGVhZGVySW5mb1snSGVhZCBvZiBTdGF0ZSBJbWFnZSddfVxuICAgICAgICAgICAgaGVhZE9mR292ZXJubWVudD17bGVhZGVySW5mb1snSGVhZCBvZiBHb3Zlcm5tZW50J119XG4gICAgICAgICAgICBoZWFkT2ZHb3Zlcm5tZW50SW1hZ2U9e2xlYWRlckluZm9bJ0hlYWQgb2YgR292ZXJubWVudCBJbWFnZSddfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIDxSZXN1bHRzIHJlc3VsdHM9e3Jlc3VsdHN9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiZHluYW1pYyIsIlNlYXJjaCIsIkhlYWRlciIsIldpa2lwZWRpYVZpZXciLCJMZWFkZXJJbmZvIiwiUmVzdWx0cyIsImF4aW9zIiwidXNlVG9hc3QiLCJUaGVtZVByb3ZpZGVyIiwibW90aW9uIiwiR2xvYmUiLCJzc3IiLCJIb21lUGFnZSIsImdlb2pzb25VcmwiLCJyZXN1bHRzIiwic2V0UmVzdWx0cyIsImFydGljbGVDb250ZW50Iiwic2V0QXJ0aWNsZUNvbnRlbnQiLCJjb3VudHJ5Iiwic2V0Q291bnRyeSIsImxlYWRlckluZm8iLCJzZXRMZWFkZXJJbmZvIiwiY3VycmVudFRpbWUiLCJzZXRDdXJyZW50VGltZSIsIkRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsImlzU2VhcmNoQWN0aXZlIiwic2V0SXNTZWFyY2hBY3RpdmUiLCJpc0Jyb3dzZU1vZGUiLCJzZXRJc0Jyb3dzZU1vZGUiLCJnbG9iZVJlZiIsInRvYXN0IiwiZmV0Y2hMZWFkZXJJbmZvIiwicmVzcG9uc2UiLCJnZXQiLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwidGltZXIiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJoYW5kbGVDb3VudHJ5Q2xpY2siLCJjb3VudHJ5TmFtZSIsImhhbmRsZVNlYXJjaCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJ0b2dnbGVNb2RlIiwiYXR0cmlidXRlIiwiZGVmYXVsdFRoZW1lIiwiZW5hYmxlU3lzdGVtIiwiZGlzYWJsZVRyYW5zaXRpb25PbkNoYW5nZSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiaWQiLCJhbmltYXRlIiwid2lkdGgiLCJoZWlnaHQiLCJ0b3AiLCJsZWZ0IiwicG9zaXRpb24iLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJyZWYiLCJvbkNvdW50cnlDbGljayIsImJ1dHRvbiIsIm9uQ2xpY2siLCJjb250ZW50IiwiaDUiLCJzdGF0ZSIsIlN0YXRlIiwiaGVhZE9mU3RhdGUiLCJoZWFkT2ZTdGF0ZUltYWdlIiwiaGVhZE9mR292ZXJubWVudCIsImhlYWRPZkdvdmVybm1lbnRJbWFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});