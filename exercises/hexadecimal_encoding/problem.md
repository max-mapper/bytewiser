## Challenge

Given an unknown number of bytes passed via `process.argv`, create a buffer from them and output a hexadecimal encoded representation of the buffer.

For example, `process.argv` might look like:

```js
  [ '/usr/bin/node', '/usr/local/lib/node_modules/bytewiser/exercises/hexadecimal_encoding/solution/solution.js', '14', '80', '243', '2' ]
```

Or it might look like:

```js
  [ '/usr/bin/node', '/usr/local/lib/node_modules/bytewiser/exercises/hexadecimal_encoding/solution/solution.js', '231', '127', '0', '8', '13' ]
```

Your answer should be a string of two-character pairs (also known as hexadecimal octets), where each pair represents a single number in the array of bytes converted to hexadecimal. For example:

```
000f1803fa53
```

## Hints

When creating a new `Buffer` object, you can pass as the first argument an array of bytes, also referred to as octets, and you will receive a new Buffer object that has available to it all of the methods listed in the official documentation.

Your answer should be a string encoded in a hexadecimal format. Look at `Buffer#toString()` for more information.

To convert between a buffer object and a JavaScript string, a specific encoding method must be specified. For instance, if we want to view our buffer as a base64 encoded string, we'd pass the `'base64'` parameter to the `toString()` method, like so:

```js
var buffer = new Buffer([0x01, 0xFF]);
console.log(buffer.toString('base64'));
```

Notice you can also create a buffer object using arrays of numbers already in hexadecimal format, denoted by their `0x` prefix.

Documention for the `buffer` class, including a list of all possible encoding methods, can be found here:

  {rootdir:/node_apidoc/buffer.html}
