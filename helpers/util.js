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
  },
  formatErrorResponse(err) {
    return {
      statusCode: 404,
      message: err.message
    }
  },
  formatSuccessResponse(data) {
    return {
      statusCode: 200,
      message: 'Operation successful',
      data
    };
  }
};
