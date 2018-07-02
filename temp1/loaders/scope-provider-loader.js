const loaderUtils = require("loader-utils");

module.exports = function(content) {
    const url = loaderUtils.interpolateName(this, "[hash].[ext]", {
        content,
    });

    console.log(content);

    this.emitFile(url, content);

    const path = `__webpack_public_path__ + ${JSON.stringify(url)};`;

    return `export default ${path}`;
};