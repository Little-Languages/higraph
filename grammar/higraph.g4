grammar Higraph;

document: EOL* (node_definition EOL+)* EOF;

node_definition: Identifier node_block;

node_block: 
  OpenCurlyBrace EOL+ (node_block_statement EOL+)* CloseCurlyBrace |
  OpenSquareBrace EOL+ (node_block_statement EOL+)* OpenSquareBrace;

node_block_statement: .*;

// Lexer
AtSign: '@';
OpenParen: '(';
CloseParen: ')';
OpenCurlyBrace: '{';
CloseCurlyBrace: '}';
OpenSquareBrace: '[';
CloseSquareBrace: ']';
Colon: ':';
Comma: ',';

// See: https://unicode.org/reports/tr31/#Immutable_Identifier_Syntax
fragment IdStart: ~[\p{Pattern_White_Space}\p{Pattern_Syntax}\p{General_Category=Private_Use}\p{Surrogate}\p{Control}\p{Noncharacter_Code_Point}];

fragment IdContinue
    : IdStart
    | '-'
    ;

Identifier: IdStart IdContinue*;

EOL: '\r' | '\n' | '\r\n';