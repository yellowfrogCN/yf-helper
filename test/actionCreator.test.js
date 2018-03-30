const { actionCreator } = require('../lib/index.js').default;

test('测试 actionCreator ： 简化创建action的高阶函数', () => {
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
})