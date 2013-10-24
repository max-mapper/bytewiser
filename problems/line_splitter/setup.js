var path = require('path')
module.exports = function () {
  var filePath = path.resolve(__dirname, '..', '..', 'data', 'lines.txt')
  return { args: [filePath], stdin: null, long: true }
}
