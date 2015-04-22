Typed Arrays offer another way to work with binary data. They were first added to JS
in 2010 and have now been standardized across most browsers thanks to the WebGL
specification for 3D programming in the browser. Typed Arrays don't have as much built-in
functionality as Buffers in node, but they have the unique advantage of working in browsers.

There are various flavors of Typed Arrays. `Uint8Array` is most similar to `Buffer`. The
“U” in “Uint” means “unsigned,” which is equivalent to saying “positive integers only.”
`Int8Array`, on the other hand, can store positive and negative values.

## Challenge

For this challenge, read the first buffer from `process.stdin`, copy all bytes into a
`Uint8Array` and then log out a JSON stringified representation of the typed array.

## Hints

Read more about Typed Arrays here:

  http://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays

also: `JSON.stringify()` FTW!

To get output for debugging when running `{appname} run program.js`
you should use `console.error` instead of `console.log`.
