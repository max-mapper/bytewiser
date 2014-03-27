Given a predetermined array of base 10 integers, create a buffer from the array and output a hexadecimal encoded representation of the buffer.

For example, your code should act on the following array of numbers:

```js
  var bytes = [0, 15, 24, 3, 250, 83];
```

Your answer should be a string of two-character pairs, where each pair represents a single number in the array of bytes converted to hexadecimal. For example:

```
000f1803fa53
```

----------------------------------------------------------------------
## Hints
You can copy the line above that sets bytes equal to an array of integers from above into your solution.

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

----------------------------------------------------------------------
