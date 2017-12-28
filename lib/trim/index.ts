// 增强型 trim
function trim(str: string, range: number = 3): string {
    if (typeof (str) !== 'string') return str;
    switch (range) {
        case 1:
            // 去除 首 空格
            return str.replace(/\s+/, '');
        case 2:
            // 去除 尾 空格
            return str.replace(/\s+$/, '');
        case 3:
            // 去除首尾空格
            return str.replace(/\s+/, '').replace(/\s+$/, '');
        case 4:
            // 去除全部空格
            return str.replace(/\s+/g, '');
        default: 
            return str;
    }
}
export default trim;