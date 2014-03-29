var fs = require('fs')
var file = fs.readFileSync(process.argv[2])
var offset = 0
for (var i = 0; i < file.length; i++) {
  if (file[i] === 10) {
    console.log(file.slice(offset, i))
    i++
    offset = i
  }
}
console.log(file.slice(offset, i))