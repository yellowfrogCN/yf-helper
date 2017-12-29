# yf-helper
一些偶尔会用到的算法、尝试看下是怎么写出来这种算法的  - -.V
## 主要使用到的技术
* [webpack](https://doc.webpack-china.org/) -- 主要用来统一打包,把 typescript/ES6 转换为 ES5 (未使用压缩功能)
* [typescript](https://www.tslang.cn/docs/handbook/basic-types.html) -- 用 typescript 代替 javascript 是因为参数类型的定义，方便后期维护, webpack 中配合 awesome-typescript-loader 使用
* [jest](http://facebook.github.io/jest/zh-Hans/) -- 对函数进行测试, 在发布前都要先经过自己写的测试，使用 ts-jest 配合使用
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
    helper.drop([1, 2, 3, 4], 2)
) // output: [3, 4]
```
#### 快速跳转
- [drop](#drop) : 将 array 中的前 n 个元素去掉，然后返回剩余的部分
- [dropRight](#dropright) ：从右边开始 将 array 中的前 n 个元素去掉，然后返回剩余的部分
- [notEmpty](#notEmpty) ：判断是否为空
- [flattenDeep](#flattenDeep) ：再怎么深层的嵌套都转化为单层嵌套
- [flatten](#flatten) : 跟flattenDeep一样，但只转换第一层
- [repeat](#repeat) : 查询数组或者字符串的重复
- [trim](#trim) : 去除空格 可以 去除选择 去除 首 、尾、首尾、全部 的空格
- [chunk](#chunk) ：返回一个包含拆分块数组的新数组(相当于一个二维数组)
- [createReducer](#createReducer) : 创建 reducer 的 模板

#### 已通过jest测试的案例

<span id="drop"></span>
```js
// drop
const arr = [1, 2, 3];
// 默认情况下 从1开始计算
drop(arr) // => [2, 3]

// 通常情况下
drop(arr, 2) // => [3]

// 刚好等于 数组长度的情况下
drop(arr, arr.length) // => []

// 大于数组长度的情况下
drop(arr, arr.length + 1) // => []

// 为零的情况下
drop(arr, 0) // => [1,2,3]

```
# dropRight
```js
// dropRight
const arr = [1, 2, 3];
// 默认情况下 从1开始计算
dropRight(arr) // => [1, 2]

// 通常情况下
dropRight(arr, 2) // => [1]

// 刚好等于 数组长度的情况下
dropRight(arr, arr.length) // => []

// 大于数组长度的情况下
dropRight(arr, arr.length + 1) // => []

// 为零的情况下
dropRight(arr, 0) // => [1,2,3]

```
<span id="notEmpty"></span>
```js
// notEmpty
notEmpty(null) // => false
notEmpty(undefined) // => false
notEmpty(NaN) // => false

notEmpty([]) // => false
notEmpty({}) // => false
// ★这里跟lodash.isEmpty不一样,isEmpty是 number 都算 空
notEmpty(0) // => false
notEmpty(1) // => true

notEmpty('') // => false
notEmpty() // => false
```
<span id="flattenDeep"></span>
```js
// flattenDeep
flattenDeep([1,2, [3,4, [5,6, {a: 7}]]])
// => [1,2,3,4,5,6,{a: 7}]
// 什么都不传 或者 数字、字符串、json等非数组 都是返回 json 
flattenDeep() // => []
// 传了 字符串 或者数字
flattenDeep(0) // => []
// 传了 json
flattenDeep({a: 1})) // => []
```
<span id="flatten"></span>
```js
// flatten
flatten([1, 2, '24', [3, 5, [6, 7]]]) // => [1, 2, "24", 3, 5, [6, 7]]
```
<span id="repeat"></span>
```js
// repeat
repeat([1,2,3,455,1,1])
// =>  {
//         label: 1,
//         value: 3
//     }

repeat('aaabbbccccc')
// =>  {
//         label: "c",
//         value: 5
//     }

repeat('') // => {}
```
<span id="trim"></span>
```js
// trim
// 第二个参数：1 去除 首 空格
trim(' a   b   ', 1) // => 'a   b   '
// 第二个参数：2 去除 尾 空格
trim(' a   b   ', 2) // => ' a   b'
// 第二个参数：3 （默认） 首尾空格
trim(' a   b   ') // => 'a   b'
// 第二个参数：4 去除全部空格
trim(' a   b   ', 4) // => 'ab'
// 非字符串 直接返回
trim([]) // => []

```
<span id="chunk"></span>
```js
// chunk
const arr = [1, 2, 3];
// 通常情况下
chunk(arr, 1) // => [[1],[2,3]]

// 刚好等于 数组长度的情况下
chunk(arr, arr.length) // => [[1,2,3],[]]

// 大于数组长度的情况下
chunk(arr, arr.length + 1) // => [[1,2,3],[]]

// 为零的情况下
chunk(arr, 0) // => [[],[1,2,3]]

```
<span id="createReducer"></span>
[createReducer](http://cn.redux.js.org/docs/recipes/reducers/RefactoringReducersExample.html)
```js
// createReducer 创建 reducer 的 模板
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

