var exercise      = require('workshopper-exercise')()
  , filecheck     = require('workshopper-exercise/filecheck')
  , execute       = require('workshopper-exercise/execute')
  , comparestdout = require('workshopper-exercise/comparestdout')

// checks that the submission file actually exists
exercise = filecheck(exercise)

// execute the solution and submission in parallel with spawn()
exercise = execute(exercise)

// compare stdout of solution and submission
exercise = comparestdout(exercise)

exercise.addSetup(function (mode, callback) {

  // generate a random number between min and max
  function getRandomByte() {
    return Math.floor(Math.random() * (255 - 0) + 0)
  }

  var bytes = Math.floor(Math.random() * (8 - 3) + 3)

  for (var k = 0; k < bytes; k++) {
    var byte = getRandomByte();
    this.submissionArgs.unshift(byte)
    this.solutionArgs.unshift(byte)
  }

  callback(null)
})

module.exports = exercise
