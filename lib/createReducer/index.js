"use strict";
exports.__esModule = true;
/**
 * 创建 reducer 的 模板
 * http://cn.redux.js.org/docs/recipes/reducers/RefactoringReducersExample.html
 * @param {*} initialState
 * @param {*} handlers
 */
function createReducer(initialState, handlers) {
    // 前面这步只会使用一次
    return function reducer(state, action) {
        if (state === void 0) { state = initialState; }
        if (handlers.hasOwnProperty(action.type)) {
            // "ACTION_TYPE": function ===> function (state, action)
            // handlers[action.type] === function
            return handlers[action.type](state, action);
        }
        else {
            return state;
        }
    };
}
exports["default"] = createReducer;
