# yf-helper
一些偶尔会用到的算法、尝试看下是怎么写出来这种算法的  - -.V
## 主要使用到的技术
* ~~[webpack](https://doc.webpack-china.org/) -- 主要用来统一打包,把 typescript/ES6 转换为 ES5 (未使用压缩功能)~~
* [typescript](https://www.tslang.cn/docs/handbook/basic-types.html) -- 用 typescript 代替 javascript 是因为参数类型的定义，方便后期维护。~~webpack 中配合 awesome-typescript-loader 使用~~
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
- [actionCreator](#actioncreator) : 简化创建action的高阶函数
- [classnames](#classnames) : 计算class的值，与github上的[classnames](https://github.com/JedWatson/classnames)库基本一致
- [drop](#drop) : 将 array 中的前 n 个元素去掉，然后返回剩余的部分
- [dropRight](#dropright) ：从右边开始 将 array 中的前 n 个元素去掉，然后返回剩余的部分
- [notEmpty](#notempty) ：判断是否为空
- [flattenDeep](#flattendeep) ：再怎么深层的嵌套都转化为单层嵌套
- [flatten](#flatten) : 跟flattenDeep一样，但只转换第一层
- [repeat](#repeat) : 查询数组或者字符串的重复
- [trim](#trim) : 默认去除首尾空格, 可以选择 去除 首 、尾、首尾、全部 的空格
- [chunk](#chunk) ：返回一个包含拆分块数组的新数组(相当于一个二维数组)
- [createReducer](#createreducer) : 创建 reducer 的 模板

#### 已通过jest测试的案例

#### actionCreator
```js
import { actionCreator } from 'yf-helper';
import { dispatch } from 'redux';
// 定义action，第一个参数是用来决定action.type的
const testAction = actionCreator('TEST');

dispatch(testAction(1)); // ==> 分发一个action === {type: 'TEST', payload: 1}
dispatch(testAction({a: 1, b: 2})); // ==> 分发一个action === {type: 'TEST', payload: {a: 1, b: 2}}

// 传入第二个参数，用于拓展 type
dispatch(testAction({a: 1, b: 2}, 'REQUEST')); // ==> 分发一个action === {type: 'TEST_REQUEST', payload: {a: 1, b: 2}}
dispatch(testAction([1,2,3], 'SUCCESS')); // ==> 分发一个action === {type: 'TEST_SUCCESS', payload: [1,2,3]}

// 当然你在 定义action的时候，也可以加入第二个参数，这个参数是用来加入提示语的，方便后续的排错 （推荐这么写）
// 目前定义了四个经常用到的 分别是 SUCCESS ERROR FINISH LOADING
const testAction2 = actionCreator('TEST', '这是一个创贱action的栗子');
dispatch(testAction2(1)); // ==> 分发一个action === { type: 'TEST', payload: 1, info: '这是一个创贱action的栗子' }
// 如果传入 的是 SUCCESS 的话，则 会自动 在提示语后面加上 ~~成功了~~
dispatch(testAction2(1, 'SUCCESS')); // ==> 分发一个action === { type: 'TEST', payload: 1, info: '这是一个创贱action的栗子~~成功了~~' }
// 如果传入 的是 ERROR 的话，则 会自动 在提示语后面加上 ~~失败了~~
dispatch(testAction2(1, 'ERROR')); // ==> 分发一个action === { type: 'TEST', payload: 1, info: '这是一个创贱action的栗子~~失败了~~' }
// 如果传入 的是 FINISH 的话，则 会自动 在提示语后面加上 ~~结束了~~
dispatch(testAction2(1, 'FINISH')); // ==> 分发一个action === { type: 'TEST', payload: 1, info: '这是一个创贱action的栗子~~结束了~~' }
// 如果传入 的是 LOADING 的话，则 会自动 在提示语后面加上 ~~loading了~~
dispatch(testAction2(1, 'LOADING')); // ==> 分发一个action === { type: 'TEST', payload: 1, info: '这是一个创贱action的栗子~~loading了~~' }


// 实战中 使用 mapDispatchToProps 绑定 也是一样
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => {
    return {
        testAction: (...arg) => dispatch(testAction(...arg))
    }
}
connect(null, mapDispatchToProps)(<组件 />)
testAction({a: 'yf 好帅！'}) // ==> 分发一个action === {type: 'TEST', payload: {a: 'yf 好帅！'}}
testAction({a: '真的耶！'}, 'SUCCESS') // ==> 分发一个action === {type: 'TEST_SUCCESS', payload: {a: 真的耶！'}}

// 使用 redux 自带的 bindActionCreators 的绑定也是没问题的
import { bindActionCreators } from 'redux';
const mapDispatchToProps = dispatch => {
    return {
        testAction: bindActionCreators(testAction, dispatch)
    }
}
connect(null, mapDispatchToProps)(<组件 />)
testAction({a: 'yf 好帅！'}) // ==> 分发一个action === {type: 'TEST', payload: {a: 'yf 好帅！'}}
testAction({a: '真的耶！'}, 'SUCCESS') // ==> 分发一个action === {type: 'TEST_SUCCESS', payload: {a: 真的耶！'}}
```

#### classnames
```js
import { classnames } from 'yf-helper';

// 传入 字符串
classnames() // ==> ''
classnames('hello world') 
// ==> 'hello world'
classnames('hello', 'world') 
// ==> 'hello world'

// 传入 object
classnames(
    {
        hello: true,
        world: false,
        haha: false,
        hehe: true,
        xixi: true
    }
) 
// ==> 'hello hehe xixi'

classnames(
    {hello: false, world: false}
) 
// ==> ''

// 传入 array 也行 
classnames(
    ['hello', undefined, 'world', 1, 2, null]
) 
// ==> 'hello world'  ★ github上classnames的库是返回带数字的 'hello world 1 2'

// 混合传入
classnames(
    'yellow',
    {
        frog: true,
        rabbit: false
    },
    ['hello', undefined, 'world', 1, 2, null]
)
// ==> 'yellow frog hello world'

// 嵌套等超复杂的情况下
classnames(
    'yellow', ['hello', undefined, 'world', 1, ['a', {b: true, c: ['d']}], null, true]
)
// ==> 'yellow hello world a b c'

classnames(
    'yellow', ['hello', undefined, 'world', 1,0, ['a',['b', ['c', ['d', ['e', undefined]]]]], null]
)
// ==> 'yellow hello world a b c d e'

```

##### drop
```js
import { drop } from 'yf-helper';
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

##### dropRight
```js
import { dropRight } from 'yf-helper';
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

##### notEmpty
```js
import { notEmpty } from 'yf-helper';
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

##### flattenDeep
```js
import { flattenDeep } from 'yf-helper';
flattenDeep([1,2, [3,4, [5,6, {a: 7}]]])
// => [1,2,3,4,5,6,{a: 7}]
// 什么都不传 或者 数字、字符串、json等非数组 都是返回 json 
flattenDeep() // => []
// 传了 字符串 或者数字
flattenDeep(0) // => []
// 传了 json
flattenDeep({a: 1})) // => []
```
##### flatten
```js
import { flatten } from 'yf-helper';
flatten([1, 2, '24', [3, 5, [6, 7]]]) // => [1, 2, "24", 3, 5, [6, 7]]
```
##### repeat
```js
import { repeat } from 'yf-helper';
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
##### trim
```js
import { trim } from 'yf-helper';
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
##### chunk
```js
import { chunk } from 'yf-helper';
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
##### createReducer
[createReducer](http://cn.redux.js.org/docs/recipes/reducers/RefactoringReducersExample.html)
```js
// createReducer 创建 reducer 的 模板
import { createReducer } from 'yf-helper';
```
### 想自己发布到npm如何操作玩耍
```js
// 建议:
// 0、上网收如何发布到Npm 中间或许会碰到403等错误，遇到问题就百度、谷歌，遇神杀神、遇佛杀佛，然后可以 npm publish 后，再参考下面的操作
// 1、在 lib 文件夹下，照着其他的函数格式， 加入你写好的 typescript 函数 (表忘了 在./lib/index.ts里加入你的函数)，★因为测试函数这边引用的是js文件，故先用ts 把 之前的 typescript 函数 转化为 js 文件！
// 2、在 test 文件夹下写好 函数测试
// 3、npm run test 或者 npm t  查看你的函数是否通过测试
// 4、修改package.json 里面的 版本号！
// 5、npm publish 发布到NPM
```

