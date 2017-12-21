# yf-helper
一些偶尔会用到的算法、尝试看下其他人是怎么写出来这种算法的  - -.V
## 测试案例
```js
// notEmpty
test('测试notEmpty的函数', () => {
    // 传统三大B：null undefined NaN
    expect(notEmpty(null)).toBeFalsy();
    expect(notEmpty(undefined)).toBeFalsy();
    expect(notEmpty(NaN)).toBeFalsy();
    // 空数组 空Object
    expect(notEmpty([])).toBeFalsy();
    expect(notEmpty({})).toBeFalsy(); 
    // 第二个参数，空数组 空Object 
    expect(notEmpty([], false)).toBeTruthy();
    expect(notEmpty({}, false)).toBeTruthy(); 
    // 数字 都为真
    expect(notEmpty(0)).toBeTruthy();
    expect(notEmpty(1)).toBeTruthy();
    // 空字符串 空
    expect(notEmpty('')).toBeFalsy();
    expect(notEmpty()).toBeFalsy();
    // 这个函数是测试字符串的话就是真 以下两个的意思是一样的。都为真
    // ★这里跟lodash.isEmpty不一样,isEmpty是字符串都算 空
    expect(notEmpty('0')).not.toBeFalsy();
    expect(notEmpty('1')).toBeTruthy();
})
```
```js
// flatten
test('测试 flatten 函数', () => {
    expect(flatten([1,2, [3,4, [5,6, {a: 7}]]])).toEqual(
        [1,2,3,4,5,6,{a: 7}]
    )
})
```
```js
test('测试 compouterStr 的函数', () => {
    expect(compouterStr('')).toBeFalsy();
    expect(compouterStr('aaabbbccccc')).toEqual(
        {
            strIs: "c",
            value: 5
        }
    )
})
```


