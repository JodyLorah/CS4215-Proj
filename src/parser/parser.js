import CParser, {CompilationUnitContext} from "./antlr/antlr_parser.js";



// import parsed code as tokens
// var CodeTokens = require('../parser/tokens.json'); 

// var parsedTokens;

// const parify = (token) => {
//     switch (token.tokenClass) {
//         case "CONSTANT":
//             console.log(typeof token.lexeme);
//             return vector_to_list(['literal', token.lexeme])
//         case "+":
//             return pair("binary_operator_combination", pair("+", pair()))
//     }
// }

// const parifyRow = (row) => {

// }


// const execute = () => {
//     let currRow = [];

//     for (i in CodeTokens) {
//         if (CodeTokens[i].tokenClass === ';') { // eol, tokenise row
//             parifyRow(currRow);
//             continue;
//         }
//         currRow.push(CodeTokens[i]);
//     }
// }

// execute();
