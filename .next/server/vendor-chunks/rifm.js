"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/rifm";
exports.ids = ["vendor-chunks/rifm"];
exports.modules = {

/***/ "(ssr)/./node_modules/rifm/dist/rifm.esm.js":
/*!********************************************!*\
  !*** ./node_modules/rifm/dist/rifm.esm.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Rifm: () => (/* binding */ Rifm),\n/* harmony export */   useRifm: () => (/* binding */ useRifm)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst useRifm = (props)=>{\n    const [, refresh] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)((c)=>c + 1, 0);\n    const valueRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n    const { replace, append } = props;\n    const userValue = replace ? replace(props.format(props.value)) : props.format(props.value); // state of delete button see comments below about inputType support\n    const isDeleleteButtonDownRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);\n    const onChange = (evt)=>{\n        if (true) {\n            if (evt.target.type === \"number\") {\n                console.error(\"Rifm does not support input type=number, use type=tel instead.\");\n                return;\n            }\n            if (evt.target.type === \"date\") {\n                console.error(\"Rifm does not support input type=date.\");\n                return;\n            }\n        }\n        const eventValue = evt.target.value;\n        valueRef.current = [\n            eventValue,\n            evt.target,\n            eventValue.length > userValue.length,\n            isDeleleteButtonDownRef.current,\n            userValue === props.format(eventValue) // isNoOperation\n        ];\n        if (true) {\n            const formattedEventValue = props.format(eventValue);\n            if (eventValue !== formattedEventValue && eventValue.toLowerCase() === formattedEventValue.toLowerCase()) {\n                console.warn(\"Case enforcement does not work with format. Please use replace={value => value.toLowerCase()} instead\");\n            }\n        } // The main trick is to update underlying input with non formatted value (= eventValue)\n        // that allows us to calculate right cursor position after formatting (see getCursorPosition)\n        // then we format new value and call props.onChange with masked/formatted value\n        // and finally we are able to set cursor position into right place\n        refresh();\n    }; // React prints warn on server in non production mode about useLayoutEffect usage\n    // in both cases it's noop\n    if (false) {}\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        // until https://developer.mozilla.org/en-US/docs/Web/API/InputEvent/inputType will be supported\n        // by all major browsers (now supported by: +chrome, +safari, ?edge, !firefox)\n        // there is no way I found to distinguish in onChange\n        // backspace or delete was called in some situations\n        // firefox track https://bugzilla.mozilla.org/show_bug.cgi?id=1447239\n        const handleKeyDown = (evt)=>{\n            if (evt.code === \"Delete\") {\n                isDeleleteButtonDownRef.current = true;\n            }\n        };\n        const handleKeyUp = (evt)=>{\n            if (evt.code === \"Delete\") {\n                isDeleleteButtonDownRef.current = false;\n            }\n        };\n        document.addEventListener(\"keydown\", handleKeyDown);\n        document.addEventListener(\"keyup\", handleKeyUp);\n        return ()=>{\n            document.removeEventListener(\"keydown\", handleKeyDown);\n            document.removeEventListener(\"keyup\", handleKeyUp);\n        };\n    }, []);\n    return {\n        value: valueRef.current != null ? valueRef.current[0] : userValue,\n        onChange\n    };\n};\nconst Rifm = (props)=>{\n    const renderProps = useRifm(props);\n    return props.children(renderProps);\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmlmbS9kaXN0L3JpZm0uZXNtLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBdUU7QUFFdkUsTUFBTUksVUFBVUMsQ0FBQUE7SUFDZCxNQUFNLEdBQUdDLFFBQVEsR0FBR04saURBQVVBLENBQUNPLENBQUFBLElBQUtBLElBQUksR0FBRztJQUMzQyxNQUFNQyxXQUFXUCw2Q0FBTUEsQ0FBQztJQUN4QixNQUFNLEVBQ0pRLE9BQU8sRUFDUEMsTUFBTSxFQUNQLEdBQUdMO0lBQ0osTUFBTU0sWUFBWUYsVUFBVUEsUUFBUUosTUFBTU8sTUFBTSxDQUFDUCxNQUFNUSxLQUFLLEtBQUtSLE1BQU1PLE1BQU0sQ0FBQ1AsTUFBTVEsS0FBSyxHQUFHLG9FQUFvRTtJQUVoSyxNQUFNQywwQkFBMEJiLDZDQUFNQSxDQUFDO0lBRXZDLE1BQU1jLFdBQVdDLENBQUFBO1FBQ2YsSUFBSUMsSUFBeUIsRUFBYztZQUN6QyxJQUFJRCxJQUFJRSxNQUFNLENBQUNDLElBQUksS0FBSyxVQUFVO2dCQUNoQ0MsUUFBUUMsS0FBSyxDQUFDO2dCQUNkO1lBQ0Y7WUFFQSxJQUFJTCxJQUFJRSxNQUFNLENBQUNDLElBQUksS0FBSyxRQUFRO2dCQUM5QkMsUUFBUUMsS0FBSyxDQUFDO2dCQUNkO1lBQ0Y7UUFDRjtRQUVBLE1BQU1DLGFBQWFOLElBQUlFLE1BQU0sQ0FBQ0wsS0FBSztRQUNuQ0wsU0FBU2UsT0FBTyxHQUFHO1lBQUNEO1lBQ3BCTixJQUFJRSxNQUFNO1lBQ1ZJLFdBQVdFLE1BQU0sR0FBR2IsVUFBVWEsTUFBTTtZQUNwQ1Ysd0JBQXdCUyxPQUFPO1lBQy9CWixjQUFjTixNQUFNTyxNQUFNLENBQUNVLFlBQVksZ0JBQWdCO1NBQ3REO1FBRUQsSUFBSUwsSUFBeUIsRUFBYztZQUN6QyxNQUFNUSxzQkFBc0JwQixNQUFNTyxNQUFNLENBQUNVO1lBRXpDLElBQUlBLGVBQWVHLHVCQUF1QkgsV0FBV0ksV0FBVyxPQUFPRCxvQkFBb0JDLFdBQVcsSUFBSTtnQkFDeEdOLFFBQVFPLElBQUksQ0FBQztZQUNmO1FBQ0YsRUFBRSx1RkFBdUY7UUFDekYsNkZBQTZGO1FBQzdGLCtFQUErRTtRQUMvRSxrRUFBa0U7UUFHbEVyQjtJQUNGLEdBQUcsaUZBQWlGO0lBQ3BGLDBCQUEwQjtJQUcxQixJQUFJVyxLQUEyRCxFQUFhLEVBaUczRTtJQUVEZCxnREFBU0EsQ0FBQztRQUNSLGdHQUFnRztRQUNoRyw4RUFBOEU7UUFDOUUscURBQXFEO1FBQ3JELG9EQUFvRDtRQUNwRCxxRUFBcUU7UUFDckUsTUFBTXlELGdCQUFnQjVDLENBQUFBO1lBQ3BCLElBQUlBLElBQUk2QyxJQUFJLEtBQUssVUFBVTtnQkFDekIvQyx3QkFBd0JTLE9BQU8sR0FBRztZQUNwQztRQUNGO1FBRUEsTUFBTXVDLGNBQWM5QyxDQUFBQTtZQUNsQixJQUFJQSxJQUFJNkMsSUFBSSxLQUFLLFVBQVU7Z0JBQ3pCL0Msd0JBQXdCUyxPQUFPLEdBQUc7WUFDcEM7UUFDRjtRQUVBd0MsU0FBU0MsZ0JBQWdCLENBQUMsV0FBV0o7UUFDckNHLFNBQVNDLGdCQUFnQixDQUFDLFNBQVNGO1FBQ25DLE9BQU87WUFDTEMsU0FBU0UsbUJBQW1CLENBQUMsV0FBV0w7WUFDeENHLFNBQVNFLG1CQUFtQixDQUFDLFNBQVNIO1FBQ3hDO0lBQ0YsR0FBRyxFQUFFO0lBQ0wsT0FBTztRQUNMakQsT0FBT0wsU0FBU2UsT0FBTyxJQUFJLE9BQU9mLFNBQVNlLE9BQU8sQ0FBQyxFQUFFLEdBQUdaO1FBQ3hESTtJQUNGO0FBQ0Y7QUFDQSxNQUFNbUQsT0FBTzdELENBQUFBO0lBQ1gsTUFBTThELGNBQWMvRCxRQUFRQztJQUM1QixPQUFPQSxNQUFNK0QsUUFBUSxDQUFDRDtBQUN4QjtBQUV5QiIsInNvdXJjZXMiOlsid2VicGFjazovL21vZGVybml6ZS1tYWluLy4vbm9kZV9tb2R1bGVzL3JpZm0vZGlzdC9yaWZtLmVzbS5qcz9hMDI3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZHVjZXIsIHVzZVJlZiwgdXNlTGF5b3V0RWZmZWN0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IHVzZVJpZm0gPSBwcm9wcyA9PiB7XG4gIGNvbnN0IFssIHJlZnJlc2hdID0gdXNlUmVkdWNlcihjID0+IGMgKyAxLCAwKTtcbiAgY29uc3QgdmFsdWVSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IHtcbiAgICByZXBsYWNlLFxuICAgIGFwcGVuZFxuICB9ID0gcHJvcHM7XG4gIGNvbnN0IHVzZXJWYWx1ZSA9IHJlcGxhY2UgPyByZXBsYWNlKHByb3BzLmZvcm1hdChwcm9wcy52YWx1ZSkpIDogcHJvcHMuZm9ybWF0KHByb3BzLnZhbHVlKTsgLy8gc3RhdGUgb2YgZGVsZXRlIGJ1dHRvbiBzZWUgY29tbWVudHMgYmVsb3cgYWJvdXQgaW5wdXRUeXBlIHN1cHBvcnRcblxuICBjb25zdCBpc0RlbGVsZXRlQnV0dG9uRG93blJlZiA9IHVzZVJlZihmYWxzZSk7XG5cbiAgY29uc3Qgb25DaGFuZ2UgPSBldnQgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAoZXZ0LnRhcmdldC50eXBlID09PSAnbnVtYmVyJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdSaWZtIGRvZXMgbm90IHN1cHBvcnQgaW5wdXQgdHlwZT1udW1iZXIsIHVzZSB0eXBlPXRlbCBpbnN0ZWFkLicpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChldnQudGFyZ2V0LnR5cGUgPT09ICdkYXRlJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdSaWZtIGRvZXMgbm90IHN1cHBvcnQgaW5wdXQgdHlwZT1kYXRlLicpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZXZlbnRWYWx1ZSA9IGV2dC50YXJnZXQudmFsdWU7XG4gICAgdmFsdWVSZWYuY3VycmVudCA9IFtldmVudFZhbHVlLCAvLyBldmVudFZhbHVlXG4gICAgZXZ0LnRhcmdldCwgLy8gaW5wdXRcbiAgICBldmVudFZhbHVlLmxlbmd0aCA+IHVzZXJWYWx1ZS5sZW5ndGgsIC8vIGlzU2l6ZUluY3JlYXNlT3BlcmF0aW9uXG4gICAgaXNEZWxlbGV0ZUJ1dHRvbkRvd25SZWYuY3VycmVudCwgLy8gaXNEZWxlbGV0ZUJ1dHRvbkRvd25cbiAgICB1c2VyVmFsdWUgPT09IHByb3BzLmZvcm1hdChldmVudFZhbHVlKSAvLyBpc05vT3BlcmF0aW9uXG4gICAgXTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBjb25zdCBmb3JtYXR0ZWRFdmVudFZhbHVlID0gcHJvcHMuZm9ybWF0KGV2ZW50VmFsdWUpO1xuXG4gICAgICBpZiAoZXZlbnRWYWx1ZSAhPT0gZm9ybWF0dGVkRXZlbnRWYWx1ZSAmJiBldmVudFZhbHVlLnRvTG93ZXJDYXNlKCkgPT09IGZvcm1hdHRlZEV2ZW50VmFsdWUudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ0Nhc2UgZW5mb3JjZW1lbnQgZG9lcyBub3Qgd29yayB3aXRoIGZvcm1hdC4gUGxlYXNlIHVzZSByZXBsYWNlPXt2YWx1ZSA9PiB2YWx1ZS50b0xvd2VyQ2FzZSgpfSBpbnN0ZWFkJyk7XG4gICAgICB9XG4gICAgfSAvLyBUaGUgbWFpbiB0cmljayBpcyB0byB1cGRhdGUgdW5kZXJseWluZyBpbnB1dCB3aXRoIG5vbiBmb3JtYXR0ZWQgdmFsdWUgKD0gZXZlbnRWYWx1ZSlcbiAgICAvLyB0aGF0IGFsbG93cyB1cyB0byBjYWxjdWxhdGUgcmlnaHQgY3Vyc29yIHBvc2l0aW9uIGFmdGVyIGZvcm1hdHRpbmcgKHNlZSBnZXRDdXJzb3JQb3NpdGlvbilcbiAgICAvLyB0aGVuIHdlIGZvcm1hdCBuZXcgdmFsdWUgYW5kIGNhbGwgcHJvcHMub25DaGFuZ2Ugd2l0aCBtYXNrZWQvZm9ybWF0dGVkIHZhbHVlXG4gICAgLy8gYW5kIGZpbmFsbHkgd2UgYXJlIGFibGUgdG8gc2V0IGN1cnNvciBwb3NpdGlvbiBpbnRvIHJpZ2h0IHBsYWNlXG5cblxuICAgIHJlZnJlc2goKTtcbiAgfTsgLy8gUmVhY3QgcHJpbnRzIHdhcm4gb24gc2VydmVyIGluIG5vbiBwcm9kdWN0aW9uIG1vZGUgYWJvdXQgdXNlTGF5b3V0RWZmZWN0IHVzYWdlXG4gIC8vIGluIGJvdGggY2FzZXMgaXQncyBub29wXG5cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyB8fCB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICBpZiAodmFsdWVSZWYuY3VycmVudCA9PSBudWxsKSByZXR1cm47XG4gICAgICBsZXQgW2V2ZW50VmFsdWUsIGlucHV0LCBpc1NpemVJbmNyZWFzZU9wZXJhdGlvbiwgaXNEZWxlbGV0ZUJ1dHRvbkRvd24sIC8vIE5vIG9wZXJhdGlvbiBtZWFucyB0aGF0IHZhbHVlIGl0c2VsZiBoYXNuJ3QgYmVlbiBjaGFuZ2VkLCBCVFcgY3Vyc29yLCBzZWxlY3Rpb24gZXRjIGNhbiBiZSBjaGFuZ2VkXG4gICAgICBpc05vT3BlcmF0aW9uXSA9IHZhbHVlUmVmLmN1cnJlbnQ7XG4gICAgICB2YWx1ZVJlZi5jdXJyZW50ID0gbnVsbDsgLy8gdGhpcyB1c3VhbGx5IG9jY3VycyBvbiBkZWxldGluZyBzcGVjaWFsIHN5bWJvbHMgbGlrZSAnIGhlcmUgMTIzJzEyMy4wMFxuICAgICAgLy8gaW4gY2FzZSBvZiBpc0RlbGVsZXRlQnV0dG9uRG93biBjdXJzb3Igc2hvdWxkIG1vdmUgZGlmZmVyZW50bHkgdnMgYmFja3NwYWNlXG5cbiAgICAgIGNvbnN0IGRlbGV0ZVdhc05vT3AgPSBpc0RlbGVsZXRlQnV0dG9uRG93biAmJiBpc05vT3BlcmF0aW9uO1xuICAgICAgY29uc3QgdmFsdWVBZnRlclNlbGVjdGlvblN0YXJ0ID0gZXZlbnRWYWx1ZS5zbGljZShpbnB1dC5zZWxlY3Rpb25TdGFydCk7XG4gICAgICBjb25zdCBhY2NlcHRlZENoYXJJbmRleEFmdGVyRGVsZXRlID0gdmFsdWVBZnRlclNlbGVjdGlvblN0YXJ0LnNlYXJjaChwcm9wcy5hY2NlcHQgfHwgL1xcZC9nKTtcbiAgICAgIGNvbnN0IGNoYXJzVG9Ta2lwQWZ0ZXJEZWxldGUgPSBhY2NlcHRlZENoYXJJbmRleEFmdGVyRGVsZXRlICE9PSAtMSA/IGFjY2VwdGVkQ2hhckluZGV4QWZ0ZXJEZWxldGUgOiAwOyAvLyBDcmVhdGUgc3RyaW5nIGZyb20gb25seSBhY2NlcHRlZCBzeW1ib2xzXG5cbiAgICAgIGNvbnN0IGNsZWFuID0gc3RyID0+IChzdHIubWF0Y2gocHJvcHMuYWNjZXB0IHx8IC9cXGQvZykgfHwgW10pLmpvaW4oJycpO1xuXG4gICAgICBjb25zdCB2YWx1ZUJlZm9yZVNlbGVjdGlvblN0YXJ0ID0gY2xlYW4oZXZlbnRWYWx1ZS5zdWJzdHIoMCwgaW5wdXQuc2VsZWN0aW9uU3RhcnQpKTsgLy8gdHJ5aW5nIHRvIGZpbmQgY3Vyc29yIHBvc2l0aW9uIGluIGZvcm1hdHRlZCB2YWx1ZSBoYXZpbmcga25vd2xlZGdlIGFib3V0IHZhbHVlQmVmb3JlU2VsZWN0aW9uU3RhcnRcbiAgICAgIC8vIFRoaXMgd29ya3MgYmVjYXVzZSB3ZSBhc3N1bWUgdGhhdCBmb3JtYXQgZG9lc24ndCBjaGFuZ2UgdGhlIG9yZGVyIG9mIGFjY2VwdGVkIHN5bWJvbHMuXG4gICAgICAvLyBJbWFnaW5lIHdlIGhhdmUgZm9ybWF0dGVyIHdoaWNoIGFkZHMgJyBzeW1ib2wgYmV0d2VlbiBudW1iZXJzLCBhbmQgYnkgZGVmYXVsdCB3ZSByZWZ1c2UgYWxsIG5vbiBudW1lcmljIHN5bWJvbHNcbiAgICAgIC8vIGZvciBleGFtcGxlIHdlIGhhZCBpbnB1dCA9IDEnMnwnNCAofCBtZWFucyBjdXJzb3IgcG9zaXRpb24pIHRoZW4gdXNlciBlbnRlcmVkICczJyBzeW1ib2xcbiAgICAgIC8vIGlucHV0VmFsdWUgPSAxJzIzJ3w0IHNvIHZhbHVlQmVmb3JlU2VsZWN0aW9uU3RhcnQgPSAxMjMgYW5kIGZvcm1hdHRlZCB2YWx1ZSA9IDEnMiczJzRcbiAgICAgIC8vIGNhbGxpbmcgZ2V0Q3Vyc29yUG9zaXRpb24oXCIxJzInMyc0XCIpIHdpbGwgZ2l2ZSB1cyBwb3NpdGlvbiBhZnRlciAzLCAxJzInM3wnNFxuICAgICAgLy8gc28gZm9yIGZvcm1hdHRpbmcganVzdCB0aGlzIGZ1bmN0aW9uIHRvIGRldGVybWluZSBjdXJzb3IgcG9zaXRpb24gYWZ0ZXIgZm9ybWF0dGluZyBpcyBlbm91Z2hcbiAgICAgIC8vIHdpdGggbWFza2luZyB3ZSBuZWVkIHRvIGRvIHNvbWUgYWRkaXRpb25hbCBjaGVja3Mgc2VlIGBtYXNrYCBiZWxvd1xuXG4gICAgICBjb25zdCBnZXRDdXJzb3JQb3NpdGlvbiA9IHZhbCA9PiB7XG4gICAgICAgIGxldCBzdGFydCA9IDA7XG4gICAgICAgIGxldCBjbGVhblBvcyA9IDA7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgIT09IHZhbHVlQmVmb3JlU2VsZWN0aW9uU3RhcnQubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICBsZXQgbmV3UG9zID0gdmFsLmluZGV4T2YodmFsdWVCZWZvcmVTZWxlY3Rpb25TdGFydFtpXSwgc3RhcnQpICsgMTtcbiAgICAgICAgICBsZXQgbmV3Q2xlYW5Qb3MgPSBjbGVhbih2YWwpLmluZGV4T2YodmFsdWVCZWZvcmVTZWxlY3Rpb25TdGFydFtpXSwgY2xlYW5Qb3MpICsgMTsgLy8gdGhpcyBza2lwcyBwb3NpdGlvbiBjaGFuZ2UgaWYgYWNjZXB0ZWQgc3ltYm9scyBvcmRlciB3YXMgYnJva2VuXG4gICAgICAgICAgLy8gRm9yIGV4YW1wbGUgZml4ZXMgZWRnZSBjYXNlIHdpdGggZml4ZWQgcG9pbnQgbnVtYmVyczpcbiAgICAgICAgICAvLyBZb3UgaGF2ZSAnMHwuMDAnLCB0aGVuIHByZXNzIDEsIGl0IGJlY29tZXMgMDF8LjAwIGFuZCBhZnRlciBmb3JtYXQgMS4wMCwgdGhpcyBicmVha3Mgb3VyIGFzc3VtcHRpb25cbiAgICAgICAgICAvLyB0aGF0IG9yZGVyIG9mIGFjY2VwdGVkIHN5bWJvbHMgaXMgbm90IGNoYW5nZWQgYWZ0ZXIgZm9ybWF0LFxuICAgICAgICAgIC8vIHNvIGhlcmUgd2UgZG9uJ3QgdXBkYXRlIHN0YXJ0IHBvc2l0aW9uIGlmIG90aGVyIGFjY2VwdGVkIHN5bWJvbHMgd2FzIGluYmV0d2VlbiBjdXJyZW50IGFuZCBuZXcgcG9zaXRpb25cblxuICAgICAgICAgIGlmIChuZXdDbGVhblBvcyAtIGNsZWFuUG9zID4gMSkge1xuICAgICAgICAgICAgbmV3UG9zID0gc3RhcnQ7XG4gICAgICAgICAgICBuZXdDbGVhblBvcyA9IGNsZWFuUG9zO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNsZWFuUG9zID0gTWF0aC5tYXgobmV3Q2xlYW5Qb3MsIGNsZWFuUG9zKTtcbiAgICAgICAgICBzdGFydCA9IE1hdGgubWF4KHN0YXJ0LCBuZXdQb3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN0YXJ0O1xuICAgICAgfTsgLy8gTWFza2luZyBwYXJ0LCBmb3IgbWFza3MgaWYgc2l6ZSBvZiBtYXNrIGlzIGFib3ZlIHNvbWUgdmFsdWVcbiAgICAgIC8vIHdlIG5lZWQgdG8gcmVwbGFjZSBzeW1ib2xzIGluc3RlYWQgb2YgZG8gbm90aGluZyBhcyBsaWtlIGluIGZvcm1hdFxuXG5cbiAgICAgIGlmIChwcm9wcy5tYXNrID09PSB0cnVlICYmIGlzU2l6ZUluY3JlYXNlT3BlcmF0aW9uICYmICFpc05vT3BlcmF0aW9uKSB7XG4gICAgICAgIGxldCBzdGFydCA9IGdldEN1cnNvclBvc2l0aW9uKGV2ZW50VmFsdWUpO1xuICAgICAgICBjb25zdCBjID0gY2xlYW4oZXZlbnRWYWx1ZS5zdWJzdHIoc3RhcnQpKVswXTtcbiAgICAgICAgc3RhcnQgPSBldmVudFZhbHVlLmluZGV4T2YoYywgc3RhcnQpO1xuICAgICAgICBldmVudFZhbHVlID0gYCR7ZXZlbnRWYWx1ZS5zdWJzdHIoMCwgc3RhcnQpfSR7ZXZlbnRWYWx1ZS5zdWJzdHIoc3RhcnQgKyAxKX1gO1xuICAgICAgfVxuXG4gICAgICBsZXQgZm9ybWF0dGVkVmFsdWUgPSBwcm9wcy5mb3JtYXQoZXZlbnRWYWx1ZSk7XG5cbiAgICAgIGlmIChhcHBlbmQgIT0gbnVsbCAmJiAvLyBjdXJzb3IgYXQgdGhlIGVuZFxuICAgICAgaW5wdXQuc2VsZWN0aW9uU3RhcnQgPT09IGV2ZW50VmFsdWUubGVuZ3RoICYmICFpc05vT3BlcmF0aW9uKSB7XG4gICAgICAgIGlmIChpc1NpemVJbmNyZWFzZU9wZXJhdGlvbikge1xuICAgICAgICAgIGZvcm1hdHRlZFZhbHVlID0gYXBwZW5kKGZvcm1hdHRlZFZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBJZiBhZnRlciBkZWxldGUgbGFzdCBjaGFyIGlzIHNwZWNpYWwgY2hhcmFjdGVyIGFuZCB3ZSB1c2UgYXBwZW5kXG4gICAgICAgICAgLy8gZGVsZXRlIGl0IHRvb1xuICAgICAgICAgIC8vIHdhczogXCIxMi0zfFwiIGJhY2tzcGFjZSBwcmVzc2VkLCB0aGVuIHNob3VsZCBiZSBcIjEyfFwiXG4gICAgICAgICAgaWYgKGNsZWFuKGZvcm1hdHRlZFZhbHVlLnNsaWNlKC0xKSkgPT09ICcnKSB7XG4gICAgICAgICAgICBmb3JtYXR0ZWRWYWx1ZSA9IGZvcm1hdHRlZFZhbHVlLnNsaWNlKDAsIC0xKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgcmVwbGFjZWRWYWx1ZSA9IHJlcGxhY2UgPyByZXBsYWNlKGZvcm1hdHRlZFZhbHVlKSA6IGZvcm1hdHRlZFZhbHVlO1xuXG4gICAgICBpZiAodXNlclZhbHVlID09PSByZXBsYWNlZFZhbHVlKSB7XG4gICAgICAgIC8vIGlmIG5vdGhpbmcgY2hhbmdlZCBmb3IgZm9ybWF0dGVkIHZhbHVlLCBqdXN0IHJlZnJlc2ggc28gdXNlclZhbHVlIHdpbGwgYmUgdXNlZCBhdCByZW5kZXJcbiAgICAgICAgcmVmcmVzaCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvcHMub25DaGFuZ2UocmVwbGFjZWRWYWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGxldCBzdGFydCA9IGdldEN1cnNvclBvc2l0aW9uKGZvcm1hdHRlZFZhbHVlKTsgLy8gVmlzdWFsbHkgaW1wcm92ZXMgd29ya2luZyB3aXRoIG1hc2tlZCB2YWx1ZXMsXG4gICAgICAgIC8vIGxpa2UgY3Vyc29yIGp1bXBpbmcgb3ZlciByZWZ1c2VkIHN5bWJvbHNcbiAgICAgICAgLy8gYXMgYW4gZXhhbXBsZSBkYXRlIG1hc2s6IHdhcyBcIjV8MS0yNC0zXCIgdGhlbiB1c2VyIHByZXNzZWQgXCI2XCJcbiAgICAgICAgLy8gaXQgYmVjb21lcyBcIjU2LXwxMi00M1wiIHdpdGggdGhpcyBjb2RlLCBhbmQgXCI1NnwtMTItNDNcIiB3aXRob3V0XG5cbiAgICAgICAgaWYgKHByb3BzLm1hc2sgIT0gbnVsbCAmJiAoaXNTaXplSW5jcmVhc2VPcGVyYXRpb24gfHwgaXNEZWxlbGV0ZUJ1dHRvbkRvd24gJiYgIWRlbGV0ZVdhc05vT3ApKSB7XG4gICAgICAgICAgd2hpbGUgKGZvcm1hdHRlZFZhbHVlW3N0YXJ0XSAmJiBjbGVhbihmb3JtYXR0ZWRWYWx1ZVtzdGFydF0pID09PSAnJykge1xuICAgICAgICAgICAgc3RhcnQgKz0gMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpbnB1dC5zZWxlY3Rpb25TdGFydCA9IGlucHV0LnNlbGVjdGlvbkVuZCA9IHN0YXJ0ICsgKGRlbGV0ZVdhc05vT3AgPyAxICsgY2hhcnNUb1NraXBBZnRlckRlbGV0ZSA6IDApO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gdW50aWwgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0lucHV0RXZlbnQvaW5wdXRUeXBlIHdpbGwgYmUgc3VwcG9ydGVkXG4gICAgLy8gYnkgYWxsIG1ham9yIGJyb3dzZXJzIChub3cgc3VwcG9ydGVkIGJ5OiArY2hyb21lLCArc2FmYXJpLCA/ZWRnZSwgIWZpcmVmb3gpXG4gICAgLy8gdGhlcmUgaXMgbm8gd2F5IEkgZm91bmQgdG8gZGlzdGluZ3Vpc2ggaW4gb25DaGFuZ2VcbiAgICAvLyBiYWNrc3BhY2Ugb3IgZGVsZXRlIHdhcyBjYWxsZWQgaW4gc29tZSBzaXR1YXRpb25zXG4gICAgLy8gZmlyZWZveCB0cmFjayBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xNDQ3MjM5XG4gICAgY29uc3QgaGFuZGxlS2V5RG93biA9IGV2dCA9PiB7XG4gICAgICBpZiAoZXZ0LmNvZGUgPT09ICdEZWxldGUnKSB7XG4gICAgICAgIGlzRGVsZWxldGVCdXR0b25Eb3duUmVmLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVLZXlVcCA9IGV2dCA9PiB7XG4gICAgICBpZiAoZXZ0LmNvZGUgPT09ICdEZWxldGUnKSB7XG4gICAgICAgIGlzRGVsZWxldGVCdXR0b25Eb3duUmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUtleURvd24pO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgaGFuZGxlS2V5VXApO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlS2V5RG93bik7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIGhhbmRsZUtleVVwKTtcbiAgICB9O1xuICB9LCBbXSk7XG4gIHJldHVybiB7XG4gICAgdmFsdWU6IHZhbHVlUmVmLmN1cnJlbnQgIT0gbnVsbCA/IHZhbHVlUmVmLmN1cnJlbnRbMF0gOiB1c2VyVmFsdWUsXG4gICAgb25DaGFuZ2VcbiAgfTtcbn07XG5jb25zdCBSaWZtID0gcHJvcHMgPT4ge1xuICBjb25zdCByZW5kZXJQcm9wcyA9IHVzZVJpZm0ocHJvcHMpO1xuICByZXR1cm4gcHJvcHMuY2hpbGRyZW4ocmVuZGVyUHJvcHMpO1xufTtcblxuZXhwb3J0IHsgUmlmbSwgdXNlUmlmbSB9O1xuIl0sIm5hbWVzIjpbInVzZVJlZHVjZXIiLCJ1c2VSZWYiLCJ1c2VMYXlvdXRFZmZlY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSaWZtIiwicHJvcHMiLCJyZWZyZXNoIiwiYyIsInZhbHVlUmVmIiwicmVwbGFjZSIsImFwcGVuZCIsInVzZXJWYWx1ZSIsImZvcm1hdCIsInZhbHVlIiwiaXNEZWxlbGV0ZUJ1dHRvbkRvd25SZWYiLCJvbkNoYW5nZSIsImV2dCIsInByb2Nlc3MiLCJ0YXJnZXQiLCJ0eXBlIiwiY29uc29sZSIsImVycm9yIiwiZXZlbnRWYWx1ZSIsImN1cnJlbnQiLCJsZW5ndGgiLCJmb3JtYXR0ZWRFdmVudFZhbHVlIiwidG9Mb3dlckNhc2UiLCJ3YXJuIiwiaW5wdXQiLCJpc1NpemVJbmNyZWFzZU9wZXJhdGlvbiIsImlzRGVsZWxldGVCdXR0b25Eb3duIiwiaXNOb09wZXJhdGlvbiIsImRlbGV0ZVdhc05vT3AiLCJ2YWx1ZUFmdGVyU2VsZWN0aW9uU3RhcnQiLCJzbGljZSIsInNlbGVjdGlvblN0YXJ0IiwiYWNjZXB0ZWRDaGFySW5kZXhBZnRlckRlbGV0ZSIsInNlYXJjaCIsImFjY2VwdCIsImNoYXJzVG9Ta2lwQWZ0ZXJEZWxldGUiLCJjbGVhbiIsInN0ciIsIm1hdGNoIiwiam9pbiIsInZhbHVlQmVmb3JlU2VsZWN0aW9uU3RhcnQiLCJzdWJzdHIiLCJnZXRDdXJzb3JQb3NpdGlvbiIsInZhbCIsInN0YXJ0IiwiY2xlYW5Qb3MiLCJpIiwibmV3UG9zIiwiaW5kZXhPZiIsIm5ld0NsZWFuUG9zIiwiTWF0aCIsIm1heCIsIm1hc2siLCJmb3JtYXR0ZWRWYWx1ZSIsInJlcGxhY2VkVmFsdWUiLCJzZWxlY3Rpb25FbmQiLCJoYW5kbGVLZXlEb3duIiwiY29kZSIsImhhbmRsZUtleVVwIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIlJpZm0iLCJyZW5kZXJQcm9wcyIsImNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/rifm/dist/rifm.esm.js\n");

/***/ })

};
;