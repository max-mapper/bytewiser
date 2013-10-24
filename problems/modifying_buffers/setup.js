var through = require('through')

module.exports = function () {
  var testStream = through()
  setTimeout(function() {
    testStream.queue(new Buffer('wow. very wow.'))
    testStream.queue(null)
  }, 250)
  return { args: null, stdin: testStream, long: true }
}
