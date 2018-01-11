"use strict";
exports.__esModule = true;
/**
 * 模仿 github 上的 classnames
 * @param arg json、数组、字符串
 */
function classnames() {
    var arg = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arg[_i] = arguments[_i];
    }
    var temArr = [];
    // 用rest语法传进来的arg是个数组
    arg.map(function (item, index) {
        if (typeof item === 'string') {
            return temArr.push(item);
        }
        if (item) {
            // 如果不是数组的话
            if (!Array.isArray(item)) {
                for (var key in item) {
                    if (item[key]) {
                        temArr.push(key);
                    }
                }
                return temArr;
            }
            else {
                // 递归调用
                var arr = item.map(function (item) {
                    return classnames(item);
                });
                arr = arr.filter(function (item) { return item !== ''; });
                temArr = temArr.concat(arr);
                return temArr;
            }
        }
    });
    return temArr.join(' ');
}
exports["default"] = classnames;
