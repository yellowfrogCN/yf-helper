# yf-helper
一些偶尔会用到的算法、尝试看下是怎么写出来这种算法的  - -.V
## 主要使用到的技术
* [webpack](https://doc.webpack-china.org/) 主要用来统一打包,把 typescript、ES6 转换为 ES5 (未使用压缩功能)
* [typescript](https://www.tslang.cn/docs/handbook/basic-types.html) 用 typescript 代替 javascript 是因为参数类型的定义，方便后期维护
* [jest](http://facebook.github.io/jest/zh-Hans/) 对函数进行测试, 在发布前都要先经过自己写的测试，使用 ts-jest、awesome-typescript-loader 配合使用
### 非常简单 在项目中使用
```js
// 项目中安装此依赖
npm install yf-helper
或者
yarn add yf-helper

// 引入
import helper from 'yf-helper';
或者
const helper = require('yf-helper').default;
// 调用栗子
console.log(
    helper.notEmpty([])
) // output: false
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
```js
// trim
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
```
```js
// createReducer 创建 reducer 的 模板
// http://cn.redux.js.org/docs/recipes/reducers/RefactoringReducersExample.html
import { createReducer } from 'yf-helper';
```
### 想自己发布到npm如何操作玩耍
```js
// 建议:
// 0、上网收如何发布到Npm 中间或许会碰到403等错误，遇到问题就百度、谷歌，遇神杀神、遇佛杀佛，然后可以 npm publish 后，再参考下面的操作
// 1、在 lib 文件夹下，照着其他的函数格式， 加入你写好的 typescript 函数 (表忘了 在./lib/index.ts里加入你的函数)
// 2、在 test 文件夹下写好 函数测试
// 3、npm run test 或者 npm t  查看你的函数是否通过测试
// 4、npm run prod 打包到 ./dist 目录下 生成 bundle.js
// 5、★ 进入到bundle.js，在 首行前面加入 'module.exports = ' 之前的代码，不加入的话无法使用
// 6、修改package.json 里面的 版本号！
// 7、npm publish 发布到NPM
```

