"use strict";
exports.__esModule = true;
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
exports["default"] = chunk;
