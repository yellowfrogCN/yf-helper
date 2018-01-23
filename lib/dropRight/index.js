"use strict";
exports.__esModule = true;
/**
 * 从右边开始，去除数组的 item
 * @param arr array
 * @param num 想要去除的个数 从 1 开始计算 理解为丢掉几个
 */
function dropRight(arr, num) {
    if (num === void 0) { num = 1; }
    if (!Array.isArray(arr))
        return [];
    if (typeof num !== 'number')
        return arr;
    var len = arr.length;
    return arr.filter(function (item, index) {
        // arr.length - 1（默认值） 可以理解为 index 的最大值 一次类推
        // 不能return item 因为 return 0 也算false
        if (len - num > index)
            return true;
    });
}
exports["default"] = dropRight;
