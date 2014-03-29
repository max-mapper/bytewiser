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
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
  }

  var number = getRandomInt(1000000, 9999999)

  // supply the file as an arg to the 'execute' processor for both
  // solution and submission spawn()
  // using unshift here because wrappedexec needs to use additional
  // args to do its magic
  this.submissionArgs.unshift(number)
  this.solutionArgs.unshift(number)

  callback(null)
})

module.exports = exercise
