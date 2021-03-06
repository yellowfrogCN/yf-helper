function flattenDeep (arr: Array<any>) : Array<any>{
    // 传进来乱七八糟的值，干掉
    if (!Array.isArray(arr)) return [];
    let temArr : Array<any>= [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            // 这里用到递归，注意是用concat 如果用push的话则达不到效果
            temArr = temArr.concat(flattenDeep(arr[i]));
        } else {
            temArr.push(arr[i]);
        }
    }
    return temArr;
}

export default flattenDeep;