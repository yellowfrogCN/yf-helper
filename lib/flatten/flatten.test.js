const flatten = require('./index');
test('测试 flatten 函数', () => {
    expect(flatten([1,2, [3,4, [5,6, {a: 7}]]])).toEqual(
        [1,2,3,4,5,6,{a: 7}]
    )
})