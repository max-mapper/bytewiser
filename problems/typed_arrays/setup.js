var through = require('through')

module.exports = function () {
  var testStream = through()
  setTimeout(function() {
    testStream.queue(new Buffer('secret message'))
    testStream.queue(null)
  }, 250)
  return { args: null, stdin: testStream, long: true }
}
