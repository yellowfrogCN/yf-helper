function flatten (arr: Array<any>) {
    if (!Array.isArray(arr)) return [];
    return [].concat(...arr);
}
module.exports = flatten;