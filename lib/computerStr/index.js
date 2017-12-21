/**
 * 计算字符串中最多的字符
 * 返回格式 {
 *  strIs: str,
 *  value: num
 * }
 * @param {*} str: 要计算的字符串 为''时返回 false
 * @param {*} isMax: 为 true 是计算最大字符，为 fasle 是计算最小字符
 */
function computerStr (str, isMax = true) {
    // 如果为空，返回false
    if (str === '') return false;
    // 临时变量
    let temObj = {};
    for(let i = 0; i < str.length; i++) {
        // 循环这个str 如果str[i] 已经存在，则这个value值+1
        if (temObj[str[i]]) {
            temObj[str[i]].value += 1;
        } else {
            // 否则的话 设定一个通用模板，为了后续sort方便排序
            temObj[str[i]] = {
                strIs: str[i],
                value: 1
            }
        }
    }
    let temArr = [];
    // 把刚才的temObj换成数组，为了后续sort方便排序
    for (let key in temObj) {
      temArr.push(temObj[key]);
    }
    // 利用sort的强大功能排好序，b - a是从大到小, 反之是从小到大
    const result = temArr.sort((a, b) => b.value - a.value);
    // 利用函数的第二个参数,如果为true则返回最大，否则返回最小
    if (isMax) {
      return result[0];
    } else {
      return result[result.length - 1];
    }
}
module.exports = computerStr;