"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(DashboardLayout)/page",{

/***/ "(app-pages-browser)/./src/app/(DashboardLayout)/page.jsx":
/*!********************************************!*\
  !*** ./src/app/(DashboardLayout)/page.jsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Dashboard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material/Box */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material/Grid */ \"(app-pages-browser)/./node_modules/@mui/material/Grid/Grid.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_DashboardLayout_components_container_PageContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/(DashboardLayout)/components/container/PageContainer */ \"(app-pages-browser)/./src/app/(DashboardLayout)/components/container/PageContainer.jsx\");\n/* harmony import */ var _app_DashboardLayout_components_dashboards_modern_YearlyBreakup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/(DashboardLayout)/components/dashboards/modern/YearlyBreakup */ \"(app-pages-browser)/./src/app/(DashboardLayout)/components/dashboards/modern/YearlyBreakup.jsx\");\n/* harmony import */ var _app_DashboardLayout_components_dashboards_modern_MonthlyEarnings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/(DashboardLayout)/components/dashboards/modern/MonthlyEarnings */ \"(app-pages-browser)/./src/app/(DashboardLayout)/components/dashboards/modern/MonthlyEarnings.jsx\");\n/* harmony import */ var _app_DashboardLayout_components_dashboards_modern_TopCards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/(DashboardLayout)/components/dashboards/modern/TopCards */ \"(app-pages-browser)/./src/app/(DashboardLayout)/components/dashboards/modern/TopCards.jsx\");\n/* harmony import */ var _app_DashboardLayout_components_dashboards_modern_RevenueUpdates__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/app/(DashboardLayout)/components/dashboards/modern/RevenueUpdates */ \"(app-pages-browser)/./src/app/(DashboardLayout)/components/dashboards/modern/RevenueUpdates.jsx\");\n/* harmony import */ var _app_DashboardLayout_components_dashboards_modern_EmployeeSalary__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/app/(DashboardLayout)/components/dashboards/modern/EmployeeSalary */ \"(app-pages-browser)/./src/app/(DashboardLayout)/components/dashboards/modern/EmployeeSalary.jsx\");\n/* harmony import */ var _app_DashboardLayout_components_dashboards_modern_Customers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/app/(DashboardLayout)/components/dashboards/modern/Customers */ \"(app-pages-browser)/./src/app/(DashboardLayout)/components/dashboards/modern/Customers.jsx\");\n/* harmony import */ var _app_DashboardLayout_components_dashboards_modern_Projects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/app/(DashboardLayout)/components/dashboards/modern/Projects */ \"(app-pages-browser)/./src/app/(DashboardLayout)/components/dashboards/modern/Projects.jsx\");\n/* harmony import */ var _app_DashboardLayout_components_dashboards_modern_Social__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/app/(DashboardLayout)/components/dashboards/modern/Social */ \"(app-pages-browser)/./src/app/(DashboardLayout)/components/dashboards/modern/Social.jsx\");\n/* harmony import */ var _app_DashboardLayout_components_dashboards_modern_SellingProducts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/app/(DashboardLayout)/components/dashboards/modern/SellingProducts */ \"(app-pages-browser)/./src/app/(DashboardLayout)/components/dashboards/modern/SellingProducts.jsx\");\n/* harmony import */ var _app_DashboardLayout_components_dashboards_modern_WeeklyStats__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/app/(DashboardLayout)/components/dashboards/modern/WeeklyStats */ \"(app-pages-browser)/./src/app/(DashboardLayout)/components/dashboards/modern/WeeklyStats.jsx\");\n/* harmony import */ var _app_DashboardLayout_components_dashboards_modern_TopPerformers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/app/(DashboardLayout)/components/dashboards/modern/TopPerformers */ \"(app-pages-browser)/./src/app/(DashboardLayout)/components/dashboards/modern/TopPerformers.jsx\");\n/* harmony import */ var _components_dashboards_modern_TodaysTask__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/dashboards/modern/TodaysTask */ \"(app-pages-browser)/./src/app/(DashboardLayout)/components/dashboards/modern/TodaysTask.jsx\");\n/* harmony import */ var _components_dashboards_modern_TasksPie__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/dashboards/modern/TasksPie */ \"(app-pages-browser)/./src/app/(DashboardLayout)/components/dashboards/modern/TasksPie.jsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _utils_apiCalls__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/utils/apiCalls */ \"(app-pages-browser)/./src/utils/apiCalls.js\");\n/* harmony import */ var _layout_vertical_sidebar_AuthRoute__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./layout/vertical/sidebar/AuthRoute */ \"(app-pages-browser)/./src/app/(DashboardLayout)/layout/vertical/sidebar/AuthRoute.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! moment */ \"(app-pages-browser)/./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_19__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n// components\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Dashboard() {\n    _s();\n    const user = (0,react_redux__WEBPACK_IMPORTED_MODULE_16__.useSelector)((state)=>state.user);\n    // const token = useSelector((state) => state.user.currentUser.token);\n    function getCurrentDate() {\n        return moment__WEBPACK_IMPORTED_MODULE_19___default()().format(\"YYYY-MM-DD\");\n    }\n    console.log(user, \"user\");\n    const [isLoading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [list, setList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setLoading(false);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layout_vertical_sidebar_AuthRoute__WEBPACK_IMPORTED_MODULE_18__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_DashboardLayout_components_container_PageContainer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            title: \"Dashboard\",\n            description: \"this is Dashboard\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_20__[\"default\"], {\n                mt: 0.5,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_21__[\"default\"], {\n                    container: true,\n                    spacing: 2,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_21__[\"default\"], {\n                            item: true,\n                            xs: 12,\n                            lg: 12,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_DashboardLayout_components_dashboards_modern_TopCards__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/kanisshka/Desktop/untitled folder/43me-web/src/app/(DashboardLayout)/page.jsx\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/kanisshka/Desktop/untitled folder/43me-web/src/app/(DashboardLayout)/page.jsx\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_21__[\"default\"], {\n                            item: true,\n                            xs: 10,\n                            lg: 7,\n                            className: \"relativePosition\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_dashboards_modern_TodaysTask__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/kanisshka/Desktop/untitled folder/43me-web/src/app/(DashboardLayout)/page.jsx\",\n                                lineNumber: 53,\n                                columnNumber: 12\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/kanisshka/Desktop/untitled folder/43me-web/src/app/(DashboardLayout)/page.jsx\",\n                            lineNumber: 52,\n                            columnNumber: 12\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kanisshka/Desktop/untitled folder/43me-web/src/app/(DashboardLayout)/page.jsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/kanisshka/Desktop/untitled folder/43me-web/src/app/(DashboardLayout)/page.jsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/kanisshka/Desktop/untitled folder/43me-web/src/app/(DashboardLayout)/page.jsx\",\n            lineNumber: 41,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/kanisshka/Desktop/untitled folder/43me-web/src/app/(DashboardLayout)/page.jsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this);\n}\n_s(Dashboard, \"y9e3+1Z/1fumGTIknAGVyS5zYZc=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_16__.useSelector\n    ];\n});\n_c = Dashboard;\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvKERhc2hib2FyZExheW91dCkvcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ29DO0FBQ0U7QUFDTTtBQUUyQztBQUN2RixhQUFhO0FBQ2tGO0FBQ0k7QUFDZDtBQUNZO0FBQ0E7QUFDVjtBQUNGO0FBQ0o7QUFDa0I7QUFDUjtBQUNJO0FBQzVCO0FBQ0o7QUFDckI7QUFDRTtBQUNnQjtBQUNoQztBQUNiLFNBQVNzQjs7SUFDdEIsTUFBTUMsT0FBT0wseURBQVdBLENBQUMsQ0FBQ00sUUFBVUEsTUFBTUQsSUFBSTtJQUM5QyxzRUFBc0U7SUFDdEUsU0FBU0U7UUFDUCxPQUFPSiw4Q0FBTUEsR0FBR0ssTUFBTSxDQUFDO0lBQ3pCO0lBQ0FDLFFBQVFDLEdBQUcsQ0FBQ0wsTUFBSztJQUNqQixNQUFNLENBQUNNLFdBQVdDLFdBQVcsR0FBRzNCLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQzRCLE1BQU1DLFFBQVEsR0FBRzdCLCtDQUFRQSxDQUFDO0lBQ2pDRCxnREFBU0EsQ0FBQztRQUNSNEIsV0FBVztJQUNiLEdBQUcsRUFBRTtJQUdMLHFCQUNFLDhEQUFDViwyRUFBU0E7a0JBQ1YsNEVBQUNoQiwrRkFBYUE7WUFBQzZCLE9BQU07WUFBWUMsYUFBWTtzQkFDM0MsNEVBQUNsQywwREFBR0E7Z0JBQUNtQyxJQUFJOzBCQUNQLDRFQUFDbEMsMkRBQUlBO29CQUFDbUMsU0FBUztvQkFBQ0MsU0FBUzs7c0NBRXZCLDhEQUFDcEMsMkRBQUlBOzRCQUFDcUMsSUFBSTs0QkFBQ0MsSUFBSTs0QkFBSUMsSUFBSTtzQ0FDckIsNEVBQUNqQyxrR0FBUUE7Ozs7Ozs7Ozs7c0NBTVYsOERBQUNOLDJEQUFJQTs0QkFBQ3FDLElBQUk7NEJBQUNDLElBQUk7NEJBQUlDLElBQUk7NEJBQUdDLFdBQVU7c0NBQ3BDLDRFQUFDekIsaUZBQVVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0R0QjtHQTVFd0JNOztRQUNUSixxREFBV0E7OztLQURGSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwLyhEYXNoYm9hcmRMYXlvdXQpL3BhZ2UuanN4P2M5MjkiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IEJveCBmcm9tICdAbXVpL21hdGVyaWFsL0JveCc7XG5pbXBvcnQgR3JpZCBmcm9tICdAbXVpL21hdGVyaWFsL0dyaWQnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFBhZ2VDb250YWluZXIgZnJvbSAnQC9hcHAvKERhc2hib2FyZExheW91dCkvY29tcG9uZW50cy9jb250YWluZXIvUGFnZUNvbnRhaW5lcic7XG4vLyBjb21wb25lbnRzXG5pbXBvcnQgWWVhcmx5QnJlYWt1cCBmcm9tICdAL2FwcC8oRGFzaGJvYXJkTGF5b3V0KS9jb21wb25lbnRzL2Rhc2hib2FyZHMvbW9kZXJuL1llYXJseUJyZWFrdXAnO1xuaW1wb3J0IE1vbnRobHlFYXJuaW5ncyBmcm9tICdAL2FwcC8oRGFzaGJvYXJkTGF5b3V0KS9jb21wb25lbnRzL2Rhc2hib2FyZHMvbW9kZXJuL01vbnRobHlFYXJuaW5ncyc7XG5pbXBvcnQgVG9wQ2FyZHMgZnJvbSAnQC9hcHAvKERhc2hib2FyZExheW91dCkvY29tcG9uZW50cy9kYXNoYm9hcmRzL21vZGVybi9Ub3BDYXJkcyc7XG5pbXBvcnQgUmV2ZW51ZVVwZGF0ZXMgZnJvbSAnQC9hcHAvKERhc2hib2FyZExheW91dCkvY29tcG9uZW50cy9kYXNoYm9hcmRzL21vZGVybi9SZXZlbnVlVXBkYXRlcyc7XG5pbXBvcnQgRW1wbG95ZWVTYWxhcnkgZnJvbSAnQC9hcHAvKERhc2hib2FyZExheW91dCkvY29tcG9uZW50cy9kYXNoYm9hcmRzL21vZGVybi9FbXBsb3llZVNhbGFyeSc7XG5pbXBvcnQgQ3VzdG9tZXJzIGZyb20gJ0AvYXBwLyhEYXNoYm9hcmRMYXlvdXQpL2NvbXBvbmVudHMvZGFzaGJvYXJkcy9tb2Rlcm4vQ3VzdG9tZXJzJztcbmltcG9ydCBQcm9qZWN0cyBmcm9tICdAL2FwcC8oRGFzaGJvYXJkTGF5b3V0KS9jb21wb25lbnRzL2Rhc2hib2FyZHMvbW9kZXJuL1Byb2plY3RzJztcbmltcG9ydCBTb2NpYWwgZnJvbSAnQC9hcHAvKERhc2hib2FyZExheW91dCkvY29tcG9uZW50cy9kYXNoYm9hcmRzL21vZGVybi9Tb2NpYWwnO1xuaW1wb3J0IFNlbGxpbmdQcm9kdWN0cyBmcm9tICdAL2FwcC8oRGFzaGJvYXJkTGF5b3V0KS9jb21wb25lbnRzL2Rhc2hib2FyZHMvbW9kZXJuL1NlbGxpbmdQcm9kdWN0cyc7XG5pbXBvcnQgV2Vla2x5U3RhdHMgZnJvbSAnQC9hcHAvKERhc2hib2FyZExheW91dCkvY29tcG9uZW50cy9kYXNoYm9hcmRzL21vZGVybi9XZWVrbHlTdGF0cyc7XG5pbXBvcnQgVG9wUGVyZm9ybWVycyBmcm9tICdAL2FwcC8oRGFzaGJvYXJkTGF5b3V0KS9jb21wb25lbnRzL2Rhc2hib2FyZHMvbW9kZXJuL1RvcFBlcmZvcm1lcnMnO1xuaW1wb3J0IFRvZGF5c1Rhc2sgZnJvbSAnLi9jb21wb25lbnRzL2Rhc2hib2FyZHMvbW9kZXJuL1RvZGF5c1Rhc2snO1xuaW1wb3J0IFRhc2tzUGllIGZyb20gJy4vY29tcG9uZW50cy9kYXNoYm9hcmRzL21vZGVybi9UYXNrc1BpZSc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IFRhc2tMaXN0IH0gZnJvbSAnQC91dGlscy9hcGlDYWxscyc7XG5pbXBvcnQgQXV0aFJvdXRlIGZyb20gJy4vbGF5b3V0L3ZlcnRpY2FsL3NpZGViYXIvQXV0aFJvdXRlJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhc2hib2FyZCgpIHtcbiAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XG4gIC8vIGNvbnN0IHRva2VuID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLmN1cnJlbnRVc2VyLnRva2VuKTtcbiAgZnVuY3Rpb24gZ2V0Q3VycmVudERhdGUoKSB7XG4gICAgcmV0dXJuIG1vbWVudCgpLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xuICB9XG4gIGNvbnNvbGUubG9nKHVzZXIsJ3VzZXInKVxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbbGlzdCwgc2V0TGlzdF0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgfSwgW10pO1xuIFxuXG4gIHJldHVybiAoXG4gICAgPEF1dGhSb3V0ZT5cbiAgICA8UGFnZUNvbnRhaW5lciB0aXRsZT1cIkRhc2hib2FyZFwiIGRlc2NyaXB0aW9uPVwidGhpcyBpcyBEYXNoYm9hcmRcIj5cbiAgICAgIDxCb3ggbXQ9ezAuNX0+XG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cbiAgICAgICAgICB7LyogY29sdW1uICovfVxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBsZz17MTJ9PlxuICAgICAgICAgICAgPFRvcENhcmRzLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgey8qIGNvbHVtbiAqL31cbiAgICAgICAgICB7LyogPEdyaWQgaXRlbSB4cz17MTJ9IGxnPXs4fT5cbiAgICAgICAgICAgIDxSZXZlbnVlVXBkYXRlcyBpc0xvYWRpbmc9e2lzTG9hZGluZ30gLz5cbiAgICAgICAgICA8L0dyaWQ+ICovfVxuICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMH0gbGc9ezd9IGNsYXNzTmFtZT0ncmVsYXRpdmVQb3NpdGlvbic+XG4gICAgICAgICAgIDxUb2RheXNUYXNrIC8+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIHsvKiBjb2x1bW4gKi99XG4gICAgICAgICAgey8qIDxHcmlkIGl0ZW0geHM9ezEyfSBsZz17NX0+XG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30+XG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0gbGc9ezEyfT5cbiAgICAgICAgICAgICAgICA8VGFza3NQaWUgaXNMb2FkaW5nPXtpc0xvYWRpbmd9IC8+XG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgey8qIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0gbGc9ezEyfT5cbiAgICAgICAgICAgICAgICA8TW9udGhseUVhcm5pbmdzIGlzTG9hZGluZz17aXNMb2FkaW5nfSAvPlxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPC9HcmlkPiAqL31cbiAgICAgICAgICB7LyogY29sdW1uICovfVxuICAgICAgICAgIHsvKiA8R3JpZCBpdGVtIHhzPXsxMn0gbGc9ezR9PlxuICAgICAgICAgICAgPEVtcGxveWVlU2FsYXJ5IGlzTG9hZGluZz17aXNMb2FkaW5nfSAvPlxuICAgICAgICAgIDwvR3JpZD4gKi99XG4gICAgICAgICAgey8qIGNvbHVtbiAqL31cbiAgICAgICAgICB7LyogPEdyaWQgaXRlbSB4cz17MTJ9IGxnPXs0fT5cbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfT5cbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cbiAgICAgICAgICAgICAgICA8Q3VzdG9tZXJzIGlzTG9hZGluZz17aXNMb2FkaW5nfSAvPlxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XG4gICAgICAgICAgICAgICAgPFByb2plY3RzIGlzTG9hZGluZz17aXNMb2FkaW5nfSAvPlxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgICAgICAgICA8U29jaWFsIC8+XG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8L0dyaWQ+ICovfVxuICAgICAgICAgIHsvKiBjb2x1bW4gKi99XG4gICAgICAgICAgey8qIDxHcmlkIGl0ZW0geHM9ezEyfSBsZz17NH0+XG4gICAgICAgICAgICA8U2VsbGluZ1Byb2R1Y3RzIC8+XG4gICAgICAgICAgPC9HcmlkPiAqL31cbiAgICAgICAgICB7LyogY29sdW1uICovfVxuICAgICAgICAgIHsvKiA8R3JpZCBpdGVtIHhzPXsxMn0gbGc9ezR9PlxuICAgICAgICAgICAgPFdlZWtseVN0YXRzIGlzTG9hZGluZz17aXNMb2FkaW5nfSAvPlxuICAgICAgICAgIDwvR3JpZD4gKi99XG4gICAgICAgICAgey8qIGNvbHVtbiAqL31cbiAgICAgICAgICB7LyogPEdyaWQgaXRlbSB4cz17MTJ9IGxnPXs4fT5cbiAgICAgICAgICAgIDxUb3BQZXJmb3JtZXJzIC8+XG4gICAgICAgICAgPC9HcmlkPiAqL31cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9Cb3g+XG4gICAgPC9QYWdlQ29udGFpbmVyPlxuICAgIDwvQXV0aFJvdXRlPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkJveCIsIkdyaWQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlBhZ2VDb250YWluZXIiLCJZZWFybHlCcmVha3VwIiwiTW9udGhseUVhcm5pbmdzIiwiVG9wQ2FyZHMiLCJSZXZlbnVlVXBkYXRlcyIsIkVtcGxveWVlU2FsYXJ5IiwiQ3VzdG9tZXJzIiwiUHJvamVjdHMiLCJTb2NpYWwiLCJTZWxsaW5nUHJvZHVjdHMiLCJXZWVrbHlTdGF0cyIsIlRvcFBlcmZvcm1lcnMiLCJUb2RheXNUYXNrIiwiVGFza3NQaWUiLCJ1c2VTZWxlY3RvciIsIlRhc2tMaXN0IiwiQXV0aFJvdXRlIiwibW9tZW50IiwiRGFzaGJvYXJkIiwidXNlciIsInN0YXRlIiwiZ2V0Q3VycmVudERhdGUiLCJmb3JtYXQiLCJjb25zb2xlIiwibG9nIiwiaXNMb2FkaW5nIiwic2V0TG9hZGluZyIsImxpc3QiLCJzZXRMaXN0IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIm10IiwiY29udGFpbmVyIiwic3BhY2luZyIsIml0ZW0iLCJ4cyIsImxnIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/(DashboardLayout)/page.jsx\n"));

/***/ })

});