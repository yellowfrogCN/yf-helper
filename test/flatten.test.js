const {flatten} = require('../lib');
test('测试 flatten：把数组的深层嵌套替换成单层嵌套', () => {
    expect(flatten([1, 2, '24', [3, 5, [6, 7]]])).toEqual(
        [1, 2, "24", 3, 5, [6, 7]]
    )
})