"use strict";
exports.__esModule = true;
function flatten(arr) {
    if (!Array.isArray(arr))
        return [];
    return [].concat.apply([], arr);
}
exports["default"] = flatten;
