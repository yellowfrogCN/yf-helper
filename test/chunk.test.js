const { chunk } = require('../lib/index.js').default;

test('测试 chunk ： 返回一个包含拆分块数组的新数组(相当于一个二维数组)', () => {
    const arr = [1, 2, 3];
    // 通常情况下
    expect(chunk(arr, 1)).toEqual(
       [[1],[2,3]]
    )
    // 刚好等于 数组长度的情况下
    expect(chunk(arr, arr.length)).toEqual(
       [[1,2,3],[]]
    )
    // 大于数组长度的情况下
    expect(chunk(arr, arr.length + 1)).toEqual(
       [[1,2,3],[]]
    )
    // 为零的情况下
    expect(chunk(arr, 0)).toEqual(
       [[],[1,2,3]]
    )
})