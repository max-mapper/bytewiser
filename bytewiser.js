#!/usr/bin/env node

const workshopper = require('workshopper')
    , path        = require('path')
    , credits     = require('./credits')

function fpath (f) {
  return path.join(__dirname, f)
}

workshopper({
    name        : 'bytewiser'
  , appDir      : __dirname
  , languages   : ['en', 'fr']
  , helpFile    : fpath('i18n/help/{lang}.txt')
  , menuItems   : [ {
        name    : 'credits'
      , handler : credits
    } ]
})
