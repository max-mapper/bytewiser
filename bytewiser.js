#!/usr/bin/env node

const workshopper = require('workshopper')
    , path        = require('path')

workshopper({
    name     : 'bytewiser'
  , title    : 'Bytewiser'
  , subtitle : 'Learn how to work with binary data in Node + HTML5 browsers'
  , appDir   : __dirname
  , menu     : {
        bg : 'blue'
    }
  , helpFile : path.join(__dirname, 'help.txt')
}).init()