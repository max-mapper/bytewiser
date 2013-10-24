var num = +process.argv[2]
var ui32 = new Uint32Array(1)
ui32[0] = num
var ui16 = new Uint16Array(ui32.buffer)
console.log(JSON.stringify(ui16))
