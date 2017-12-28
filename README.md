# yf-helper
一些偶尔会用到的算法、尝试看下是怎么写出来这种算法的  - -.V
# How to use?
```js
// 项目中安装此依赖
npm install yf-helper
或者
yarn add yf-helper

// 引入
import helper from 'yf-helper';
或者
const helper = require('yf-helper');
// 调用栗子
console.log(
    helper.flatten([1,2, [3,4, [5,6, {a: 7}]]])
) // output：[1,2,3,4,5,6,{a: 7}]
```
## 测试案例
```js
// notEmpty
test('测试notEmpty：判断为空的变量', () => {
    // 传统三大B：null undefined NaN
    expect(notEmpty(null)).toBeFalsy();
    expect(notEmpty(undefined)).toBeFalsy();
    expect(notEmpty(NaN)).toBeFalsy();
    expect(notEmpty(0/0)).toBeFalsy();
    // 空数组 空Object
    expect(notEmpty([])).toBeFalsy();
    expect(notEmpty({})).toBeFalsy(); 
    // 数字 都为真
    // ★这里跟lodash.isEmpty不一样,isEmpty是 number 都算 空
    expect(notEmpty(0)).toBeTruthy();
    expect(notEmpty(1)).toBeTruthy();
    // 空字符串 空
    expect(notEmpty('')).toBeFalsy();
    expect(notEmpty()).toBeFalsy();
    // 这个函数是测试字符串的话就是真 以下两个的意思是一样的。都为真
    expect(notEmpty('0')).not.toBeFalsy();
    expect(notEmpty('1')).toBeTruthy();
    // 第二个参数，空数组 空Object 
    expect(notEmpty([], false)).toBeTruthy();
    expect(notEmpty({}, false)).toBeTruthy(); 
})
```
```js
// flatten
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
```
```js
// flatten
test('测试 flatten ：把数组的深层嵌套替换成单层嵌套', () => {
    expect(flatten([1, 2, '24', [3, 5, [6, 7]]])).toEqual(
        [1, 2, "24", 3, 5, [6, 7]]
    )
})
```
```js
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
```


