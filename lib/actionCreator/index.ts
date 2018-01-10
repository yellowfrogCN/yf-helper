/**
 * 简化创建 action 的高阶函数
 * @param type 传入字符串，相当于 type
 */
function actionCreator (type: string) : Object {
    return function (payload: any, extendType : string = '') : Object {
        // 如果不传额外的type，则用原先定义的，否则自动在额外的前面加上 '_'
        extendType = extendType ? '_' + extendType : '';
        return {
            type: type + extendType,
            payload
        }
    }
}

export default actionCreator;