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
    if (!info || typeof (info) !== 'string') {
        console.warn('最好在使用actionCreator创建action的时候,加入第二个参数,且是String类型,为了更方便您日后的工作！');
    }
    return function (payload, extendType) {
        if (extendType === void 0) { extendType = ''; }
        // 因为存在递归的概念，故必须用另外一个变量来保存
        var newInfo = info;
        var newType = type;
        // 如果不传额外的type，则用原先定义的字符串''，否则自动在额外的前面加上 '_'
        if (extendType && typeof (extendType) === 'string') {
            // 因为SUCCESS与ERROR经常使用，故这边直接写死
            switch (extendType.toUpperCase()) {
                case 'SUCCESS':
                    newInfo = info + '~~成功了~~';
                    break;
                case 'ERROR':
                    newInfo = info + '~~失败了~~';
                    break;
                case 'FINISH':
                    newInfo = info + '~~结束了~~';
                    break;
                case 'LOADING':
                    newInfo = info + '~~loading了~~';
                    break;
            }
            newType = type + '_' + extendType;
        }
        var result = {
            type: newType,
            payload: payload
        };
        if (info)
            result['info'] = newInfo;
        return result;
    };
}
exports["default"] = actionCreator;
