const {flattenDeep} = require('../lib');
test('测试 flattenDeep : 再怎么深层的嵌套都转化为单层嵌套', () => {
    expect(flattenDeep([1,2, [3,4, [5,6, {a: 7}]]])).toEqual(
        [1,2,3,4,5,6,{a: 7}]
    )
    // 什么都不传
    expect(flattenDeep()).toEqual(
        []
    )
    // 传了 字符串 或者数字
    expect(flattenDeep(0)).toEqual(
        []
    )
    expect(flattenDeep(1)).toEqual(
        []
    )
    expect(flattenDeep('1')).toEqual(
        []
    )
    // 传了 json
    expect(flattenDeep({a: 1})).toEqual(
        []
    )
})