var DOT = '.'.charCodeAt(0), BANG = '!'.charCodeAt(0)

process.stdin.on('data', function(buff) {
  for (var i = 0; i < buff.length; i++) {
    if (buff[i] === DOT) buff[i] = BANG
  }
  console.log(buff);
});
