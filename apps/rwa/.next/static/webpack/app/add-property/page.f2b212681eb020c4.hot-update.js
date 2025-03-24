"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/add-property/page",{

/***/ "(app-pages-browser)/../../packages/web3/src/lib/RealEstateProperty/utils.ts":
/*!***************************************************************!*\
  !*** ../../packages/web3/src/lib/RealEstateProperty/utils.ts ***!
  \***************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getProperties: function() { return /* binding */ getProperties; },\n/* harmony export */   getProperty: function() { return /* binding */ getProperty; },\n/* harmony export */   getTokenIdFromReceipt: function() { return /* binding */ getTokenIdFromReceipt; },\n/* harmony export */   getTokenIdFromTransactionHash: function() { return /* binding */ getTokenIdFromTransactionHash; },\n/* harmony export */   mintProperty: function() { return /* binding */ mintProperty; }\n/* harmony export */ });\n/* harmony import */ var _contract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contract */ \"(app-pages-browser)/../../packages/web3/src/lib/RealEstateProperty/contract.ts\");\n/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../provider */ \"(app-pages-browser)/../../packages/web3/src/lib/provider.ts\");\n/* harmony import */ var _connectWallet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../connectWallet */ \"(app-pages-browser)/../../packages/web3/src/lib/connectWallet.ts\");\n\n\n\nconst getProperty = async (propertyId)=>{\n    const contract = (0,_contract__WEBPACK_IMPORTED_MODULE_0__.RealEstatePropertyContract)((0,_provider__WEBPACK_IMPORTED_MODULE_1__.getProvider)());\n    return await contract[\"getProperty\"](propertyId);\n};\nconst getProperties = async ()=>{\n    const contract = (0,_contract__WEBPACK_IMPORTED_MODULE_0__.RealEstatePropertyContract)((0,_provider__WEBPACK_IMPORTED_MODULE_1__.getProvider)());\n    const result = await contract[\"getProperties\"]();\n    // console.log('result: ', result);\n    return result.map((property)=>({\n            id: BigInt(property.id._hex).toString(),\n            location: property.location,\n            description: property.description,\n            ipfsHash: property.ipfsHash,\n            totalShares: BigInt(property.totalShares._hex).toString(),\n            numberOfStakeholders: BigInt(property.numberOfStakeholders._hex).toString()\n        }));\n};\n// Function for client-side interaction to create a new property\nconst mintProperty = async (propertyFormData)=>{\n    const { location, description, ipfsHash } = propertyFormData;\n    // Need to use a signer since this is a state-changing operation\n    const signer = await (0,_connectWallet__WEBPACK_IMPORTED_MODULE_2__.getWalletSigner)();\n    const contract = (0,_contract__WEBPACK_IMPORTED_MODULE_0__.RealEstatePropertyContract)(signer);\n    // Create property\n    const tx = await contract[\"mintProperty\"](await signer.getAddress(), location, description, ipfsHash);\n    // Wait for transaction to be mined\n    const receipt = await tx.wait();\n    const tokenId = getTokenIdFromReceipt(receipt);\n    return {\n        receipt,\n        txHash: tx.hash,\n        tokenId\n    };\n};\nconst getTokenIdFromReceipt = (receipt)=>{\n    // Check for logs in the receipt\n    if (receipt && receipt.logs) {\n        for (const log of receipt.logs){\n            try {\n                // Decode the log if it's from your contract\n                // Replace with your contract's ABI and interface\n                const contract = (0,_contract__WEBPACK_IMPORTED_MODULE_0__.RealEstatePropertyContract)((0,_provider__WEBPACK_IMPORTED_MODULE_1__.getProvider)());\n                const parsedLog = contract.interface.parseLog(log);\n                // Look for the event that contains the token ID\n                if (parsedLog && parsedLog.name === \"Transfer\") {\n                    // Assumes an ERC721 Transfer event\n                    const tokenId = parsedLog.args[\"tokenId\"];\n                    console.log(\"Token ID:\", tokenId.toString());\n                    return tokenId.toString();\n                }\n            } catch (error) {\n                continue;\n            }\n        }\n    }\n    return null;\n};\nconst getTokenIdFromTransactionHash = async (txHash)=>{\n    try {\n        // Get the transaction receipt\n        const receipt = await (0,_provider__WEBPACK_IMPORTED_MODULE_1__.getProvider)().getTransactionReceipt(txHash);\n        const tokenId = getTokenIdFromReceipt(receipt);\n        console.log(\"tokenId: \", tokenId);\n        return tokenId;\n    } catch (error) {\n        console.error(\"Error fetching transaction:\", error);\n        return null;\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uLi8uLi9wYWNrYWdlcy93ZWIzL3NyYy9saWIvUmVhbEVzdGF0ZVByb3BlcnR5L3V0aWxzLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXdEO0FBQ2Q7QUFDUztBQUU1QyxNQUFNRyxjQUFjLE9BQU9DO0lBQ2hDLE1BQU1DLFdBQVdMLHFFQUEwQkEsQ0FBQ0Msc0RBQVdBO0lBQ3ZELE9BQU8sTUFBTUksUUFBUSxDQUFDLGNBQWMsQ0FBQ0Q7QUFDdkMsRUFBRTtBQUVLLE1BQU1FLGdCQUFnQjtJQUMzQixNQUFNRCxXQUFXTCxxRUFBMEJBLENBQUNDLHNEQUFXQTtJQUN2RCxNQUFNTSxTQUFTLE1BQU1GLFFBQVEsQ0FBQyxnQkFBZ0I7SUFDOUMsbUNBQW1DO0lBQ25DLE9BQU9FLE9BQU9DLEdBQUcsQ0FBQyxDQUFDQyxXQUFtQjtZQUNwQ0MsSUFBSUMsT0FBT0YsU0FBU0MsRUFBRSxDQUFDRSxJQUFJLEVBQUVDLFFBQVE7WUFDckNDLFVBQVVMLFNBQVNLLFFBQVE7WUFDM0JDLGFBQWFOLFNBQVNNLFdBQVc7WUFDakNDLFVBQVVQLFNBQVNPLFFBQVE7WUFDM0JDLGFBQWFOLE9BQU9GLFNBQVNRLFdBQVcsQ0FBQ0wsSUFBSSxFQUFFQyxRQUFRO1lBQ3ZESyxzQkFBc0JQLE9BQU9GLFNBQVNTLG9CQUFvQixDQUFDTixJQUFJLEVBQUVDLFFBQVE7UUFDM0U7QUFDRixFQUFFO0FBUUYsZ0VBQWdFO0FBQ3pELE1BQU1NLGVBQWUsT0FDMUJDO0lBRUEsTUFBTSxFQUFFTixRQUFRLEVBQUVDLFdBQVcsRUFBRUMsUUFBUSxFQUFFLEdBQUdJO0lBRTVDLGdFQUFnRTtJQUNoRSxNQUFNQyxTQUFTLE1BQU1uQiwrREFBZUE7SUFFcEMsTUFBTUcsV0FBV0wscUVBQTBCQSxDQUFDcUI7SUFFNUMsa0JBQWtCO0lBQ2xCLE1BQU1DLEtBQUssTUFBTWpCLFFBQVEsQ0FBQyxlQUFlLENBQ3ZDLE1BQU1nQixPQUFPRSxVQUFVLElBQ3ZCVCxVQUNBQyxhQUNBQztJQUdGLG1DQUFtQztJQUNuQyxNQUFNUSxVQUFVLE1BQU1GLEdBQUdHLElBQUk7SUFFN0IsTUFBTUMsVUFBVUMsc0JBQXNCSDtJQUV0QyxPQUFPO1FBQUVBO1FBQVNJLFFBQVFOLEdBQUdPLElBQUk7UUFBRUg7SUFBUTtBQUM3QyxFQUFFO0FBRUssTUFBTUMsd0JBQXdCLENBQUNIO0lBQ3BDLGdDQUFnQztJQUNoQyxJQUFJQSxXQUFXQSxRQUFRTSxJQUFJLEVBQUU7UUFDM0IsS0FBSyxNQUFNQyxPQUFPUCxRQUFRTSxJQUFJLENBQUU7WUFDOUIsSUFBSTtnQkFDRiw0Q0FBNEM7Z0JBQzVDLGlEQUFpRDtnQkFDakQsTUFBTXpCLFdBQVdMLHFFQUEwQkEsQ0FBQ0Msc0RBQVdBO2dCQUV2RCxNQUFNK0IsWUFBWTNCLFNBQVM0QixTQUFTLENBQUNDLFFBQVEsQ0FBQ0g7Z0JBRTlDLGdEQUFnRDtnQkFDaEQsSUFBSUMsYUFBYUEsVUFBVUcsSUFBSSxLQUFLLFlBQVk7b0JBQzlDLG1DQUFtQztvQkFDbkMsTUFBTVQsVUFBVU0sVUFBVUksSUFBSSxDQUFDLFVBQVU7b0JBQ3pDQyxRQUFRTixHQUFHLENBQUMsYUFBYUwsUUFBUWIsUUFBUTtvQkFDekMsT0FBT2EsUUFBUWIsUUFBUTtnQkFDekI7WUFDRixFQUFFLE9BQU95QixPQUFPO2dCQUVkO1lBQ0Y7UUFDRjtJQUNGO0lBQ0EsT0FBTztBQUNULEVBQUU7QUFFSyxNQUFNQyxnQ0FBZ0MsT0FBT1g7SUFDbEQsSUFBSTtRQUNGLDhCQUE4QjtRQUM5QixNQUFNSixVQUFVLE1BQU12QixzREFBV0EsR0FBR3VDLHFCQUFxQixDQUFDWjtRQUMxRCxNQUFNRixVQUFVQyxzQkFBc0JIO1FBQ3RDYSxRQUFRTixHQUFHLENBQUMsYUFBYUw7UUFDekIsT0FBT0E7SUFDVCxFQUFFLE9BQU9ZLE9BQU87UUFDZEQsUUFBUUMsS0FBSyxDQUFDLCtCQUErQkE7UUFDN0MsT0FBTztJQUNUO0FBQ0YsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi4vLi4vcGFja2FnZXMvd2ViMy9zcmMvbGliL1JlYWxFc3RhdGVQcm9wZXJ0eS91dGlscy50cz9kMTY5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlYWxFc3RhdGVQcm9wZXJ0eUNvbnRyYWN0IH0gZnJvbSAnLi9jb250cmFjdCc7XG5pbXBvcnQgeyBnZXRQcm92aWRlciB9IGZyb20gJy4uL3Byb3ZpZGVyJztcbmltcG9ydCB7IGdldFdhbGxldFNpZ25lciB9IGZyb20gJy4uL2Nvbm5lY3RXYWxsZXQnO1xuXG5leHBvcnQgY29uc3QgZ2V0UHJvcGVydHkgPSBhc3luYyAocHJvcGVydHlJZDogbnVtYmVyKTogUHJvbWlzZTxhbnk+ID0+IHtcbiAgY29uc3QgY29udHJhY3QgPSBSZWFsRXN0YXRlUHJvcGVydHlDb250cmFjdChnZXRQcm92aWRlcigpKTtcbiAgcmV0dXJuIGF3YWl0IGNvbnRyYWN0WydnZXRQcm9wZXJ0eSddKHByb3BlcnR5SWQpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFByb3BlcnRpZXMgPSBhc3luYyAoKTogUHJvbWlzZTxhbnk+ID0+IHtcbiAgY29uc3QgY29udHJhY3QgPSBSZWFsRXN0YXRlUHJvcGVydHlDb250cmFjdChnZXRQcm92aWRlcigpKTtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY29udHJhY3RbJ2dldFByb3BlcnRpZXMnXSgpO1xuICAvLyBjb25zb2xlLmxvZygncmVzdWx0OiAnLCByZXN1bHQpO1xuICByZXR1cm4gcmVzdWx0Lm1hcCgocHJvcGVydHk6IGFueSkgPT4gKHtcbiAgICBpZDogQmlnSW50KHByb3BlcnR5LmlkLl9oZXgpLnRvU3RyaW5nKCksXG4gICAgbG9jYXRpb246IHByb3BlcnR5LmxvY2F0aW9uLFxuICAgIGRlc2NyaXB0aW9uOiBwcm9wZXJ0eS5kZXNjcmlwdGlvbixcbiAgICBpcGZzSGFzaDogcHJvcGVydHkuaXBmc0hhc2gsXG4gICAgdG90YWxTaGFyZXM6IEJpZ0ludChwcm9wZXJ0eS50b3RhbFNoYXJlcy5faGV4KS50b1N0cmluZygpLFxuICAgIG51bWJlck9mU3Rha2Vob2xkZXJzOiBCaWdJbnQocHJvcGVydHkubnVtYmVyT2ZTdGFrZWhvbGRlcnMuX2hleCkudG9TdHJpbmcoKSxcbiAgfSkpO1xufTtcblxuaW50ZXJmYWNlIFByb3BlcnR5Rm9ybURhdGEge1xuICBsb2NhdGlvbjogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBpcGZzSGFzaDogc3RyaW5nO1xufVxuXG4vLyBGdW5jdGlvbiBmb3IgY2xpZW50LXNpZGUgaW50ZXJhY3Rpb24gdG8gY3JlYXRlIGEgbmV3IHByb3BlcnR5XG5leHBvcnQgY29uc3QgbWludFByb3BlcnR5ID0gYXN5bmMgKFxuICBwcm9wZXJ0eUZvcm1EYXRhOiBQcm9wZXJ0eUZvcm1EYXRhXG4pOiBQcm9taXNlPHsgcmVjZWlwdDogYW55OyB0eEhhc2g6IHN0cmluZzsgdG9rZW5JZDogc3RyaW5nIHwgbnVsbCB9PiA9PiB7XG4gIGNvbnN0IHsgbG9jYXRpb24sIGRlc2NyaXB0aW9uLCBpcGZzSGFzaCB9ID0gcHJvcGVydHlGb3JtRGF0YTtcblxuICAvLyBOZWVkIHRvIHVzZSBhIHNpZ25lciBzaW5jZSB0aGlzIGlzIGEgc3RhdGUtY2hhbmdpbmcgb3BlcmF0aW9uXG4gIGNvbnN0IHNpZ25lciA9IGF3YWl0IGdldFdhbGxldFNpZ25lcigpO1xuXG4gIGNvbnN0IGNvbnRyYWN0ID0gUmVhbEVzdGF0ZVByb3BlcnR5Q29udHJhY3Qoc2lnbmVyKTtcblxuICAvLyBDcmVhdGUgcHJvcGVydHlcbiAgY29uc3QgdHggPSBhd2FpdCBjb250cmFjdFsnbWludFByb3BlcnR5J10oXG4gICAgYXdhaXQgc2lnbmVyLmdldEFkZHJlc3MoKSxcbiAgICBsb2NhdGlvbixcbiAgICBkZXNjcmlwdGlvbixcbiAgICBpcGZzSGFzaFxuICApO1xuXG4gIC8vIFdhaXQgZm9yIHRyYW5zYWN0aW9uIHRvIGJlIG1pbmVkXG4gIGNvbnN0IHJlY2VpcHQgPSBhd2FpdCB0eC53YWl0KCk7XG5cbiAgY29uc3QgdG9rZW5JZCA9IGdldFRva2VuSWRGcm9tUmVjZWlwdChyZWNlaXB0KTtcblxuICByZXR1cm4geyByZWNlaXB0LCB0eEhhc2g6IHR4Lmhhc2gsIHRva2VuSWQgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRUb2tlbklkRnJvbVJlY2VpcHQgPSAocmVjZWlwdDogYW55KSA9PiB7XG4gIC8vIENoZWNrIGZvciBsb2dzIGluIHRoZSByZWNlaXB0XG4gIGlmIChyZWNlaXB0ICYmIHJlY2VpcHQubG9ncykge1xuICAgIGZvciAoY29uc3QgbG9nIG9mIHJlY2VpcHQubG9ncykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gRGVjb2RlIHRoZSBsb2cgaWYgaXQncyBmcm9tIHlvdXIgY29udHJhY3RcbiAgICAgICAgLy8gUmVwbGFjZSB3aXRoIHlvdXIgY29udHJhY3QncyBBQkkgYW5kIGludGVyZmFjZVxuICAgICAgICBjb25zdCBjb250cmFjdCA9IFJlYWxFc3RhdGVQcm9wZXJ0eUNvbnRyYWN0KGdldFByb3ZpZGVyKCkpO1xuXG4gICAgICAgIGNvbnN0IHBhcnNlZExvZyA9IGNvbnRyYWN0LmludGVyZmFjZS5wYXJzZUxvZyhsb2cpO1xuXG4gICAgICAgIC8vIExvb2sgZm9yIHRoZSBldmVudCB0aGF0IGNvbnRhaW5zIHRoZSB0b2tlbiBJRFxuICAgICAgICBpZiAocGFyc2VkTG9nICYmIHBhcnNlZExvZy5uYW1lID09PSAnVHJhbnNmZXInKSB7XG4gICAgICAgICAgLy8gQXNzdW1lcyBhbiBFUkM3MjEgVHJhbnNmZXIgZXZlbnRcbiAgICAgICAgICBjb25zdCB0b2tlbklkID0gcGFyc2VkTG9nLmFyZ3NbJ3Rva2VuSWQnXTtcbiAgICAgICAgICBjb25zb2xlLmxvZygnVG9rZW4gSUQ6JywgdG9rZW5JZC50b1N0cmluZygpKTtcbiAgICAgICAgICByZXR1cm4gdG9rZW5JZC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAvLyBTa2lwIGxvZ3MgdGhhdCBjYW4ndCBiZSBwYXJzZWQgYnkgeW91ciBjb250cmFjdCBBQklcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBudWxsO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFRva2VuSWRGcm9tVHJhbnNhY3Rpb25IYXNoID0gYXN5bmMgKHR4SGFzaDogc3RyaW5nKSA9PiB7XG4gIHRyeSB7XG4gICAgLy8gR2V0IHRoZSB0cmFuc2FjdGlvbiByZWNlaXB0XG4gICAgY29uc3QgcmVjZWlwdCA9IGF3YWl0IGdldFByb3ZpZGVyKCkuZ2V0VHJhbnNhY3Rpb25SZWNlaXB0KHR4SGFzaCk7XG4gICAgY29uc3QgdG9rZW5JZCA9IGdldFRva2VuSWRGcm9tUmVjZWlwdChyZWNlaXB0KTtcbiAgICBjb25zb2xlLmxvZygndG9rZW5JZDogJywgdG9rZW5JZCk7XG4gICAgcmV0dXJuIHRva2VuSWQ7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgdHJhbnNhY3Rpb246JywgZXJyb3IpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG59O1xuIl0sIm5hbWVzIjpbIlJlYWxFc3RhdGVQcm9wZXJ0eUNvbnRyYWN0IiwiZ2V0UHJvdmlkZXIiLCJnZXRXYWxsZXRTaWduZXIiLCJnZXRQcm9wZXJ0eSIsInByb3BlcnR5SWQiLCJjb250cmFjdCIsImdldFByb3BlcnRpZXMiLCJyZXN1bHQiLCJtYXAiLCJwcm9wZXJ0eSIsImlkIiwiQmlnSW50IiwiX2hleCIsInRvU3RyaW5nIiwibG9jYXRpb24iLCJkZXNjcmlwdGlvbiIsImlwZnNIYXNoIiwidG90YWxTaGFyZXMiLCJudW1iZXJPZlN0YWtlaG9sZGVycyIsIm1pbnRQcm9wZXJ0eSIsInByb3BlcnR5Rm9ybURhdGEiLCJzaWduZXIiLCJ0eCIsImdldEFkZHJlc3MiLCJyZWNlaXB0Iiwid2FpdCIsInRva2VuSWQiLCJnZXRUb2tlbklkRnJvbVJlY2VpcHQiLCJ0eEhhc2giLCJoYXNoIiwibG9ncyIsImxvZyIsInBhcnNlZExvZyIsImludGVyZmFjZSIsInBhcnNlTG9nIiwibmFtZSIsImFyZ3MiLCJjb25zb2xlIiwiZXJyb3IiLCJnZXRUb2tlbklkRnJvbVRyYW5zYWN0aW9uSGFzaCIsImdldFRyYW5zYWN0aW9uUmVjZWlwdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/../../packages/web3/src/lib/RealEstateProperty/utils.ts\n"));

/***/ })

});