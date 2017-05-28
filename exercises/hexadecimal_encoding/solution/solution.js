var bytes = process.argv.slice(2).map(Number)
console.log(Buffer.from(bytes).toString('hex'))
