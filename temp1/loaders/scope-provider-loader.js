const loaderUtils = require("loader-utils");

module.exports = function (content) {
    const {name} = loaderUtils.getOptions(this);
    console.log(content)
    return `(function (${name}){ /* comment*/` + content + '}) ()';//`export default ${path}`;
};