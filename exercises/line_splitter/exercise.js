var fs            = require('fs')
  , path          = require('path')
  , os            = require('os')
  , exercise      = require('workshopper-exercise')()
  , filecheck     = require('workshopper-exercise/filecheck')
  , execute       = require('workshopper-exercise/execute')
  , comparestdout = require('workshopper-exercise/comparestdout')
  , boganipsum    = require('boganipsum')

  , testFile      = path.join(os.tmpDir(), '_learnyounode_' + process.pid + '.txt')

// checks that the submission file actually exists
exercise = filecheck(exercise)

// execute the solution and submission in parallel with spawn()
exercise = execute(exercise)

// compare stdout of solution and submission
exercise = comparestdout(exercise)

exercise.addSetup(function (mode, callback) {

  var lines = Math.ceil(Math.random() * 50)
    , txt   = boganipsum({ paragraphs: lines })

  // supply the file as an arg to the 'execute' processor for both
  // solution and submission spawn()
  // using unshift here because wrappedexec needs to use additional
  // args to do its magic
  this.submissionArgs.unshift(testFile)
  this.solutionArgs.unshift(testFile)

  // file with random text
  fs.writeFile(testFile, txt, 'utf8', callback)
})

// cleanup for both run and verify
exercise.addCleanup(function (mode, passed, callback) {
  // mode == 'run' || 'verify'

  fs.unlink(testFile, callback)
})

module.exports = exercise
