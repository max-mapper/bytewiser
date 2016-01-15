var fs = require('fs');
var offset = 0, NL = '\n'.charCodeAt(0);

function splitNewLine(file) {
  for (var i = 0; i < file.length; i++) {
    if (file[i] === NL) {
      console.log(file.slice(offset, i));
      offset = i + 1;
    }
  }
  console.log(file.slice(offset, i));
}

fs.createReadStream(process.argv[2]).on('data', splitNewLine);

