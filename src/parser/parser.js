var parser = require("node-c-parser");

parser.lexer.cppUnit.clearPreprocessors("../code.c", function(err, codeText){
    if(err){
        console.log(err);
    }
    else{
        var tokens = parser.lexer.lexUnit.tokenize(codeText);
        // convert JSON object to a string
        const data = JSON.stringify(tokens, null, 4)
        const fs = require('fs')

        // write JSON string to a file
        fs.writeFile('tokens.json', data, err => {
            if (err) {
                throw err
            }
        })
    }
});

