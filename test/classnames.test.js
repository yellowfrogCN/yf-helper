const { classnames } = require('../lib/index.js').default;

test('测试 classnames 函数', () => {
    expect(classnames('yellow', ['hello', undefined, 'world', 1, ['a', {b: true, c: ['d'], d: undefined}], null, true])).toEqual('yellow hello world a b c');
    expect(classnames('yellow', ['hello', undefined, 'world', 1,0, ['a',['b', ['c', ['d', ['e', undefined]]]]], null])).toEqual('yellow hello world a b c d e');
    expect(classnames('hello', 'world')).toEqual('hello world');
    expect(classnames('hello world')).toEqual('hello world');
    expect(classnames({
        hello: true,
        world: null,
        haha: undefined,
        hehe: true,
        xixi: true
    })).toEqual('hello hehe xixi');
    expect(classnames({
        hello: false,
        world: false
    })).toEqual('');
    expect(classnames(
        'yellow',
        1,
        {
            hello: true,
            world: false
        }
    )).toEqual('yellow hello');
    expect(classnames('yellowfrog', ['hello', undefined, 'world', 1, 2, null])).toEqual('yellowfrog hello world');
    expect(classnames('yellow', {frog: true, blueYf: false}, ['hello', undefined, 'world', 1, 2, null])).toEqual('yellow frog hello world');
    expect(classnames(['hello', undefined, 'world', 1, ['a'], null])).toEqual('hello world a');
    expect(classnames()).toEqual('');
    expect(classnames(undefined)).toEqual('');
})