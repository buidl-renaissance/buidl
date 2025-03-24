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

/***/ "(app-pages-browser)/../../packages/web3/src/lib/RealEstateProperty/utils.ts":
/*!***************************************************************!*\
  !*** ../../packages/web3/src/lib/RealEstateProperty/utils.ts ***!
  \***************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getProperties: function() { return /* binding */ getProperties; },\n/* harmony export */   getProperty: function() { return /* binding */ getProperty; },\n/* harmony export */   getTokenIdFromReceipt: function() { return /* binding */ getTokenIdFromReceipt; },\n/* harmony export */   getTokenIdFromTransactionHash: function() { return /* binding */ getTokenIdFromTransactionHash; },\n/* harmony export */   mintProperty: function() { return /* binding */ mintProperty; }\n/* harmony export */ });\n/* harmony import */ var _contract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contract */ \"(app-pages-browser)/../../packages/web3/src/lib/RealEstateProperty/contract.ts\");\n/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../provider */ \"(app-pages-browser)/../../packages/web3/src/lib/provider.ts\");\n/* harmony import */ var _connectWallet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../connectWallet */ \"(app-pages-browser)/../../packages/web3/src/lib/connectWallet.ts\");\n\n\n\nconst getProperty = async (propertyId)=>{\n    const contract = (0,_contract__WEBPACK_IMPORTED_MODULE_0__.RealEstatePropertyContract)((0,_provider__WEBPACK_IMPORTED_MODULE_1__.getProvider)());\n    return await contract[\"getProperty\"](propertyId);\n};\nconst getProperties = async ()=>{\n    const contract = (0,_contract__WEBPACK_IMPORTED_MODULE_0__.RealEstatePropertyContract)((0,_provider__WEBPACK_IMPORTED_MODULE_1__.getProvider)());\n    const result = await contract[\"getProperties\"]();\n    console.log(\"result: \", result);\n    return result.map((property)=>({\n            id: BigInt(property.id._hex).toString(),\n            location: property.location,\n            description: property.description,\n            ipfsHash: property.ipfsHash,\n            totalShares: BigInt(property.totalShares._hex).toString(),\n            numberOfStakeholders: BigInt(property.numberOfStakeholders._hex).toString()\n        }));\n};\n// Function for client-side interaction to create a new property\nconst mintProperty = async (propertyFormData)=>{\n    const { location, description, ipfsHash } = propertyFormData;\n    // Need to use a signer since this is a state-changing operation\n    const signer = await (0,_connectWallet__WEBPACK_IMPORTED_MODULE_2__.getWalletSigner)();\n    const contract = (0,_contract__WEBPACK_IMPORTED_MODULE_0__.RealEstatePropertyContract)(signer);\n    // Create property\n    const tx = await contract[\"mintProperty\"](await signer.getAddress(), location, description, ipfsHash);\n    // Wait for transaction to be mined\n    const receipt = await tx.wait();\n    const tokenId = getTokenIdFromReceipt(receipt);\n    return {\n        receipt,\n        txHash: tx.hash,\n        tokenId\n    };\n};\nconst getTokenIdFromReceipt = (receipt)=>{\n    // Check for logs in the receipt\n    if (receipt && receipt.logs) {\n        for (const log of receipt.logs){\n            try {\n                // Decode the log if it's from your contract\n                // Replace with your contract's ABI and interface\n                const contract = (0,_contract__WEBPACK_IMPORTED_MODULE_0__.RealEstatePropertyContract)((0,_provider__WEBPACK_IMPORTED_MODULE_1__.getProvider)());\n                const parsedLog = contract.interface.parseLog(log);\n                // Look for the event that contains the token ID\n                if (parsedLog && parsedLog.name === \"Transfer\") {\n                    // Assumes an ERC721 Transfer event\n                    const tokenId = parsedLog.args[\"tokenId\"];\n                    console.log(\"Token ID:\", tokenId.toString());\n                    return tokenId.toString();\n                }\n            } catch (error) {\n                continue;\n            }\n        }\n    }\n    return null;\n};\nconst getTokenIdFromTransactionHash = async (txHash)=>{\n    try {\n        // Get the transaction receipt\n        const receipt = await (0,_provider__WEBPACK_IMPORTED_MODULE_1__.getProvider)().getTransactionReceipt(txHash);\n        const tokenId = getTokenIdFromReceipt(receipt);\n        console.log(\"tokenId: \", tokenId);\n        return tokenId;\n    } catch (error) {\n        console.error(\"Error fetching transaction:\", error);\n        return null;\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uLi8uLi9wYWNrYWdlcy93ZWIzL3NyYy9saWIvUmVhbEVzdGF0ZVByb3BlcnR5L3V0aWxzLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXdEO0FBQ2Q7QUFDUztBQUU1QyxNQUFNRyxjQUFjLE9BQU9DO0lBQ2hDLE1BQU1DLFdBQVdMLHFFQUEwQkEsQ0FBQ0Msc0RBQVdBO0lBQ3ZELE9BQU8sTUFBTUksUUFBUSxDQUFDLGNBQWMsQ0FBQ0Q7QUFDdkMsRUFBRTtBQUVLLE1BQU1FLGdCQUFnQjtJQUMzQixNQUFNRCxXQUFXTCxxRUFBMEJBLENBQUNDLHNEQUFXQTtJQUN2RCxNQUFNTSxTQUFTLE1BQU1GLFFBQVEsQ0FBQyxnQkFBZ0I7SUFDOUNHLFFBQVFDLEdBQUcsQ0FBQyxZQUFZRjtJQUN4QixPQUFPQSxPQUFPRyxHQUFHLENBQUMsQ0FBQ0MsV0FBbUI7WUFDcENDLElBQUlDLE9BQU9GLFNBQVNDLEVBQUUsQ0FBQ0UsSUFBSSxFQUFFQyxRQUFRO1lBQ3JDQyxVQUFVTCxTQUFTSyxRQUFRO1lBQzNCQyxhQUFhTixTQUFTTSxXQUFXO1lBQ2pDQyxVQUFVUCxTQUFTTyxRQUFRO1lBQzNCQyxhQUFhTixPQUFPRixTQUFTUSxXQUFXLENBQUNMLElBQUksRUFBRUMsUUFBUTtZQUN2REssc0JBQXNCUCxPQUFPRixTQUFTUyxvQkFBb0IsQ0FBQ04sSUFBSSxFQUFFQyxRQUFRO1FBQzNFO0FBQ0YsRUFBRTtBQVFGLGdFQUFnRTtBQUN6RCxNQUFNTSxlQUFlLE9BQzFCQztJQUVBLE1BQU0sRUFBRU4sUUFBUSxFQUFFQyxXQUFXLEVBQUVDLFFBQVEsRUFBRSxHQUFHSTtJQUU1QyxnRUFBZ0U7SUFDaEUsTUFBTUMsU0FBUyxNQUFNckIsK0RBQWVBO0lBRXBDLE1BQU1HLFdBQVdMLHFFQUEwQkEsQ0FBQ3VCO0lBRTVDLGtCQUFrQjtJQUNsQixNQUFNQyxLQUFLLE1BQU1uQixRQUFRLENBQUMsZUFBZSxDQUN2QyxNQUFNa0IsT0FBT0UsVUFBVSxJQUN2QlQsVUFDQUMsYUFDQUM7SUFHRixtQ0FBbUM7SUFDbkMsTUFBTVEsVUFBVSxNQUFNRixHQUFHRyxJQUFJO0lBRTdCLE1BQU1DLFVBQVVDLHNCQUFzQkg7SUFFdEMsT0FBTztRQUFFQTtRQUFTSSxRQUFRTixHQUFHTyxJQUFJO1FBQUVIO0lBQVE7QUFDN0MsRUFBRTtBQUVLLE1BQU1DLHdCQUF3QixDQUFDSDtJQUNwQyxnQ0FBZ0M7SUFDaEMsSUFBSUEsV0FBV0EsUUFBUU0sSUFBSSxFQUFFO1FBQzNCLEtBQUssTUFBTXZCLE9BQU9pQixRQUFRTSxJQUFJLENBQUU7WUFDOUIsSUFBSTtnQkFDRiw0Q0FBNEM7Z0JBQzVDLGlEQUFpRDtnQkFDakQsTUFBTTNCLFdBQVdMLHFFQUEwQkEsQ0FBQ0Msc0RBQVdBO2dCQUV2RCxNQUFNZ0MsWUFBWTVCLFNBQVM2QixTQUFTLENBQUNDLFFBQVEsQ0FBQzFCO2dCQUU5QyxnREFBZ0Q7Z0JBQ2hELElBQUl3QixhQUFhQSxVQUFVRyxJQUFJLEtBQUssWUFBWTtvQkFDOUMsbUNBQW1DO29CQUNuQyxNQUFNUixVQUFVSyxVQUFVSSxJQUFJLENBQUMsVUFBVTtvQkFDekM3QixRQUFRQyxHQUFHLENBQUMsYUFBYW1CLFFBQVFiLFFBQVE7b0JBQ3pDLE9BQU9hLFFBQVFiLFFBQVE7Z0JBQ3pCO1lBQ0YsRUFBRSxPQUFPdUIsT0FBTztnQkFFZDtZQUNGO1FBQ0Y7SUFDRjtJQUNBLE9BQU87QUFDVCxFQUFFO0FBRUssTUFBTUMsZ0NBQWdDLE9BQU9UO0lBQ2xELElBQUk7UUFDRiw4QkFBOEI7UUFDOUIsTUFBTUosVUFBVSxNQUFNekIsc0RBQVdBLEdBQUd1QyxxQkFBcUIsQ0FBQ1Y7UUFDMUQsTUFBTUYsVUFBVUMsc0JBQXNCSDtRQUN0Q2xCLFFBQVFDLEdBQUcsQ0FBQyxhQUFhbUI7UUFDekIsT0FBT0E7SUFDVCxFQUFFLE9BQU9VLE9BQU87UUFDZDlCLFFBQVE4QixLQUFLLENBQUMsK0JBQStCQTtRQUM3QyxPQUFPO0lBQ1Q7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uLi8uLi9wYWNrYWdlcy93ZWIzL3NyYy9saWIvUmVhbEVzdGF0ZVByb3BlcnR5L3V0aWxzLnRzP2QxNjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVhbEVzdGF0ZVByb3BlcnR5Q29udHJhY3QgfSBmcm9tICcuL2NvbnRyYWN0JztcbmltcG9ydCB7IGdldFByb3ZpZGVyIH0gZnJvbSAnLi4vcHJvdmlkZXInO1xuaW1wb3J0IHsgZ2V0V2FsbGV0U2lnbmVyIH0gZnJvbSAnLi4vY29ubmVjdFdhbGxldCc7XG5cbmV4cG9ydCBjb25zdCBnZXRQcm9wZXJ0eSA9IGFzeW5jIChwcm9wZXJ0eUlkOiBudW1iZXIpOiBQcm9taXNlPGFueT4gPT4ge1xuICBjb25zdCBjb250cmFjdCA9IFJlYWxFc3RhdGVQcm9wZXJ0eUNvbnRyYWN0KGdldFByb3ZpZGVyKCkpO1xuICByZXR1cm4gYXdhaXQgY29udHJhY3RbJ2dldFByb3BlcnR5J10ocHJvcGVydHlJZCk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0UHJvcGVydGllcyA9IGFzeW5jICgpOiBQcm9taXNlPGFueT4gPT4ge1xuICBjb25zdCBjb250cmFjdCA9IFJlYWxFc3RhdGVQcm9wZXJ0eUNvbnRyYWN0KGdldFByb3ZpZGVyKCkpO1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBjb250cmFjdFsnZ2V0UHJvcGVydGllcyddKCk7XG4gIGNvbnNvbGUubG9nKCdyZXN1bHQ6ICcsIHJlc3VsdCk7XG4gIHJldHVybiByZXN1bHQubWFwKChwcm9wZXJ0eTogYW55KSA9PiAoe1xuICAgIGlkOiBCaWdJbnQocHJvcGVydHkuaWQuX2hleCkudG9TdHJpbmcoKSxcbiAgICBsb2NhdGlvbjogcHJvcGVydHkubG9jYXRpb24sXG4gICAgZGVzY3JpcHRpb246IHByb3BlcnR5LmRlc2NyaXB0aW9uLFxuICAgIGlwZnNIYXNoOiBwcm9wZXJ0eS5pcGZzSGFzaCxcbiAgICB0b3RhbFNoYXJlczogQmlnSW50KHByb3BlcnR5LnRvdGFsU2hhcmVzLl9oZXgpLnRvU3RyaW5nKCksXG4gICAgbnVtYmVyT2ZTdGFrZWhvbGRlcnM6IEJpZ0ludChwcm9wZXJ0eS5udW1iZXJPZlN0YWtlaG9sZGVycy5faGV4KS50b1N0cmluZygpLFxuICB9KSk7XG59O1xuXG5pbnRlcmZhY2UgUHJvcGVydHlGb3JtRGF0YSB7XG4gIGxvY2F0aW9uOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGlwZnNIYXNoOiBzdHJpbmc7XG59XG5cbi8vIEZ1bmN0aW9uIGZvciBjbGllbnQtc2lkZSBpbnRlcmFjdGlvbiB0byBjcmVhdGUgYSBuZXcgcHJvcGVydHlcbmV4cG9ydCBjb25zdCBtaW50UHJvcGVydHkgPSBhc3luYyAoXG4gIHByb3BlcnR5Rm9ybURhdGE6IFByb3BlcnR5Rm9ybURhdGFcbik6IFByb21pc2U8eyByZWNlaXB0OiBhbnk7IHR4SGFzaDogc3RyaW5nOyB0b2tlbklkOiBzdHJpbmcgfCBudWxsIH0+ID0+IHtcbiAgY29uc3QgeyBsb2NhdGlvbiwgZGVzY3JpcHRpb24sIGlwZnNIYXNoIH0gPSBwcm9wZXJ0eUZvcm1EYXRhO1xuXG4gIC8vIE5lZWQgdG8gdXNlIGEgc2lnbmVyIHNpbmNlIHRoaXMgaXMgYSBzdGF0ZS1jaGFuZ2luZyBvcGVyYXRpb25cbiAgY29uc3Qgc2lnbmVyID0gYXdhaXQgZ2V0V2FsbGV0U2lnbmVyKCk7XG5cbiAgY29uc3QgY29udHJhY3QgPSBSZWFsRXN0YXRlUHJvcGVydHlDb250cmFjdChzaWduZXIpO1xuXG4gIC8vIENyZWF0ZSBwcm9wZXJ0eVxuICBjb25zdCB0eCA9IGF3YWl0IGNvbnRyYWN0WydtaW50UHJvcGVydHknXShcbiAgICBhd2FpdCBzaWduZXIuZ2V0QWRkcmVzcygpLFxuICAgIGxvY2F0aW9uLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGlwZnNIYXNoXG4gICk7XG5cbiAgLy8gV2FpdCBmb3IgdHJhbnNhY3Rpb24gdG8gYmUgbWluZWRcbiAgY29uc3QgcmVjZWlwdCA9IGF3YWl0IHR4LndhaXQoKTtcblxuICBjb25zdCB0b2tlbklkID0gZ2V0VG9rZW5JZEZyb21SZWNlaXB0KHJlY2VpcHQpO1xuXG4gIHJldHVybiB7IHJlY2VpcHQsIHR4SGFzaDogdHguaGFzaCwgdG9rZW5JZCB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFRva2VuSWRGcm9tUmVjZWlwdCA9IChyZWNlaXB0OiBhbnkpID0+IHtcbiAgLy8gQ2hlY2sgZm9yIGxvZ3MgaW4gdGhlIHJlY2VpcHRcbiAgaWYgKHJlY2VpcHQgJiYgcmVjZWlwdC5sb2dzKSB7XG4gICAgZm9yIChjb25zdCBsb2cgb2YgcmVjZWlwdC5sb2dzKSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBEZWNvZGUgdGhlIGxvZyBpZiBpdCdzIGZyb20geW91ciBjb250cmFjdFxuICAgICAgICAvLyBSZXBsYWNlIHdpdGggeW91ciBjb250cmFjdCdzIEFCSSBhbmQgaW50ZXJmYWNlXG4gICAgICAgIGNvbnN0IGNvbnRyYWN0ID0gUmVhbEVzdGF0ZVByb3BlcnR5Q29udHJhY3QoZ2V0UHJvdmlkZXIoKSk7XG5cbiAgICAgICAgY29uc3QgcGFyc2VkTG9nID0gY29udHJhY3QuaW50ZXJmYWNlLnBhcnNlTG9nKGxvZyk7XG5cbiAgICAgICAgLy8gTG9vayBmb3IgdGhlIGV2ZW50IHRoYXQgY29udGFpbnMgdGhlIHRva2VuIElEXG4gICAgICAgIGlmIChwYXJzZWRMb2cgJiYgcGFyc2VkTG9nLm5hbWUgPT09ICdUcmFuc2ZlcicpIHtcbiAgICAgICAgICAvLyBBc3N1bWVzIGFuIEVSQzcyMSBUcmFuc2ZlciBldmVudFxuICAgICAgICAgIGNvbnN0IHRva2VuSWQgPSBwYXJzZWRMb2cuYXJnc1sndG9rZW5JZCddO1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdUb2tlbiBJRDonLCB0b2tlbklkLnRvU3RyaW5nKCkpO1xuICAgICAgICAgIHJldHVybiB0b2tlbklkLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIC8vIFNraXAgbG9ncyB0aGF0IGNhbid0IGJlIHBhcnNlZCBieSB5b3VyIGNvbnRyYWN0IEFCSVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0VG9rZW5JZEZyb21UcmFuc2FjdGlvbkhhc2ggPSBhc3luYyAodHhIYXNoOiBzdHJpbmcpID0+IHtcbiAgdHJ5IHtcbiAgICAvLyBHZXQgdGhlIHRyYW5zYWN0aW9uIHJlY2VpcHRcbiAgICBjb25zdCByZWNlaXB0ID0gYXdhaXQgZ2V0UHJvdmlkZXIoKS5nZXRUcmFuc2FjdGlvblJlY2VpcHQodHhIYXNoKTtcbiAgICBjb25zdCB0b2tlbklkID0gZ2V0VG9rZW5JZEZyb21SZWNlaXB0KHJlY2VpcHQpO1xuICAgIGNvbnNvbGUubG9nKCd0b2tlbklkOiAnLCB0b2tlbklkKTtcbiAgICByZXR1cm4gdG9rZW5JZDtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyB0cmFuc2FjdGlvbjonLCBlcnJvcik7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn07XG4iXSwibmFtZXMiOlsiUmVhbEVzdGF0ZVByb3BlcnR5Q29udHJhY3QiLCJnZXRQcm92aWRlciIsImdldFdhbGxldFNpZ25lciIsImdldFByb3BlcnR5IiwicHJvcGVydHlJZCIsImNvbnRyYWN0IiwiZ2V0UHJvcGVydGllcyIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJwcm9wZXJ0eSIsImlkIiwiQmlnSW50IiwiX2hleCIsInRvU3RyaW5nIiwibG9jYXRpb24iLCJkZXNjcmlwdGlvbiIsImlwZnNIYXNoIiwidG90YWxTaGFyZXMiLCJudW1iZXJPZlN0YWtlaG9sZGVycyIsIm1pbnRQcm9wZXJ0eSIsInByb3BlcnR5Rm9ybURhdGEiLCJzaWduZXIiLCJ0eCIsImdldEFkZHJlc3MiLCJyZWNlaXB0Iiwid2FpdCIsInRva2VuSWQiLCJnZXRUb2tlbklkRnJvbVJlY2VpcHQiLCJ0eEhhc2giLCJoYXNoIiwibG9ncyIsInBhcnNlZExvZyIsImludGVyZmFjZSIsInBhcnNlTG9nIiwibmFtZSIsImFyZ3MiLCJlcnJvciIsImdldFRva2VuSWRGcm9tVHJhbnNhY3Rpb25IYXNoIiwiZ2V0VHJhbnNhY3Rpb25SZWNlaXB0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/../../packages/web3/src/lib/RealEstateProperty/utils.ts\n"));

/***/ })

});