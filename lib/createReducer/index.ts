/**
 * 创建 reducer 的 模板
 * http://cn.redux.js.org/docs/recipes/reducers/RefactoringReducersExample.html
 * @param {*} initialState
 * @param {*} handlers
 */
function createReducer (initialState: Object | Array<any>, handlers: Object): Object {
    // 前面这步只会使用一次
    return function reducer (state = initialState, action) {
        if (handlers.hasOwnProperty(action.type)) {
            // "ACTION_TYPE": function ===> function (state, action)
            // handlers[action.type] === function
            return handlers[action.type](state, action);
        } else {
            return state;
        }
    }
}

export default createReducer;