var bytes = process.argv.slice(2).map(Number)
console.log(new Buffer(bytes).toString('hex'))
