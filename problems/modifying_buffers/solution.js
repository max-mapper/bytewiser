process.stdin.on('data', function(buff) {
  for (var i = 0; i < buff.length; i++) {
    if (buff[i] === 46) buff.write('!', i)
  }
  console.log(buff)
})
