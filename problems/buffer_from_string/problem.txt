In Node.js, `Buffer` is a global object that provides a way to work with different
kinds of binary data. Most APIs in Node core (e.g. http, net, fs) will give you
buffers, and will be able to do their job faster if you give them buffers.

For this challenge, write a node program that prints a buffer object containing
the string "bytewiser" using console.log.

When you have completed your program, you can run it in the test
environment with:

  {bold}{appname} run program.js{/bold}

And once you are happy that it is correct then run:

  {bold}{appname} verify program.js{/bold}

And your submission will be verified for correctness. After you have
a correct solution, run `{bold}{appname}{/bold}` again and select the next problem!

----------------------------------------------------------------------
HINTS:

Read more about Buffers here:
  http://nodejs.org/api/all.html#all_buffer
Or off-line on your local filesystem:
  {rootdir}/docs/node-api-docs.html#all_buffer

To get output for debugging when running `{appname} run program.js`
you should use console.error instead of console.log.