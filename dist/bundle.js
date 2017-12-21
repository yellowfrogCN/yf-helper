/******/ (function(modules) { // webpackBootstrap
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
/***/ (function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * 判断是否为空，默认情况下，这里空数组与空对象也算为空
 * @param {*} arg: 要判断的参数
 * @param {*} object: 如果为true，则空数组与空对象也算为空，如果为false，则只判断 undefined null NaN
 */
function notEmpty(arg) {
    var object = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (arg === '') return false;
    var obj = {
        'undefined': undefined,
        'null': null,
        'NaN': NaN
        // undefined null NaN 判断
    };if (Object.is(obj.undefined, arg) || Object.is(obj.null, arg) || Object.is(obj.NaN, arg)) return false;
    // 哪怕是数组，Object.keys也会给出数组的标识eg: Object.keys([1,43,4,5]) === [0, 1, 2, 3]; 对象跟数据的typeof都是object
    if (object && Object.keys(arg).length === 0 && (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object') return false;
    return true;
}
module.exports = notEmpty;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    'computerStr': __webpack_require__(2),
    'notEmpty': __webpack_require__(0),
    'flatten': __webpack_require__(3)
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

/**
 * 计算字符串中最多的字符
 * 返回格式 {
 *  strIs: str,
 *  value: num
 * }
 * @param {*} str: 要计算的字符串 为''时返回 false
 * @param {*} isMax: 为 true 是计算最大字符，为 fasle 是计算最小字符
 */
function computerStr(str) {
    var isMax = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    // 如果为空，返回false
    if (str === '') return false;
    // 临时变量
    var temObj = {};
    for (var i = 0; i < str.length; i++) {
        // 循环这个str 如果str[i] 已经存在，则这个value值+1
        if (temObj[str[i]]) {
            temObj[str[i]].value += 1;
        } else {
            // 否则的话 设定一个通用模板，为了后续sort方便排序
            temObj[str[i]] = {
                strIs: str[i],
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
    var result = temArr.sort(function (a, b) {
        return b.value - a.value;
    });
    // 利用函数的第二个参数,如果为true则返回最大，否则返回最小
    if (isMax) {
        return result[0];
    } else {
        return result[result.length - 1];
    }
}
module.exports = computerStr;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var notEmpty = __webpack_require__(0);
function flatten(arr) {
    // 传进来乱七八糟的值，干掉
    if (!notEmpty(arr, false)) return false;
    var temArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            // 这里用到递归，注意是用concat 如果用push的话则达不到效果
            temArr = temArr.concat(flatten(arr[i]));
        } else {
            temArr.push(arr[i]);
        }
    }
    return temArr;
}
module.exports = flatten;

/***/ })
/******/ ]);