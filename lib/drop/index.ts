/**
 * 去除数组的 item
 * @param arr array 
 * @param num 想要去除的个数 从 1 开始计算 理解为丢掉几个
 */
function drop (arr: Array<any>|any, num: number = 1): Array<any> {
    if (!Array.isArray(arr)) return [];
    return arr.filter((item, index) => {
        // 因为index是从0开始的，index是从1开始的
        // 不能return item 因为 return 0 也算false
        if (index >= num) return true;
    })
}
export default drop;
