I/O streams in node (like fs.createReadStream for example) will
emit incremental Buffers as they arrive as opposed to waiting for the
full data to arrive.

The benefit is that if you are reading or downloading a huge file you
can start processing it immediately in chunks. This is especially useful
for files that are larger than your available RAM.

However, sometimes you want the entire file in one big Buffer.

Write a program that combines all of the buffers from `process.stdin`
and then writes the single big buffer out to the console.

Bonus points if you use a stream!

When you have completed your program, you can run it in the test
environment with:

  {bold}{appname} run program.js{/bold}

And once you are happy that it is correct then run:

  {bold}{appname} verify program.js{/bold}

And your submission will be verified for correctness. After you have
a correct solution, run `{bold}{appname}{/bold}` again and select the next problem!

----------------------------------------------------------------------
HINTS:

Buffer.concat

Read more about Buffers here:
  http://nodejs.org/api/all.html#all_buffer
Or off-line on your local filesystem:
  {rootdir}/docs/node-api-docs.html#all_buffer

To get output for debugging when running `{appname} run program.js`
you should use console.error instead of console.log.