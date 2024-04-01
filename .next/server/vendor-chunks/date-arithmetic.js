"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/date-arithmetic";
exports.ids = ["vendor-chunks/date-arithmetic"];
exports.modules = {

/***/ "(ssr)/./node_modules/date-arithmetic/index.js":
/*!***********************************************!*\
  !*** ./node_modules/date-arithmetic/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   add: () => (/* binding */ add),\n/* harmony export */   century: () => (/* binding */ century),\n/* harmony export */   date: () => (/* binding */ date),\n/* harmony export */   day: () => (/* binding */ day),\n/* harmony export */   decade: () => (/* binding */ decade),\n/* harmony export */   diff: () => (/* binding */ diff),\n/* harmony export */   endOf: () => (/* binding */ endOf),\n/* harmony export */   eq: () => (/* binding */ eq),\n/* harmony export */   gt: () => (/* binding */ gt),\n/* harmony export */   gte: () => (/* binding */ gte),\n/* harmony export */   hours: () => (/* binding */ hours),\n/* harmony export */   inRange: () => (/* binding */ inRange),\n/* harmony export */   lt: () => (/* binding */ lt),\n/* harmony export */   lte: () => (/* binding */ lte),\n/* harmony export */   max: () => (/* binding */ max),\n/* harmony export */   milliseconds: () => (/* binding */ milliseconds),\n/* harmony export */   min: () => (/* binding */ min),\n/* harmony export */   minutes: () => (/* binding */ minutes),\n/* harmony export */   month: () => (/* binding */ month),\n/* harmony export */   neq: () => (/* binding */ neq),\n/* harmony export */   seconds: () => (/* binding */ seconds),\n/* harmony export */   startOf: () => (/* binding */ startOf),\n/* harmony export */   subtract: () => (/* binding */ subtract),\n/* harmony export */   weekday: () => (/* binding */ weekday),\n/* harmony export */   year: () => (/* binding */ year)\n/* harmony export */ });\nvar MILI = \"milliseconds\", SECONDS = \"seconds\", MINUTES = \"minutes\", HOURS = \"hours\", DAY = \"day\", WEEK = \"week\", MONTH = \"month\", YEAR = \"year\", DECADE = \"decade\", CENTURY = \"century\";\nvar multiplierMilli = {\n    \"milliseconds\": 1,\n    \"seconds\": 1000,\n    \"minutes\": 60 * 1000,\n    \"hours\": 60 * 60 * 1000,\n    \"day\": 24 * 60 * 60 * 1000,\n    \"week\": 7 * 24 * 60 * 60 * 1000\n};\nvar multiplierMonth = {\n    \"month\": 1,\n    \"year\": 12,\n    \"decade\": 10 * 12,\n    \"century\": 100 * 12\n};\nfunction daysOf(year) {\n    return [\n        31,\n        daysInFeb(year),\n        31,\n        30,\n        31,\n        30,\n        31,\n        31,\n        30,\n        31,\n        30,\n        31\n    ];\n}\nfunction daysInFeb(year) {\n    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0 ? 29 : 28;\n}\nfunction add(d, num, unit) {\n    d = new Date(d);\n    switch(unit){\n        case MILI:\n        case SECONDS:\n        case MINUTES:\n        case HOURS:\n        case DAY:\n        case WEEK:\n            return addMillis(d, num * multiplierMilli[unit]);\n        case MONTH:\n        case YEAR:\n        case DECADE:\n        case CENTURY:\n            return addMonths(d, num * multiplierMonth[unit]);\n    }\n    throw new TypeError('Invalid units: \"' + unit + '\"');\n}\nfunction addMillis(d, num) {\n    var nextDate = new Date(+d + num);\n    return solveDST(d, nextDate);\n}\nfunction addMonths(d, num) {\n    var year = d.getFullYear(), month = d.getMonth(), day = d.getDate(), totalMonths = year * 12 + month + num, nextYear = Math.trunc(totalMonths / 12), nextMonth = totalMonths % 12, nextDay = Math.min(day, daysOf(nextYear)[nextMonth]);\n    var nextDate = new Date(d);\n    nextDate.setFullYear(nextYear);\n    // To avoid a bug when sets the Feb month\n    // with a date > 28 or date > 29 (leap year)\n    nextDate.setDate(1);\n    nextDate.setMonth(nextMonth);\n    nextDate.setDate(nextDay);\n    return nextDate;\n}\nfunction solveDST(currentDate, nextDate) {\n    var currentOffset = currentDate.getTimezoneOffset(), nextOffset = nextDate.getTimezoneOffset();\n    // if is DST, add the difference in minutes\n    // else the difference is zero\n    var diffMinutes = nextOffset - currentOffset;\n    return new Date(+nextDate + diffMinutes * multiplierMilli[\"minutes\"]);\n}\nfunction subtract(d, num, unit) {\n    return add(d, -num, unit);\n}\nfunction startOf(d, unit, firstOfWeek) {\n    d = new Date(d);\n    switch(unit){\n        case CENTURY:\n        case DECADE:\n        case YEAR:\n            d = month(d, 0);\n        case MONTH:\n            d = date(d, 1);\n        case WEEK:\n        case DAY:\n            d = hours(d, 0);\n        case HOURS:\n            d = minutes(d, 0);\n        case MINUTES:\n            d = seconds(d, 0);\n        case SECONDS:\n            d = milliseconds(d, 0);\n    }\n    if (unit === DECADE) d = subtract(d, year(d) % 10, \"year\");\n    if (unit === CENTURY) d = subtract(d, year(d) % 100, \"year\");\n    if (unit === WEEK) d = weekday(d, 0, firstOfWeek);\n    return d;\n}\nfunction endOf(d, unit, firstOfWeek) {\n    d = new Date(d);\n    d = startOf(d, unit, firstOfWeek);\n    switch(unit){\n        case CENTURY:\n        case DECADE:\n        case YEAR:\n        case MONTH:\n        case WEEK:\n            d = add(d, 1, unit);\n            d = subtract(d, 1, DAY);\n            d.setHours(23, 59, 59, 999);\n            break;\n        case DAY:\n            d.setHours(23, 59, 59, 999);\n            break;\n        case HOURS:\n        case MINUTES:\n        case SECONDS:\n            d = add(d, 1, unit);\n            d = subtract(d, 1, MILI);\n    }\n    return d;\n}\nvar eq = createComparer(function(a, b) {\n    return a === b;\n});\nvar neq = createComparer(function(a, b) {\n    return a !== b;\n});\nvar gt = createComparer(function(a, b) {\n    return a > b;\n});\nvar gte = createComparer(function(a, b) {\n    return a >= b;\n});\nvar lt = createComparer(function(a, b) {\n    return a < b;\n});\nvar lte = createComparer(function(a, b) {\n    return a <= b;\n});\nfunction min() {\n    return new Date(Math.min.apply(Math, arguments));\n}\nfunction max() {\n    return new Date(Math.max.apply(Math, arguments));\n}\nfunction inRange(day, min, max, unit) {\n    unit = unit || \"day\";\n    return (!min || gte(day, min, unit)) && (!max || lte(day, max, unit));\n}\nvar milliseconds = createAccessor(\"Milliseconds\");\nvar seconds = createAccessor(\"Seconds\");\nvar minutes = createAccessor(\"Minutes\");\nvar hours = createAccessor(\"Hours\");\nvar day = createAccessor(\"Day\");\nvar date = createAccessor(\"Date\");\nvar month = createAccessor(\"Month\");\nvar year = createAccessor(\"FullYear\");\nfunction decade(d, val) {\n    return val === undefined ? year(startOf(d, DECADE)) : add(d, val + 10, YEAR);\n}\nfunction century(d, val) {\n    return val === undefined ? year(startOf(d, CENTURY)) : add(d, val + 100, YEAR);\n}\nfunction weekday(d, val, firstDay) {\n    var w = (day(d) + 7 - (firstDay || 0)) % 7;\n    return val === undefined ? w : add(d, val - w, DAY);\n}\nfunction diff(date1, date2, unit, asFloat) {\n    var dividend, divisor, result;\n    switch(unit){\n        case MILI:\n        case SECONDS:\n        case MINUTES:\n        case HOURS:\n        case DAY:\n        case WEEK:\n            dividend = date2.getTime() - date1.getTime();\n            break;\n        case MONTH:\n        case YEAR:\n        case DECADE:\n        case CENTURY:\n            dividend = (year(date2) - year(date1)) * 12 + month(date2) - month(date1);\n            break;\n        default:\n            throw new TypeError('Invalid units: \"' + unit + '\"');\n    }\n    switch(unit){\n        case MILI:\n            divisor = 1;\n            break;\n        case SECONDS:\n            divisor = 1000;\n            break;\n        case MINUTES:\n            divisor = 1000 * 60;\n            break;\n        case HOURS:\n            divisor = 1000 * 60 * 60;\n            break;\n        case DAY:\n            divisor = 1000 * 60 * 60 * 24;\n            break;\n        case WEEK:\n            divisor = 1000 * 60 * 60 * 24 * 7;\n            break;\n        case MONTH:\n            divisor = 1;\n            break;\n        case YEAR:\n            divisor = 12;\n            break;\n        case DECADE:\n            divisor = 120;\n            break;\n        case CENTURY:\n            divisor = 1200;\n            break;\n        default:\n            throw new TypeError('Invalid units: \"' + unit + '\"');\n    }\n    result = dividend / divisor;\n    return asFloat ? result : Math.round(result);\n}\nfunction createAccessor(method) {\n    var hourLength = function(method) {\n        switch(method){\n            case \"Milliseconds\":\n                return 3600000;\n            case \"Seconds\":\n                return 3600;\n            case \"Minutes\":\n                return 60;\n            case \"Hours\":\n                return 1;\n            default:\n                return null;\n        }\n    }(method);\n    return function(d, val) {\n        if (val === undefined) return d[\"get\" + method]();\n        var dateOut = new Date(d);\n        dateOut[\"set\" + method](val);\n        if (hourLength && dateOut[\"get\" + method]() != val && (method === \"Hours\" || val >= hourLength && dateOut.getHours() - d.getHours() < Math.floor(val / hourLength))) {\n            //Skip DST hour, if it occurs\n            dateOut[\"set\" + method](val + hourLength);\n        }\n        return dateOut;\n    };\n}\nfunction createComparer(operator) {\n    return function(a, b, unit) {\n        return operator(+startOf(a, unit), +startOf(b, unit));\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZGF0ZS1hcml0aG1ldGljL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxPQUFVLGdCQUNWQyxVQUFVLFdBQ1ZDLFVBQVUsV0FDVkMsUUFBVSxTQUNWQyxNQUFVLE9BQ1ZDLE9BQVUsUUFDVkMsUUFBVSxTQUNWQyxPQUFVLFFBQ1ZDLFNBQVUsVUFDVkMsVUFBVTtBQUVkLElBQUlDLGtCQUFrQjtJQUNwQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFdBQVcsS0FBSztJQUNoQixTQUFTLEtBQUssS0FBSztJQUNuQixPQUFPLEtBQUssS0FBSyxLQUFLO0lBQ3RCLFFBQVEsSUFBSSxLQUFLLEtBQUssS0FBSztBQUM3QjtBQUVBLElBQUlDLGtCQUFrQjtJQUNwQixTQUFTO0lBQ1QsUUFBUTtJQUNSLFVBQVUsS0FBSztJQUNmLFdBQVcsTUFBTTtBQUNuQjtBQUVBLFNBQVNDLE9BQU9DLElBQUk7SUFDbEIsT0FBTztRQUFDO1FBQUlDLFVBQVVEO1FBQU87UUFBSTtRQUFJO1FBQUk7UUFBSTtRQUFJO1FBQUk7UUFBSTtRQUFJO1FBQUk7S0FBRztBQUN0RTtBQUVBLFNBQVNDLFVBQVVELElBQUk7SUFDckIsT0FBTyxPQUNJLE1BQU0sS0FDVkEsT0FBTyxRQUFRLEtBQ2ZBLE9BQU8sUUFBUSxJQUNoQixLQUNBO0FBQ1I7QUFFTyxTQUFTRSxJQUFJQyxDQUFDLEVBQUVDLEdBQUcsRUFBRUMsSUFBSTtJQUM5QkYsSUFBSSxJQUFJRyxLQUFLSDtJQUViLE9BQVFFO1FBQ04sS0FBS2xCO1FBQ0wsS0FBS0M7UUFDTCxLQUFLQztRQUNMLEtBQUtDO1FBQ0wsS0FBS0M7UUFDTCxLQUFLQztZQUNILE9BQU9lLFVBQVVKLEdBQUdDLE1BQU1QLGVBQWUsQ0FBQ1EsS0FBSztRQUNqRCxLQUFLWjtRQUNMLEtBQUtDO1FBQ0wsS0FBS0M7UUFDTCxLQUFLQztZQUNILE9BQU9ZLFVBQVVMLEdBQUdD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QU8sQ0FBQyxRQUFNRixPQUFPLE1BQU1kLE9BQVFjLENBQUFBLFdBQVcsV0FBV2QsT0FBTWUsY0FBZUMsUUFBUUMsUUFBUSxLQUFHeEUsRUFBRXdFLFFBQVEsS0FBR3hELEtBQUt5RCxLQUFLLENBQUNsQixNQUFJZSxXQUFXLEdBQUk7WUFDM0osNkJBQTZCO1lBQzdCQyxPQUFPLENBQUMsUUFBTUYsT0FBTyxDQUFDZCxNQUFJZTtRQUM1QjtRQUVBLE9BQU9DO0lBQ1Q7QUFDRjtBQUVBLFNBQVM5QixlQUFlaUMsUUFBUTtJQUM5QixPQUFPLFNBQVVoQyxDQUFDLEVBQUVDLENBQUMsRUFBRXpDLElBQUk7UUFDekIsT0FBT3dFLFNBQVMsQ0FBQzVDLFFBQVFZLEdBQUd4QyxPQUFPLENBQUM0QixRQUFRYSxHQUFHekM7SUFDakQ7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL21vZGVybml6ZS1tYWluLy4vbm9kZV9tb2R1bGVzL2RhdGUtYXJpdGhtZXRpYy9pbmRleC5qcz8zYjg0Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBNSUxJICAgID0gJ21pbGxpc2Vjb25kcydcbiAgLCBTRUNPTkRTID0gJ3NlY29uZHMnXG4gICwgTUlOVVRFUyA9ICdtaW51dGVzJ1xuICAsIEhPVVJTICAgPSAnaG91cnMnXG4gICwgREFZICAgICA9ICdkYXknXG4gICwgV0VFSyAgICA9ICd3ZWVrJ1xuICAsIE1PTlRIICAgPSAnbW9udGgnXG4gICwgWUVBUiAgICA9ICd5ZWFyJ1xuICAsIERFQ0FERSAgPSAnZGVjYWRlJ1xuICAsIENFTlRVUlkgPSAnY2VudHVyeSc7XG5cbnZhciBtdWx0aXBsaWVyTWlsbGkgPSB7XG4gICdtaWxsaXNlY29uZHMnOiAxLFxuICAnc2Vjb25kcyc6IDEwMDAsXG4gICdtaW51dGVzJzogNjAgKiAxMDAwLFxuICAnaG91cnMnOiA2MCAqIDYwICogMTAwMCxcbiAgJ2RheSc6IDI0ICogNjAgKiA2MCAqIDEwMDAsXG4gICd3ZWVrJzogNyAqIDI0ICogNjAgKiA2MCAqIDEwMDAgXG59XG5cbnZhciBtdWx0aXBsaWVyTW9udGggPSB7XG4gICdtb250aCc6IDEsXG4gICd5ZWFyJzogMTIsXG4gICdkZWNhZGUnOiAxMCAqIDEyLFxuICAnY2VudHVyeSc6IDEwMCAqIDEyXG59XG5cbmZ1bmN0aW9uIGRheXNPZih5ZWFyKSB7XG4gIHJldHVybiBbMzEsIGRheXNJbkZlYih5ZWFyKSwgMzEsIDMwLCAzMSwgMzAsIDMxLCAzMSwgMzAsIDMxLCAzMCwgMzFdXG59XG5cbmZ1bmN0aW9uIGRheXNJbkZlYih5ZWFyKSB7XG4gIHJldHVybiAoXG4gICAgICB5ZWFyICUgNCA9PT0gMCBcbiAgICAgICYmIHllYXIgJSAxMDAgIT09IDBcbiAgICApIHx8IHllYXIgJSA0MDAgPT09IDBcbiAgICAgID8gMjlcbiAgICAgIDogMjhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZChkLCBudW0sIHVuaXQpIHtcbiAgZCA9IG5ldyBEYXRlKGQpXG5cbiAgc3dpdGNoICh1bml0KXtcbiAgICBjYXNlIE1JTEk6XG4gICAgY2FzZSBTRUNPTkRTOlxuICAgIGNhc2UgTUlOVVRFUzpcbiAgICBjYXNlIEhPVVJTOlxuICAgIGNhc2UgREFZOlxuICAgIGNhc2UgV0VFSzpcbiAgICAgIHJldHVybiBhZGRNaWxsaXMoZCwgbnVtICogbXVsdGlwbGllck1pbGxpW3VuaXRdKVxuICAgIGNhc2UgTU9OVEg6XG4gICAgY2FzZSBZRUFSOlxuICAgIGNhc2UgREVDQURFOlxuICAgIGNhc2UgQ0VOVFVSWTpcbiAgICAgIHJldHVybiBhZGRNb250aHMoZCwgbnVtICogbXVsdGlwbGllck1vbnRoW3VuaXRdKVxuICB9XG5cbiAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCB1bml0czogXCInICsgdW5pdCArICdcIicpXG59XG5cbmZ1bmN0aW9uIGFkZE1pbGxpcyhkLCBudW0pIHtcbiAgdmFyIG5leHREYXRlID0gbmV3IERhdGUoKyhkKSArIG51bSlcblxuICByZXR1cm4gc29sdmVEU1QoZCwgbmV4dERhdGUpXG59XG5cbmZ1bmN0aW9uIGFkZE1vbnRocyhkLCBudW0pIHtcbiAgdmFyIHllYXIgPSBkLmdldEZ1bGxZZWFyKClcbiAgICAsIG1vbnRoID0gZC5nZXRNb250aCgpXG4gICAgLCBkYXkgPSBkLmdldERhdGUoKVxuICAgICwgdG90YWxNb250aHMgPSB5ZWFyICogMTIgKyBtb250aCArIG51bVxuICAgICwgbmV4dFllYXIgPSBNYXRoLnRydW5jKHRvdGFsTW9udGhzIC8gMTIpXG4gICAgLCBuZXh0TW9udGggPSB0b3RhbE1vbnRocyAlIDEyXG4gICAgLCBuZXh0RGF5ID0gTWF0aC5taW4oZGF5LCBkYXlzT2YobmV4dFllYXIpW25leHRNb250aF0pXG5cbiAgdmFyIG5leHREYXRlID0gbmV3IERhdGUoZClcbiAgbmV4dERhdGUuc2V0RnVsbFllYXIobmV4dFllYXIpXG5cbiAgLy8gVG8gYXZvaWQgYSBidWcgd2hlbiBzZXRzIHRoZSBGZWIgbW9udGhcbiAgLy8gd2l0aCBhIGRhdGUgPiAyOCBvciBkYXRlID4gMjkgKGxlYXAgeWVhcilcbiAgbmV4dERhdGUuc2V0RGF0ZSgxKVxuXG4gIG5leHREYXRlLnNldE1vbnRoKG5leHRNb250aClcbiAgbmV4dERhdGUuc2V0RGF0ZShuZXh0RGF5KVxuXG4gIHJldHVybiBuZXh0RGF0ZVxufVxuXG5mdW5jdGlvbiBzb2x2ZURTVChjdXJyZW50RGF0ZSwgbmV4dERhdGUpIHtcbiAgdmFyIGN1cnJlbnRPZmZzZXQgPSBjdXJyZW50RGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpXG4gICAgLCBuZXh0T2Zmc2V0ID0gbmV4dERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKVxuXG4gIC8vIGlmIGlzIERTVCwgYWRkIHRoZSBkaWZmZXJlbmNlIGluIG1pbnV0ZXNcbiAgLy8gZWxzZSB0aGUgZGlmZmVyZW5jZSBpcyB6ZXJvXG4gIHZhciBkaWZmTWludXRlcyA9IChuZXh0T2Zmc2V0IC0gY3VycmVudE9mZnNldClcblxuICByZXR1cm4gbmV3IERhdGUoKyhuZXh0RGF0ZSkgKyBkaWZmTWludXRlcyAqIG11bHRpcGxpZXJNaWxsaVsnbWludXRlcyddKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VidHJhY3QoZCwgbnVtLCB1bml0KSB7XG4gIHJldHVybiBhZGQoZCwgLW51bSwgdW5pdClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0T2YoZCwgdW5pdCwgZmlyc3RPZldlZWspIHtcbiAgZCA9IG5ldyBEYXRlKGQpXG5cbiAgc3dpdGNoICh1bml0KSB7XG4gICAgY2FzZSBDRU5UVVJZOlxuICAgIGNhc2UgREVDQURFOlxuICAgIGNhc2UgWUVBUjpcbiAgICAgICAgZCA9IG1vbnRoKGQsIDApO1xuICAgIGNhc2UgTU9OVEg6XG4gICAgICAgIGQgPSBkYXRlKGQsIDEpO1xuICAgIGNhc2UgV0VFSzpcbiAgICBjYXNlIERBWTpcbiAgICAgICAgZCA9IGhvdXJzKGQsIDApO1xuICAgIGNhc2UgSE9VUlM6XG4gICAgICAgIGQgPSBtaW51dGVzKGQsIDApO1xuICAgIGNhc2UgTUlOVVRFUzpcbiAgICAgICAgZCA9IHNlY29uZHMoZCwgMCk7XG4gICAgY2FzZSBTRUNPTkRTOlxuICAgICAgICBkID0gbWlsbGlzZWNvbmRzKGQsIDApO1xuICB9XG5cbiAgaWYgKHVuaXQgPT09IERFQ0FERSlcbiAgICBkID0gc3VidHJhY3QoZCwgeWVhcihkKSAlIDEwLCAneWVhcicpXG5cbiAgaWYgKHVuaXQgPT09IENFTlRVUlkpXG4gICAgZCA9IHN1YnRyYWN0KGQsIHllYXIoZCkgJSAxMDAsICd5ZWFyJylcblxuICBpZiAodW5pdCA9PT0gV0VFSylcbiAgICBkID0gd2Vla2RheShkLCAwLCBmaXJzdE9mV2Vlayk7XG5cbiAgcmV0dXJuIGRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVuZE9mKGQsIHVuaXQsIGZpcnN0T2ZXZWVrKXtcbiAgZCA9IG5ldyBEYXRlKGQpXG4gIGQgPSBzdGFydE9mKGQsIHVuaXQsIGZpcnN0T2ZXZWVrKVxuICBzd2l0Y2ggKHVuaXQpIHtcbiAgICBjYXNlIENFTlRVUlk6XG4gICAgY2FzZSBERUNBREU6XG4gICAgY2FzZSBZRUFSOlxuICAgIGNhc2UgTU9OVEg6XG4gICAgY2FzZSBXRUVLOlxuICAgICAgZCA9IGFkZChkLCAxLCB1bml0KVxuICAgICAgZCA9IHN1YnRyYWN0KGQsIDEsIERBWSlcbiAgICAgIGQuc2V0SG91cnMoMjMsIDU5LCA1OSwgOTk5KVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBEQVk6XG4gICAgICBkLnNldEhvdXJzKDIzLCA1OSwgNTksIDk5OSlcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgSE9VUlM6XG4gICAgY2FzZSBNSU5VVEVTOlxuICAgIGNhc2UgU0VDT05EUzpcbiAgICAgIGQgPSBhZGQoZCwgMSwgdW5pdClcbiAgICAgIGQgPSBzdWJ0cmFjdChkLCAxLCBNSUxJKVxuICB9XG4gIHJldHVybiBkXG59XG5cbmV4cG9ydCB2YXIgZXEgPSAgY3JlYXRlQ29tcGFyZXIoZnVuY3Rpb24oYSwgYil7IHJldHVybiBhID09PSBiIH0pXG5leHBvcnQgdmFyIG5lcSA9IGNyZWF0ZUNvbXBhcmVyKGZ1bmN0aW9uKGEsIGIpeyByZXR1cm4gYSAhPT0gYiB9KVxuZXhwb3J0IHZhciBndCA9ICBjcmVhdGVDb21wYXJlcihmdW5jdGlvbihhLCBiKXsgcmV0dXJuIGEgPiBiIH0pXG5leHBvcnQgdmFyIGd0ZSA9IGNyZWF0ZUNvbXBhcmVyKGZ1bmN0aW9uKGEsIGIpeyByZXR1cm4gYSA+PSBiIH0pXG5leHBvcnQgdmFyIGx0ID0gIGNyZWF0ZUNvbXBhcmVyKGZ1bmN0aW9uKGEsIGIpeyByZXR1cm4gYSA8IGIgfSlcbmV4cG9ydCB2YXIgbHRlID0gY3JlYXRlQ29tcGFyZXIoZnVuY3Rpb24oYSwgYil7IHJldHVybiBhIDw9IGIgfSlcblxuZXhwb3J0IGZ1bmN0aW9uIG1pbigpe1xuICByZXR1cm4gbmV3IERhdGUoTWF0aC5taW4uYXBwbHkoTWF0aCwgYXJndW1lbnRzKSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1heCgpe1xuICByZXR1cm4gbmV3IERhdGUoTWF0aC5tYXguYXBwbHkoTWF0aCwgYXJndW1lbnRzKSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluUmFuZ2UoZGF5LCBtaW4sIG1heCwgdW5pdCl7XG4gIHVuaXQgPSB1bml0IHx8ICdkYXknXG5cbiAgcmV0dXJuICghbWluIHx8IGd0ZShkYXksIG1pbiwgdW5pdCkpXG4gICAgICAmJiAoIW1heCB8fCBsdGUoZGF5LCBtYXgsIHVuaXQpKVxufVxuXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kcyA9IGNyZWF0ZUFjY2Vzc29yKCdNaWxsaXNlY29uZHMnKVxuZXhwb3J0IHZhciBzZWNvbmRzID0gICAgICBjcmVhdGVBY2Nlc3NvcignU2Vjb25kcycpXG5leHBvcnQgdmFyIG1pbnV0ZXMgPSAgICAgIGNyZWF0ZUFjY2Vzc29yKCdNaW51dGVzJylcbmV4cG9ydCB2YXIgaG91cnMgPSAgICAgICAgY3JlYXRlQWNjZXNzb3IoJ0hvdXJzJylcbmV4cG9ydCB2YXIgZGF5ID0gICAgICAgICAgY3JlYXRlQWNjZXNzb3IoJ0RheScpXG5leHBvcnQgdmFyIGRhdGUgPSAgICAgICAgIGNyZWF0ZUFjY2Vzc29yKCdEYXRlJylcbmV4cG9ydCB2YXIgbW9udGggPSAgICAgICAgY3JlYXRlQWNjZXNzb3IoJ01vbnRoJylcbmV4cG9ydCB2YXIgeWVhciA9ICAgICAgICAgY3JlYXRlQWNjZXNzb3IoJ0Z1bGxZZWFyJylcblxuZXhwb3J0IGZ1bmN0aW9uIGRlY2FkZShkLCB2YWwpIHtcbiAgcmV0dXJuIHZhbCA9PT0gdW5kZWZpbmVkXG4gICAgPyB5ZWFyKHN0YXJ0T2YoZCwgREVDQURFKSlcbiAgICA6IGFkZChkLCB2YWwgKyAxMCwgWUVBUik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjZW50dXJ5KGQsIHZhbCkge1xuICByZXR1cm4gdmFsID09PSB1bmRlZmluZWRcbiAgICA/IHllYXIoc3RhcnRPZihkLCBDRU5UVVJZKSlcbiAgICA6IGFkZChkLCB2YWwgKyAxMDAsIFlFQVIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd2Vla2RheShkLCB2YWwsIGZpcnN0RGF5KSB7XG4gICAgdmFyIHcgPSAoZGF5KGQpICsgNyAtIChmaXJzdERheSB8fCAwKSApICUgNztcblxuICAgIHJldHVybiB2YWwgPT09IHVuZGVmaW5lZFxuICAgICAgPyB3XG4gICAgICA6IGFkZChkLCB2YWwgLSB3LCBEQVkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlmZihkYXRlMSwgZGF0ZTIsIHVuaXQsIGFzRmxvYXQpIHtcbiAgdmFyIGRpdmlkZW5kLCBkaXZpc29yLCByZXN1bHQ7XG5cbiAgc3dpdGNoICh1bml0KSB7XG4gICAgY2FzZSBNSUxJOlxuICAgIGNhc2UgU0VDT05EUzpcbiAgICBjYXNlIE1JTlVURVM6XG4gICAgY2FzZSBIT1VSUzpcbiAgICBjYXNlIERBWTpcbiAgICBjYXNlIFdFRUs6XG4gICAgICBkaXZpZGVuZCA9IGRhdGUyLmdldFRpbWUoKSAtIGRhdGUxLmdldFRpbWUoKTsgYnJlYWs7XG4gICAgY2FzZSBNT05USDpcbiAgICBjYXNlIFlFQVI6XG4gICAgY2FzZSBERUNBREU6XG4gICAgY2FzZSBDRU5UVVJZOlxuICAgICAgZGl2aWRlbmQgPSAoeWVhcihkYXRlMikgLSB5ZWFyKGRhdGUxKSkgKiAxMiArIG1vbnRoKGRhdGUyKSAtIG1vbnRoKGRhdGUxKTsgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgdW5pdHM6IFwiJyArIHVuaXQgKyAnXCInKTtcbiAgfVxuXG4gIHN3aXRjaCAodW5pdCkge1xuICAgIGNhc2UgTUlMSTpcbiAgICAgICAgZGl2aXNvciA9IDE7IGJyZWFrO1xuICAgIGNhc2UgU0VDT05EUzpcbiAgICAgICAgZGl2aXNvciA9IDEwMDA7IGJyZWFrO1xuICAgIGNhc2UgTUlOVVRFUzpcbiAgICAgICAgZGl2aXNvciA9IDEwMDAgKiA2MDsgYnJlYWs7XG4gICAgY2FzZSBIT1VSUzpcbiAgICAgICAgZGl2aXNvciA9IDEwMDAgKiA2MCAqIDYwOyBicmVhaztcbiAgICBjYXNlIERBWTpcbiAgICAgICAgZGl2aXNvciA9IDEwMDAgKiA2MCAqIDYwICogMjQ7IGJyZWFrO1xuICAgIGNhc2UgV0VFSzpcbiAgICAgICAgZGl2aXNvciA9IDEwMDAgKiA2MCAqIDYwICogMjQgKiA3OyBicmVhaztcbiAgICBjYXNlIE1PTlRIOlxuICAgICAgICBkaXZpc29yID0gMTsgYnJlYWs7XG4gICAgY2FzZSBZRUFSOlxuICAgICAgICBkaXZpc29yID0gMTI7IGJyZWFrO1xuICAgIGNhc2UgREVDQURFOlxuICAgICAgICBkaXZpc29yID0gMTIwOyBicmVhaztcbiAgICBjYXNlIENFTlRVUlk6XG4gICAgICAgIGRpdmlzb3IgPSAxMjAwOyBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCB1bml0czogXCInICsgdW5pdCArICdcIicpO1xuICB9XG5cbiAgcmVzdWx0ID0gZGl2aWRlbmQgLyBkaXZpc29yO1xuXG4gIHJldHVybiBhc0Zsb2F0ID8gcmVzdWx0IDogTWF0aC5yb3VuZChyZXN1bHQpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBY2Nlc3NvcihtZXRob2Qpe1xuICB2YXIgaG91ckxlbmd0aCA9IChmdW5jdGlvbihtZXRob2QpIHsgIFxuICAgIHN3aXRjaChtZXRob2QpIHtcbiAgICAgIGNhc2UgJ01pbGxpc2Vjb25kcyc6XG4gICAgICAgIHJldHVybiAzNjAwMDAwO1xuICAgICAgY2FzZSAnU2Vjb25kcyc6XG4gICAgICAgIHJldHVybiAzNjAwO1xuICAgICAgY2FzZSAnTWludXRlcyc6XG4gICAgICAgIHJldHVybiA2MDtcbiAgICAgIGNhc2UgJ0hvdXJzJzpcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH0pKG1ldGhvZCk7XG4gIFxuICByZXR1cm4gZnVuY3Rpb24oZCwgdmFsKXtcbiAgICBpZiAodmFsID09PSB1bmRlZmluZWQpXG4gICAgICByZXR1cm4gZFsnZ2V0JyArIG1ldGhvZF0oKVxuXG4gICAgdmFyIGRhdGVPdXQgPSBuZXcgRGF0ZShkKVxuICAgIGRhdGVPdXRbJ3NldCcgKyBtZXRob2RdKHZhbClcbiAgICBcbiAgICBpZihob3VyTGVuZ3RoICYmIGRhdGVPdXRbJ2dldCcrbWV0aG9kXSgpICE9IHZhbCAmJiAobWV0aG9kID09PSAnSG91cnMnIHx8IHZhbCA+PWhvdXJMZW5ndGggJiYgKGRhdGVPdXQuZ2V0SG91cnMoKS1kLmdldEhvdXJzKCk8TWF0aC5mbG9vcih2YWwvaG91ckxlbmd0aCkpKSApe1xuICAgICAgLy9Ta2lwIERTVCBob3VyLCBpZiBpdCBvY2N1cnNcbiAgICAgIGRhdGVPdXRbJ3NldCcrbWV0aG9kXSh2YWwraG91ckxlbmd0aCk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBkYXRlT3V0XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29tcGFyZXIob3BlcmF0b3IpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChhLCBiLCB1bml0KSB7XG4gICAgcmV0dXJuIG9wZXJhdG9yKCtzdGFydE9mKGEsIHVuaXQpLCArc3RhcnRPZihiLCB1bml0KSlcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJNSUxJIiwiU0VDT05EUyIsIk1JTlVURVMiLCJIT1VSUyIsIkRBWSIsIldFRUsiLCJNT05USCIsIllFQVIiLCJERUNBREUiLCJDRU5UVVJZIiwibXVsdGlwbGllck1pbGxpIiwibXVsdGlwbGllck1vbnRoIiwiZGF5c09mIiwieWVhciIsImRheXNJbkZlYiIsImFkZCIsImQiLCJudW0iLCJ1bml0IiwiRGF0ZSIsImFkZE1pbGxpcyIsImFkZE1vbnRocyIsIlR5cGVFcnJvciIsIm5leHREYXRlIiwic29sdmVEU1QiLCJnZXRGdWxsWWVhciIsIm1vbnRoIiwiZ2V0TW9udGgiLCJkYXkiLCJnZXREYXRlIiwidG90YWxNb250aHMiLCJuZXh0WWVhciIsIk1hdGgiLCJ0cnVuYyIsIm5leHRNb250aCIsIm5leHREYXkiLCJtaW4iLCJzZXRGdWxsWWVhciIsInNldERhdGUiLCJzZXRNb250aCIsImN1cnJlbnREYXRlIiwiY3VycmVudE9mZnNldCIsImdldFRpbWV6b25lT2Zmc2V0IiwibmV4dE9mZnNldCIsImRpZmZNaW51dGVzIiwic3VidHJhY3QiLCJzdGFydE9mIiwiZmlyc3RPZldlZWsiLCJkYXRlIiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsIm1pbGxpc2Vjb25kcyIsIndlZWtkYXkiLCJlbmRPZiIsInNldEhvdXJzIiwiZXEiLCJjcmVhdGVDb21wYXJlciIsImEiLCJiIiwibmVxIiwiZ3QiLCJndGUiLCJsdCIsImx0ZSIsImFwcGx5IiwiYXJndW1lbnRzIiwibWF4IiwiaW5SYW5nZSIsImNyZWF0ZUFjY2Vzc29yIiwiZGVjYWRlIiwidmFsIiwidW5kZWZpbmVkIiwiY2VudHVyeSIsImZpcnN0RGF5IiwidyIsImRpZmYiLCJkYXRlMSIsImRhdGUyIiwiYXNGbG9hdCIsImRpdmlkZW5kIiwiZGl2aXNvciIsInJlc3VsdCIsImdldFRpbWUiLCJyb3VuZCIsIm1ldGhvZCIsImhvdXJMZW5ndGgiLCJkYXRlT3V0IiwiZ2V0SG91cnMiLCJmbG9vciIsIm9wZXJhdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/date-arithmetic/index.js\n");

/***/ })

};
;