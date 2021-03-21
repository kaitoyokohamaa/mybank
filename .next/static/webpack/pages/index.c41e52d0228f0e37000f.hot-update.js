webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/index.cjs.js\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var functions_useAuthentication__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! functions/useAuthentication */ \"./src/functions/useAuthentication.tsx\");\nvar _jsxFileName = \"/Users/yoko/Desktop/YOKOHAMABANK/src/pages/index.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nconst Index = () => {\n  _s();\n\n  const {\n    Title\n  } = antd__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"];\n  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"useHistory\"])();\n  const [useAuthenticationContents] = Object(functions_useAuthentication__WEBPACK_IMPORTED_MODULE_4__[\"useAuthentication\"])();\n\n  const submitHanfler = () => {\n    const provider = new firebase_app__WEBPACK_IMPORTED_MODULE_3___default.a.auth.GoogleAuthProvider();\n    firebase_app__WEBPACK_IMPORTED_MODULE_3___default.a.auth().signInWithPopup(provider).then(result => {\n      var _result$user, _result$additionalUse;\n\n      const usersInfo = {\n        userID: [(_result$user = result.user) === null || _result$user === void 0 ? void 0 : _result$user.uid],\n        name: (_result$additionalUse = result.additionalUserInfo) === null || _result$additionalUse === void 0 ? void 0 : _result$additionalUse.username\n      };\n      useAuthenticationContents.ref.add(usersInfo);\n    }).then(() => {\n      history.push(`/home`);\n    }).catch(error => {\n      console.log(error);\n    });\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"grid grid-cols-8 gap-8\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"mt-20 col-span-3\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 9\n    }\n  }, __jsx(Title, {\n    level: 2,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 11\n    }\n  }, \"\\u30ED\\u30B0\\u30A4\\u30F3\\u3059\\u308B\"), __jsx(\"button\", {\n    onClick: submitHanfler,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 11\n    }\n  }, \"google\\u30ED\\u30B0\\u30A4\\u30F3\")), __jsx(\"div\", {\n    className: \"col-span-5\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    src: \"Img/undraw_mobile_login_ikmv.png\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 11\n    }\n  }))));\n};\n\n_s(Index, \"IHF/dvcqUPiS2Z1HH4yQBYPtyik=\", false, function () {\n  return [react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"useHistory\"], functions_useAuthentication__WEBPACK_IMPORTED_MODULE_4__[\"useAuthentication\"]];\n});\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD80MWUwIl0sIm5hbWVzIjpbIkluZGV4IiwiVGl0bGUiLCJUeXBvZ3JhcGh5IiwiaGlzdG9yeSIsInVzZUhpc3RvcnkiLCJ1c2VBdXRoZW50aWNhdGlvbkNvbnRlbnRzIiwidXNlQXV0aGVudGljYXRpb24iLCJzdWJtaXRIYW5mbGVyIiwicHJvdmlkZXIiLCJmaXJlYmFzZSIsImF1dGgiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJzaWduSW5XaXRoUG9wdXAiLCJ0aGVuIiwicmVzdWx0IiwidXNlcnNJbmZvIiwidXNlcklEIiwidXNlciIsInVpZCIsIm5hbWUiLCJhZGRpdGlvbmFsVXNlckluZm8iLCJ1c2VybmFtZSIsInJlZiIsImFkZCIsInB1c2giLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxLQUFlLEdBQUcsTUFBTTtBQUFBOztBQUM1QixRQUFNO0FBQUVDO0FBQUYsTUFBWUMsK0NBQWxCO0FBQ0EsUUFBTUMsT0FBTyxHQUFHQyxtRUFBVSxFQUExQjtBQUNBLFFBQU0sQ0FBQ0MseUJBQUQsSUFBOEJDLHFGQUFpQixFQUFyRDs7QUFDQSxRQUFNQyxhQUFhLEdBQUcsTUFBTTtBQUMxQixVQUFNQyxRQUFRLEdBQUcsSUFBSUMsbURBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxrQkFBbEIsRUFBakI7QUFDQUYsdURBQVEsQ0FDTEMsSUFESCxHQUVHRSxlQUZILENBRW1CSixRQUZuQixFQUdHSyxJQUhILENBR1NDLE1BQUQsSUFBWTtBQUFBOztBQUNoQixZQUFNQyxTQUFTLEdBQUc7QUFDaEJDLGNBQU0sRUFBRSxpQkFBQ0YsTUFBTSxDQUFDRyxJQUFSLGlEQUFDLGFBQWFDLEdBQWQsQ0FEUTtBQUVoQkMsWUFBSSwyQkFBRUwsTUFBTSxDQUFDTSxrQkFBVCwwREFBRSxzQkFBMkJDO0FBRmpCLE9BQWxCO0FBSUFoQiwrQkFBeUIsQ0FBQ2lCLEdBQTFCLENBQThCQyxHQUE5QixDQUFrQ1IsU0FBbEM7QUFDRCxLQVRILEVBVUdGLElBVkgsQ0FVUSxNQUFNO0FBQ1ZWLGFBQU8sQ0FBQ3FCLElBQVIsQ0FBYyxPQUFkO0FBQ0QsS0FaSCxFQWFHQyxLQWJILENBYVVDLEtBQUQsSUFBVztBQUNoQkMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDRCxLQWZIO0FBZ0JELEdBbEJEOztBQW1CQSxTQUNFLE1BQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyx3QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsS0FBRDtBQUFPLFNBQUssRUFBRSxDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNENBREYsRUFFRTtBQUFRLFdBQU8sRUFBRW5CLGFBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0NBRkYsQ0FERixFQUtFO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssT0FBRyxFQUFDLGtDQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUxGLENBREYsQ0FERjtBQWFELENBcENEOztHQUFNUCxLO1VBRVlJLDJELEVBQ29CRSw2RTs7O0tBSGhDTixLO0FBc0NTQSxvRUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IFR5cG9ncmFwaHkgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcbmltcG9ydCB7IHVzZUF1dGhlbnRpY2F0aW9uIH0gZnJvbSBcImZ1bmN0aW9ucy91c2VBdXRoZW50aWNhdGlvblwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcImFudGRcIjtcbmNvbnN0IEluZGV4OiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgeyBUaXRsZSB9ID0gVHlwb2dyYXBoeTtcbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcbiAgY29uc3QgW3VzZUF1dGhlbnRpY2F0aW9uQ29udGVudHNdID0gdXNlQXV0aGVudGljYXRpb24oKTtcbiAgY29uc3Qgc3VibWl0SGFuZmxlciA9ICgpID0+IHtcbiAgICBjb25zdCBwcm92aWRlciA9IG5ldyBmaXJlYmFzZS5hdXRoLkdvb2dsZUF1dGhQcm92aWRlcigpO1xuICAgIGZpcmViYXNlXG4gICAgICAuYXV0aCgpXG4gICAgICAuc2lnbkluV2l0aFBvcHVwKHByb3ZpZGVyKVxuICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICBjb25zdCB1c2Vyc0luZm8gPSB7XG4gICAgICAgICAgdXNlcklEOiBbcmVzdWx0LnVzZXI/LnVpZF0sXG4gICAgICAgICAgbmFtZTogcmVzdWx0LmFkZGl0aW9uYWxVc2VySW5mbz8udXNlcm5hbWUsXG4gICAgICAgIH07XG4gICAgICAgIHVzZUF1dGhlbnRpY2F0aW9uQ29udGVudHMucmVmLmFkZCh1c2Vyc0luZm8pO1xuICAgICAgfSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgaGlzdG9yeS5wdXNoKGAvaG9tZWApO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgfSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy04IGdhcC04XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMjAgY29sLXNwYW4tM1wiPlxuICAgICAgICAgIDxUaXRsZSBsZXZlbD17Mn0+44Ot44Kw44Kk44Oz44GZ44KLPC9UaXRsZT5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3N1Ym1pdEhhbmZsZXJ9Pmdvb2dsZeODreOCsOOCpOODszwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi01XCI+XG4gICAgICAgICAgPGltZyBzcmM9XCJJbWcvdW5kcmF3X21vYmlsZV9sb2dpbl9pa212LnBuZ1wiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

})