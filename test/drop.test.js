const { drop } = require('../lib').default;

test('测试 drop ： 丢掉函数的第几个，默认从1开始', () => {
    const arr = [1, 2, 3];
    // 通常情况下
    expect(drop(arr, 1)).toEqual(
       [2,3]
    )
    // 默认情况下
    expect(drop(arr)).toEqual(
       [2, 3]
    )
    // 刚好等于 数组长度的情况下
    expect(drop(arr, arr.length)).toEqual(
       []
    )
    // 大于数组长度的情况下
    expect(drop(arr, arr.length + 1)).toEqual(
       []
    )
    // 为零的情况下
    expect(drop(arr, 0)).toEqual(
       [1,2,3]
    )
})