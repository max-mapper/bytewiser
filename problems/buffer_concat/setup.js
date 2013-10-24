var through = require('through')

var data = ["hello", "yes", "this", "is", "dog"]

module.exports = function () {
  var testStream = through()
  var i = 0
  setTimeout(run, 25)
  
  function run() {
    var buff = new Buffer(data[i])
    testStream.queue(buff)
    if (i === 4) {
      testStream.queue(null)
    } else {
      setTimeout(run, 25)
    }
    i++
  }
  return { args: null, stdin: testStream, long: true }
}
