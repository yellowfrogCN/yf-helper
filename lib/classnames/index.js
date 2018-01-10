"use strict";
exports.__esModule = true;
/**
 * 模仿 github 上的 classnames
 * @param arg json、数组、字符串
 */
function classnames(arg) {
    if (typeof arg === 'string')
        return arg;
    if (typeof arg === 'object') {
        if (!Array.isArray(arg)) {
            var temArr = [];
            for (var key in arg) {
                if (arg[key]) {
                    temArr.push(key);
                }
            }
            return temArr.join(' ');
        }
        else {
            return arg.filter(function (item) { return typeof item === 'string'; }).join(' ');
        }
    }
    return '';
}
exports["default"] = classnames;
