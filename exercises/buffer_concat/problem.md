I/O streams in Node (like `fs.createReadStream(…)` for example) will
emit incremental `Buffer`s as they arrive as opposed to waiting for the
full data to arrive.

The benefit is that if you are reading or downloading a huge file you
can start processing it immediately in chunks. This is especially useful
for files that are larger than your available RAM.

However, sometimes you want the entire file in one big `Buffer`.

## Challenge

Write a program that combines all of the buffers from `process.stdin`
and then writes the single big buffer out to the console.

Bonus points if you use a stream!

## Hints

`Buffer.concat(…)`.

Read more about Buffers here:

  http://nodejs.org/api/all.html#all_buffer

Or off-line on your local filesystem:

  {rootdir}/docs/node-api-docs.html#all_buffer

To get output for debugging when running `{appname} run program.js`
you should use `console.error` instead of `console.log`.
