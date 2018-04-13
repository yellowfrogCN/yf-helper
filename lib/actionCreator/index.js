"use strict";
exports.__esModule = true;
/**
 * 简化创建 action 的高阶函数
 * @param type 传入字符串，相当于 type
 */
function actionCreator(type, info) {
    if (type === void 0) { type = ''; }
    if (info === void 0) { info = ''; }
    if (!type || typeof (type) !== 'string') {
        console.error('使用actionCreator创建action的时候,第一个参数是 action.type,请务必输入字符串,否则这个函数没有意义');
        return { type: '' };
    }
    if (info || typeof (info) !== 'string') {
        console.warn('最好在使用actionCreator创建action的时候,加入第二个参数,且是String类型,为了更方便您日后的工作！');
    }
    return function (payload, extendType) {
        if (extendType === void 0) { extendType = ''; }
        // 如果不传额外的type，则用原先定义的字符串''，否则自动在额外的前面加上 '_'
        // let newInfo : string = '';
        if (extendType && typeof (extendType) === 'string') {
            extendType = '_' + extendType;
            // 因为SUCCESS与ERROR经常使用，故这边直接写死
            switch (extendType.toUpperCase()) {
                case 'SUCCESS':
                    info = info + '~~成功了~~';
                    break;
                case 'ERROR':
                    info = info + '~~失败了~~';
                    break;
            }
        }
        type = type + extendType;
        console.log(type);
        var result = {
            type: type,
            payload: payload
        };
        if (info)
            result['info'] = info;
        return result;
    };
}
exports["default"] = actionCreator;
const test = actionCreator('TEST');
test(1, 'REQUEST')
test(1, 'SUCCESS')
test(1, 'ERROR')
