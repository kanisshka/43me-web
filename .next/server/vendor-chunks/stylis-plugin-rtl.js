"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/stylis-plugin-rtl";
exports.ids = ["vendor-chunks/stylis-plugin-rtl"];
exports.modules = {

/***/ "(ssr)/./node_modules/stylis-plugin-rtl/dist/stylis-rtl.js":
/*!***********************************************************!*\
  !*** ./node_modules/stylis-plugin-rtl/dist/stylis-rtl.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var cssjanus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cssjanus */ \"(ssr)/./node_modules/cssjanus/src/cssjanus.js\");\n/* harmony import */ var cssjanus__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cssjanus__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stylis */ \"(ssr)/./node_modules/stylis/src/Enum.js\");\n/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! stylis */ \"(ssr)/./node_modules/stylis/src/Serializer.js\");\n/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! stylis */ \"(ssr)/./node_modules/stylis/src/Utility.js\");\n/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! stylis */ \"(ssr)/./node_modules/stylis/src/Parser.js\");\n\n\nfunction stringifyPreserveComments(element, index, children) {\n    switch(element.type){\n        case stylis__WEBPACK_IMPORTED_MODULE_1__.IMPORT:\n        case stylis__WEBPACK_IMPORTED_MODULE_1__.DECLARATION:\n        case stylis__WEBPACK_IMPORTED_MODULE_1__.COMMENT:\n            return element.return = element.return || element.value;\n        case stylis__WEBPACK_IMPORTED_MODULE_1__.RULESET:\n            {\n                element.value = Array.isArray(element.props) ? element.props.join(\",\") : element.props;\n                if (Array.isArray(element.children)) {\n                    element.children.forEach(function(x) {\n                        if (x.type === stylis__WEBPACK_IMPORTED_MODULE_1__.COMMENT) x.children = x.value;\n                    });\n                }\n            }\n    }\n    var serializedChildren = (0,stylis__WEBPACK_IMPORTED_MODULE_2__.serialize)(Array.prototype.concat(element.children), stringifyPreserveComments);\n    return (0,stylis__WEBPACK_IMPORTED_MODULE_3__.strlen)(serializedChildren) ? element.return = element.value + \"{\" + serializedChildren + \"}\" : \"\";\n}\nfunction stylisRTLPlugin(element, index, children, callback) {\n    if (element.type === stylis__WEBPACK_IMPORTED_MODULE_1__.KEYFRAMES || element.type === stylis__WEBPACK_IMPORTED_MODULE_1__.SUPPORTS || element.type === stylis__WEBPACK_IMPORTED_MODULE_1__.RULESET && (!element.parent || element.parent.type === stylis__WEBPACK_IMPORTED_MODULE_1__.MEDIA || element.parent.type === stylis__WEBPACK_IMPORTED_MODULE_1__.RULESET)) {\n        var stringified = cssjanus__WEBPACK_IMPORTED_MODULE_0___default().transform(stringifyPreserveComments(element, index, children));\n        element.children = stringified ? (0,stylis__WEBPACK_IMPORTED_MODULE_4__.compile)(stringified)[0].children : [];\n        element.return = \"\";\n    }\n}\n// stable identifier that will not be dropped by minification unless the whole module\n// is unused\nObject.defineProperty(stylisRTLPlugin, \"name\", {\n    value: \"stylisRTLPlugin\"\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stylisRTLPlugin); //# sourceMappingURL=stylis-rtl.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc3R5bGlzLXBsdWdpbi1ydGwvZGlzdC9zdHlsaXMtcnRsLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBZ0M7QUFDd0Y7QUFDeEgsU0FBU1csMEJBQTBCQyxPQUFPLEVBQUVDLEtBQUssRUFBRUMsUUFBUTtJQUN2RCxPQUFRRixRQUFRRyxJQUFJO1FBQ2hCLEtBQUtYLDBDQUFNQTtRQUNYLEtBQUtELCtDQUFXQTtRQUNoQixLQUFLRiwyQ0FBT0E7WUFDUixPQUFRVyxRQUFRSSxNQUFNLEdBQUdKLFFBQVFJLE1BQU0sSUFBSUosUUFBUUssS0FBSztRQUM1RCxLQUFLWiwyQ0FBT0E7WUFBRTtnQkFDVk8sUUFBUUssS0FBSyxHQUFHQyxNQUFNQyxPQUFPLENBQUNQLFFBQVFRLEtBQUssSUFBSVIsUUFBUVEsS0FBSyxDQUFDQyxJQUFJLENBQUMsT0FBT1QsUUFBUVEsS0FBSztnQkFDdEYsSUFBSUYsTUFBTUMsT0FBTyxDQUFDUCxRQUFRRSxRQUFRLEdBQUc7b0JBQ2pDRixRQUFRRSxRQUFRLENBQUNRLE9BQU8sQ0FBQyxTQUFVQyxDQUFDO3dCQUNoQyxJQUFJQSxFQUFFUixJQUFJLEtBQUtkLDJDQUFPQSxFQUNsQnNCLEVBQUVULFFBQVEsR0FBR1MsRUFBRU4sS0FBSztvQkFDNUI7Z0JBQ0o7WUFDSjtJQUNKO0lBQ0EsSUFBSU8scUJBQXFCbEIsaURBQVNBLENBQUNZLE1BQU1PLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDZCxRQUFRRSxRQUFRLEdBQUdIO0lBQzdFLE9BQU9KLDhDQUFNQSxDQUFDaUIsc0JBQXVCWixRQUFRSSxNQUFNLEdBQUdKLFFBQVFLLEtBQUssR0FBRyxNQUFNTyxxQkFBcUIsTUFBTztBQUM1RztBQUNBLFNBQVNHLGdCQUFnQmYsT0FBTyxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRWMsUUFBUTtJQUN2RCxJQUFJaEIsUUFBUUcsSUFBSSxLQUFLUCw2Q0FBU0EsSUFDMUJJLFFBQVFHLElBQUksS0FBS0wsNENBQVFBLElBQ3hCRSxRQUFRRyxJQUFJLEtBQUtWLDJDQUFPQSxJQUFLLEVBQUNPLFFBQVFpQixNQUFNLElBQUlqQixRQUFRaUIsTUFBTSxDQUFDZCxJQUFJLEtBQUtOLHlDQUFLQSxJQUFJRyxRQUFRaUIsTUFBTSxDQUFDZCxJQUFJLEtBQUtWLDJDQUFNLEdBQUs7UUFDckgsSUFBSXlCLGNBQWM5Qix5REFBa0IsQ0FBQ1csMEJBQTBCQyxTQUFTQyxPQUFPQztRQUMvRUYsUUFBUUUsUUFBUSxHQUFHZ0IsY0FBYzVCLCtDQUFPQSxDQUFDNEIsWUFBWSxDQUFDLEVBQUUsQ0FBQ2hCLFFBQVEsR0FBRyxFQUFFO1FBQ3RFRixRQUFRSSxNQUFNLEdBQUc7SUFDckI7QUFDSjtBQUNBLHFGQUFxRjtBQUNyRixZQUFZO0FBQ1pnQixPQUFPQyxjQUFjLENBQUNOLGlCQUFpQixRQUFRO0lBQUVWLE9BQU87QUFBa0I7QUFDMUUsaUVBQWVVLGVBQWVBLEVBQUMsQ0FDL0Isc0NBQXNDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW9kZXJuaXplLW1haW4vLi9ub2RlX21vZHVsZXMvc3R5bGlzLXBsdWdpbi1ydGwvZGlzdC9zdHlsaXMtcnRsLmpzP2I4ZDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzc2phbnVzIGZyb20gJ2Nzc2phbnVzJztcbmltcG9ydCB7IENPTU1FTlQsIGNvbXBpbGUsIERFQ0xBUkFUSU9OLCBJTVBPUlQsIFJVTEVTRVQsIHNlcmlhbGl6ZSwgc3RybGVuLCBLRVlGUkFNRVMsIE1FRElBLCBTVVBQT1JUUywgfSBmcm9tICdzdHlsaXMnO1xuZnVuY3Rpb24gc3RyaW5naWZ5UHJlc2VydmVDb21tZW50cyhlbGVtZW50LCBpbmRleCwgY2hpbGRyZW4pIHtcbiAgICBzd2l0Y2ggKGVsZW1lbnQudHlwZSkge1xuICAgICAgICBjYXNlIElNUE9SVDpcbiAgICAgICAgY2FzZSBERUNMQVJBVElPTjpcbiAgICAgICAgY2FzZSBDT01NRU5UOlxuICAgICAgICAgICAgcmV0dXJuIChlbGVtZW50LnJldHVybiA9IGVsZW1lbnQucmV0dXJuIHx8IGVsZW1lbnQudmFsdWUpO1xuICAgICAgICBjYXNlIFJVTEVTRVQ6IHtcbiAgICAgICAgICAgIGVsZW1lbnQudmFsdWUgPSBBcnJheS5pc0FycmF5KGVsZW1lbnQucHJvcHMpID8gZWxlbWVudC5wcm9wcy5qb2luKCcsJykgOiBlbGVtZW50LnByb3BzO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZWxlbWVudC5jaGlsZHJlbikpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHgudHlwZSA9PT0gQ09NTUVOVClcbiAgICAgICAgICAgICAgICAgICAgICAgIHguY2hpbGRyZW4gPSB4LnZhbHVlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHZhciBzZXJpYWxpemVkQ2hpbGRyZW4gPSBzZXJpYWxpemUoQXJyYXkucHJvdG90eXBlLmNvbmNhdChlbGVtZW50LmNoaWxkcmVuKSwgc3RyaW5naWZ5UHJlc2VydmVDb21tZW50cyk7XG4gICAgcmV0dXJuIHN0cmxlbihzZXJpYWxpemVkQ2hpbGRyZW4pID8gKGVsZW1lbnQucmV0dXJuID0gZWxlbWVudC52YWx1ZSArICd7JyArIHNlcmlhbGl6ZWRDaGlsZHJlbiArICd9JykgOiAnJztcbn1cbmZ1bmN0aW9uIHN0eWxpc1JUTFBsdWdpbihlbGVtZW50LCBpbmRleCwgY2hpbGRyZW4sIGNhbGxiYWNrKSB7XG4gICAgaWYgKGVsZW1lbnQudHlwZSA9PT0gS0VZRlJBTUVTIHx8XG4gICAgICAgIGVsZW1lbnQudHlwZSA9PT0gU1VQUE9SVFMgfHxcbiAgICAgICAgKGVsZW1lbnQudHlwZSA9PT0gUlVMRVNFVCAmJiAoIWVsZW1lbnQucGFyZW50IHx8IGVsZW1lbnQucGFyZW50LnR5cGUgPT09IE1FRElBIHx8IGVsZW1lbnQucGFyZW50LnR5cGUgPT09IFJVTEVTRVQpKSkge1xuICAgICAgICB2YXIgc3RyaW5naWZpZWQgPSBjc3NqYW51cy50cmFuc2Zvcm0oc3RyaW5naWZ5UHJlc2VydmVDb21tZW50cyhlbGVtZW50LCBpbmRleCwgY2hpbGRyZW4pKTtcbiAgICAgICAgZWxlbWVudC5jaGlsZHJlbiA9IHN0cmluZ2lmaWVkID8gY29tcGlsZShzdHJpbmdpZmllZClbMF0uY2hpbGRyZW4gOiBbXTtcbiAgICAgICAgZWxlbWVudC5yZXR1cm4gPSAnJztcbiAgICB9XG59XG4vLyBzdGFibGUgaWRlbnRpZmllciB0aGF0IHdpbGwgbm90IGJlIGRyb3BwZWQgYnkgbWluaWZpY2F0aW9uIHVubGVzcyB0aGUgd2hvbGUgbW9kdWxlXG4vLyBpcyB1bnVzZWRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdHlsaXNSVExQbHVnaW4sICduYW1lJywgeyB2YWx1ZTogJ3N0eWxpc1JUTFBsdWdpbicgfSk7XG5leHBvcnQgZGVmYXVsdCBzdHlsaXNSVExQbHVnaW47XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdHlsaXMtcnRsLmpzLm1hcCJdLCJuYW1lcyI6WyJjc3NqYW51cyIsIkNPTU1FTlQiLCJjb21waWxlIiwiREVDTEFSQVRJT04iLCJJTVBPUlQiLCJSVUxFU0VUIiwic2VyaWFsaXplIiwic3RybGVuIiwiS0VZRlJBTUVTIiwiTUVESUEiLCJTVVBQT1JUUyIsInN0cmluZ2lmeVByZXNlcnZlQ29tbWVudHMiLCJlbGVtZW50IiwiaW5kZXgiLCJjaGlsZHJlbiIsInR5cGUiLCJyZXR1cm4iLCJ2YWx1ZSIsIkFycmF5IiwiaXNBcnJheSIsInByb3BzIiwiam9pbiIsImZvckVhY2giLCJ4Iiwic2VyaWFsaXplZENoaWxkcmVuIiwicHJvdG90eXBlIiwiY29uY2F0Iiwic3R5bGlzUlRMUGx1Z2luIiwiY2FsbGJhY2siLCJwYXJlbnQiLCJzdHJpbmdpZmllZCIsInRyYW5zZm9ybSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/stylis-plugin-rtl/dist/stylis-rtl.js\n");

/***/ })

};
;