var parser = require("node-c-parser");

parser.lexer.cppUnit.clearPreprocessors("../code.c", function(err, codeText){
    if(err){
        console.log(err);
    }
    else{
        var tokens = parser.lexer.lexUnit.tokenize(codeText);
        // const fs = require('fs');
        // fs.writeFile("/tmp/test", tokens, function(err) {
        //     if(err) {
        //         return console.log(err);
        //     } else {
        //         console.log("The file was saved!");
        //     }
        // });
        console.log(tokens);
    }
});

