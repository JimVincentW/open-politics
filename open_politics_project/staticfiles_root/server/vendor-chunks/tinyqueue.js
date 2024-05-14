"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/tinyqueue";
exports.ids = ["vendor-chunks/tinyqueue"];
exports.modules = {

/***/ "(ssr)/./node_modules/tinyqueue/index.js":
/*!*****************************************!*\
  !*** ./node_modules/tinyqueue/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TinyQueue)\n/* harmony export */ });\n\nclass TinyQueue {\n    constructor(data = [], compare = defaultCompare) {\n        this.data = data;\n        this.length = this.data.length;\n        this.compare = compare;\n\n        if (this.length > 0) {\n            for (let i = (this.length >> 1) - 1; i >= 0; i--) this._down(i);\n        }\n    }\n\n    push(item) {\n        this.data.push(item);\n        this.length++;\n        this._up(this.length - 1);\n    }\n\n    pop() {\n        if (this.length === 0) return undefined;\n\n        const top = this.data[0];\n        const bottom = this.data.pop();\n        this.length--;\n\n        if (this.length > 0) {\n            this.data[0] = bottom;\n            this._down(0);\n        }\n\n        return top;\n    }\n\n    peek() {\n        return this.data[0];\n    }\n\n    _up(pos) {\n        const {data, compare} = this;\n        const item = data[pos];\n\n        while (pos > 0) {\n            const parent = (pos - 1) >> 1;\n            const current = data[parent];\n            if (compare(item, current) >= 0) break;\n            data[pos] = current;\n            pos = parent;\n        }\n\n        data[pos] = item;\n    }\n\n    _down(pos) {\n        const {data, compare} = this;\n        const halfLength = this.length >> 1;\n        const item = data[pos];\n\n        while (pos < halfLength) {\n            let left = (pos << 1) + 1;\n            let best = data[left];\n            const right = left + 1;\n\n            if (right < this.length && compare(data[right], best) < 0) {\n                left = right;\n                best = data[right];\n            }\n            if (compare(best, item) >= 0) break;\n\n            data[pos] = best;\n            pos = left;\n        }\n\n        data[pos] = item;\n    }\n}\n\nfunction defaultCompare(a, b) {\n    return a < b ? -1 : a > b ? 1 : 0;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdGlueXF1ZXVlL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlEQUFpRCxRQUFRO0FBQ3pEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsZUFBZTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxlQUFlO0FBQzlCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtZ2VuZXJhdGlvbi1pbnRlcmZhY2UvLi9ub2RlX21vZHVsZXMvdGlueXF1ZXVlL2luZGV4LmpzPzIwNTYiXSwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW55UXVldWUge1xuICAgIGNvbnN0cnVjdG9yKGRhdGEgPSBbXSwgY29tcGFyZSA9IGRlZmF1bHRDb21wYXJlKSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gdGhpcy5kYXRhLmxlbmd0aDtcbiAgICAgICAgdGhpcy5jb21wYXJlID0gY29tcGFyZTtcblxuICAgICAgICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gKHRoaXMubGVuZ3RoID4+IDEpIC0gMTsgaSA+PSAwOyBpLS0pIHRoaXMuX2Rvd24oaSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdXNoKGl0ZW0pIHtcbiAgICAgICAgdGhpcy5kYXRhLnB1c2goaXRlbSk7XG4gICAgICAgIHRoaXMubGVuZ3RoKys7XG4gICAgICAgIHRoaXMuX3VwKHRoaXMubGVuZ3RoIC0gMSk7XG4gICAgfVxuXG4gICAgcG9wKCkge1xuICAgICAgICBpZiAodGhpcy5sZW5ndGggPT09IDApIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgICAgICAgY29uc3QgdG9wID0gdGhpcy5kYXRhWzBdO1xuICAgICAgICBjb25zdCBib3R0b20gPSB0aGlzLmRhdGEucG9wKCk7XG4gICAgICAgIHRoaXMubGVuZ3RoLS07XG5cbiAgICAgICAgaWYgKHRoaXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5kYXRhWzBdID0gYm90dG9tO1xuICAgICAgICAgICAgdGhpcy5fZG93bigwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0b3A7XG4gICAgfVxuXG4gICAgcGVlaygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVswXTtcbiAgICB9XG5cbiAgICBfdXAocG9zKSB7XG4gICAgICAgIGNvbnN0IHtkYXRhLCBjb21wYXJlfSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBkYXRhW3Bvc107XG5cbiAgICAgICAgd2hpbGUgKHBvcyA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IChwb3MgLSAxKSA+PiAxO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudCA9IGRhdGFbcGFyZW50XTtcbiAgICAgICAgICAgIGlmIChjb21wYXJlKGl0ZW0sIGN1cnJlbnQpID49IDApIGJyZWFrO1xuICAgICAgICAgICAgZGF0YVtwb3NdID0gY3VycmVudDtcbiAgICAgICAgICAgIHBvcyA9IHBhcmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGFbcG9zXSA9IGl0ZW07XG4gICAgfVxuXG4gICAgX2Rvd24ocG9zKSB7XG4gICAgICAgIGNvbnN0IHtkYXRhLCBjb21wYXJlfSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGhhbGZMZW5ndGggPSB0aGlzLmxlbmd0aCA+PiAxO1xuICAgICAgICBjb25zdCBpdGVtID0gZGF0YVtwb3NdO1xuXG4gICAgICAgIHdoaWxlIChwb3MgPCBoYWxmTGVuZ3RoKSB7XG4gICAgICAgICAgICBsZXQgbGVmdCA9IChwb3MgPDwgMSkgKyAxO1xuICAgICAgICAgICAgbGV0IGJlc3QgPSBkYXRhW2xlZnRdO1xuICAgICAgICAgICAgY29uc3QgcmlnaHQgPSBsZWZ0ICsgMTtcblxuICAgICAgICAgICAgaWYgKHJpZ2h0IDwgdGhpcy5sZW5ndGggJiYgY29tcGFyZShkYXRhW3JpZ2h0XSwgYmVzdCkgPCAwKSB7XG4gICAgICAgICAgICAgICAgbGVmdCA9IHJpZ2h0O1xuICAgICAgICAgICAgICAgIGJlc3QgPSBkYXRhW3JpZ2h0XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb21wYXJlKGJlc3QsIGl0ZW0pID49IDApIGJyZWFrO1xuXG4gICAgICAgICAgICBkYXRhW3Bvc10gPSBiZXN0O1xuICAgICAgICAgICAgcG9zID0gbGVmdDtcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGFbcG9zXSA9IGl0ZW07XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkZWZhdWx0Q29tcGFyZShhLCBiKSB7XG4gICAgcmV0dXJuIGEgPCBiID8gLTEgOiBhID4gYiA/IDEgOiAwO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tinyqueue/index.js\n");

/***/ })

};
;