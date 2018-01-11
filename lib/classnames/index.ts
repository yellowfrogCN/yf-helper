/**
 * 模仿 github 上的 classnames
 * @param arg json、数组、字符串
 */
function classnames (...arg): string {
    let temArr: Array<any> = [];
    // 用rest语法传进来的arg是个数组
    arg.map((item, index) => {
        if (typeof item === 'string') {
            return temArr.push(item);
        }
        if (item) {
            // 如果不是数组的话
            if (!Array.isArray(item)) {
                for (const key in item) {
                    if (item[key]) {
                        temArr.push(key);
                    }
                }
                return temArr;
            } else {
                // 递归调用
                let arr: Array<any> = item.map(item => {
                    return classnames(item) 
                });
                arr = arr.filter(item => item !== '');
                temArr = temArr.concat(arr)
                return temArr;
            }
        }
    })
    return temArr.join(' ');
}
export default classnames;