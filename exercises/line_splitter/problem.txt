The argument given to you from `process.argv[2]` will be a path to a file.

Read this file and split it by newline characters ('\n'). You should log
one Buffer per line.

Bonus points if you never use `.toString()`.

When you have completed your program, you can run it in the test
environment with:

  {bold}{appname} run program.js{/bold}

And once you are happy that it is correct then run:

  {bold}{appname} verify program.js{/bold}

And your submission will be verified for correctness. After you have
a correct solution, run `{bold}{appname}{/bold}` again and select the next problem!

----------------------------------------------------------------------
HINTS:

Buffers have a `.slice` method that can be used to grab a sub-selection as a view (no memcpy).

Extra bonus points if you avoid using fs.readFileSync.

Read more about Buffers here:
  http://nodejs.org/api/all.html#all_buffer
Or off-line on your local filesystem:
  {rootdir}/docs/node-api-docs.html#all_buffer

To get output for debugging when running `{appname} run program.js`
you should use console.error instead of console.log.