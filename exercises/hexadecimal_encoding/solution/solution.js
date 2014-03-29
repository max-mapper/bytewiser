var bytes = process.argv.slice(2).map(function(arg) { return parseInt(arg) })
console.log(new Buffer(bytes).toString('hex'))
