"use strict";
exports.__esModule = true;
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
exports["default"] = notEmpty;
