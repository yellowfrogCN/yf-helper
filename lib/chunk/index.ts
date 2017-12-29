function chunk (arr: Array<any>, size: number): Array<any> {
    // 如果不是数组的话，直接返回空数组
    if (!Array.isArray(arr)) return [];
    // 定义两个空数组 一个保存 < size 的 item；一个用来保存 其他的 item
    // 或许后续有更好的方法
    let temArr: Array<any> = [];
    let temArr2: Array<any> = [];
    // 循环 传入进来的 arr，< size 的怼到第一个temArr，其他的则怼到第二个temArr （用for循环也是一样一样的道理）
    arr.map((item, index) => {
        if (index < size) {
            temArr.push(item);
        } else {
            temArr2.push(item);
        }
    })
    // 最后定义一个即将返回的 array，push之前的两个temArr，然后返回
    // 感觉有点low，但先达到效果
    let result: Array<any> = [];
    result.push(temArr);
    result.push(temArr2);
    return result;
}
export default chunk;