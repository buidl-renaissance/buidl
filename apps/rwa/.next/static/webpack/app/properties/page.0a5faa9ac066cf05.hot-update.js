"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/properties/page",{

/***/ "(app-pages-browser)/./components/property-list.tsx":
/*!**************************************!*\
  !*** ./components/property-list.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PropertyList: function() { return /* binding */ PropertyList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/../../node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ui/table */ \"(app-pages-browser)/./components/ui/table.tsx\");\n\n\n// const properties: Property[] = [\n//   { \n//     id: 1, \n//     name: \"Sunset Apartments\", \n//     address: \"123 Sunset Blvd, Los Angeles, CA 90001\", \n//     type: \"Apartment\", \n//     units: 24, \n//     totalShares: 1000, \n//     availableShares: 250, \n//     pricePerShare: 100,\n//     shareholders: []\n//   },\n//   { \n//     id: 2, \n//     name: \"Downtown Lofts\", \n//     address: \"456 Main St, New York, NY 10001\", \n//     type: \"Loft\", \n//     units: 12, \n//     totalShares: 500, \n//     availableShares: 100, \n//     pricePerShare: 200,\n//     shareholders: []\n//   },\n//   { \n//     id: 3, \n//     name: \"Green Valley Homes\", \n//     address: \"789 Oak Rd, Chicago, IL 60601\", \n//     type: \"House\", \n//     units: 8, \n//     totalShares: 800, \n//     availableShares: 400, \n//     pricePerShare: 150,\n//     shareholders: []\n//   },\n// ]\nfunction PropertyList(param) {\n    let { properties } = param;\n    console.log(properties[0].id, BigInt(properties[0].id._hex).toString());\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.Table, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.TableHeader, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.TableRow, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.TableHead, {\n                            children: \"Name\"\n                        }, void 0, false, {\n                            fileName: \"/Users/johngulbronson/DetroitArt/gods.work/apps/rwa/components/property-list.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.TableHead, {\n                            children: \"Address\"\n                        }, void 0, false, {\n                            fileName: \"/Users/johngulbronson/DetroitArt/gods.work/apps/rwa/components/property-list.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.TableHead, {\n                            children: \"Type\"\n                        }, void 0, false, {\n                            fileName: \"/Users/johngulbronson/DetroitArt/gods.work/apps/rwa/components/property-list.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.TableHead, {\n                            children: \"Units\"\n                        }, void 0, false, {\n                            fileName: \"/Users/johngulbronson/DetroitArt/gods.work/apps/rwa/components/property-list.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.TableHead, {\n                            children: \"Available Shares\"\n                        }, void 0, false, {\n                            fileName: \"/Users/johngulbronson/DetroitArt/gods.work/apps/rwa/components/property-list.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.TableHead, {\n                            children: \"Price per Share\"\n                        }, void 0, false, {\n                            fileName: \"/Users/johngulbronson/DetroitArt/gods.work/apps/rwa/components/property-list.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.TableHead, {\n                            children: \"Actions\"\n                        }, void 0, false, {\n                            fileName: \"/Users/johngulbronson/DetroitArt/gods.work/apps/rwa/components/property-list.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/johngulbronson/DetroitArt/gods.work/apps/rwa/components/property-list.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/johngulbronson/DetroitArt/gods.work/apps/rwa/components/property-list.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.TableBody, {}, void 0, false, {\n                fileName: \"/Users/johngulbronson/DetroitArt/gods.work/apps/rwa/components/property-list.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/johngulbronson/DetroitArt/gods.work/apps/rwa/components/property-list.tsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n}\n_c = PropertyList;\nvar _c;\n$RefreshReg$(_c, \"PropertyList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvcHJvcGVydHktbGlzdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFzRztBQU10RyxtQ0FBbUM7QUFDbkMsT0FBTztBQUNQLGNBQWM7QUFDZCxrQ0FBa0M7QUFDbEMsMERBQTBEO0FBQzFELDBCQUEwQjtBQUMxQixrQkFBa0I7QUFDbEIsMEJBQTBCO0FBQzFCLDZCQUE2QjtBQUM3QiwwQkFBMEI7QUFDMUIsdUJBQXVCO0FBQ3ZCLE9BQU87QUFDUCxPQUFPO0FBQ1AsY0FBYztBQUNkLCtCQUErQjtBQUMvQixtREFBbUQ7QUFDbkQscUJBQXFCO0FBQ3JCLGtCQUFrQjtBQUNsQix5QkFBeUI7QUFDekIsNkJBQTZCO0FBQzdCLDBCQUEwQjtBQUMxQix1QkFBdUI7QUFDdkIsT0FBTztBQUNQLE9BQU87QUFDUCxjQUFjO0FBQ2QsbUNBQW1DO0FBQ25DLGlEQUFpRDtBQUNqRCxzQkFBc0I7QUFDdEIsaUJBQWlCO0FBQ2pCLHlCQUF5QjtBQUN6Qiw2QkFBNkI7QUFDN0IsMEJBQTBCO0FBQzFCLHVCQUF1QjtBQUN2QixPQUFPO0FBQ1AsSUFBSTtBQUVHLFNBQVNLLGFBQWEsS0FBMEM7UUFBMUMsRUFBRUMsVUFBVSxFQUE4QixHQUExQztJQUMzQkMsUUFBUUMsR0FBRyxDQUFDRixVQUFVLENBQUMsRUFBRSxDQUFDRyxFQUFFLEVBQUVDLE9BQU9KLFVBQVUsQ0FBQyxFQUFFLENBQUNHLEVBQUUsQ0FBQ0UsSUFBSSxFQUFFQyxRQUFRO0lBQ3BFLHFCQUNFLDhEQUFDWix1REFBS0E7OzBCQUNKLDhEQUFDRyw2REFBV0E7MEJBQ1YsNEVBQUNDLDBEQUFRQTs7c0NBQ1AsOERBQUNGLDJEQUFTQTtzQ0FBQzs7Ozs7O3NDQUNYLDhEQUFDQSwyREFBU0E7c0NBQUM7Ozs7OztzQ0FDWCw4REFBQ0EsMkRBQVNBO3NDQUFDOzs7Ozs7c0NBQ1gsOERBQUNBLDJEQUFTQTtzQ0FBQzs7Ozs7O3NDQUNYLDhEQUFDQSwyREFBU0E7c0NBQUM7Ozs7OztzQ0FDWCw4REFBQ0EsMkRBQVNBO3NDQUFDOzs7Ozs7c0NBQ1gsOERBQUNBLDJEQUFTQTtzQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR2YsOERBQUNELDJEQUFTQTs7Ozs7Ozs7Ozs7QUFrQ2hCO0tBakRnQkkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9wZXJ0eS1saXN0LnRzeD9lM2U3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRhYmxlLCBUYWJsZUJvZHksIFRhYmxlQ2VsbCwgVGFibGVIZWFkLCBUYWJsZUhlYWRlciwgVGFibGVSb3cgfSBmcm9tIFwiLi4vY29tcG9uZW50cy91aS90YWJsZVwiXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy91aS9idXR0b25cIlxuaW1wb3J0IHsgRWRpdCwgVHJhc2gyLCBTaGFyZTIsIEV5ZSB9IGZyb20gJ2x1Y2lkZS1yZWFjdCdcbmltcG9ydCB7IFByb3BlcnR5IH0gZnJvbSBcIi4uL2FwcC90eXBlcy9wcm9wZXJ0eVwiXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbi8vIGNvbnN0IHByb3BlcnRpZXM6IFByb3BlcnR5W10gPSBbXG4vLyAgIHsgXG4vLyAgICAgaWQ6IDEsIFxuLy8gICAgIG5hbWU6IFwiU3Vuc2V0IEFwYXJ0bWVudHNcIiwgXG4vLyAgICAgYWRkcmVzczogXCIxMjMgU3Vuc2V0IEJsdmQsIExvcyBBbmdlbGVzLCBDQSA5MDAwMVwiLCBcbi8vICAgICB0eXBlOiBcIkFwYXJ0bWVudFwiLCBcbi8vICAgICB1bml0czogMjQsIFxuLy8gICAgIHRvdGFsU2hhcmVzOiAxMDAwLCBcbi8vICAgICBhdmFpbGFibGVTaGFyZXM6IDI1MCwgXG4vLyAgICAgcHJpY2VQZXJTaGFyZTogMTAwLFxuLy8gICAgIHNoYXJlaG9sZGVyczogW11cbi8vICAgfSxcbi8vICAgeyBcbi8vICAgICBpZDogMiwgXG4vLyAgICAgbmFtZTogXCJEb3dudG93biBMb2Z0c1wiLCBcbi8vICAgICBhZGRyZXNzOiBcIjQ1NiBNYWluIFN0LCBOZXcgWW9yaywgTlkgMTAwMDFcIiwgXG4vLyAgICAgdHlwZTogXCJMb2Z0XCIsIFxuLy8gICAgIHVuaXRzOiAxMiwgXG4vLyAgICAgdG90YWxTaGFyZXM6IDUwMCwgXG4vLyAgICAgYXZhaWxhYmxlU2hhcmVzOiAxMDAsIFxuLy8gICAgIHByaWNlUGVyU2hhcmU6IDIwMCxcbi8vICAgICBzaGFyZWhvbGRlcnM6IFtdXG4vLyAgIH0sXG4vLyAgIHsgXG4vLyAgICAgaWQ6IDMsIFxuLy8gICAgIG5hbWU6IFwiR3JlZW4gVmFsbGV5IEhvbWVzXCIsIFxuLy8gICAgIGFkZHJlc3M6IFwiNzg5IE9hayBSZCwgQ2hpY2FnbywgSUwgNjA2MDFcIiwgXG4vLyAgICAgdHlwZTogXCJIb3VzZVwiLCBcbi8vICAgICB1bml0czogOCwgXG4vLyAgICAgdG90YWxTaGFyZXM6IDgwMCwgXG4vLyAgICAgYXZhaWxhYmxlU2hhcmVzOiA0MDAsIFxuLy8gICAgIHByaWNlUGVyU2hhcmU6IDE1MCxcbi8vICAgICBzaGFyZWhvbGRlcnM6IFtdXG4vLyAgIH0sXG4vLyBdXG5cbmV4cG9ydCBmdW5jdGlvbiBQcm9wZXJ0eUxpc3QoeyBwcm9wZXJ0aWVzIH06IHsgcHJvcGVydGllczogUHJvcGVydHlbXSB9KSB7XG4gIGNvbnNvbGUubG9nKHByb3BlcnRpZXNbMF0uaWQsIEJpZ0ludChwcm9wZXJ0aWVzWzBdLmlkLl9oZXgpLnRvU3RyaW5nKCkpO1xuICByZXR1cm4gKFxuICAgIDxUYWJsZT5cbiAgICAgIDxUYWJsZUhlYWRlcj5cbiAgICAgICAgPFRhYmxlUm93PlxuICAgICAgICAgIDxUYWJsZUhlYWQ+TmFtZTwvVGFibGVIZWFkPlxuICAgICAgICAgIDxUYWJsZUhlYWQ+QWRkcmVzczwvVGFibGVIZWFkPlxuICAgICAgICAgIDxUYWJsZUhlYWQ+VHlwZTwvVGFibGVIZWFkPlxuICAgICAgICAgIDxUYWJsZUhlYWQ+VW5pdHM8L1RhYmxlSGVhZD5cbiAgICAgICAgICA8VGFibGVIZWFkPkF2YWlsYWJsZSBTaGFyZXM8L1RhYmxlSGVhZD5cbiAgICAgICAgICA8VGFibGVIZWFkPlByaWNlIHBlciBTaGFyZTwvVGFibGVIZWFkPlxuICAgICAgICAgIDxUYWJsZUhlYWQ+QWN0aW9uczwvVGFibGVIZWFkPlxuICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgPC9UYWJsZUhlYWRlcj5cbiAgICAgIDxUYWJsZUJvZHk+XG4gICAgICAgIHsvKiB7cHJvcGVydGllcy5tYXAoKHByb3BlcnR5KSA9PiAoXG4gICAgICAgICAgPFRhYmxlUm93IGtleT17cHJvcGVydHkuaWR9PlxuICAgICAgICAgICAgPFRhYmxlQ2VsbD57cHJvcGVydHkubmFtZX08L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgIDxUYWJsZUNlbGw+e3Byb3BlcnR5LmFkZHJlc3N9PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICA8VGFibGVDZWxsPntwcm9wZXJ0eS50eXBlfTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgPFRhYmxlQ2VsbD57cHJvcGVydHkudW5pdHN9PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICA8VGFibGVDZWxsPntwcm9wZXJ0eS5hdmFpbGFibGVTaGFyZXN9IC8ge3Byb3BlcnR5LnRvdGFsU2hhcmVzfTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgPFRhYmxlQ2VsbD4ke3Byb3BlcnR5LnByaWNlUGVyU2hhcmV9PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICA8VGFibGVDZWxsPlxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Byb3BlcnRpZXMvJHtwcm9wZXJ0eS5pZH1gfT5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJnaG9zdFwiIHNpemU9XCJpY29uXCI+XG4gICAgICAgICAgICAgICAgICA8RXllIGNsYXNzTmFtZT1cImgtNCB3LTRcIiAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPlZpZXcgcHJvcGVydHkgZGV0YWlsczwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJnaG9zdFwiIHNpemU9XCJpY29uXCI+XG4gICAgICAgICAgICAgICAgPEVkaXQgY2xhc3NOYW1lPVwiaC00IHctNFwiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPkVkaXQgcHJvcGVydHk8L3NwYW4+XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJnaG9zdFwiIHNpemU9XCJpY29uXCI+XG4gICAgICAgICAgICAgICAgPFRyYXNoMiBjbGFzc05hbWU9XCJoLTQgdy00XCIgLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+RGVsZXRlIHByb3BlcnR5PC9zcGFuPlxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiZ2hvc3RcIiBzaXplPVwiaWNvblwiPlxuICAgICAgICAgICAgICAgIDxTaGFyZTIgY2xhc3NOYW1lPVwiaC00IHctNFwiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPlNoYXJlIHByb3BlcnR5PC9zcGFuPlxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICkpfSAqL31cbiAgICAgIDwvVGFibGVCb2R5PlxuICAgIDwvVGFibGU+XG4gIClcbn1cblxuIl0sIm5hbWVzIjpbIlRhYmxlIiwiVGFibGVCb2R5IiwiVGFibGVIZWFkIiwiVGFibGVIZWFkZXIiLCJUYWJsZVJvdyIsIlByb3BlcnR5TGlzdCIsInByb3BlcnRpZXMiLCJjb25zb2xlIiwibG9nIiwiaWQiLCJCaWdJbnQiLCJfaGV4IiwidG9TdHJpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/property-list.tsx\n"));

/***/ })

});