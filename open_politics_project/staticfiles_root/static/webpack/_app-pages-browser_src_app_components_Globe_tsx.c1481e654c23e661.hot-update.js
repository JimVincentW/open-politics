"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("_app-pages-browser_src_app_components_Globe_tsx",{

/***/ "(app-pages-browser)/./src/app/components/Globe.tsx":
/*!**************************************!*\
  !*** ./src/app/components/Globe.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"(app-pages-browser)/./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @amcharts/amcharts5 */ \"(app-pages-browser)/./node_modules/@amcharts/amcharts5/.internal/core/Root.js\");\n/* harmony import */ var _amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @amcharts/amcharts5 */ \"(app-pages-browser)/./node_modules/@amcharts/amcharts5/.internal/core/util/Color.js\");\n/* harmony import */ var _amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @amcharts/amcharts5 */ \"(app-pages-browser)/./node_modules/@amcharts/amcharts5/.internal/core/util/Ease.js\");\n/* harmony import */ var _amcharts_amcharts5_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @amcharts/amcharts5/map */ \"(app-pages-browser)/./node_modules/@amcharts/amcharts5/.internal/charts/map/MapChart.js\");\n/* harmony import */ var _amcharts_amcharts5_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @amcharts/amcharts5/map */ \"(app-pages-browser)/./node_modules/d3-geo/src/projection/orthographic.js\");\n/* harmony import */ var _amcharts_amcharts5_map__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @amcharts/amcharts5/map */ \"(app-pages-browser)/./node_modules/@amcharts/amcharts5/.internal/charts/map/MapPolygonSeries.js\");\n/* harmony import */ var _amcharts_amcharts5_geodata_worldLow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @amcharts/amcharts5-geodata/worldLow */ \"(app-pages-browser)/./node_modules/@amcharts/amcharts5-geodata/worldLow.js\");\n/* harmony import */ var _amcharts_amcharts5_themes_Animated__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @amcharts/amcharts5/themes/Animated */ \"(app-pages-browser)/./node_modules/@amcharts/amcharts5/themes/Animated.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n// globe.tsx\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Globe = /*#__PURE__*/ _s((0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(_c = _s((props, ref)=>{\n    _s();\n    var _s1 = $RefreshSig$();\n    const { geojsonUrl } = props;\n    const chartRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const [isClient, setIsClient] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [articleContent, setArticleContent] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        setIsClient(true);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useLayoutEffect)(_s1(()=>{\n        _s1();\n        if (!isClient) return;\n        const root = _amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_4__.Root.new(\"chartdiv\");\n        root.setThemes([\n            _amcharts_amcharts5_themes_Animated__WEBPACK_IMPORTED_MODULE_5__[\"default\"].new(root)\n        ]);\n        const chart = root.container.children.push(_amcharts_amcharts5_map__WEBPACK_IMPORTED_MODULE_6__.MapChart.new(root, {\n            panX: \"rotateX\",\n            panY: \"rotateY\",\n            projection: _amcharts_amcharts5_map__WEBPACK_IMPORTED_MODULE_7__[\"default\"]()\n        }));\n        const polygonSeries = chart.series.push(_amcharts_amcharts5_map__WEBPACK_IMPORTED_MODULE_8__.MapPolygonSeries.new(root, {\n            geoJSON: _amcharts_amcharts5_geodata_worldLow__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n        }));\n        fetch(geojsonUrl).then((response)=>response.json()).then((data)=>{\n            chart.series.push(_amcharts_amcharts5_map__WEBPACK_IMPORTED_MODULE_8__.MapPolygonSeries.new(root, {\n                geoJSON: data\n            }));\n        }).catch((error)=>console.error(\"Error fetching GeoJSON data:\", error));\n        polygonSeries.mapPolygons.template.setAll({\n            tooltipText: \"{name}\",\n            toggleKey: \"active\",\n            interactive: true\n        });\n        polygonSeries.mapPolygons.template.states.create(\"hover\", {\n            fill: _amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_9__.color(0x677935)\n        });\n        polygonSeries.mapPolygons.template.states.create(\"active\", {\n            fill: _amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_9__.color(0x677935)\n        });\n        let previousPolygon = null;\n        (0,react__WEBPACK_IMPORTED_MODULE_2__.useImperativeHandle)(ref, ()=>({\n                handleCountryQuery: async (query)=>{\n                    const fetchCountryCode = async (query)=>{\n                        try {\n                            const response = await axios__WEBPACK_IMPORTED_MODULE_10__[\"default\"].get(\"/country_from_query\", {\n                                params: {\n                                    query\n                                }\n                            });\n                            return response.data.country;\n                        } catch (error) {\n                            console.error(\"Error fetching country code:\", error);\n                            return null;\n                        }\n                    };\n                    const fetchWikipediaContent = async (countryName)=>{\n                        try {\n                            const response = await fetch(\"https://en.wikipedia.org/api/rest_v1/page/summary/\".concat(countryName));\n                            const data = await response.json();\n                            return data.extract ? \"<div><strong>\".concat(countryName, \"</strong><br>\\n\").concat(data.extract, \"</div>\") : \"<div><strong>\".concat(countryName, \"</strong>: No information available.</div>\");\n                        } catch (error) {\n                            console.error(\"Error fetching Wikipedia content:\", error);\n                            return \"<div><strong>\".concat(countryName, \"</strong>: Error fetching information.</div>\");\n                        }\n                    };\n                    const countryCode = await fetchCountryCode(query);\n                    if (!countryCode) return;\n                    const countryPolygon = polygonSeries.mapPolygons.find((polygon)=>polygon.dataItem.dataContext.id === countryCode);\n                    if (countryPolygon) {\n                        const centroid = countryPolygon.geoCentroid();\n                        if (centroid) {\n                            chart.animate({\n                                key: \"rotationX\",\n                                to: -centroid.longitude,\n                                duration: 1500,\n                                easing: _amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_11__.inOut(_amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_11__.cubic)\n                            });\n                            chart.animate({\n                                key: \"rotationY\",\n                                to: -centroid.latitude,\n                                duration: 1500,\n                                easing: _amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_11__.inOut(_amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_11__.cubic)\n                            });\n                        }\n                        const countryName = countryPolygon.dataItem.dataContext.name;\n                        const content = await fetchWikipediaContent(countryName);\n                        setArticleContent(content);\n                    }\n                }\n            }));\n        chartRef.current = root;\n        return ()=>{\n            root.dispose();\n        };\n    }, \"PYzlZ2AGFM0KxtNOGoZVRb5EOEw=\"), [\n        geojsonUrl,\n        isClient\n    ]);\n    if (!isClient) return null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-7ed44e15f3367c7b\" + \" \" + \"relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"chartdiv\",\n                style: {\n                    width: \"100%\",\n                    height: \"500px\"\n                },\n                className: \"jsx-7ed44e15f3367c7b\" + \" \" + \"\"\n            }, void 0, false, {\n                fileName: \"/root/open-politics/open_politics_project/frontend/next-generation-interface/src/app/components/Globe.tsx\",\n                lineNumber: 126,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"articleWindow\",\n                className: \"jsx-7ed44e15f3367c7b\" + \" \" + \"fixed bottom-5 right-5 w-64 h-3/4 bg-gray-800 bg-opacity-20 rounded-lg p-4 text-green-400 shadow-lg overflow-hidden\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    dangerouslySetInnerHTML: {\n                        __html: articleContent\n                    },\n                    className: \"jsx-7ed44e15f3367c7b\" + \" \" + \"inner-content h-full overflow-auto pr-4\"\n                }, void 0, false, {\n                    fileName: \"/root/open-politics/open_politics_project/frontend/next-generation-interface/src/app/components/Globe.tsx\",\n                    lineNumber: 128,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/root/open-politics/open_politics_project/frontend/next-generation-interface/src/app/components/Globe.tsx\",\n                lineNumber: 127,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"7ed44e15f3367c7b\",\n                children: \".inner-content.jsx-7ed44e15f3367c7b::-webkit-scrollbar{width:0;height:0}.inner-content.jsx-7ed44e15f3367c7b{-ms-overflow-style:none;scrollbar-width:none}\"\n            }, void 0, false, void 0, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/root/open-politics/open_politics_project/frontend/next-generation-interface/src/app/components/Globe.tsx\",\n        lineNumber: 125,\n        columnNumber: 5\n    }, undefined);\n}, \"ENAHYZIBbQIfvxGUIc2Hx8lMzgQ=\")), \"ENAHYZIBbQIfvxGUIc2Hx8lMzgQ=\");\n_c1 = Globe;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Globe);\nvar _c, _c1;\n$RefreshReg$(_c, \"Globe$forwardRef\");\n$RefreshReg$(_c1, \"Globe\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9HbG9iZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsWUFBWTs7OztBQUNpRztBQUNsRTtBQUNPO0FBQ3FCO0FBQ0Y7QUFDM0M7QUFPMUIsTUFBTVksc0JBQVFQLEdBQUFBLGlEQUFVQSxTQUFDLENBQUNRLE9BQW1CQzs7O0lBQzNDLE1BQU0sRUFBRUMsVUFBVSxFQUFFLEdBQUdGO0lBQ3ZCLE1BQU1HLFdBQVdkLDZDQUFNQSxDQUFrQjtJQUN6QyxNQUFNLENBQUNlLFVBQVVDLFlBQVksR0FBR2YsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDZ0IsZ0JBQWdCQyxrQkFBa0IsR0FBR2pCLCtDQUFRQSxDQUFTO0lBRTdEQyxnREFBU0EsQ0FBQztRQUNSYyxZQUFZO0lBQ2QsR0FBRyxFQUFFO0lBRUxqQixzREFBZUEsS0FBQzs7UUFDZCxJQUFJLENBQUNnQixVQUFVO1FBRWYsTUFBTUksT0FBT2QscURBQVEsQ0FBQ2dCLEdBQUcsQ0FBQztRQUUxQkYsS0FBS0csU0FBUyxDQUFDO1lBQUNkLDJFQUFrQkEsQ0FBQ2EsR0FBRyxDQUFDRjtTQUFNO1FBRTdDLE1BQU1JLFFBQVFKLEtBQUtLLFNBQVMsQ0FBQ0MsUUFBUSxDQUFDQyxJQUFJLENBQ3hDcEIsNkRBQWUsQ0FBQ2UsR0FBRyxDQUFDRixNQUFNO1lBQ3hCUyxNQUFNO1lBQ05DLE1BQU07WUFDTkMsWUFBWXhCLCtEQUFzQjtRQUNwQztRQUdGLE1BQU0wQixnQkFBZ0JULE1BQU1VLE1BQU0sQ0FBQ1AsSUFBSSxDQUNyQ3BCLHFFQUF1QixDQUFDZSxHQUFHLENBQUNGLE1BQU07WUFDaENnQixTQUFTNUIsNEVBQW1CQTtRQUM5QjtRQUdGNkIsTUFBTXZCLFlBQ0h3QixJQUFJLENBQUNDLENBQUFBLFdBQVlBLFNBQVNDLElBQUksSUFDOUJGLElBQUksQ0FBQ0csQ0FBQUE7WUFDSmpCLE1BQU1VLE1BQU0sQ0FBQ1AsSUFBSSxD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QUFRQyxRQUFRO2dCQUFROzBEQUEzQzs7Ozs7OzBCQUM3Qiw4REFBQ0g7Z0JBQUlqQixJQUFHOzBEQUEwQjswQkFDaEMsNEVBQUNpQjtvQkFBd0RJLHlCQUF5Qjt3QkFBRUMsUUFBUTNFO29CQUFlOzhEQUE1Rjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBY3ZCOztBQUVBLCtEQUFlUCxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9HbG9iZS50c3g/OGExNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBnbG9iZS50c3hcbmltcG9ydCBSZWFjdCwgeyB1c2VMYXlvdXRFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUsIHVzZUVmZmVjdCwgZm9yd2FyZFJlZiwgdXNlSW1wZXJhdGl2ZUhhbmRsZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIGFtNSBmcm9tIFwiQGFtY2hhcnRzL2FtY2hhcnRzNVwiO1xuaW1wb3J0ICogYXMgYW01bWFwIGZyb20gXCJAYW1jaGFydHMvYW1jaGFydHM1L21hcFwiO1xuaW1wb3J0IGFtNWdlb2RhdGFfd29ybGRMb3cgZnJvbSBcIkBhbWNoYXJ0cy9hbWNoYXJ0czUtZ2VvZGF0YS93b3JsZExvd1wiO1xuaW1wb3J0IGFtNXRoZW1lc19BbmltYXRlZCBmcm9tIFwiQGFtY2hhcnRzL2FtY2hhcnRzNS90aGVtZXMvQW5pbWF0ZWRcIjtcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5pbnRlcmZhY2UgR2xvYmVQcm9wcyB7XG4gIGdlb2pzb25Vcmw6IHN0cmluZztcbn1cblxuY29uc3QgR2xvYmUgPSBmb3J3YXJkUmVmKChwcm9wczogR2xvYmVQcm9wcywgcmVmKSA9PiB7XG4gIGNvbnN0IHsgZ2VvanNvblVybCB9ID0gcHJvcHM7XG4gIGNvbnN0IGNoYXJ0UmVmID0gdXNlUmVmPGFtNS5Sb290IHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtpc0NsaWVudCwgc2V0SXNDbGllbnRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbYXJ0aWNsZUNvbnRlbnQsIHNldEFydGljbGVDb250ZW50XSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SXNDbGllbnQodHJ1ZSk7XG4gIH0sIFtdKTtcblxuICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaXNDbGllbnQpIHJldHVybjtcblxuICAgIGNvbnN0IHJvb3QgPSBhbTUuUm9vdC5uZXcoXCJjaGFydGRpdlwiKTtcblxuICAgIHJvb3Quc2V0VGhlbWVzKFthbTV0aGVtZXNfQW5pbWF0ZWQubmV3KHJvb3QpXSk7XG5cbiAgICBjb25zdCBjaGFydCA9IHJvb3QuY29udGFpbmVyLmNoaWxkcmVuLnB1c2goXG4gICAgICBhbTVtYXAuTWFwQ2hhcnQubmV3KHJvb3QsIHtcbiAgICAgICAgcGFuWDogXCJyb3RhdGVYXCIsXG4gICAgICAgIHBhblk6IFwicm90YXRlWVwiLFxuICAgICAgICBwcm9qZWN0aW9uOiBhbTVtYXAuZ2VvT3J0aG9ncmFwaGljKClcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIGNvbnN0IHBvbHlnb25TZXJpZXMgPSBjaGFydC5zZXJpZXMucHVzaChcbiAgICAgIGFtNW1hcC5NYXBQb2x5Z29uU2VyaWVzLm5ldyhyb290LCB7XG4gICAgICAgIGdlb0pTT046IGFtNWdlb2RhdGFfd29ybGRMb3dcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIGZldGNoKGdlb2pzb25VcmwpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgY2hhcnQuc2VyaWVzLnB1c2goXG4gICAgICAgICAgYW01bWFwLk1hcFBvbHlnb25TZXJpZXMubmV3KHJvb3QsIHtcbiAgICAgICAgICAgIGdlb0pTT046IGRhdGFcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBHZW9KU09OIGRhdGE6JywgZXJyb3IpKTtcblxuICAgIHBvbHlnb25TZXJpZXMubWFwUG9seWdvbnMudGVtcGxhdGUuc2V0QWxsKHtcbiAgICAgIHRvb2x0aXBUZXh0OiBcIntuYW1lfVwiLFxuICAgICAgdG9nZ2xlS2V5OiBcImFjdGl2ZVwiLFxuICAgICAgaW50ZXJhY3RpdmU6IHRydWVcbiAgICB9KTtcblxuICAgIHBvbHlnb25TZXJpZXMubWFwUG9seWdvbnMudGVtcGxhdGUuc3RhdGVzLmNyZWF0ZShcImhvdmVyXCIsIHtcbiAgICAgIGZpbGw6IGFtNS5jb2xvcigweDY3NzkzNSlcbiAgICB9KTtcblxuICAgIHBvbHlnb25TZXJpZXMubWFwUG9seWdvbnMudGVtcGxhdGUuc3RhdGVzLmNyZWF0ZShcImFjdGl2ZVwiLCB7XG4gICAgICBmaWxsOiBhbTUuY29sb3IoMHg2Nzc5MzUpXG4gICAgfSk7XG5cbiAgICBsZXQgcHJldmlvdXNQb2x5Z29uOiBhbTVtYXAuTWFwUG9seWdvbiB8IG51bGwgPSBudWxsO1xuXG4gICAgdXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsICgpID0+ICh7XG4gICAgICBoYW5kbGVDb3VudHJ5UXVlcnk6IGFzeW5jIChxdWVyeTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IGZldGNoQ291bnRyeUNvZGUgPSBhc3luYyAocXVlcnk6IHN0cmluZykgPT4ge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnL2NvdW50cnlfZnJvbV9xdWVyeScsIHtcbiAgICAgICAgICAgICAgcGFyYW1zOiB7IHF1ZXJ5IH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGEuY291bnRyeTtcbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgY291bnRyeSBjb2RlOicsIGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBmZXRjaFdpa2lwZWRpYUNvbnRlbnQgPSBhc3luYyAoY291bnRyeU5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvYXBpL3Jlc3RfdjEvcGFnZS9zdW1tYXJ5LyR7Y291bnRyeU5hbWV9YCk7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGEuZXh0cmFjdCA/IGA8ZGl2PjxzdHJvbmc+JHtjb3VudHJ5TmFtZX08L3N0cm9uZz48YnI+XFxuJHtkYXRhLmV4dHJhY3R9PC9kaXY+YCA6IGA8ZGl2PjxzdHJvbmc+JHtjb3VudHJ5TmFtZX08L3N0cm9uZz46IE5vIGluZm9ybWF0aW9uIGF2YWlsYWJsZS48L2Rpdj5gO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBXaWtpcGVkaWEgY29udGVudDonLCBlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gYDxkaXY+PHN0cm9uZz4ke2NvdW50cnlOYW1lfTwvc3Ryb25nPjogRXJyb3IgZmV0Y2hpbmcgaW5mb3JtYXRpb24uPC9kaXY+YDtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgY291bnRyeUNvZGUgPSBhd2FpdCBmZXRjaENvdW50cnlDb2RlKHF1ZXJ5KTtcbiAgICAgICAgaWYgKCFjb3VudHJ5Q29kZSkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IGNvdW50cnlQb2x5Z29uID0gcG9seWdvblNlcmllcy5tYXBQb2x5Z29ucy5maW5kKHBvbHlnb24gPT4gcG9seWdvbi5kYXRhSXRlbS5kYXRhQ29udGV4dC5pZCA9PT0gY291bnRyeUNvZGUpO1xuICAgICAgICBpZiAoY291bnRyeVBvbHlnb24pIHtcbiAgICAgICAgICBjb25zdCBjZW50cm9pZCA9IGNvdW50cnlQb2x5Z29uLmdlb0NlbnRyb2lkKCk7XG4gICAgICAgICAgaWYgKGNlbnRyb2lkKSB7XG4gICAgICAgICAgICBjaGFydC5hbmltYXRlKHsga2V5OiBcInJvdGF0aW9uWFwiLCB0bzogLWNlbnRyb2lkLmxvbmdpdHVkZSwgZHVyYXRpb246IDE1MDAsIGVhc2luZzogYW01LmVhc2UuaW5PdXQoYW01LmVhc2UuY3ViaWMpIH0pO1xuICAgICAgICAgICAgY2hhcnQuYW5pbWF0ZSh7IGtleTogXCJyb3RhdGlvbllcIiwgdG86IC1jZW50cm9pZC5sYXRpdHVkZSwgZHVyYXRpb246IDE1MDAsIGVhc2luZzogYW01LmVhc2UuaW5PdXQoYW01LmVhc2UuY3ViaWMpIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGNvdW50cnlOYW1lID0gY291bnRyeVBvbHlnb24uZGF0YUl0ZW0uZGF0YUNvbnRleHQubmFtZTtcbiAgICAgICAgICBjb25zdCBjb250ZW50ID0gYXdhaXQgZmV0Y2hXaWtpcGVkaWFDb250ZW50KGNvdW50cnlOYW1lKTtcbiAgICAgICAgICBzZXRBcnRpY2xlQ29udGVudChjb250ZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pKTtcblxuICAgIGNoYXJ0UmVmLmN1cnJlbnQgPSByb290O1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHJvb3QuZGlzcG9zZSgpO1xuICAgIH07XG4gIH0sIFtnZW9qc29uVXJsLCBpc0NsaWVudF0pO1xuXG4gIGlmICghaXNDbGllbnQpIHJldHVybiBudWxsO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgPGRpdiBpZD1cImNoYXJ0ZGl2XCIgY2xhc3NOYW1lPVwiXCIgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiNTAwcHhcIiB9fT48L2Rpdj5cbiAgICAgIDxkaXYgaWQ9XCJhcnRpY2xlV2luZG93XCIgY2xhc3NOYW1lPVwiZml4ZWQgYm90dG9tLTUgcmlnaHQtNSB3LTY0IGgtMy80IGJnLWdyYXktODAwIGJnLW9wYWNpdHktMjAgcm91bmRlZC1sZyBwLTQgdGV4dC1ncmVlbi00MDAgc2hhZG93LWxnIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyLWNvbnRlbnQgaC1mdWxsIG92ZXJmbG93LWF1dG8gcHItNFwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogYXJ0aWNsZUNvbnRlbnQgfX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuaW5uZXItY29udGVudDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgfVxuICAgICAgICAuaW5uZXItY29udGVudCB7XG4gICAgICAgICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAgLyogSUUgYW5kIEVkZ2UgKi9cbiAgICAgICAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7ICAvKiBGaXJlZm94ICovXG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBHbG9iZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUxheW91dEVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZm9yd2FyZFJlZiIsInVzZUltcGVyYXRpdmVIYW5kbGUiLCJhbTUiLCJhbTVtYXAiLCJhbTVnZW9kYXRhX3dvcmxkTG93IiwiYW01dGhlbWVzX0FuaW1hdGVkIiwiYXhpb3MiLCJHbG9iZSIsInByb3BzIiwicmVmIiwiZ2VvanNvblVybCIsImNoYXJ0UmVmIiwiaXNDbGllbnQiLCJzZXRJc0NsaWVudCIsImFydGljbGVDb250ZW50Iiwic2V0QXJ0aWNsZUNvbnRlbnQiLCJyb290IiwiUm9vdCIsIm5ldyIsInNldFRoZW1lcyIsImNoYXJ0IiwiY29udGFpbmVyIiwiY2hpbGRyZW4iLCJwdXNoIiwiTWFwQ2hhcnQiLCJwYW5YIiwicGFuWSIsInByb2plY3Rpb24iLCJnZW9PcnRob2dyYXBoaWMiLCJwb2x5Z29uU2VyaWVzIiwic2VyaWVzIiwiTWFwUG9seWdvblNlcmllcyIsImdlb0pTT04iLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJtYXBQb2x5Z29ucyIsInRlbXBsYXRlIiwic2V0QWxsIiwidG9vbHRpcFRleHQiLCJ0b2dnbGVLZXkiLCJpbnRlcmFjdGl2ZSIsInN0YXRlcyIsImNyZWF0ZSIsImZpbGwiLCJjb2xvciIsInByZXZpb3VzUG9seWdvbiIsImhhbmRsZUNvdW50cnlRdWVyeSIsInF1ZXJ5IiwiZmV0Y2hDb3VudHJ5Q29kZSIsImdldCIsInBhcmFtcyIsImNvdW50cnkiLCJmZXRjaFdpa2lwZWRpYUNvbnRlbnQiLCJjb3VudHJ5TmFtZSIsImV4dHJhY3QiLCJjb3VudHJ5Q29kZSIsImNvdW50cnlQb2x5Z29uIiwiZmluZCIsInBvbHlnb24iLCJkYXRhSXRlbSIsImRhdGFDb250ZXh0IiwiaWQiLCJjZW50cm9pZCIsImdlb0NlbnRyb2lkIiwiYW5pbWF0ZSIsImtleSIsInRvIiwibG9uZ2l0dWRlIiwiZHVyYXRpb24iLCJlYXNpbmciLCJlYXNlIiwiaW5PdXQiLCJjdWJpYyIsImxhdGl0dWRlIiwibmFtZSIsImNvbnRlbnQiLCJjdXJyZW50IiwiZGlzcG9zZSIsImRpdiIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Globe.tsx\n"));

/***/ })

});