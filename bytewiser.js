#!/usr/bin/env node

const workshopper = require('workshopper')
    , path        = require('path')

function fpath (f) {
  return path.join(__dirname, f)
}

workshopper({
    name        : 'bytewiser'
  , title       : 'Bytewiser'
  , subtitle    : 'Learn how to work with binary data in Node + HTML5 browsers'
  , appDir      : __dirname
  , menuItems   : []
  , exerciseDir : fpath('./exercises/') 
  , helpFile    : fpath('help.txt')
})
