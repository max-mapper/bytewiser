var buffers = [];

process.stdin.on('data', function(buffer) {
    buffers.push(buffer);
});

process.stdin.on('end', function() {
  console.log(Buffer.concat(buffers));
});

