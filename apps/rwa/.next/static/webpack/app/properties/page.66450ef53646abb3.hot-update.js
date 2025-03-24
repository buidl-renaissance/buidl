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

/***/ "(app-pages-browser)/../../packages/web3/src/lib/InvestorRegistery/utils.ts":
/*!**************************************************************!*\
  !*** ../../packages/web3/src/lib/InvestorRegistery/utils.ts ***!
  \**************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authorizeVerifier: function() { return /* binding */ authorizeVerifier; },\n/* harmony export */   getAllInvestors: function() { return /* binding */ getAllInvestors; },\n/* harmony export */   getAllInvestorsDetails: function() { return /* binding */ getAllInvestorsDetails; },\n/* harmony export */   getAuthorizedVerifiers: function() { return /* binding */ getAuthorizedVerifiers; },\n/* harmony export */   registerInvestor: function() { return /* binding */ registerInvestor; },\n/* harmony export */   removeInvestor: function() { return /* binding */ removeInvestor; },\n/* harmony export */   verifyInvestor: function() { return /* binding */ verifyInvestor; }\n/* harmony export */ });\n/* harmony import */ var _contract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contract */ \"(app-pages-browser)/../../packages/web3/src/lib/InvestorRegistery/contract.ts\");\n/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../provider */ \"(app-pages-browser)/../../packages/web3/src/lib/provider.ts\");\n/* harmony import */ var _connectWallet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../connectWallet */ \"(app-pages-browser)/../../packages/web3/src/lib/connectWallet.ts\");\n\n\n\nconst getAuthorizedVerifiers = async ()=>{\n    const contract = (0,_contract__WEBPACK_IMPORTED_MODULE_0__.InvestorRegistryContract)((0,_provider__WEBPACK_IMPORTED_MODULE_1__.getProvider)());\n    return await contract[\"getAuthorizedVerifiers\"]();\n};\n// Function for client-side interaction to create a new property\nconst getAllInvestors = async ()=>{\n    const contract = (0,_contract__WEBPACK_IMPORTED_MODULE_0__.InvestorRegistryContract)((0,_provider__WEBPACK_IMPORTED_MODULE_1__.getProvider)());\n    return await contract[\"getAllInvestors\"]();\n};\nconst getAllInvestorsDetails = async ()=>{\n    const contract = (0,_contract__WEBPACK_IMPORTED_MODULE_0__.InvestorRegistryContract)((0,_provider__WEBPACK_IMPORTED_MODULE_1__.getProvider)());\n    return await contract[\"getAllInvestorsDetails\"]();\n};\nconst registerInvestor = async (registerInvestorData)=>{\n    const { name } = registerInvestorData;\n    const signer = await (0,_connectWallet__WEBPACK_IMPORTED_MODULE_2__.getWalletSigner)();\n    const contract = (0,_contract__WEBPACK_IMPORTED_MODULE_0__.InvestorRegistryContract)(signer);\n    const tx = await contract[\"registerInvestor\"](name);\n    const receipt = await tx.wait();\n    return {\n        receipt,\n        txHash: tx.hash\n    };\n};\nconst authorizeVerifier = async (authorizeVerifierData)=>{\n    const { verifierAddress } = authorizeVerifierData;\n    const signer = await (0,_connectWallet__WEBPACK_IMPORTED_MODULE_2__.getWalletSigner)();\n    const contract = (0,_contract__WEBPACK_IMPORTED_MODULE_0__.InvestorRegistryContract)(signer);\n    const tx = await contract[\"authorizeVerifier\"](verifierAddress, {\n        gasLimit: 1721975\n    });\n    const receipt = await tx.wait();\n    return {\n        receipt,\n        txHash: tx.hash\n    };\n};\nconst verifyInvestor = async (verifyInvestorData)=>{\n    const { investorAddress } = verifyInvestorData;\n    const signer = await (0,_connectWallet__WEBPACK_IMPORTED_MODULE_2__.getWalletSigner)();\n    const contract = (0,_contract__WEBPACK_IMPORTED_MODULE_0__.InvestorRegistryContract)(signer);\n    const tx = await contract[\"verifyInvestor\"](investorAddress);\n    // Wait for transaction to be mined\n    const receipt = await tx.wait();\n    return {\n        receipt,\n        txHash: tx.hash\n    };\n};\nconst removeInvestor = async (removeInvestorData)=>{\n    const { investorAddress } = removeInvestorData;\n    const signer = await (0,_connectWallet__WEBPACK_IMPORTED_MODULE_2__.getWalletSigner)();\n    const contract = (0,_contract__WEBPACK_IMPORTED_MODULE_0__.InvestorRegistryContract)(signer);\n    const tx = await contract[\"removeInvestor\"](investorAddress, {\n        gasLimit: 1721975\n    });\n    const receipt = await tx.wait();\n    return {\n        receipt,\n        txHash: tx.hash\n    };\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uLi8uLi9wYWNrYWdlcy93ZWIzL3NyYy9saWIvSW52ZXN0b3JSZWdpc3RlcnkvdXRpbHMudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFzRDtBQUNaO0FBQ1M7QUFFNUMsTUFBTUcseUJBQXlCO0lBQ3BDLE1BQU1DLFdBQVdKLG1FQUF3QkEsQ0FBQ0Msc0RBQVdBO0lBQ3JELE9BQU8sTUFBTUcsUUFBUSxDQUFDLHlCQUF5QjtBQUNqRCxFQUFFO0FBRUYsZ0VBQWdFO0FBQ3pELE1BQU1DLGtCQUFrQjtJQUM3QixNQUFNRCxXQUFXSixtRUFBd0JBLENBQUNDLHNEQUFXQTtJQUNyRCxPQUFPLE1BQU1HLFFBQVEsQ0FBQyxrQkFBa0I7QUFDMUMsRUFBRTtBQUVLLE1BQU1FLHlCQUF5QjtJQUNwQyxNQUFNRixXQUFXSixtRUFBd0JBLENBQUNDLHNEQUFXQTtJQUNyRCxPQUFPLE1BQU1HLFFBQVEsQ0FBQyx5QkFBeUI7QUFDakQsRUFBRTtBQU1LLE1BQU1HLG1CQUFtQixPQUM5QkM7SUFFQSxNQUFNLEVBQUVDLElBQUksRUFBRSxHQUFHRDtJQUVqQixNQUFNRSxTQUFTLE1BQU1SLCtEQUFlQTtJQUVwQyxNQUFNRSxXQUFXSixtRUFBd0JBLENBQUNVO0lBRTFDLE1BQU1DLEtBQUssTUFBTVAsUUFBUSxDQUFDLG1CQUFtQixDQUFDSztJQUU5QyxNQUFNRyxVQUFVLE1BQU1ELEdBQUdFLElBQUk7SUFFN0IsT0FBTztRQUFFRDtRQUFTRSxRQUFRSCxHQUFHSSxJQUFJO0lBQUM7QUFDcEMsRUFBRTtBQVFLLE1BQU1DLG9CQUFvQixPQUMvQkM7SUFFQSxNQUFNLEVBQUVDLGVBQWUsRUFBRSxHQUFHRDtJQUU1QixNQUFNUCxTQUFTLE1BQU1SLCtEQUFlQTtJQUVwQyxNQUFNRSxXQUFXSixtRUFBd0JBLENBQUNVO0lBRTFDLE1BQU1DLEtBQUssTUFBTVAsUUFBUSxDQUFDLG9CQUFvQixDQUFDYyxpQkFBaUI7UUFDOURDLFVBQVU7SUFDWjtJQUVBLE1BQU1QLFVBQVUsTUFBTUQsR0FBR0UsSUFBSTtJQUU3QixPQUFPO1FBQUVEO1FBQVNFLFFBQVFILEdBQUdJLElBQUk7SUFBQztBQUNwQyxFQUFFO0FBT0ssTUFBTUssaUJBQWlCLE9BQzVCQztJQUVBLE1BQU0sRUFBRUMsZUFBZSxFQUFFLEdBQUdEO0lBRTVCLE1BQU1YLFNBQVMsTUFBTVIsK0RBQWVBO0lBRXBDLE1BQU1FLFdBQVdKLG1FQUF3QkEsQ0FBQ1U7SUFFMUMsTUFBTUMsS0FBSyxNQUFNUCxRQUFRLENBQUMsaUJBQWlCLENBQUNrQjtJQUU1QyxtQ0FBbUM7SUFDbkMsTUFBTVYsVUFBVSxNQUFNRCxHQUFHRSxJQUFJO0lBRTdCLE9BQU87UUFBRUQ7UUFBU0UsUUFBUUgsR0FBR0ksSUFBSTtJQUFDO0FBQ3BDLEVBQUU7QUFFSyxNQUFNUSxpQkFBaUIsT0FDNUJDO0lBR0EsTUFBTSxFQUFFRixlQUFlLEVBQUUsR0FBR0U7SUFFNUIsTUFBTWQsU0FBUyxNQUFNUiwrREFBZUE7SUFFcEMsTUFBTUUsV0FBV0osbUVBQXdCQSxDQUFDVTtJQUUxQyxNQUFNQyxLQUFLLE1BQU1QLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQ2tCLGlCQUFpQjtRQUMzREgsVUFBVTtJQUNaO0lBRUEsTUFBTVAsVUFBVSxNQUFNRCxHQUFHRSxJQUFJO0lBRTdCLE9BQU87UUFBRUQ7UUFBU0UsUUFBUUgsR0FBR0ksSUFBSTtJQUFDO0FBQ3BDLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4uLy4uL3BhY2thZ2VzL3dlYjMvc3JjL2xpYi9JbnZlc3RvclJlZ2lzdGVyeS91dGlscy50cz8xZGQyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEludmVzdG9yUmVnaXN0cnlDb250cmFjdCB9IGZyb20gJy4vY29udHJhY3QnO1xuaW1wb3J0IHsgZ2V0UHJvdmlkZXIgfSBmcm9tICcuLi9wcm92aWRlcic7XG5pbXBvcnQgeyBnZXRXYWxsZXRTaWduZXIgfSBmcm9tICcuLi9jb25uZWN0V2FsbGV0JztcblxuZXhwb3J0IGNvbnN0IGdldEF1dGhvcml6ZWRWZXJpZmllcnMgPSBhc3luYyAoKTogUHJvbWlzZTxhbnk+ID0+IHtcbiAgY29uc3QgY29udHJhY3QgPSBJbnZlc3RvclJlZ2lzdHJ5Q29udHJhY3QoZ2V0UHJvdmlkZXIoKSk7XG4gIHJldHVybiBhd2FpdCBjb250cmFjdFsnZ2V0QXV0aG9yaXplZFZlcmlmaWVycyddKCk7XG59O1xuXG4vLyBGdW5jdGlvbiBmb3IgY2xpZW50LXNpZGUgaW50ZXJhY3Rpb24gdG8gY3JlYXRlIGEgbmV3IHByb3BlcnR5XG5leHBvcnQgY29uc3QgZ2V0QWxsSW52ZXN0b3JzID0gYXN5bmMgKCk6IFByb21pc2U8YW55PiA9PiB7XG4gIGNvbnN0IGNvbnRyYWN0ID0gSW52ZXN0b3JSZWdpc3RyeUNvbnRyYWN0KGdldFByb3ZpZGVyKCkpO1xuICByZXR1cm4gYXdhaXQgY29udHJhY3RbJ2dldEFsbEludmVzdG9ycyddKCk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0QWxsSW52ZXN0b3JzRGV0YWlscyA9IGFzeW5jICgpOiBQcm9taXNlPGFueT4gPT4ge1xuICBjb25zdCBjb250cmFjdCA9IEludmVzdG9yUmVnaXN0cnlDb250cmFjdChnZXRQcm92aWRlcigpKTtcbiAgcmV0dXJuIGF3YWl0IGNvbnRyYWN0WydnZXRBbGxJbnZlc3RvcnNEZXRhaWxzJ10oKTtcbn07XG5cbmludGVyZmFjZSBSZWdpc3RlckludmVzdG9yRGF0YSB7XG4gIG5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVySW52ZXN0b3IgPSBhc3luYyAoXG4gIHJlZ2lzdGVySW52ZXN0b3JEYXRhOiBSZWdpc3RlckludmVzdG9yRGF0YVxuKTogUHJvbWlzZTx7IHJlY2VpcHQ6IGFueTsgdHhIYXNoOiBzdHJpbmcgfT4gPT4ge1xuICBjb25zdCB7IG5hbWUgfSA9IHJlZ2lzdGVySW52ZXN0b3JEYXRhO1xuXG4gIGNvbnN0IHNpZ25lciA9IGF3YWl0IGdldFdhbGxldFNpZ25lcigpO1xuXG4gIGNvbnN0IGNvbnRyYWN0ID0gSW52ZXN0b3JSZWdpc3RyeUNvbnRyYWN0KHNpZ25lcik7XG5cbiAgY29uc3QgdHggPSBhd2FpdCBjb250cmFjdFsncmVnaXN0ZXJJbnZlc3RvciddKG5hbWUpO1xuXG4gIGNvbnN0IHJlY2VpcHQgPSBhd2FpdCB0eC53YWl0KCk7XG5cbiAgcmV0dXJuIHsgcmVjZWlwdCwgdHhIYXNoOiB0eC5oYXNoIH07XG59O1xuXG4vKiogQXV0aG9yaXplZCBWZXJpZmllciBGdW5jdGlvbnMgKi9cblxuaW50ZXJmYWNlIEF1dGhvcml6ZVZlcmlmaWVyRGF0YSB7XG4gIHZlcmlmaWVyQWRkcmVzczogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgYXV0aG9yaXplVmVyaWZpZXIgPSBhc3luYyAoXG4gIGF1dGhvcml6ZVZlcmlmaWVyRGF0YTogQXV0aG9yaXplVmVyaWZpZXJEYXRhXG4pOiBQcm9taXNlPHsgcmVjZWlwdDogYW55OyB0eEhhc2g6IHN0cmluZyB9PiA9PiB7XG4gIGNvbnN0IHsgdmVyaWZpZXJBZGRyZXNzIH0gPSBhdXRob3JpemVWZXJpZmllckRhdGE7XG5cbiAgY29uc3Qgc2lnbmVyID0gYXdhaXQgZ2V0V2FsbGV0U2lnbmVyKCk7XG5cbiAgY29uc3QgY29udHJhY3QgPSBJbnZlc3RvclJlZ2lzdHJ5Q29udHJhY3Qoc2lnbmVyKTtcblxuICBjb25zdCB0eCA9IGF3YWl0IGNvbnRyYWN0WydhdXRob3JpemVWZXJpZmllciddKHZlcmlmaWVyQWRkcmVzcywge1xuICAgIGdhc0xpbWl0OiAxNzIxOTc1LFxuICB9KTtcblxuICBjb25zdCByZWNlaXB0ID0gYXdhaXQgdHgud2FpdCgpO1xuXG4gIHJldHVybiB7IHJlY2VpcHQsIHR4SGFzaDogdHguaGFzaCB9O1xufTtcblxuLyoqIFZlcmlmaWVkIEludmVzdG9yIEZ1bmN0aW9ucyAqL1xuaW50ZXJmYWNlIFZlcmlmeUludmVzdG9yRGF0YSB7XG4gIGludmVzdG9yQWRkcmVzczogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgdmVyaWZ5SW52ZXN0b3IgPSBhc3luYyAoXG4gIHZlcmlmeUludmVzdG9yRGF0YTogVmVyaWZ5SW52ZXN0b3JEYXRhXG4pOiBQcm9taXNlPHsgcmVjZWlwdDogYW55OyB0eEhhc2g6IHN0cmluZyB9PiA9PiB7XG4gIGNvbnN0IHsgaW52ZXN0b3JBZGRyZXNzIH0gPSB2ZXJpZnlJbnZlc3RvckRhdGE7XG5cbiAgY29uc3Qgc2lnbmVyID0gYXdhaXQgZ2V0V2FsbGV0U2lnbmVyKCk7XG5cbiAgY29uc3QgY29udHJhY3QgPSBJbnZlc3RvclJlZ2lzdHJ5Q29udHJhY3Qoc2lnbmVyKTtcblxuICBjb25zdCB0eCA9IGF3YWl0IGNvbnRyYWN0Wyd2ZXJpZnlJbnZlc3RvciddKGludmVzdG9yQWRkcmVzcyk7XG5cbiAgLy8gV2FpdCBmb3IgdHJhbnNhY3Rpb24gdG8gYmUgbWluZWRcbiAgY29uc3QgcmVjZWlwdCA9IGF3YWl0IHR4LndhaXQoKTtcblxuICByZXR1cm4geyByZWNlaXB0LCB0eEhhc2g6IHR4Lmhhc2ggfTtcbn07XG5cbmV4cG9ydCBjb25zdCByZW1vdmVJbnZlc3RvciA9IGFzeW5jIChcbiAgcmVtb3ZlSW52ZXN0b3JEYXRhOiBWZXJpZnlJbnZlc3RvckRhdGFcbik6IFByb21pc2U8eyByZWNlaXB0OiBhbnk7IHR4SGFzaDogc3RyaW5nIH0+ID0+IHtcblxuICBjb25zdCB7IGludmVzdG9yQWRkcmVzcyB9ID0gcmVtb3ZlSW52ZXN0b3JEYXRhO1xuXG4gIGNvbnN0IHNpZ25lciA9IGF3YWl0IGdldFdhbGxldFNpZ25lcigpO1xuXG4gIGNvbnN0IGNvbnRyYWN0ID0gSW52ZXN0b3JSZWdpc3RyeUNvbnRyYWN0KHNpZ25lcik7XG5cbiAgY29uc3QgdHggPSBhd2FpdCBjb250cmFjdFsncmVtb3ZlSW52ZXN0b3InXShpbnZlc3RvckFkZHJlc3MsIHtcbiAgICBnYXNMaW1pdDogMTcyMTk3NSxcbiAgfSk7XG5cbiAgY29uc3QgcmVjZWlwdCA9IGF3YWl0IHR4LndhaXQoKTtcblxuICByZXR1cm4geyByZWNlaXB0LCB0eEhhc2g6IHR4Lmhhc2ggfTtcbn07XG4iXSwibmFtZXMiOlsiSW52ZXN0b3JSZWdpc3RyeUNvbnRyYWN0IiwiZ2V0UHJvdmlkZXIiLCJnZXRXYWxsZXRTaWduZXIiLCJnZXRBdXRob3JpemVkVmVyaWZpZXJzIiwiY29udHJhY3QiLCJnZXRBbGxJbnZlc3RvcnMiLCJnZXRBbGxJbnZlc3RvcnNEZXRhaWxzIiwicmVnaXN0ZXJJbnZlc3RvciIsInJlZ2lzdGVySW52ZXN0b3JEYXRhIiwibmFtZSIsInNpZ25lciIsInR4IiwicmVjZWlwdCIsIndhaXQiLCJ0eEhhc2giLCJoYXNoIiwiYXV0aG9yaXplVmVyaWZpZXIiLCJhdXRob3JpemVWZXJpZmllckRhdGEiLCJ2ZXJpZmllckFkZHJlc3MiLCJnYXNMaW1pdCIsInZlcmlmeUludmVzdG9yIiwidmVyaWZ5SW52ZXN0b3JEYXRhIiwiaW52ZXN0b3JBZGRyZXNzIiwicmVtb3ZlSW52ZXN0b3IiLCJyZW1vdmVJbnZlc3RvckRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/../../packages/web3/src/lib/InvestorRegistery/utils.ts\n"));

/***/ })

});