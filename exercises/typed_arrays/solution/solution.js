process.stdin.once('data', function(buff) {
  var ui8 = new Uint8Array(buff)
  console.log(JSON.stringify(ui8))
})
