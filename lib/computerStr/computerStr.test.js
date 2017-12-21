const compouterStr = require('./index');
/**
 * 真假  expect(n).not.toBeTruthy();  expect(n).toBeFalsy();
 */
test('测试 compouterStr 的函数', () => {
    expect(compouterStr('')).toBeFalsy();
    expect(compouterStr('aaabbbccccc')).toEqual({
        strIs: "c",
        value: 5
    })
})
