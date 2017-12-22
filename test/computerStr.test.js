const compouterStr = require('../lib/computerStr');
/**
 * 真假  expect(n).not.toBeTruthy();  expect(n).toBeFalsy();
 */
test('测试 compouterStr：测试字符串中的重复最多的字符', () => {
    expect(compouterStr('')).toBeFalsy();
    expect(compouterStr('aaabbbccccc')).toEqual(
        {
            strIs: "c",
            value: 5
        }
    )
})
