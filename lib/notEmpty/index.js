/**
 * 判断是否为空，默认情况下，这里空数组与空对象也算为空
 * @param {*} arg: 要判断的参数
 * @param {*} object: 如果为true，则空数组与空对象也算为空，如果为false，则只判断 undefined null NaN
 */
function notEmpty (arg, object = true) {
    if (arg === '') return false;
    const obj = {
        'undefined': undefined,
        'null': null,
        'NaN': NaN
    }
    // undefined null NaN 判断
    if (Object.is(obj.undefined, arg) || Object.is(obj.null, arg) || Object.is(obj.NaN, arg)) return false;
    // 哪怕是数组，Object.keys也会给出数组的标识eg: Object.keys([1,43,4,5]) === [0, 1, 2, 3]; 对象跟数据的typeof都是object
    if (object && Object.keys(arg).length === 0 && typeof (arg) === 'object') return false;
    return true;
}
module.exports = notEmpty;