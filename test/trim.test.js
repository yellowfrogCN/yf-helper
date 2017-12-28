const { trim } = require('../lib').default;

test('测试 trim: 去除空格', () => {
    expect(trim('abc')).toBe('abc');
    // 非字符串 直接返回
    expect(trim([])).toEqual([]);
    // 第二个参数：1 去除 首 空格
    expect(trim(' a   b   ', 1)).toBe('a   b   ');
    // 第二个参数：2 去除 尾 空格
    expect(trim(' a   b   ', 2)).toBe(' a   b');
    // 第二个参数：3 （默认） 首尾空格
    expect(trim(' a   b   ')).toBe('a   b');
    // 第二个参数：4 去除全部空格
    expect(trim(' a   b   ', 4)).toBe('ab');
})