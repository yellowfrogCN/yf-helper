const { repeat } = require('../lib');
/**
 * 真假  expect(n).not.toBeTruthy();  expect(n).toBeFalsy();
 */
test('测试 repeat', () => {
    expect(repeat('')).toEqual({});
    expect(repeat()).toEqual({});
    expect(repeat([])).toEqual({});
    expect(repeat([1,2,3,455,1,1])).toEqual(
        {
            label: 1,
            value: 3
        }
    )
    expect(repeat('aaabbbccccc')).toEqual(
        {
            label: "c",
            value: 5
        }
    )
})
