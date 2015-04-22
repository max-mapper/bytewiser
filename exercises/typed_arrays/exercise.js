var exercise      = require('workshopper-exercise')()
  , filecheck     = require('workshopper-exercise/filecheck')
  , execute       = require('workshopper-exercise/execute')
  , comparestdout = require('workshopper-exercise/comparestdout')
  , through2      = require('through2')

// checks that the submission file actually exists
exercise = filecheck(exercise)

// execute the solution and submission in parallel with spawn()
exercise = execute(exercise)

// add a processor for both run and verify calls, added *before*
// the comparestdout processor so we can mess with the stdouts
exercise.addProcessor(function (mode, callback) {

  setTimeout(query.bind(this, mode), 250)

  process.nextTick(function () {
    callback(null, true)
  })
});

// compare stdout of solution and submission
exercise = comparestdout(exercise)

// delayed for 500ms to wait for servers to start so we can start
// playing with them
function query (mode) {
  var exercise = this

  function send (stream) {
    var input = through2()
    input
      .pipe(stream)
      .on('error', function(err) {
        exercise.emit(
          'fail',
          exercise.__('fail.never_read_stdin')
        )
      })
    input.write('secret message');
    input.end();
  }

  send(exercise.submissionChild.stdin)

  if (mode == 'verify')
    send(exercise.solutionChild.stdin)
}

module.exports = exercise
