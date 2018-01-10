const { dropRight } = require('../lib/index.js').default;

test('测试 dropRight', () => {
    const arr = [1, 2, 3];
    // 通常情况下
    expect(dropRight(arr, 1)).toEqual(
       [1, 2]
    )
    // 默认情况下
    expect(dropRight(arr)).toEqual(
        [1, 2]
    )
    // 刚好等于 数组长度的情况下
    expect(dropRight(arr, arr.length)).toEqual(
       []
    )
    // 大于数组长度的情况下
    expect(dropRight(arr, arr.length + 1)).toEqual(
       []
    )
    // 为零的情况下
    expect(dropRight(arr, 0)).toEqual(
       [1,2,3]
    )
})