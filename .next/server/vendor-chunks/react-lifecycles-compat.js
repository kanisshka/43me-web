"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-lifecycles-compat";
exports.ids = ["vendor-chunks/react-lifecycles-compat"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   polyfill: () => (/* binding */ polyfill)\n/* harmony export */ });\n/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */ function componentWillMount() {\n    // Call this.constructor.gDSFP to support sub-classes.\n    var state = this.constructor.getDerivedStateFromProps(this.props, this.state);\n    if (state !== null && state !== undefined) {\n        this.setState(state);\n    }\n}\nfunction componentWillReceiveProps(nextProps) {\n    // Call this.constructor.gDSFP to support sub-classes.\n    // Use the setState() updater to ensure state isn't stale in certain edge cases.\n    function updater(prevState) {\n        var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);\n        return state !== null && state !== undefined ? state : null;\n    }\n    // Binding \"this\" is important for shallow renderer support.\n    this.setState(updater.bind(this));\n}\nfunction componentWillUpdate(nextProps, nextState) {\n    try {\n        var prevProps = this.props;\n        var prevState = this.state;\n        this.props = nextProps;\n        this.state = nextState;\n        this.__reactInternalSnapshotFlag = true;\n        this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(prevProps, prevState);\n    } finally{\n        this.props = prevProps;\n        this.state = prevState;\n    }\n}\n// React may warn about cWM/cWRP/cWU methods being deprecated.\n// Add a flag to suppress these warnings for this special case.\ncomponentWillMount.__suppressDeprecationWarning = true;\ncomponentWillReceiveProps.__suppressDeprecationWarning = true;\ncomponentWillUpdate.__suppressDeprecationWarning = true;\nfunction polyfill(Component) {\n    var prototype = Component.prototype;\n    if (!prototype || !prototype.isReactComponent) {\n        throw new Error(\"Can only polyfill class components\");\n    }\n    if (typeof Component.getDerivedStateFromProps !== \"function\" && typeof prototype.getSnapshotBeforeUpdate !== \"function\") {\n        return Component;\n    }\n    // If new component APIs are defined, \"unsafe\" lifecycles won't be called.\n    // Error if any of these lifecycles are present,\n    // Because they would work differently between older and newer (16.3+) versions of React.\n    var foundWillMountName = null;\n    var foundWillReceivePropsName = null;\n    var foundWillUpdateName = null;\n    if (typeof prototype.componentWillMount === \"function\") {\n        foundWillMountName = \"componentWillMount\";\n    } else if (typeof prototype.UNSAFE_componentWillMount === \"function\") {\n        foundWillMountName = \"UNSAFE_componentWillMount\";\n    }\n    if (typeof prototype.componentWillReceiveProps === \"function\") {\n        foundWillReceivePropsName = \"componentWillReceiveProps\";\n    } else if (typeof prototype.UNSAFE_componentWillReceiveProps === \"function\") {\n        foundWillReceivePropsName = \"UNSAFE_componentWillReceiveProps\";\n    }\n    if (typeof prototype.componentWillUpdate === \"function\") {\n        foundWillUpdateName = \"componentWillUpdate\";\n    } else if (typeof prototype.UNSAFE_componentWillUpdate === \"function\") {\n        foundWillUpdateName = \"UNSAFE_componentWillUpdate\";\n    }\n    if (foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null) {\n        var componentName = Component.displayName || Component.name;\n        var newApiName = typeof Component.getDerivedStateFromProps === \"function\" ? \"getDerivedStateFromProps()\" : \"getSnapshotBeforeUpdate()\";\n        throw Error(\"Unsafe legacy lifecycles will not be called for components using new component APIs.\\n\\n\" + componentName + \" uses \" + newApiName + \" but also contains the following legacy lifecycles:\" + (foundWillMountName !== null ? \"\\n  \" + foundWillMountName : \"\") + (foundWillReceivePropsName !== null ? \"\\n  \" + foundWillReceivePropsName : \"\") + (foundWillUpdateName !== null ? \"\\n  \" + foundWillUpdateName : \"\") + \"\\n\\nThe above lifecycles should be removed. Learn more about this warning here:\\n\" + \"https://fb.me/react-async-component-lifecycle-hooks\");\n    }\n    // React <= 16.2 does not support static getDerivedStateFromProps.\n    // As a workaround, use cWM and cWRP to invoke the new static lifecycle.\n    // Newer versions of React will ignore these lifecycles if gDSFP exists.\n    if (typeof Component.getDerivedStateFromProps === \"function\") {\n        prototype.componentWillMount = componentWillMount;\n        prototype.componentWillReceiveProps = componentWillReceiveProps;\n    }\n    // React <= 16.2 does not support getSnapshotBeforeUpdate.\n    // As a workaround, use cWU to invoke the new lifecycle.\n    // Newer versions of React will ignore that lifecycle if gSBU exists.\n    if (typeof prototype.getSnapshotBeforeUpdate === \"function\") {\n        if (typeof prototype.componentDidUpdate !== \"function\") {\n            throw new Error(\"Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype\");\n        }\n        prototype.componentWillUpdate = componentWillUpdate;\n        var componentDidUpdate = prototype.componentDidUpdate;\n        prototype.componentDidUpdate = function componentDidUpdatePolyfill(prevProps, prevState, maybeSnapshot) {\n            // 16.3+ will not execute our will-update method;\n            // It will pass a snapshot value to did-update though.\n            // Older versions will require our polyfilled will-update value.\n            // We need to handle both cases, but can't just check for the presence of \"maybeSnapshot\",\n            // Because for <= 15.x versions this might be a \"prevContext\" object.\n            // We also can't just check \"__reactInternalSnapshot\",\n            // Because get-snapshot might return a falsy value.\n            // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.\n            var snapshot = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : maybeSnapshot;\n            componentDidUpdate.call(this, prevProps, prevState, snapshot);\n        };\n    }\n    return Component;\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtbGlmZWN5Y2xlcy1jb21wYXQvcmVhY3QtbGlmZWN5Y2xlcy1jb21wYXQuZXMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7OztDQUtDLEdBRUQsU0FBU0E7SUFDUCxzREFBc0Q7SUFDdEQsSUFBSUMsUUFBUSxJQUFJLENBQUNDLFdBQVcsQ0FBQ0Msd0JBQXdCLENBQUMsSUFBSSxDQUFDQyxLQUFLLEVBQUUsSUFBSSxDQUFDSCxLQUFLO0lBQzVFLElBQUlBLFVBQVUsUUFBUUEsVUFBVUksV0FBVztRQUN6QyxJQUFJLENBQUNDLFFBQVEsQ0FBQ0w7SUFDaEI7QUFDRjtBQUVBLFNBQVNNLDBCQUEwQkMsU0FBUztJQUMxQyxzREFBc0Q7SUFDdEQsZ0ZBQWdGO0lBQ2hGLFNBQVNDLFFBQVFDLFNBQVM7UUFDeEIsSUFBSVQsUUFBUSxJQUFJLENBQUNDLFdBQVcsQ0FBQ0Msd0JBQXdCLENBQUNLLFdBQVdFO1FBQ2pFLE9BQU9ULFVBQVUsUUFBUUEsVUFBVUksWUFBWUosUUFBUTtJQUN6RDtJQUNBLDREQUE0RDtJQUM1RCxJQUFJLENBQUNLLFFBQVEsQ0FBQ0csUUFBUUUsSUFBSSxDQUFDLElBQUk7QUFDakM7QUFFQSxTQUFTQyxvQkFBb0JKLFNBQVMsRUFBRUssU0FBUztJQUMvQyxJQUFJO1FBQ0YsSUFBSUMsWUFBWSxJQUFJLENBQUNWLEtBQUs7UUFDMUIsSUFBSU0sWUFBWSxJQUFJLENBQUNULEtBQUs7UUFDMUIsSUFBSSxDQUFDRyxLQUFLLEdBQUdJO1FBQ2IsSUFBSSxDQUFDUCxLQUFLLEdBQUdZO1FBQ2IsSUFBSSxDQUFDRSwyQkFBMkIsR0FBRztRQUNuQyxJQUFJLENBQUNDLHVCQUF1QixHQUFHLElBQUksQ0FBQ0MsdUJBQXVCLENBQ3pESCxXQUNBSjtJQUVKLFNBQVU7UUFDUixJQUFJLENBQUNOLEtBQUssR0FBR1U7UUFDYixJQUFJLENBQUNiLEtBQUssR0FBR1M7SUFDZjtBQUNGO0FBRUEsOERBQThEO0FBQzlE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Li9ub2RlX21vZHVsZXMvcmVhY3QtbGlmZWN5Y2xlcy1jb21wYXQvcmVhY3QtbGlmZWN5Y2xlcy1jb21wYXQuZXMuanM/NTM2OSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgLy8gQ2FsbCB0aGlzLmNvbnN0cnVjdG9yLmdEU0ZQIHRvIHN1cHBvcnQgc3ViLWNsYXNzZXMuXG4gIHZhciBzdGF0ZSA9IHRoaXMuY29uc3RydWN0b3IuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKHRoaXMucHJvcHMsIHRoaXMuc3RhdGUpO1xuICBpZiAoc3RhdGUgIT09IG51bGwgJiYgc3RhdGUgIT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gIC8vIENhbGwgdGhpcy5jb25zdHJ1Y3Rvci5nRFNGUCB0byBzdXBwb3J0IHN1Yi1jbGFzc2VzLlxuICAvLyBVc2UgdGhlIHNldFN0YXRlKCkgdXBkYXRlciB0byBlbnN1cmUgc3RhdGUgaXNuJ3Qgc3RhbGUgaW4gY2VydGFpbiBlZGdlIGNhc2VzLlxuICBmdW5jdGlvbiB1cGRhdGVyKHByZXZTdGF0ZSkge1xuICAgIHZhciBzdGF0ZSA9IHRoaXMuY29uc3RydWN0b3IuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKG5leHRQcm9wcywgcHJldlN0YXRlKTtcbiAgICByZXR1cm4gc3RhdGUgIT09IG51bGwgJiYgc3RhdGUgIT09IHVuZGVmaW5lZCA/IHN0YXRlIDogbnVsbDtcbiAgfVxuICAvLyBCaW5kaW5nIFwidGhpc1wiIGlzIGltcG9ydGFudCBmb3Igc2hhbGxvdyByZW5kZXJlciBzdXBwb3J0LlxuICB0aGlzLnNldFN0YXRlKHVwZGF0ZXIuYmluZCh0aGlzKSk7XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgdHJ5IHtcbiAgICB2YXIgcHJldlByb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgcHJldlN0YXRlID0gdGhpcy5zdGF0ZTtcbiAgICB0aGlzLnByb3BzID0gbmV4dFByb3BzO1xuICAgIHRoaXMuc3RhdGUgPSBuZXh0U3RhdGU7XG4gICAgdGhpcy5fX3JlYWN0SW50ZXJuYWxTbmFwc2hvdEZsYWcgPSB0cnVlO1xuICAgIHRoaXMuX19yZWFjdEludGVybmFsU25hcHNob3QgPSB0aGlzLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlKFxuICAgICAgcHJldlByb3BzLFxuICAgICAgcHJldlN0YXRlXG4gICAgKTtcbiAgfSBmaW5hbGx5IHtcbiAgICB0aGlzLnByb3BzID0gcHJldlByb3BzO1xuICAgIHRoaXMuc3RhdGUgPSBwcmV2U3RhdGU7XG4gIH1cbn1cblxuLy8gUmVhY3QgbWF5IHdhcm4gYWJvdXQgY1dNL2NXUlAvY1dVIG1ldGhvZHMgYmVpbmcgZGVwcmVjYXRlZC5cbi8vIEFkZCBhIGZsYWcgdG8gc3VwcHJlc3MgdGhlc2Ugd2FybmluZ3MgZm9yIHRoaXMgc3BlY2lhbCBjYXNlLlxuY29tcG9uZW50V2lsbE1vdW50Ll9fc3VwcHJlc3NEZXByZWNhdGlvbldhcm5pbmcgPSB0cnVlO1xuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcy5fX3N1cHByZXNzRGVwcmVjYXRpb25XYXJuaW5nID0gdHJ1ZTtcbmNvbXBvbmVudFdpbGxVcGRhdGUuX19zdXBwcmVzc0RlcHJlY2F0aW9uV2FybmluZyA9IHRydWU7XG5cbmZ1bmN0aW9uIHBvbHlmaWxsKENvbXBvbmVudCkge1xuICB2YXIgcHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcblxuICBpZiAoIXByb3RvdHlwZSB8fCAhcHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhbiBvbmx5IHBvbHlmaWxsIGNsYXNzIGNvbXBvbmVudHMnKTtcbiAgfVxuXG4gIGlmIChcbiAgICB0eXBlb2YgQ29tcG9uZW50LmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyAhPT0gJ2Z1bmN0aW9uJyAmJlxuICAgIHR5cGVvZiBwcm90b3R5cGUuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUgIT09ICdmdW5jdGlvbidcbiAgKSB7XG4gICAgcmV0dXJuIENvbXBvbmVudDtcbiAgfVxuXG4gIC8vIElmIG5ldyBjb21wb25lbnQgQVBJcyBhcmUgZGVmaW5lZCwgXCJ1bnNhZmVcIiBsaWZlY3ljbGVzIHdvbid0IGJlIGNhbGxlZC5cbiAgLy8gRXJyb3IgaWYgYW55IG9mIHRoZXNlIGxpZmVjeWNsZXMgYXJlIHByZXNlbnQsXG4gIC8vIEJlY2F1c2UgdGhleSB3b3VsZCB3b3JrIGRpZmZlcmVudGx5IGJldHdlZW4gb2xkZXIgYW5kIG5ld2VyICgxNi4zKykgdmVyc2lvbnMgb2YgUmVhY3QuXG4gIHZhciBmb3VuZFdpbGxNb3VudE5hbWUgPSBudWxsO1xuICB2YXIgZm91bmRXaWxsUmVjZWl2ZVByb3BzTmFtZSA9IG51bGw7XG4gIHZhciBmb3VuZFdpbGxVcGRhdGVOYW1lID0gbnVsbDtcbiAgaWYgKHR5cGVvZiBwcm90b3R5cGUuY29tcG9uZW50V2lsbE1vdW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZm91bmRXaWxsTW91bnROYW1lID0gJ2NvbXBvbmVudFdpbGxNb3VudCc7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHByb3RvdHlwZS5VTlNBRkVfY29tcG9uZW50V2lsbE1vdW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZm91bmRXaWxsTW91bnROYW1lID0gJ1VOU0FGRV9jb21wb25lbnRXaWxsTW91bnQnO1xuICB9XG4gIGlmICh0eXBlb2YgcHJvdG90eXBlLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICBmb3VuZFdpbGxSZWNlaXZlUHJvcHNOYW1lID0gJ2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBwcm90b3R5cGUuVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICBmb3VuZFdpbGxSZWNlaXZlUHJvcHNOYW1lID0gJ1VOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJztcbiAgfVxuICBpZiAodHlwZW9mIHByb3RvdHlwZS5jb21wb25lbnRXaWxsVXBkYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZm91bmRXaWxsVXBkYXRlTmFtZSA9ICdjb21wb25lbnRXaWxsVXBkYXRlJztcbiAgfSBlbHNlIGlmICh0eXBlb2YgcHJvdG90eXBlLlVOU0FGRV9jb21wb25lbnRXaWxsVXBkYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZm91bmRXaWxsVXBkYXRlTmFtZSA9ICdVTlNBRkVfY29tcG9uZW50V2lsbFVwZGF0ZSc7XG4gIH1cbiAgaWYgKFxuICAgIGZvdW5kV2lsbE1vdW50TmFtZSAhPT0gbnVsbCB8fFxuICAgIGZvdW5kV2lsbFJlY2VpdmVQcm9wc05hbWUgIT09IG51bGwgfHxcbiAgICBmb3VuZFdpbGxVcGRhdGVOYW1lICE9PSBudWxsXG4gICkge1xuICAgIHZhciBjb21wb25lbnROYW1lID0gQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lO1xuICAgIHZhciBuZXdBcGlOYW1lID1cbiAgICAgIHR5cGVvZiBDb21wb25lbnQuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gJ2dldERlcml2ZWRTdGF0ZUZyb21Qcm9wcygpJ1xuICAgICAgICA6ICdnZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSgpJztcblxuICAgIHRocm93IEVycm9yKFxuICAgICAgJ1Vuc2FmZSBsZWdhY3kgbGlmZWN5Y2xlcyB3aWxsIG5vdCBiZSBjYWxsZWQgZm9yIGNvbXBvbmVudHMgdXNpbmcgbmV3IGNvbXBvbmVudCBBUElzLlxcblxcbicgK1xuICAgICAgICBjb21wb25lbnROYW1lICtcbiAgICAgICAgJyB1c2VzICcgK1xuICAgICAgICBuZXdBcGlOYW1lICtcbiAgICAgICAgJyBidXQgYWxzbyBjb250YWlucyB0aGUgZm9sbG93aW5nIGxlZ2FjeSBsaWZlY3ljbGVzOicgK1xuICAgICAgICAoZm91bmRXaWxsTW91bnROYW1lICE9PSBudWxsID8gJ1xcbiAgJyArIGZvdW5kV2lsbE1vdW50TmFtZSA6ICcnKSArXG4gICAgICAgIChmb3VuZFdpbGxSZWNlaXZlUHJvcHNOYW1lICE9PSBudWxsXG4gICAgICAgICAgPyAnXFxuICAnICsgZm91bmRXaWxsUmVjZWl2ZVByb3BzTmFtZVxuICAgICAgICAgIDogJycpICtcbiAgICAgICAgKGZvdW5kV2lsbFVwZGF0ZU5hbWUgIT09IG51bGwgPyAnXFxuICAnICsgZm91bmRXaWxsVXBkYXRlTmFtZSA6ICcnKSArXG4gICAgICAgICdcXG5cXG5UaGUgYWJvdmUgbGlmZWN5Y2xlcyBzaG91bGQgYmUgcmVtb3ZlZC4gTGVhcm4gbW9yZSBhYm91dCB0aGlzIHdhcm5pbmcgaGVyZTpcXG4nICtcbiAgICAgICAgJ2h0dHBzOi8vZmIubWUvcmVhY3QtYXN5bmMtY29tcG9uZW50LWxpZmVjeWNsZS1ob29rcydcbiAgICApO1xuICB9XG5cbiAgLy8gUmVhY3QgPD0gMTYuMiBkb2VzIG5vdCBzdXBwb3J0IHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMuXG4gIC8vIEFzIGEgd29ya2Fyb3VuZCwgdXNlIGNXTSBhbmQgY1dSUCB0byBpbnZva2UgdGhlIG5ldyBzdGF0aWMgbGlmZWN5Y2xlLlxuICAvLyBOZXdlciB2ZXJzaW9ucyBvZiBSZWFjdCB3aWxsIGlnbm9yZSB0aGVzZSBsaWZlY3ljbGVzIGlmIGdEU0ZQIGV4aXN0cy5cbiAgaWYgKHR5cGVvZiBDb21wb25lbnQuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcHJvdG90eXBlLmNvbXBvbmVudFdpbGxNb3VudCA9IGNvbXBvbmVudFdpbGxNb3VudDtcbiAgICBwcm90b3R5cGUuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9IGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM7XG4gIH1cblxuICAvLyBSZWFjdCA8PSAxNi4yIGRvZXMgbm90IHN1cHBvcnQgZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUuXG4gIC8vIEFzIGEgd29ya2Fyb3VuZCwgdXNlIGNXVSB0byBpbnZva2UgdGhlIG5ldyBsaWZlY3ljbGUuXG4gIC8vIE5ld2VyIHZlcnNpb25zIG9mIFJlYWN0IHdpbGwgaWdub3JlIHRoYXQgbGlmZWN5Y2xlIGlmIGdTQlUgZXhpc3RzLlxuICBpZiAodHlwZW9mIHByb3RvdHlwZS5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGlmICh0eXBlb2YgcHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnQ2Fubm90IHBvbHlmaWxsIGdldFNuYXBzaG90QmVmb3JlVXBkYXRlKCkgZm9yIGNvbXBvbmVudHMgdGhhdCBkbyBub3QgZGVmaW5lIGNvbXBvbmVudERpZFVwZGF0ZSgpIG9uIHRoZSBwcm90b3R5cGUnXG4gICAgICApO1xuICAgIH1cblxuICAgIHByb3RvdHlwZS5jb21wb25lbnRXaWxsVXBkYXRlID0gY29tcG9uZW50V2lsbFVwZGF0ZTtcblxuICAgIHZhciBjb21wb25lbnREaWRVcGRhdGUgPSBwcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlO1xuXG4gICAgcHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZVBvbHlmaWxsKFxuICAgICAgcHJldlByb3BzLFxuICAgICAgcHJldlN0YXRlLFxuICAgICAgbWF5YmVTbmFwc2hvdFxuICAgICkge1xuICAgICAgLy8gMTYuMysgd2lsbCBub3QgZXhlY3V0ZSBvdXIgd2lsbC11cGRhdGUgbWV0aG9kO1xuICAgICAgLy8gSXQgd2lsbCBwYXNzIGEgc25hcHNob3QgdmFsdWUgdG8gZGlkLXVwZGF0ZSB0aG91Z2guXG4gICAgICAvLyBPbGRlciB2ZXJzaW9ucyB3aWxsIHJlcXVpcmUgb3VyIHBvbHlmaWxsZWQgd2lsbC11cGRhdGUgdmFsdWUuXG4gICAgICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBib3RoIGNhc2VzLCBidXQgY2FuJ3QganVzdCBjaGVjayBmb3IgdGhlIHByZXNlbmNlIG9mIFwibWF5YmVTbmFwc2hvdFwiLFxuICAgICAgLy8gQmVjYXVzZSBmb3IgPD0gMTUueCB2ZXJzaW9ucyB0aGlzIG1pZ2h0IGJlIGEgXCJwcmV2Q29udGV4dFwiIG9iamVjdC5cbiAgICAgIC8vIFdlIGFsc28gY2FuJ3QganVzdCBjaGVjayBcIl9fcmVhY3RJbnRlcm5hbFNuYXBzaG90XCIsXG4gICAgICAvLyBCZWNhdXNlIGdldC1zbmFwc2hvdCBtaWdodCByZXR1cm4gYSBmYWxzeSB2YWx1ZS5cbiAgICAgIC8vIFNvIGNoZWNrIGZvciB0aGUgZXhwbGljaXQgX19yZWFjdEludGVybmFsU25hcHNob3RGbGFnIGZsYWcgdG8gZGV0ZXJtaW5lIGJlaGF2aW9yLlxuICAgICAgdmFyIHNuYXBzaG90ID0gdGhpcy5fX3JlYWN0SW50ZXJuYWxTbmFwc2hvdEZsYWdcbiAgICAgICAgPyB0aGlzLl9fcmVhY3RJbnRlcm5hbFNuYXBzaG90XG4gICAgICAgIDogbWF5YmVTbmFwc2hvdDtcblxuICAgICAgY29tcG9uZW50RGlkVXBkYXRlLmNhbGwodGhpcywgcHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIENvbXBvbmVudDtcbn1cblxuZXhwb3J0IHsgcG9seWZpbGwgfTtcbiJdLCJuYW1lcyI6WyJjb21wb25lbnRXaWxsTW91bnQiLCJzdGF0ZSIsImNvbnN0cnVjdG9yIiwiZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzIiwicHJvcHMiLCJ1bmRlZmluZWQiLCJzZXRTdGF0ZSIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJuZXh0UHJvcHMiLCJ1cGRhdGVyIiwicHJldlN0YXRlIiwiYmluZCIsImNvbXBvbmVudFdpbGxVcGRhdGUiLCJuZXh0U3RhdGUiLCJwcmV2UHJvcHMiLCJfX3JlYWN0SW50ZXJuYWxTbmFwc2hvdEZsYWciLCJfX3JlYWN0SW50ZXJuYWxTbmFwc2hvdCIsImdldFNuYXBzaG90QmVmb3JlVXBkYXRlIiwiX19zdXBwcmVzc0RlcHJlY2F0aW9uV2FybmluZyIsInBvbHlmaWxsIiwiQ29tcG9uZW50IiwicHJvdG90eXBlIiwiaXNSZWFjdENvbXBvbmVudCIsIkVycm9yIiwiZm91bmRXaWxsTW91bnROYW1lIiwiZm91bmRXaWxsUmVjZWl2ZVByb3BzTmFtZSIsImZvdW5kV2lsbFVwZGF0ZU5hbWUiLCJVTlNBRkVfY29tcG9uZW50V2lsbE1vdW50IiwiVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJVTlNBRkVfY29tcG9uZW50V2lsbFVwZGF0ZSIsImNvbXBvbmVudE5hbWUiLCJkaXNwbGF5TmFtZSIsIm5hbWUiLCJuZXdBcGlOYW1lIiwiY29tcG9uZW50RGlkVXBkYXRlIiwiY29tcG9uZW50RGlkVXBkYXRlUG9seWZpbGwiLCJtYXliZVNuYXBzaG90Iiwic25hcHNob3QiLCJjYWxsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js\n");

/***/ })

};
;