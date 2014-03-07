var     t = require('through')
        , ar = []

process.stdin
        .pipe(t(function(buff){
                ar.push(buff)
        }, function(){
                var bs = Buffer.concat(ar)
                console.log(bs)
        }))
