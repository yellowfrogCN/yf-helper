/**
 * 模仿 github 上的 classnames
 * @param arg json、数组、字符串
 */
function classnames (arg: string | Array<any> | Object): string {
    if (typeof arg === 'string') return arg;
    if (typeof arg === 'object') {
        if (!Array.isArray(arg)) {
            const temArr: Array<any> = [];
            for (const key in arg) {
                if (arg[key]) {
                    temArr.push(key);
                }
            }
            return temArr.join(' ');
        } else {
            return arg.filter(item => typeof item === 'string').join(' ')
        }
    }
    return '';
}
export default classnames;