const { classnames } = require('../lib/index.js').default;

test('测试 classnames 函数', () => {
    expect(classnames('hello', 'world')).toEqual('hello world');
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
    expect(classnames(
        'yellow',
        {
            hello: true,
            world: false
        }
    )).toEqual('yellow hello');
    expect(classnames(['hello', undefined, 'world', 1, 2, null])).toEqual('hello world');
    expect(classnames('yellowfrog', ['hello', undefined, 'world', 1, 2, null])).toEqual('yellowfrog hello world');
    expect(classnames('yellow', {frog: true, blueYf: false}, ['hello', undefined, 'world', 1, 2, null])).toEqual('yellow frog hello world');
    expect(classnames()).toEqual('');
    expect(classnames(undefined)).toEqual('');
})