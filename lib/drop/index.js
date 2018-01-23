"use strict";
exports.__esModule = true;
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
        // 不能return item 因为 return 0 也算false
        if (index >= num)
            return true;
    });
}
exports["default"] = drop;
