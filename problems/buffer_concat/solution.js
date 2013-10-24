var util = require('util')
var Transform = require('stream').Transform
util.inherits(Concat, Transform)

function Concat(cb) {
  Transform.call(this)
  this.cb = cb
  this.buffers = []
}

Concat.prototype._transform = function(chunk, encoding, done) {
  this.buffers.push(chunk)
  this.push(chunk)
  done()
}

Concat.prototype._flush = function(done) {
  this.cb(this.buffers)
  done()
}

process.stdin.pipe(new Concat(log))

function log(buffs) {
  console.log(Buffer.concat(buffs))
}
