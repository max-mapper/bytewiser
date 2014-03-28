Array Buffers are the backend for Typed Arrays. Whereas Buffer in node is both
the raw bytes as well as the encoding/view, Array Buffers are only raw bytes and you
have to create a Typed Array on top of an Array Buffer in order to access the data.

When you create a new Typed Array and don't give it an Array Buffer to be a view
on top of it will create it's own new Array Buffer instead.

For this challenge, take the integer from process.argv[2] and write it as the first
element in a single element Uint32Array. Then create a Uint16Array from the Array
Buffer of the Uint32Array and log out to the console the JSON stringified version
of the Uint16Array.

Bonus: try to explain the relevance of the integer from process.argv[2], or explain
why the Uint16Array has the particular values that it does.

When you have completed your program, you can run it in the test
environment with:

  {bold}{appname} run program.js{/bold}

And once you are happy that it is correct then run:

  {bold}{appname} verify program.js{/bold}

And your submission will be verified for correctness. After you have
a correct solution, run `{bold}{appname}{/bold}` again and select the next problem!

----------------------------------------------------------------------
HINTS:

Read more about Typed Arrays here:
  http://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays

also: JSON.stringify() FTW!

To get output for debugging when running `{appname} run program.js`
you should use console.error instead of console.log.