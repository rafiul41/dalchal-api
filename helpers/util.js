const fs = require('fs');

module.exports = {
  getFileExportsAsArray: (normalizedPath) => {
    const exports = [];
    fs
      .readdirSync(normalizedPath)
      .forEach(file => {
        exports.push(require(normalizedPath + '/' + file));
      });
    return exports;
  }
};
