var fs = require('fs')
  , bt = require('buffertools');

fs.readFile(process.argv[2], function(err, data) {
  var offset = 0;
  while (true) {
    var nl = bt.indexOf(data, '\n', offset);
    if (nl === -1) break;
    console.log(data.slice(offset, nl));
    offset = ++nl;
  }
  console.log(data.slice(offset));
});
