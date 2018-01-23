/**
 * 从右边开始，去除数组的 item
 * @param arr array 
 * @param num 想要去除的个数 从 1 开始计算 理解为丢掉几个
 */
function dropRight (arr: Array<any>|any, num: number = 1): Array<any> {
    if (!Array.isArray(arr)) return [];
    if (typeof num !== 'number') return arr;
    const len: number = arr.length;
    return arr.filter((item, index) => {
        // arr.length - 1（默认值） 可以理解为 index 的最大值 一次类推
        // 不能return item 因为 return 0 也算false
        if (len - num > index) return true;
    })
}

export default dropRight;