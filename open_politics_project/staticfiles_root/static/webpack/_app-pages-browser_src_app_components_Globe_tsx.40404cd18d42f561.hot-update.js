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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @amcharts/amcharts5 */ \"(app-pages-browser)/./node_modules/@amcharts/amcharts5/.internal/core/Root.js\");\n/* harmony import */ var _amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @amcharts/amcharts5 */ \"(app-pages-browser)/./node_modules/@amcharts/amcharts5/.internal/core/util/Color.js\");\n/* harmony import */ var _amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @amcharts/amcharts5 */ \"(app-pages-browser)/./node_modules/@amcharts/amcharts5/.internal/core/util/Ease.js\");\n/* harmony import */ var _amcharts_amcharts5_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @amcharts/amcharts5/map */ \"(app-pages-browser)/./node_modules/@amcharts/amcharts5/.internal/charts/map/MapChart.js\");\n/* harmony import */ var _amcharts_amcharts5_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @amcharts/amcharts5/map */ \"(app-pages-browser)/./node_modules/d3-geo/src/projection/orthographic.js\");\n/* harmony import */ var _amcharts_amcharts5_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @amcharts/amcharts5/map */ \"(app-pages-browser)/./node_modules/@amcharts/amcharts5/.internal/charts/map/MapPolygonSeries.js\");\n/* harmony import */ var _amcharts_amcharts5_geodata_worldLow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @amcharts/amcharts5-geodata/worldLow */ \"(app-pages-browser)/./node_modules/@amcharts/amcharts5-geodata/worldLow.js\");\n/* harmony import */ var _amcharts_amcharts5_themes_Animated__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @amcharts/amcharts5/themes/Animated */ \"(app-pages-browser)/./node_modules/@amcharts/amcharts5/themes/Animated.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Globe = /*#__PURE__*/ _s((0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(_c = _s((param, ref)=>{\n    let { geojsonUrl, setArticleContent } = param;\n    _s();\n    const chartRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const polygonSeriesRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [isClient, setIsClient] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setIsClient(true);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(()=>{\n        if (!isClient) return;\n        const root = _amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_3__.Root.new(\"chartdiv\");\n        chartRef.current = root;\n        root.setThemes([\n            _amcharts_amcharts5_themes_Animated__WEBPACK_IMPORTED_MODULE_4__[\"default\"].new(root)\n        ]);\n        const chart = root.container.children.push(_amcharts_amcharts5_map__WEBPACK_IMPORTED_MODULE_5__.MapChart.new(root, {\n            panX: \"rotateX\",\n            panY: \"rotateY\",\n            projection: _amcharts_amcharts5_map__WEBPACK_IMPORTED_MODULE_6__[\"default\"]()\n        }));\n        const polygonSeries = chart.series.push(_amcharts_amcharts5_map__WEBPACK_IMPORTED_MODULE_7__.MapPolygonSeries.new(root, {\n            geoJSON: _amcharts_amcharts5_geodata_worldLow__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n        }));\n        polygonSeriesRef.current = polygonSeries;\n        fetch(geojsonUrl).then((response)=>response.json()).then((data)=>{\n            chart.series.push(_amcharts_amcharts5_map__WEBPACK_IMPORTED_MODULE_7__.MapPolygonSeries.new(root, {\n                geoJSON: data\n            }));\n        }).catch((error)=>console.error(\"Error fetching GeoJSON data:\", error));\n        polygonSeries.mapPolygons.template.setAll({\n            tooltipText: \"{name}\",\n            toggleKey: \"active\",\n            interactive: true\n        });\n        polygonSeries.mapPolygons.template.states.create(\"hover\", {\n            fill: _amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_8__.color(0x677935)\n        });\n        polygonSeries.mapPolygons.template.states.create(\"active\", {\n            fill: _amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_8__.color(0x677935)\n        });\n        let previousPolygon = null;\n        polygonSeries.mapPolygons.template.on(\"active\", async (active, target)=>{\n            if (previousPolygon && previousPolygon !== target) {\n                previousPolygon.set(\"active\", false);\n            }\n            if (target.get(\"active\")) {\n                const centroid = target.geoCentroid();\n                if (centroid) {\n                    chart.animate({\n                        key: \"rotationX\",\n                        to: -centroid.longitude,\n                        duration: 1500,\n                        easing: _amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_9__.inOut(_amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_9__.cubic)\n                    });\n                    chart.animate({\n                        key: \"rotationY\",\n                        to: -centroid.latitude,\n                        duration: 1500,\n                        easing: _amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_9__.inOut(_amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_9__.cubic)\n                    });\n                }\n                const countryName = target.dataItem.dataContext.name;\n                const content = await fetchWikipediaContent(countryName);\n                setArticleContent(content);\n            }\n            previousPolygon = target;\n        });\n        return ()=>{\n            root.dispose();\n        };\n    }, [\n        geojsonUrl,\n        isClient\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle)(ref, ()=>({\n            zoomToCountry: (countryName)=>{\n                console.log(\"zoomToCountry called with:\", countryName);\n                if (polygonSeriesRef.current) {\n                    const polygon = polygonSeriesRef.current.mapPolygons.find((p)=>p.dataItem.dataContext.name === countryName);\n                    if (polygon) {\n                        console.log(\"Found polygon for country:\", countryName);\n                        polygon.set(\"active\", true);\n                        const centroid = polygon.geoCentroid();\n                        if (centroid && chartRef.current) {\n                            chartRef.current.animate({\n                                key: \"rotationX\",\n                                to: -centroid.longitude,\n                                duration: 1500,\n                                easing: _amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_9__.inOut(_amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_9__.cubic)\n                            });\n                            chartRef.current.animate({\n                                key: \"rotationY\",\n                                to: -centroid.latitude,\n                                duration: 1500,\n                                easing: _amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_9__.inOut(_amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_9__.cubic)\n                            });\n                        }\n                    } else {\n                        console.log(\"No polygon found for country:\", countryName);\n                    }\n                }\n            }\n        }));\n    const fetchWikipediaContent = async (countryName)=>{\n        try {\n            const response = await fetch(\"https://en.wikipedia.org/api/rest_v1/page/summary/\".concat(countryName));\n            const data = await response.json();\n            return data.extract ? \"<div><strong>\".concat(countryName, \"</strong><br>'\").concat(data.extract, \"</div>\") : \"<div><strong>\".concat(countryName, \"</strong>: No information available.</div>\");\n        } catch (error) {\n            console.error(\"Error fetching Wikipedia content:\", error);\n            return \"<div><strong>\".concat(countryName, \"</strong>: Error fetching information.</div>\");\n        }\n    };\n    if (!isClient) return null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            id: \"chartdiv\",\n            className: \"\",\n            style: {\n                width: \"100%\",\n                height: \"500px\"\n            }\n        }, void 0, false, {\n            fileName: \"/root/open-politics/open_politics_project/frontend/next-generation-interface/src/app/components/Globe.tsx\",\n            lineNumber: 130,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/root/open-politics/open_politics_project/frontend/next-generation-interface/src/app/components/Globe.tsx\",\n        lineNumber: 129,\n        columnNumber: 5\n    }, undefined);\n}, \"IKICrL82LeOkKsdBHfHiiRfn39Q=\")), \"IKICrL82LeOkKsdBHfHiiRfn39Q=\");\n_c1 = Globe;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Globe);\nvar _c, _c1;\n$RefreshReg$(_c, \"Globe$forwardRef\");\n$RefreshReg$(_c1, \"Globe\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9HbG9iZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBNkc7QUFDbEU7QUFDTztBQUNxQjtBQUNGO0FBT3JFLE1BQU1XLHNCQUFRTCxHQUFBQSxpREFBVUEsU0FBaUIsUUFBb0NNO1FBQW5DLEVBQUVDLFVBQVUsRUFBRUMsaUJBQWlCLEVBQUU7O0lBQ3pFLE1BQU1DLFdBQVdiLDZDQUFNQSxDQUFrQjtJQUN6QyxNQUFNYyxtQkFBbUJkLDZDQUFNQSxDQUFpQztJQUNoRSxNQUFNLENBQUNlLFVBQVVDLFlBQVksR0FBR2YsK0NBQVFBLENBQUM7SUFFekNDLGdEQUFTQSxDQUFDO1FBQ1JjLFlBQVk7SUFDZCxHQUFHLEVBQUU7SUFFTGpCLHNEQUFlQSxDQUFDO1FBQ2QsSUFBSSxDQUFDZ0IsVUFBVTtRQUVmLE1BQU1FLE9BQU9aLHFEQUFRLENBQUNjLEdBQUcsQ0FBQztRQUMxQk4sU0FBU08sT0FBTyxHQUFHSDtRQUVuQkEsS0FBS0ksU0FBUyxDQUFDO1lBQUNiLDJFQUFrQkEsQ0FBQ1csR0FBRyxDQUFDRjtTQUFNO1FBRTdDLE1BQU1LLFFBQVFMLEtBQUtNLFNBQVMsQ0FBQ0MsUUFBUSxDQUFDQyxJQUFJLENBQ3hDbkIsNkRBQWUsQ0FBQ2EsR0FBRyxDQUFDRixNQUFNO1lBQ3hCVSxNQUFNO1lBQ05DLE1BQU07WUFDTkMsWUFBWXZCLCtEQUFzQjtRQUNwQztRQUdGLE1BQU15QixnQkFBZ0JULE1BQU1VLE1BQU0sQ0FBQ1AsSUFBSSxDQUNyQ25CLHFFQUF1QixDQUFDYSxHQUFHLENBQUNGLE1BQU07WUFDaENpQixTQUFTM0IsNEVBQW1CQTtRQUM5QjtRQUVGTyxpQkFBaUJNLE9BQU8sR0FBR1c7UUFFM0JJLE1BQU14QixZQUNIeUIsSUFBSSxDQUFDQyxDQUFBQSxXQUFZQSxTQUFTQyxJQUFJLElBQzlCRixJQUFJLENBQUNHLENBQUFBO1lBQ0pqQixNQUFNVSxNQUFNLENBQUNQLElB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QyxXQUFXLE1BQU1GLE1BQU0scURBQWlFLE9BQVpvQztZQUNsRixNQUFNaEMsT0FBTyxNQUFNRixTQUFTQyxJQUFJO1lBQ2hDLE9BQU9DLEtBQUs0QyxPQUFPLEdBQUcsZ0JBQTRDNUMsT0FBNUJnQyxhQUFZLGtCQUE2QixPQUFiaEMsS0FBSzRDLE9BQU8sRUFBQyxZQUFVLGdCQUE0QixPQUFaWixhQUFZO1FBQ3ZILEVBQUUsT0FBTzlCLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDLHFDQUFxQ0E7WUFDbkQsT0FBTyxnQkFBNEIsT0FBWjhCLGFBQVk7UUFDckM7SUFDRjtJQUVBLElBQUksQ0FBQ3hELFVBQVUsT0FBTztJQUV0QixxQkFDRSw4REFBQ3FFO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlFLElBQUc7WUFBV0QsV0FBVTtZQUFHRSxPQUFPO2dCQUFFQyxPQUFPO2dCQUFRQyxRQUFRO1lBQVE7Ozs7Ozs7Ozs7O0FBRzlFOztBQUVBLCtEQUFlaEYsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvR2xvYmUudHN4PzhhMTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUxheW91dEVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VJbXBlcmF0aXZlSGFuZGxlLCBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgYW01IGZyb20gXCJAYW1jaGFydHMvYW1jaGFydHM1XCI7XG5pbXBvcnQgKiBhcyBhbTVtYXAgZnJvbSBcIkBhbWNoYXJ0cy9hbWNoYXJ0czUvbWFwXCI7XG5pbXBvcnQgYW01Z2VvZGF0YV93b3JsZExvdyBmcm9tIFwiQGFtY2hhcnRzL2FtY2hhcnRzNS1nZW9kYXRhL3dvcmxkTG93XCI7XG5pbXBvcnQgYW01dGhlbWVzX0FuaW1hdGVkIGZyb20gXCJAYW1jaGFydHMvYW1jaGFydHM1L3RoZW1lcy9BbmltYXRlZFwiO1xuXG5pbnRlcmZhY2UgR2xvYmVQcm9wcyB7XG4gIGdlb2pzb25Vcmw6IHN0cmluZztcbiAgc2V0QXJ0aWNsZUNvbnRlbnQ6IChjb250ZW50OiBzdHJpbmcpID0+IHZvaWQ7XG59XG5cbmNvbnN0IEdsb2JlID0gZm9yd2FyZFJlZjx7fSwgR2xvYmVQcm9wcz4oKHsgZ2VvanNvblVybCwgc2V0QXJ0aWNsZUNvbnRlbnQgfSwgcmVmKSA9PiB7XG4gIGNvbnN0IGNoYXJ0UmVmID0gdXNlUmVmPGFtNS5Sb290IHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IHBvbHlnb25TZXJpZXNSZWYgPSB1c2VSZWY8YW01bWFwLk1hcFBvbHlnb25TZXJpZXMgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2lzQ2xpZW50LCBzZXRJc0NsaWVudF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRJc0NsaWVudCh0cnVlKTtcbiAgfSwgW10pO1xuXG4gIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFpc0NsaWVudCkgcmV0dXJuO1xuXG4gICAgY29uc3Qgcm9vdCA9IGFtNS5Sb290Lm5ldyhcImNoYXJ0ZGl2XCIpO1xuICAgIGNoYXJ0UmVmLmN1cnJlbnQgPSByb290O1xuXG4gICAgcm9vdC5zZXRUaGVtZXMoW2FtNXRoZW1lc19BbmltYXRlZC5uZXcocm9vdCldKTtcblxuICAgIGNvbnN0IGNoYXJ0ID0gcm9vdC5jb250YWluZXIuY2hpbGRyZW4ucHVzaChcbiAgICAgIGFtNW1hcC5NYXBDaGFydC5uZXcocm9vdCwge1xuICAgICAgICBwYW5YOiBcInJvdGF0ZVhcIixcbiAgICAgICAgcGFuWTogXCJyb3RhdGVZXCIsXG4gICAgICAgIHByb2plY3Rpb246IGFtNW1hcC5nZW9PcnRob2dyYXBoaWMoKVxuICAgICAgfSlcbiAgICApO1xuXG4gICAgY29uc3QgcG9seWdvblNlcmllcyA9IGNoYXJ0LnNlcmllcy5wdXNoKFxuICAgICAgYW01bWFwLk1hcFBvbHlnb25TZXJpZXMubmV3KHJvb3QsIHtcbiAgICAgICAgZ2VvSlNPTjogYW01Z2VvZGF0YV93b3JsZExvd1xuICAgICAgfSlcbiAgICApO1xuICAgIHBvbHlnb25TZXJpZXNSZWYuY3VycmVudCA9IHBvbHlnb25TZXJpZXM7XG5cbiAgICBmZXRjaChnZW9qc29uVXJsKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIGNoYXJ0LnNlcmllcy5wdXNoKFxuICAgICAgICAgIGFtNW1hcC5NYXBQb2x5Z29uU2VyaWVzLm5ldyhyb290LCB7XG4gICAgICAgICAgICBnZW9KU09OOiBkYXRhXG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgR2VvSlNPTiBkYXRhOicsIGVycm9yKSk7XG5cbiAgICBwb2x5Z29uU2VyaWVzLm1hcFBvbHlnb25zLnRlbXBsYXRlLnNldEFsbCh7XG4gICAgICB0b29sdGlwVGV4dDogXCJ7bmFtZX1cIixcbiAgICAgIHRvZ2dsZUtleTogXCJhY3RpdmVcIixcbiAgICAgIGludGVyYWN0aXZlOiB0cnVlXG4gICAgfSk7XG5cbiAgICBwb2x5Z29uU2VyaWVzLm1hcFBvbHlnb25zLnRlbXBsYXRlLnN0YXRlcy5jcmVhdGUoXCJob3ZlclwiLCB7XG4gICAgICBmaWxsOiBhbTUuY29sb3IoMHg2Nzc5MzUpXG4gICAgfSk7XG5cbiAgICBwb2x5Z29uU2VyaWVzLm1hcFBvbHlnb25zLnRlbXBsYXRlLnN0YXRlcy5jcmVhdGUoXCJhY3RpdmVcIiwge1xuICAgICAgZmlsbDogYW01LmNvbG9yKDB4Njc3OTM1KVxuICAgIH0pO1xuXG4gICAgbGV0IHByZXZpb3VzUG9seWdvbjogYW01bWFwLk1hcFBvbHlnb24gfCBudWxsID0gbnVsbDtcblxuICAgIHBvbHlnb25TZXJpZXMubWFwUG9seWdvbnMudGVtcGxhdGUub24oXCJhY3RpdmVcIiwgYXN5bmMgKGFjdGl2ZSwgdGFyZ2V0KSA9PiB7XG4gICAgICBpZiAocHJldmlvdXNQb2x5Z29uICYmIHByZXZpb3VzUG9seWdvbiAhPT0gdGFyZ2V0KSB7XG4gICAgICAgIHByZXZpb3VzUG9seWdvbi5zZXQoXCJhY3RpdmVcIiwgZmFsc2UpO1xuICAgICAgfVxuICAgICAgaWYgKHRhcmdldC5nZXQoXCJhY3RpdmVcIikpIHtcbiAgICAgICAgY29uc3QgY2VudHJvaWQgPSB0YXJnZXQuZ2VvQ2VudHJvaWQoKTtcbiAgICAgICAgaWYgKGNlbnRyb2lkKSB7XG4gICAgICAgICAgY2hhcnQuYW5pbWF0ZSh7IGtleTogXCJyb3RhdGlvblhcIiwgdG86IC1jZW50cm9pZC5sb25naXR1ZGUsIGR1cmF0aW9uOiAxNTAwLCBlYXNpbmc6IGFtNS5lYXNlLmluT3V0KGFtNS5lYXNlLmN1YmljKSB9KTtcbiAgICAgICAgICBjaGFydC5hbmltYXRlKHsga2V5OiBcInJvdGF0aW9uWVwiLCB0bzogLWNlbnRyb2lkLmxhdGl0dWRlLCBkdXJhdGlvbjogMTUwMCwgZWFzaW5nOiBhbTUuZWFzZS5pbk91dChhbTUuZWFzZS5jdWJpYykgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb3VudHJ5TmFtZSA9IHRhcmdldC5kYXRhSXRlbS5kYXRhQ29udGV4dC5uYW1lO1xuICAgICAgICBjb25zdCBjb250ZW50ID0gYXdhaXQgZmV0Y2hXaWtpcGVkaWFDb250ZW50KGNvdW50cnlOYW1lKTtcblxuICAgICAgICBzZXRBcnRpY2xlQ29udGVudChjb250ZW50KTtcbiAgICAgIH1cbiAgICAgIHByZXZpb3VzUG9seWdvbiA9IHRhcmdldDtcbiAgICB9KTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICByb290LmRpc3Bvc2UoKTtcbiAgICB9O1xuICB9LCBbZ2VvanNvblVybCwgaXNDbGllbnRdKTtcblxuICB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgKCkgPT4gKHtcbiAgICB6b29tVG9Db3VudHJ5OiAoY291bnRyeU5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ3pvb21Ub0NvdW50cnkgY2FsbGVkIHdpdGg6JywgY291bnRyeU5hbWUpO1xuICAgICAgaWYgKHBvbHlnb25TZXJpZXNSZWYuY3VycmVudCkge1xuICAgICAgICBjb25zdCBwb2x5Z29uID0gcG9seWdvblNlcmllc1JlZi5jdXJyZW50Lm1hcFBvbHlnb25zLmZpbmQoKHApID0+IHAuZGF0YUl0ZW0uZGF0YUNvbnRleHQubmFtZSA9PT0gY291bnRyeU5hbWUpO1xuICAgICAgICBpZiAocG9seWdvbikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdGb3VuZCBwb2x5Z29uIGZvciBjb3VudHJ5OicsIGNvdW50cnlOYW1lKTtcbiAgICAgICAgICBwb2x5Z29uLnNldChcImFjdGl2ZVwiLCB0cnVlKTtcbiAgICAgICAgICBjb25zdCBjZW50cm9pZCA9IHBvbHlnb24uZ2VvQ2VudHJvaWQoKTtcbiAgICAgICAgICBpZiAoY2VudHJvaWQgJiYgY2hhcnRSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgY2hhcnRSZWYuY3VycmVudC5hbmltYXRlKHsga2V5OiBcInJvdGF0aW9uWFwiLCB0bzogLWNlbnRyb2lkLmxvbmdpdHVkZSwgZHVyYXRpb246IDE1MDAsIGVhc2luZzogYW01LmVhc2UuaW5PdXQoYW01LmVhc2UuY3ViaWMpIH0pO1xuICAgICAgICAgICAgY2hhcnRSZWYuY3VycmVudC5hbmltYXRlKHsga2V5OiBcInJvdGF0aW9uWVwiLCB0bzogLWNlbnRyb2lkLmxhdGl0dWRlLCBkdXJhdGlvbjogMTUwMCwgZWFzaW5nOiBhbTUuZWFzZS5pbk91dChhbTUuZWFzZS5jdWJpYykgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdObyBwb2x5Z29uIGZvdW5kIGZvciBjb3VudHJ5OicsIGNvdW50cnlOYW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSkpO1xuXG4gIGNvbnN0IGZldGNoV2lraXBlZGlhQ29udGVudCA9IGFzeW5jIChjb3VudHJ5TmFtZTogc3RyaW5nKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy9hcGkvcmVzdF92MS9wYWdlL3N1bW1hcnkvJHtjb3VudHJ5TmFtZX1gKTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICByZXR1cm4gZGF0YS5leHRyYWN0ID8gYDxkaXY+PHN0cm9uZz4ke2NvdW50cnlOYW1lfTwvc3Ryb25nPjxicj4nJHtkYXRhLmV4dHJhY3R9PC9kaXY+YCA6IGA8ZGl2PjxzdHJvbmc+JHtjb3VudHJ5TmFtZX08L3N0cm9uZz46IE5vIGluZm9ybWF0aW9uIGF2YWlsYWJsZS48L2Rpdj5gO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBXaWtpcGVkaWEgY29udGVudDonLCBlcnJvcik7XG4gICAgICByZXR1cm4gYDxkaXY+PHN0cm9uZz4ke2NvdW50cnlOYW1lfTwvc3Ryb25nPjogRXJyb3IgZmV0Y2hpbmcgaW5mb3JtYXRpb24uPC9kaXY+YDtcbiAgICB9XG4gIH07XG5cbiAgaWYgKCFpc0NsaWVudCkgcmV0dXJuIG51bGw7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICA8ZGl2IGlkPVwiY2hhcnRkaXZcIiBjbGFzc05hbWU9XCJcIiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCI1MDBweFwiIH19PjwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEdsb2JlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlTGF5b3V0RWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VJbXBlcmF0aXZlSGFuZGxlIiwiZm9yd2FyZFJlZiIsImFtNSIsImFtNW1hcCIsImFtNWdlb2RhdGFfd29ybGRMb3ciLCJhbTV0aGVtZXNfQW5pbWF0ZWQiLCJHbG9iZSIsInJlZiIsImdlb2pzb25VcmwiLCJzZXRBcnRpY2xlQ29udGVudCIsImNoYXJ0UmVmIiwicG9seWdvblNlcmllc1JlZiIsImlzQ2xpZW50Iiwic2V0SXNDbGllbnQiLCJyb290IiwiUm9vdCIsIm5ldyIsImN1cnJlbnQiLCJzZXRUaGVtZXMiLCJjaGFydCIsImNvbnRhaW5lciIsImNoaWxkcmVuIiwicHVzaCIsIk1hcENoYXJ0IiwicGFuWCIsInBhblkiLCJwcm9qZWN0aW9uIiwiZ2VvT3J0aG9ncmFwaGljIiwicG9seWdvblNlcmllcyIsInNlcmllcyIsIk1hcFBvbHlnb25TZXJpZXMiLCJnZW9KU09OIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwibWFwUG9seWdvbnMiLCJ0ZW1wbGF0ZSIsInNldEFsbCIsInRvb2x0aXBUZXh0IiwidG9nZ2xlS2V5IiwiaW50ZXJhY3RpdmUiLCJzdGF0ZXMiLCJjcmVhdGUiLCJmaWxsIiwiY29sb3IiLCJwcmV2aW91c1BvbHlnb24iLCJvbiIsImFjdGl2ZSIsInRhcmdldCIsInNldCIsImdldCIsImNlbnRyb2lkIiwiZ2VvQ2VudHJvaWQiLCJhbmltYXRlIiwia2V5IiwidG8iLCJsb25naXR1ZGUiLCJkdXJhdGlvbiIsImVhc2luZyIsImVhc2UiLCJpbk91dCIsImN1YmljIiwibGF0aXR1ZGUiLCJjb3VudHJ5TmFtZSIsImRhdGFJdGVtIiwiZGF0YUNvbnRleHQiLCJuYW1lIiwiY29udGVudCIsImZldGNoV2lraXBlZGlhQ29udGVudCIsImRpc3Bvc2UiLCJ6b29tVG9Db3VudHJ5IiwibG9nIiwicG9seWdvbiIsImZpbmQiLCJwIiwiZXh0cmFjdCIsImRpdiIsImNsYXNzTmFtZSIsImlkIiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Globe.tsx\n"));

/***/ })

});