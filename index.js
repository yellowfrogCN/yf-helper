module.exports = require('./dist/bundle');
const x = require('./dist/bundle');
console.log(
    x.computerStr('432423423'),
    x.flatten([1,24,[1,,345]]),
    x.notEmpty([13]),
    x
)