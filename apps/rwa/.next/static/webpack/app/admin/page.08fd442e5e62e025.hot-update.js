"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/admin/page",{

/***/ "(app-pages-browser)/./components/admin-investor-management.tsx":
/*!**************************************************!*\
  !*** ./components/admin-investor-management.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AdminInvestorManagement: function() { return /* binding */ AdminInvestorManagement; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/../../node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/../../node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ui/table */ \"(app-pages-browser)/./components/ui/table.tsx\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ui/input */ \"(app-pages-browser)/./components/ui/input.tsx\");\n/* harmony import */ var _barrel_optimize_names_CheckCircle_Search_XCircle_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=CheckCircle,Search,XCircle!=!lucide-react */ \"(app-pages-browser)/../../node_modules/lucide-react/dist/esm/icons/search.js\");\n/* harmony import */ var _barrel_optimize_names_CheckCircle_Search_XCircle_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=CheckCircle,Search,XCircle!=!lucide-react */ \"(app-pages-browser)/../../node_modules/lucide-react/dist/esm/icons/circle-check-big.js\");\n/* harmony import */ var _barrel_optimize_names_CheckCircle_Search_XCircle_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=CheckCircle,Search,XCircle!=!lucide-react */ \"(app-pages-browser)/../../node_modules/lucide-react/dist/esm/icons/circle-x.js\");\n/* harmony import */ var _gods_work_web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @gods.work/web3 */ \"(app-pages-browser)/../../packages/web3/src/index.ts\");\n/* __next_internal_client_entry_do_not_use__ AdminInvestorManagement auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n// const mockInvestors: Investor[] = [\n//   { id: 1, name: \"John Doe\", email: \"john@example.com\", isVerified: false, registrationDate: \"2023-06-01\" },\n//   { id: 2, name: \"Jane Smith\", email: \"jane@example.com\", isVerified: true, registrationDate: \"2023-05-15\" },\n//   { id: 3, name: \"Bob Johnson\", email: \"bob@example.com\", isVerified: false, registrationDate: \"2023-06-10\" },\n// ]\nfunction AdminInvestorManagement(param) {\n    let { verifiers, investors } = param;\n    _s();\n    const [investorList, setInvestorList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(investors !== null && investors !== void 0 ? investors : []);\n    const [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleVerify = async (address)=>{\n        console.log(\"address: \", address);\n        await (0,_gods_work_web3__WEBPACK_IMPORTED_MODULE_5__.verifyInvestor)({\n            investorAddress: address\n        });\n        setInvestorList(investorList.map((investor)=>investor.investor === address ? {\n                ...investor,\n                isVerified: true\n            } : investor));\n    };\n    const handleUnverify = async (address)=>{\n        await (0,_gods_work_web3__WEBPACK_IMPORTED_MODULE_5__.removeInvestor)({\n            investorAddress: address\n        });\n        setInvestorList(investorList.map((investor)=>investor.investor === address ? {\n                ...investor,\n                isVerified: false\n            } : investor));\n    };\n    const filteredInvestors = investorList.filter((investor)=>searchTerm.length === 0 || investor.name.toLowerCase().includes(searchTerm.toLowerCase()));\n    console.log(\"filteredInvestors: \", investorList, filteredInvestors);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"space-y-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center space-x-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_4__.Input, {\n                        type: \"text\",\n                        placeholder: \"Search investors...\",\n                        value: searchTerm,\n                        onChange: (e)=>setSearchTerm(e.target.value),\n                        className: \"max-w-sm\"\n                    }, void 0, false, {\n                        fileName: \"/Users/johngulbronson/DetroitArt/gods.work/apps/rwa/components/admin-investor-management.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                        variant: \"outline\",\n                        size: \"icon\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CheckCircle_Search_XCircle_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            className: \"h-4 w-4\"\n                        }, void 0, false, {\n                            fileName: \"/Users/johngulbronson/DetroitArt/gods.work/apps/rwa/components/admin-investor-management.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/johngulbronson/DetroitArt/gods.work/apps/rwa/components/admin-investor-management.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/johngulbronson/DetroitArt/gods.work/apps/rwa/components/admin-investor-management.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_2__.Table, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_2__.TableHeader, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_2__.TableRow, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_2__.TableHead, {\n                                    children: \"Name\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/johngulbronson/DetroitArt/gods.work/apps/rwa/components/admin-investor-management.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_2__.TableHead, {\n                                    children: \"Registration Date\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/johngulbronson/DetroitArt/gods.work/apps/rwa/components/admin-investor-management.tsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_2__.TableHead, {\n                                    children: \"Verified\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/johngulbronson/DetroitArt/gods.work/apps/rwa/components/admin-investor-management.tsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_2__.TableHead, {\n                                    children: \"Actions\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/johngulbronson/DetroitArt/gods.work/apps/rwa/components/admin-investor-management.tsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/johngulbronson/DetroitArt/gods.work/apps/rwa/components/admin-investor-management.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/johngulbronson/DetroitArt/gods.work/apps/rwa/components/admin-investor-management.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_2__.TableBody, {\n                        children: investorList.map((investor)=>{\n                            console.log(\"investor: \", investor);\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_2__.TableRow, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_2__.TableCell, {\n                                        children: investor.name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/johngulbronson/DetroitArt/gods.work/apps/rwa/components/admin-investor-management.tsx\",\n                                        lineNumber: 76,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_2__.TableCell, {\n                                        children: investor.registrationDate\n                                    }, void 0, false, {\n                                        fileName: \"/Users/johngulbronson/DetroitArt/gods.work/apps/rwa/components/admin-investor-management.tsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_2__.TableCell, {\n                                        children: investor.isVerified ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CheckCircle_Search_XCircle_lucide_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                            className: \"text-green-500\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/johngulbronson/DetroitArt/gods.work/apps/rwa/components/admin-investor-management.tsx\",\n                                            lineNumber: 80,\n                                            columnNumber: 19\n                                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CheckCircle_Search_XCircle_lucide_react__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                            className: \"text-red-500\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/johngulbronson/DetroitArt/gods.work/apps/rwa/components/admin-investor-management.tsx\",\n                                            lineNumber: 82,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/johngulbronson/DetroitArt/gods.work/apps/rwa/components/admin-investor-management.tsx\",\n                                        lineNumber: 78,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_2__.TableCell, {\n                                        children: investor.isVerified ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                            variant: \"outline\",\n                                            size: \"sm\",\n                                            onClick: ()=>handleUnverify(investor.investor),\n                                            children: \"Unverify\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/johngulbronson/DetroitArt/gods.work/apps/rwa/components/admin-investor-management.tsx\",\n                                            lineNumber: 87,\n                                            columnNumber: 19\n                                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                            variant: \"outline\",\n                                            size: \"sm\",\n                                            onClick: ()=>handleVerify(investor.investor),\n                                            children: \"Verify\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/johngulbronson/DetroitArt/gods.work/apps/rwa/components/admin-investor-management.tsx\",\n                                            lineNumber: 91,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/johngulbronson/DetroitArt/gods.work/apps/rwa/components/admin-investor-management.tsx\",\n                                        lineNumber: 85,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, investor.investor, true, {\n                                fileName: \"/Users/johngulbronson/DetroitArt/gods.work/apps/rwa/components/admin-investor-management.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 15\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/johngulbronson/DetroitArt/gods.work/apps/rwa/components/admin-investor-management.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/johngulbronson/DetroitArt/gods.work/apps/rwa/components/admin-investor-management.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/johngulbronson/DetroitArt/gods.work/apps/rwa/components/admin-investor-management.tsx\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, this);\n}\n_s(AdminInvestorManagement, \"/+AzzwWq2qYyAxDkrRArDuRmeto=\");\n_c = AdminInvestorManagement;\nvar _c;\n$RefreshReg$(_c, \"AdminInvestorManagement\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvYWRtaW4taW52ZXN0b3ItbWFuYWdlbWVudC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUVnQztBQUNzRTtBQUN0RDtBQUNGO0FBQ2E7QUFFTTtBQUVqRSxzQ0FBc0M7QUFDdEMsK0dBQStHO0FBQy9HLGdIQUFnSDtBQUNoSCxpSEFBaUg7QUFDakgsSUFBSTtBQUVHLFNBQVNjLHdCQUF3QixLQUF3RTtRQUF4RSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBa0QsR0FBeEU7O0lBRXRDLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdsQiwrQ0FBUUEsQ0FBYWdCLHNCQUFBQSx1QkFBQUEsWUFBYSxFQUFFO0lBQzVFLE1BQU0sQ0FBQ0csWUFBWUMsY0FBYyxHQUFHcEIsK0NBQVFBLENBQUM7SUFFN0MsTUFBTXFCLGVBQWUsT0FBT0M7UUFDMUJDLFFBQVFDLEdBQUcsQ0FBQyxhQUFhRjtRQUN6QixNQUFNVCwrREFBY0EsQ0FBQztZQUNuQlksaUJBQWlCSDtRQUNuQjtRQUNBSixnQkFBZ0JELGFBQWFTLEdBQUcsQ0FBQ0MsQ0FBQUEsV0FDL0JBLFNBQVNBLFFBQVEsS0FBS0wsVUFBVTtnQkFBRSxHQUFHSyxRQUFRO2dCQUFFQyxZQUFZO1lBQUssSUFBSUQ7SUFFeEU7SUFFQSxNQUFNRSxpQkFBaUIsT0FBT1A7UUFDNUIsTUFBTVYsK0RBQWNBLENBQUM7WUFDbkJhLGlCQUFpQkg7UUFDbkI7UUFDQUosZ0JBQWdCRCxhQUFhUyxHQUFHLENBQUNDLENBQUFBLFdBQy9CQSxTQUFTQSxRQUFRLEtBQUtMLFVBQVU7Z0JBQUUsR0FBR0ssUUFBUTtnQkFBRUMsWUFBWTtZQUFNLElBQUlEO0lBRXpFO0lBRUEsTUFBTUcsb0JBQW9CYixhQUFhYyxNQUFNLENBQUNKLENBQUFBLFdBQzVDUixXQUFXYSxNQUFNLEtBQUssS0FBS0wsU0FBU00sSUFBSSxDQUFDQyxXQUFXLEdBQUdDLFFBQVEsQ0FBQ2hCLFdBQVdlLFdBQVc7SUFHeEZYLFFBQVFDLEdBQUcsQ0FBQyx1QkFBdUJQLGNBQWNhO0lBRWpELHFCQUNFLDhEQUFDTTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDN0IsdURBQUtBO3dCQUNKOEIsTUFBSzt3QkFDTEMsYUFBWTt3QkFDWkMsT0FBT3JCO3dCQUNQc0IsVUFBVSxDQUFDQyxJQUFNdEIsY0FBY3NCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzt3QkFDN0NILFdBQVU7Ozs7OztrQ0FFWiw4REFBQzlCLHlEQUFNQTt3QkFBQ3FDLFNBQVE7d0JBQVVDLE1BQUs7a0NBQzdCLDRFQUFDbEMsc0dBQU1BOzRCQUFDMEIsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR3RCLDhEQUFDcEMsdURBQUtBOztrQ0FDSiw4REFBQ0ksNkRBQVdBO2tDQUNWLDRFQUFDQywwREFBUUE7OzhDQUNQLDhEQUFDRiwyREFBU0E7OENBQUM7Ozs7Ozs4Q0FFWCw4REFBQ0EsMkRBQVNBOzhDQUFDOzs7Ozs7OENBQ1gsOERBQUNBLDJEQUFTQTs4Q0FBQzs7Ozs7OzhDQUNYLDhEQUFDQSwyREFBU0E7OENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUdmLDhEQUFDRiwyREFBU0E7a0NBQ1BlLGFBQWFTLEdBQUcsQ0FBQyxDQUFDQzs0QkFDakJKLFFBQVFDLEdBQUcsQ0FBQyxjQUFjRzs0QkFDMUIscUJBQ0UsOERBQUNyQiwwREFBUUE7O2tEQUNQLDhEQUFDSCwyREFBU0E7a0RBQUV3QixTQUFTTSxJQUFJOzs7Ozs7a0RBQzNCLDhEQUFDOUIsMkRBQVNBO2tEQUFFd0IsU0FBU21CLGdCQUFnQjs7Ozs7O2tEQUNyQyw4REFBQzNDLDJEQUFTQTtrREFDUHdCLFNBQVNDLFVBQVUsaUJBQ2xCLDhEQUFDbkIsc0dBQVdBOzRDQUFDNEIsV0FBVTs7Ozs7aUVBRXZCLDhEQUFDM0Isc0dBQU9BOzRDQUFDMkIsV0FBVTs7Ozs7Ozs7Ozs7a0RBR3ZCLDhEQUFDbEMsMkRBQVNBO2tEQUNQd0IsU0FBU0MsVUFBVSxpQkFDbEIsOERBQUNyQix5REFBTUE7NENBQUNxQyxTQUFROzRDQUFVQyxNQUFLOzRDQUFLRSxTQUFTLElBQU1sQixlQUFlRixTQUFTQSxRQUFRO3NEQUFHOzs7OztpRUFJdEYsOERBQUNwQix5REFBTUE7NENBQUNxQyxTQUFROzRDQUFVQyxNQUFLOzRDQUFLRSxTQUFTLElBQU0xQixhQUFhTSxTQUFTQSxRQUFRO3NEQUFHOzs7Ozs7Ozs7Ozs7K0JBaEJ6RUEsU0FBU0EsUUFBUTs7Ozs7d0JBdUJwQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS1Y7R0F0RmdCYjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2FkbWluLWludmVzdG9yLW1hbmFnZW1lbnQudHN4P2NkZTAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcblxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFRhYmxlLCBUYWJsZUJvZHksIFRhYmxlQ2VsbCwgVGFibGVIZWFkLCBUYWJsZUhlYWRlciwgVGFibGVSb3cgfSBmcm9tIFwiLi4vY29tcG9uZW50cy91aS90YWJsZVwiXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy91aS9idXR0b25cIlxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy91aS9pbnB1dFwiXG5pbXBvcnQgeyBDaGVja0NpcmNsZSwgWENpcmNsZSwgU2VhcmNoIH0gZnJvbSAnbHVjaWRlLXJlYWN0J1xuaW1wb3J0IHsgSW52ZXN0b3IgfSBmcm9tIFwiLi4vYXBwL3R5cGVzL2ludmVzdG9yXCJcbmltcG9ydCB7IHJlbW92ZUludmVzdG9yLCB2ZXJpZnlJbnZlc3RvciB9IGZyb20gJ0Bnb2RzLndvcmsvd2ViMyc7XG5cbi8vIGNvbnN0IG1vY2tJbnZlc3RvcnM6IEludmVzdG9yW10gPSBbXG4vLyAgIHsgaWQ6IDEsIG5hbWU6IFwiSm9obiBEb2VcIiwgZW1haWw6IFwiam9obkBleGFtcGxlLmNvbVwiLCBpc1ZlcmlmaWVkOiBmYWxzZSwgcmVnaXN0cmF0aW9uRGF0ZTogXCIyMDIzLTA2LTAxXCIgfSxcbi8vICAgeyBpZDogMiwgbmFtZTogXCJKYW5lIFNtaXRoXCIsIGVtYWlsOiBcImphbmVAZXhhbXBsZS5jb21cIiwgaXNWZXJpZmllZDogdHJ1ZSwgcmVnaXN0cmF0aW9uRGF0ZTogXCIyMDIzLTA1LTE1XCIgfSxcbi8vICAgeyBpZDogMywgbmFtZTogXCJCb2IgSm9obnNvblwiLCBlbWFpbDogXCJib2JAZXhhbXBsZS5jb21cIiwgaXNWZXJpZmllZDogZmFsc2UsIHJlZ2lzdHJhdGlvbkRhdGU6IFwiMjAyMy0wNi0xMFwiIH0sXG4vLyBdXG5cbmV4cG9ydCBmdW5jdGlvbiBBZG1pbkludmVzdG9yTWFuYWdlbWVudCh7IHZlcmlmaWVycywgaW52ZXN0b3JzIH06IHsgdmVyaWZpZXJzOiBzdHJpbmdbXSwgaW52ZXN0b3JzOiBJbnZlc3RvcltdIH0pIHtcblxuICBjb25zdCBbaW52ZXN0b3JMaXN0LCBzZXRJbnZlc3Rvckxpc3RdID0gdXNlU3RhdGU8SW52ZXN0b3JbXT4oaW52ZXN0b3JzID8/IFtdKVxuICBjb25zdCBbc2VhcmNoVGVybSwgc2V0U2VhcmNoVGVybV0gPSB1c2VTdGF0ZShcIlwiKVxuXG4gIGNvbnN0IGhhbmRsZVZlcmlmeSA9IGFzeW5jIChhZGRyZXNzOiBzdHJpbmcpID0+IHtcbiAgICBjb25zb2xlLmxvZygnYWRkcmVzczogJywgYWRkcmVzcyk7XG4gICAgYXdhaXQgdmVyaWZ5SW52ZXN0b3Ioe1xuICAgICAgaW52ZXN0b3JBZGRyZXNzOiBhZGRyZXNzLFxuICAgIH0pO1xuICAgIHNldEludmVzdG9yTGlzdChpbnZlc3Rvckxpc3QubWFwKGludmVzdG9yID0+IFxuICAgICAgaW52ZXN0b3IuaW52ZXN0b3IgPT09IGFkZHJlc3MgPyB7IC4uLmludmVzdG9yLCBpc1ZlcmlmaWVkOiB0cnVlIH0gOiBpbnZlc3RvclxuICAgICkpXG4gIH1cblxuICBjb25zdCBoYW5kbGVVbnZlcmlmeSA9IGFzeW5jIChhZGRyZXNzOiBzdHJpbmcpID0+IHtcbiAgICBhd2FpdCByZW1vdmVJbnZlc3Rvcih7XG4gICAgICBpbnZlc3RvckFkZHJlc3M6IGFkZHJlc3MsXG4gICAgfSk7XG4gICAgc2V0SW52ZXN0b3JMaXN0KGludmVzdG9yTGlzdC5tYXAoaW52ZXN0b3IgPT4gXG4gICAgICBpbnZlc3Rvci5pbnZlc3RvciA9PT0gYWRkcmVzcyA/IHsgLi4uaW52ZXN0b3IsIGlzVmVyaWZpZWQ6IGZhbHNlIH0gOiBpbnZlc3RvclxuICAgICkpXG4gIH1cblxuICBjb25zdCBmaWx0ZXJlZEludmVzdG9ycyA9IGludmVzdG9yTGlzdC5maWx0ZXIoaW52ZXN0b3IgPT4gXG4gICAgc2VhcmNoVGVybS5sZW5ndGggPT09IDAgfHwgaW52ZXN0b3IubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFRlcm0udG9Mb3dlckNhc2UoKSlcbiAgKVxuXG4gIGNvbnNvbGUubG9nKCdmaWx0ZXJlZEludmVzdG9yczogJywgaW52ZXN0b3JMaXN0LCBmaWx0ZXJlZEludmVzdG9ycyk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTJcIj5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGludmVzdG9ycy4uLlwiXG4gICAgICAgICAgdmFsdWU9e3NlYXJjaFRlcm19XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWFyY2hUZXJtKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJtYXgtdy1zbVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVcIiBzaXplPVwiaWNvblwiPlxuICAgICAgICAgIDxTZWFyY2ggY2xhc3NOYW1lPVwiaC00IHctNFwiIC8+XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8VGFibGU+XG4gICAgICAgIDxUYWJsZUhlYWRlcj5cbiAgICAgICAgICA8VGFibGVSb3c+XG4gICAgICAgICAgICA8VGFibGVIZWFkPk5hbWU8L1RhYmxlSGVhZD5cbiAgICAgICAgICAgIHsvKiA8VGFibGVIZWFkPkVtYWlsPC9UYWJsZUhlYWQ+ICovfVxuICAgICAgICAgICAgPFRhYmxlSGVhZD5SZWdpc3RyYXRpb24gRGF0ZTwvVGFibGVIZWFkPlxuICAgICAgICAgICAgPFRhYmxlSGVhZD5WZXJpZmllZDwvVGFibGVIZWFkPlxuICAgICAgICAgICAgPFRhYmxlSGVhZD5BY3Rpb25zPC9UYWJsZUhlYWQ+XG4gICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgPC9UYWJsZUhlYWRlcj5cbiAgICAgICAgPFRhYmxlQm9keT5cbiAgICAgICAgICB7aW52ZXN0b3JMaXN0Lm1hcCgoaW52ZXN0b3IpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpbnZlc3RvcjogJywgaW52ZXN0b3IpO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPFRhYmxlUm93IGtleT17aW52ZXN0b3IuaW52ZXN0b3J9PlxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+e2ludmVzdG9yLm5hbWV9PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGw+e2ludmVzdG9yLnJlZ2lzdHJhdGlvbkRhdGV9PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAge2ludmVzdG9yLmlzVmVyaWZpZWQgPyAoXG4gICAgICAgICAgICAgICAgICA8Q2hlY2tDaXJjbGUgY2xhc3NOYW1lPVwidGV4dC1ncmVlbi01MDBcIiAvPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICA8WENpcmNsZSBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDBcIiAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8VGFibGVDZWxsPlxuICAgICAgICAgICAgICAgIHtpbnZlc3Rvci5pc1ZlcmlmaWVkID8gKFxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZVwiIHNpemU9XCJzbVwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZVVudmVyaWZ5KGludmVzdG9yLmludmVzdG9yKX0+XG4gICAgICAgICAgICAgICAgICAgIFVudmVyaWZ5XG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZVwiIHNpemU9XCJzbVwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZVZlcmlmeShpbnZlc3Rvci5pbnZlc3Rvcil9PlxuICAgICAgICAgICAgICAgICAgICBWZXJpZnlcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L1RhYmxlQm9keT5cbiAgICAgIDwvVGFibGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiVGFibGUiLCJUYWJsZUJvZHkiLCJUYWJsZUNlbGwiLCJUYWJsZUhlYWQiLCJUYWJsZUhlYWRlciIsIlRhYmxlUm93IiwiQnV0dG9uIiwiSW5wdXQiLCJDaGVja0NpcmNsZSIsIlhDaXJjbGUiLCJTZWFyY2giLCJyZW1vdmVJbnZlc3RvciIsInZlcmlmeUludmVzdG9yIiwiQWRtaW5JbnZlc3Rvck1hbmFnZW1lbnQiLCJ2ZXJpZmllcnMiLCJpbnZlc3RvcnMiLCJpbnZlc3Rvckxpc3QiLCJzZXRJbnZlc3Rvckxpc3QiLCJzZWFyY2hUZXJtIiwic2V0U2VhcmNoVGVybSIsImhhbmRsZVZlcmlmeSIsImFkZHJlc3MiLCJjb25zb2xlIiwibG9nIiwiaW52ZXN0b3JBZGRyZXNzIiwibWFwIiwiaW52ZXN0b3IiLCJpc1ZlcmlmaWVkIiwiaGFuZGxlVW52ZXJpZnkiLCJmaWx0ZXJlZEludmVzdG9ycyIsImZpbHRlciIsImxlbmd0aCIsIm5hbWUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiZGl2IiwiY2xhc3NOYW1lIiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YXJpYW50Iiwic2l6ZSIsInJlZ2lzdHJhdGlvbkRhdGUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/admin-investor-management.tsx\n"));

/***/ })

});