/**
 * 模仿 github 上的 classnames
 * @param arg json、数组、字符串
 */
function classnames (...arg): string {
    let temArr: Array<any> = [];
    // 用 es6 的rest语法传进来的arg是个数组
    arg.map((item, index) => {
        if (typeof item === 'string') temArr.push(item);
        if (typeof item === 'object') {
            // 如果不是数组的话
            if (!Array.isArray(item)) {
                for (const key in item) {
                    if (item[key]) {
                        temArr.push(key);
                    }
                }
            } else {
                // 过滤掉杂七杂八的内容，返回一个数组
                const arr: Array<any> = item.filter(item => typeof item === 'string');
                temArr = temArr.concat(arr)
            }
        }
    })
    return temArr.join(' ');
}
export default classnames;