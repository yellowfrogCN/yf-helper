const { actionCreator } = require('../lib/index.js').default;

test('测试 actionCreator ： 简化创建action的高阶函数', () => {
    // 忘记传入type的情况下
    expect(actionCreator()).toEqual(
        {
            type: ''
        }
    )
    // 传入的type不是String类型时
    expect(actionCreator(1)).toEqual(
        {
            type: ''
        }
    )
    const test = actionCreator('TEST');
    expect(test(2)).toEqual(
        {
            type: 'TEST',
            payload: 2
        }
    )
    expect(test(1, 'REQUEST')).toEqual(
        {
            type: 'TEST_REQUEST',
            payload: 1
        }
    )
    expect(test([1,2,4], 'SUCCESS')).toEqual(
        {
            type: 'TEST_SUCCESS',
            payload: [1,2,4]
        }
    )
    expect(test({a: 1, b: 2}, 'ERROR')).toEqual(
        {
            type: 'TEST_ERROR',
            payload: {a: 1, b: 2}
        }
    )
    const test2 = actionCreator('TEST', '举个栗子')
    expect(test2(1)).toEqual(
        {
            type: 'TEST',
            payload: 1,
            info: '举个栗子'
        }
    )
    // 成功情况下
    expect(test2(1, 'SUCCESS')).toEqual(
        {
            type: 'TEST_SUCCESS',
            payload: 1,
            info: '举个栗子~~成功了~~'
        }
    )
    // 失败情况下
    expect(test2(1, 'ERROR')).toEqual(
        {
            type: 'TEST_ERROR',
            payload: 1,
            info: '举个栗子~~失败了~~'
        }
    )
    // 假设不是给的 SUCCESS 或者 ERROR
    expect(test2(1, 'helloworld')).toEqual(
        {
            type: 'TEST_helloworld',
            payload: 1,
            info: '举个栗子'
        }
    )
})