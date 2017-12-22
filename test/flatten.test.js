const flatten = require('../lib/flatten');
test('测试 flatten：把数组的深层嵌套替换成单层嵌套', () => {
    expect(flatten([1,2, [3,4, [5,6, {a: 7}]]])).toEqual(
        [1,2,3,4,5,6,{a: 7}]
    )
})