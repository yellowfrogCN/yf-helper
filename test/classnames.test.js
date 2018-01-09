const { classnames } = require('../lib').default;

test('测试 classnames 函数', () => {
    expect(classnames('hello world')).toEqual('hello world');
    expect(classnames({
        hello: true,
        world: false,
        haha: false,
        hehe: true,
        xixi: true
    })).toEqual('hello hehe xixi');
    expect(classnames({
        hello: false,
        world: false
    })).toEqual('');
    expect(classnames(['hello', undefined, 'world', 1, 2, null])).toEqual('hello world');
    expect(classnames()).toEqual('');
    expect(classnames(undefined)).toEqual('');
})