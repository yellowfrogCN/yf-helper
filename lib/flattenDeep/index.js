"use strict";
exports.__esModule = true;
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
exports["default"] = flattenDeep;
