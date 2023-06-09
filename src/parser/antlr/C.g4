    /*
    [The "BSD licence"]
    Copyright (c) 2013 Sam Harwell
    All rights reserved.

    Redistribution and use in source and binary forms, with or without
    modification, are permitted provided that the following conditions
    are met:
    1. Redistributions of source code must retain the above copyright
        notice, this list of conditions and the following disclaimer.
    2. Redistributions in binary form must reproduce the above copyright
        notice, this list of conditions and the following disclaimer in the
        documentation and/or other materials provided with the distribution.
    3. The name of the author may not be used to endorse or promote products
        derived from this software without specific prior written permission.

    THIS SOFTWARE IS PROVIDED BY THE AUTHOR ``AS IS'' AND ANY EXPRESS OR
    IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
    OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
    IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY DIRECT, INDIRECT,
    INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
    NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
    DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
    THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
    (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
    THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
    */

    /** C 2011 grammar built from the C11 Spec */
    grammar C;


    primaryExpression
        :   Identifier
        |   Constant
        |   StringLiteral+
        |   '(' assignmentExpression ')'
        ;

    postfixExpression
        : primaryExpression ('(' argumentExpressionList? ')' | '[' assignmentExpression ']')? 
        ;

    argumentExpressionList
        :   assignmentExpression (',' assignmentExpression)*
        ;

    unaryExpression
        :   postfixExpression
        |   unaryOperator castExpression
        ;

    unaryOperator
        :   '-' | '!'
        ;

    castExpression
        :   unaryExpression
        ;

    multiplicativeExpression
        :   castExpression
        |   multiplicativeExpression '*' castExpression
        |   multiplicativeExpression '/' castExpression
        |   multiplicativeExpression '%' castExpression
        ;

    additiveExpression
        :   multiplicativeExpression
        |   additiveExpression '+' multiplicativeExpression
        |   additiveExpression '-' multiplicativeExpression
        ;

    relationalExpression
        :   additiveExpression
        |   relationalExpression '<' additiveExpression
        |   relationalExpression '>' additiveExpression
        |   relationalExpression '<=' additiveExpression
        |   relationalExpression '>=' additiveExpression
        ;

    equalityExpression
        :   relationalExpression
        |   equalityExpression '==' relationalExpression
        |   equalityExpression '!=' relationalExpression
        ;

    logicalAndExpression
        :   equalityExpression 
        |   logicalAndExpression '&&' equalityExpression
        ;

    logicalOrExpression
        :   logicalAndExpression 
        |   logicalOrExpression '||' logicalAndExpression
        ;

    conditionalExpression   
        :   logicalOrExpression
        ;

    assignmentExpression
        :   conditionalExpression
        |   unaryExpression assignmentOperator conditionalExpression
        ;

    assignmentOperator
        :   '=' 
        ;

    constantExpression
        :   conditionalExpression
        ;

    declaration
        :   typeSpecifier initDeclarator ';'
        ;

    initDeclarator
        :   directDeclarator ('=' initializer)?
        ;

    typeSpecifier
        :   'char'
        |   'int'
        |   'double'
        ;


    directDeclarator
        :   Identifier
        |   '(' directDeclarator ')'
        |   directDeclarator '[' assignmentExpression? ']' /*for arrays*/
        |   directDeclarator '(' parameterList ')'
        |   directDeclarator '(' identifierList? ')'
        ;

    parameterList
        :   parameterDeclaration (',' parameterDeclaration)*
        ;

    parameterDeclaration
        :   typeSpecifier directDeclarator
        |   typeSpecifier directAbstractDeclarator?
        ;

    identifierList
        :   Identifier (',' Identifier)*
        ;

    typeName
        :   directAbstractDeclarator?
        ;

    directAbstractDeclarator
        :   '(' directAbstractDeclarator ')'
        |   directAbstractDeclarator '[' assignmentExpression? ']'
        |   directAbstractDeclarator '(' parameterList? ')' 
        ;

    typedefName
        :   Identifier
        ;

    initializer
        :   assignmentExpression
        |   '{' initializerList ','? '}'
        ;

    initializerList
        :   designation? initializer (',' designation? initializer)*
        ;

    designation
        :   designatorList '='
        ;

    designatorList
        :   designator+
        ;

    designator
        :   '[' constantExpression ']'
        |   '.' Identifier
        ;

    statement
        :   compoundStatement
        |   expressionStatement
        |   selectionStatement
        |   iterationStatement
        |   jumpStatement
        ;

    compoundStatement
        :   '{' blockItemList? '}'
        ;

    blockItemList
        :   blockItem+
        ;

    blockItem
        :   statement
        |   declaration
        ;

    expressionStatement
        :   assignmentExpression ';'
        ;

    selectionStatement
        :   'if' '(' assignmentExpression ')' statement ('else' statement)?
        ;

    iterationStatement
        :   While '(' assignmentExpression ')' statement
        ;

    jumpStatement
        :  'return' assignmentExpression? ';'
        ;

    compilationUnit
        :   translationUnit? EOF
        ;

    translationUnit
        :   externalDeclaration+
        ;

    externalDeclaration
        :   functionDefinition
        |   declaration
        ;

    functionDefinition
        :   typeSpecifier directDeclarator compoundStatement
        ;

    declarationList
        :   declaration+
        ;

    Auto : 'auto';
    Break : 'break';
    Case : 'case';
    Char : 'char';
    Const : 'const';
    Continue : 'continue';
    Default : 'default';
    Do : 'do';
    Double : 'double';
    Else : 'else';
    Enum : 'enum';
    Extern : 'extern';
    Float : 'float';
    For : 'for';
    Goto : 'goto';
    If : 'if';
    Inline : 'inline';
    Int : 'int';
    Long : 'long';
    Register : 'register';
    Restrict : 'restrict';
    Return : 'return';
    Short : 'short';
    Signed : 'signed';
    Sizeof : 'sizeof';
    Static : 'static';
    Switch : 'switch';
    Typedef : 'typedef';
    Union : 'union';
    Unsigned : 'unsigned';
    Void : 'void';
    Volatile : 'volatile';
    While : 'while';

    Alignas : '_Alignas';
    Alignof : '_Alignof';
    Atomic : '_Atomic';
    Bool : '_Bool';
    Complex : '_Complex';
    Generic : '_Generic';
    Imaginary : '_Imaginary';
    Noreturn : '_Noreturn';
    StaticAssert : '_Static_assert';
    ThreadLocal : '_Thread_local';

    LeftParen : '(';
    RightParen : ')';
    LeftBracket : '[';
    RightBracket : ']';
    LeftBrace : '{';
    RightBrace : '}';

    Less : '<';
    LessEqual : '<=';
    Greater : '>';
    GreaterEqual : '>=';

    Plus : '+';
    PlusPlus : '++';
    Minus : '-';
    MinusMinus : '--';
    Star : '*';
    Div : '/';
    Mod : '%';

    And : '&';
    Or : '|';
    AndAnd : '&&';
    OrOr : '||';
    Caret : '^';
    Not : '!';
    Tilde : '~';

    Question : '?';
    Colon : ':';
    Semi : ';';
    Comma : ',';

    Assign : '=';
    // '*=' | '/=' | '%=' | '+=' | '-=' | '<<=' | '>>=' | '&=' | '^=' | '|='
    StarAssign : '*=';
    DivAssign : '/=';
    ModAssign : '%=';
    PlusAssign : '+=';
    MinusAssign : '-=';
    AndAssign : '&=';
    XorAssign : '^=';
    OrAssign : '|=';

    Equal : '==';
    NotEqual : '!=';

    Arrow : '->';
    Dot : '.';
    Ellipsis : '...';

    Identifier
        :   IdentifierNondigit
            (   IdentifierNondigit
            |   Digit
            )*
        ;

    fragment
    IdentifierNondigit
        :   Nondigit
        |   UniversalCharacterName
        //|   // other implementation-defined characters...
        ;

    fragment
    Nondigit
        :   [a-zA-Z_]
        ;

    fragment
    Digit
        :   [0-9]
        ;

    fragment
    UniversalCharacterName
        :   '\\u' HexQuad
        |   '\\U' HexQuad HexQuad
        ;

    fragment
    HexQuad
        :   HexadecimalDigit HexadecimalDigit HexadecimalDigit HexadecimalDigit
        ;

    Constant
        :   IntegerConstant
        |   FloatingConstant
        //|   EnumerationConstant
        |   CharacterConstant
        ;

    fragment
    IntegerConstant
        :   DecimalConstant IntegerSuffix?
        |   OctalConstant IntegerSuffix?
        |   HexadecimalConstant IntegerSuffix?
        |	BinaryConstant
        ;

    fragment
    BinaryConstant
        :	'0' [bB] [0-1]+
        ;

    fragment
    DecimalConstant
        :   NonzeroDigit Digit*
        ;

    fragment
    OctalConstant
        :   '0' OctalDigit*
        ;

    fragment
    HexadecimalConstant
        :   HexadecimalPrefix HexadecimalDigit+
        ;

    fragment
    HexadecimalPrefix
        :   '0' [xX]
        ;

    fragment
    NonzeroDigit
        :   [1-9]
        ;

    fragment
    OctalDigit
        :   [0-7]
        ;

    fragment
    HexadecimalDigit
        :   [0-9a-fA-F]
        ;

    fragment
    IntegerSuffix
        :   UnsignedSuffix LongSuffix?
        |   UnsignedSuffix LongLongSuffix
        |   LongSuffix UnsignedSuffix?
        |   LongLongSuffix UnsignedSuffix?
        ;

    fragment
    UnsignedSuffix
        :   [uU]
        ;

    fragment
    LongSuffix
        :   [lL]
        ;

    fragment
    LongLongSuffix
        :   'll' | 'LL'
        ;

    fragment
    FloatingConstant
        :   DecimalFloatingConstant
        |   HexadecimalFloatingConstant
        ;

    fragment
    DecimalFloatingConstant
        :   FractionalConstant ExponentPart? FloatingSuffix?
        |   DigitSequence ExponentPart FloatingSuffix?
        ;

    fragment
    HexadecimalFloatingConstant
        :   HexadecimalPrefix (HexadecimalFractionalConstant | HexadecimalDigitSequence) BinaryExponentPart FloatingSuffix?
        ;

    fragment
    FractionalConstant
        :   DigitSequence? '.' DigitSequence
        |   DigitSequence '.'
        ;

    fragment
    ExponentPart
        :   [eE] Sign? DigitSequence
        ;

    fragment
    Sign
        :   [+-]
        ;

    DigitSequence
        :   Digit+
        ;

    fragment
    HexadecimalFractionalConstant
        :   HexadecimalDigitSequence? '.' HexadecimalDigitSequence
        |   HexadecimalDigitSequence '.'
        ;

    fragment
    BinaryExponentPart
        :   [pP] Sign? DigitSequence
        ;

    fragment
    HexadecimalDigitSequence
        :   HexadecimalDigit+
        ;

    fragment
    FloatingSuffix
        :   [flFL]
        ;

    fragment
    CharacterConstant
        :   '\'' CCharSequence '\''
        |   'L\'' CCharSequence '\''
        |   'u\'' CCharSequence '\''
        |   'U\'' CCharSequence '\''
        ;

    fragment
    CCharSequence
        :   CChar+
        ;

    fragment
    CChar
        :   ~['\\\r\n]
        |   EscapeSequence
        ;

    fragment
    EscapeSequence
        :   SimpleEscapeSequence
        |   OctalEscapeSequence
        |   HexadecimalEscapeSequence
        |   UniversalCharacterName
        ;

    fragment
    SimpleEscapeSequence
        :   '\\' ['"?abfnrtv\\]
        ;

    fragment
    OctalEscapeSequence
        :   '\\' OctalDigit OctalDigit? OctalDigit?
        ;

    fragment
    HexadecimalEscapeSequence
        :   '\\x' HexadecimalDigit+
        ;

    StringLiteral
        :   EncodingPrefix? '"' SCharSequence? '"'
        ;

    fragment
    EncodingPrefix
        :   'u8'
        |   'u'
        |   'U'
        |   'L'
        ;

    fragment
    SCharSequence
        :   SChar+
        ;

    fragment
    SChar
        :   ~["\\\r\n]
        |   EscapeSequence
        |   '\\\n'   // Added line
        |   '\\\r\n' // Added line
        ;

    ComplexDefine
        :   '#' Whitespace? 'define'  ~[#\r\n]*
            -> skip
        ;

    IncludeDirective
        :   '#' Whitespace? 'include' Whitespace? (('"' ~[\r\n]* '"') | ('<' ~[\r\n]* '>' )) Whitespace? Newline
            -> skip
        ;

    // ignore the following asm blocks:
    /*
        asm
        {
            mfspr x, 286;
        }
    */
    AsmBlock
        :   'asm' ~'{'* '{' ~'}'* '}'
        -> skip
        ;

    // ignore the lines generated by c preprocessor
    // sample line : '#line 1 "/home/dm/files/dk1.h" 1'
    LineAfterPreprocessing
        :   '#line' Whitespace* ~[\r\n]*
            -> skip
        ;

    LineDirective
        :   '#' Whitespace? DecimalConstant Whitespace? StringLiteral ~[\r\n]*
            -> skip
        ;

    PragmaDirective
        :   '#' Whitespace? 'pragma' Whitespace ~[\r\n]*
            -> skip
        ;

    Whitespace
        :   [ \t]+
            -> skip
        ;

    Newline
        :   (   '\r' '\n'?
            |   '\n'
            )
            -> skip
        ;

    BlockComment
        :   '/*' .*? '*/'
            -> skip
        ;

    LineComment
        :   '//' ~[\r\n]*
            -> skip
        ;
