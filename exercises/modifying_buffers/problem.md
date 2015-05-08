Buffers are similar to Arrays in that you can get and set values at particular offsets.

## Challenge

Write a program that takes the first buffer written to `process.stdin`,
updates all instances of `.` with `!` and then logs out the updated buffer object.

Bonus points if you never call `.toString()` on your buffer!

## Hints

Buffers have a `.write` method that can be used to a character to a specific offset.

The integer value of the ascii character `.` is 46.

Read more about Buffers here:

  http://nodejs.org/api/all.html#all_buffer

Or off-line on your local filesystem:

  {rootdir}/docs/node-api-docs.html#all_buffer

To get output for debugging when running `{appname} run program.js`
you should use `console.error` instead of `console.log`.
