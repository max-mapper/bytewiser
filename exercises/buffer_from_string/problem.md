In Node.js, `Buffer` is a global object that provides a way to work with different
kinds of binary data. Most APIs in Node core (e.g. `http`, `net`, `fs`) will give you
buffers, and will be able to do their job faster if you give them buffers.

## Challenge

Write a node program that prints a buffer object containing
the string `"bytewiser"` using `console.log`.

## Hints

Read more about Buffers here:

  http://nodejs.org/api/all.html#all_buffer

Or off-line on your local filesystem:

  {rootdir}/docs/node-api-docs.html#all_buffer

To get output for debugging when running `{appname} run program.js`
you should use `console.error` instead of `console.log`.
