/******/ module.exports = (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 判断是否为空，默认情况下，这里空数组与空对象也算为空
 * @param {*} arg: 要判断的参数
 * @param {*} object: 如果为true，则空数组与空对象也算为空，如果为false，则只判断 undefined null NaN
 */
function notEmpty(arg) {
    if (!arg)
        return false;
    // 这里主要用来判断是否是 [] 或者 {}
    if (Object.keys(arg).length === 0 && typeof (arg) === 'object') {
        return false;
    }
    return true;
}
exports.default = notEmpty;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var createReducer_1 = __webpack_require__(2);
var repeat_1 = __webpack_require__(3);
var notEmpty_1 = __webpack_require__(0);
var flatten_1 = __webpack_require__(4);
var flattenDeep_1 = __webpack_require__(5);
var trim_1 = __webpack_require__(6);
var chunk_1 = __webpack_require__(7);
var drop_1 = __webpack_require__(8);
exports.default = {
    createReducer: createReducer_1.default,
    repeat: repeat_1.default,
    notEmpty: notEmpty_1.default,
    flatten: flatten_1.default,
    flattenDeep: flattenDeep_1.default,
    trim: trim_1.default,
    chunk: chunk_1.default,
    drop: drop_1.default
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 创建 reducer 的 模板
 * http://cn.redux.js.org/docs/recipes/reducers/RefactoringReducersExample.html
 * @param {*} initialState
 * @param {*} handlers
 */
function createReducer(initialState, handlers) {
    // 前面这步只会使用一次
    return function reducer(state, action) {
        if (state === void 0) { state = initialState; }
        if (handlers.hasOwnProperty(action.type)) {
            // "ACTION_TYPE": function ===> function (state, action)
            // handlers[action.type] === function
            return handlers[action.type](state, action);
        }
        else {
            return state;
        }
    };
}
exports.default = createReducer;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 计算重复值
 * @param {*} arg: 要计算的字符串 为''时返回 false
 * @param {*} isMax: 为 true 是计算最大字符，为 fasle 是计算最小字符
 */
var notEmpty_1 = __webpack_require__(0);
function repeat(arg, isMax) {
    if (isMax === void 0) { isMax = true; }
    // 如果为空，返回false
    if (!notEmpty_1.default(arg))
        return {};
    // 临时变量
    var temObj = {};
    for (var i = 0; i < arg.length; i++) {
        // 循环这个str 如果str[i] 已经存在，则这个value值+1
        if (temObj[arg[i]]) {
            temObj[arg[i]].value += 1;
        }
        else {
            // ★否则的话 设定一个通用模板，为了后续sort方便排序
            temObj[arg[i]] = {
                label: arg[i],
                value: 1
            };
        }
    }
    var temArr = [];
    // 把刚才的temObj换成数组，为了后续sort方便排序
    for (var key in temObj) {
        temArr.push(temObj[key]);
    }
    // 利用sort的强大功能排好序，b - a是从大到小, 反之是从小到大
    var result = temArr.sort(function (a, b) { return b.value - a.value; });
    // 利用函数的第二个参数,如果为true则返回最大，否则返回最小
    if (isMax) {
        return result[0];
    }
    else {
        return result[result.length - 1];
    }
}
exports.default = repeat;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function flatten(arr) {
    if (!Array.isArray(arr))
        return [];
    return [].concat.apply([], arr);
}
exports.default = flatten;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function flattenDeep(arr) {
    // 传进来乱七八糟的值，干掉
    if (!Array.isArray(arr))
        return [];
    var temArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            // 这里用到递归，注意是用concat 如果用push的话则达不到效果
            temArr = temArr.concat(flattenDeep(arr[i]));
        }
        else {
            temArr.push(arr[i]);
        }
    }
    return temArr;
}
exports.default = flattenDeep;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// 增强型 trim
function trim(str, range) {
    if (range === void 0) { range = 3; }
    if (typeof (str) !== 'string')
        return str;
    switch (range) {
        case 1:
            // 去除 首 空格
            return str.replace(/\s+/, '');
        case 2:
            // 去除 尾 空格
            return str.replace(/\s+$/, '');
        case 3:
            // 去除首尾空格
            return str.replace(/\s+/, '').replace(/\s+$/, '');
        case 4:
            // 去除全部空格
            return str.replace(/\s+/g, '');
        default:
            return str;
    }
}
exports.default = trim;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function chunk(arr, size) {
    // 如果不是数组的话，直接返回空数组
    if (!Array.isArray(arr))
        return [];
    // 定义两个空数组 一个保存 < size 的 item；一个用来保存 其他的 item
    // 或许后续有更好的方法
    var temArr = [];
    var temArr2 = [];
    // 循环 传入进来的 arr，< size 的怼到第一个temArr，其他的则怼到第二个temArr （用for循环也是一样一样的道理）
    arr.map(function (item, index) {
        if (index < size) {
            temArr.push(item);
        }
        else {
            temArr2.push(item);
        }
    });
    // 最后定义一个即将返回的 array，push之前的两个temArr，然后返回
    // 感觉有点low，但先达到效果
    var result = [];
    result.push(temArr);
    result.push(temArr2);
    return result;
}
exports.default = chunk;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 去除数组的 item
 * @param arr array
 * @param num 想要去除的个数 从 1 开始计算 理解为丢掉几个
 */
function drop(arr, num) {
    if (num === void 0) { num = 1; }
    if (!Array.isArray(arr))
        return [];
    return arr.filter(function (item, index) {
        // 因为index是从0开始的，index是从1开始的
        if (index >= num)
            return item;
    });
}
exports.default = drop;


/***/ })
/******/ ]);