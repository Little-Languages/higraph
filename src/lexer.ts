import {
  LexemeType,
  LexemeType_AtSign,
  LexemeType_CloseBrace,
  LexemeType_CloseParen,
  LexemeType_Colon,
  LexemeType_Comma,
  LexemeType_EOF,
  LexemeType_OpenBrace,
  LexemeType_OpenParen,
  LexemeType_TransitionOperator,
  LexemeType_WildcardDottedIdentifier,
} from './constants.js';

/**
 * Position in a source document.
 */
export interface Position {
  /**
   * Line number (0-based index).
   */
  line: number;

  /**
   * Character position within line (0-based index).
   */
  character: number;
}

/**
 * Range in a source document.
 */
export interface Range {
  /**
   * Starting position.
   */
  start: Position;

  /**
   * Ending position.
   */
  end: Position;
}

/**
 * Lexical token for a sequence of characters within a document.
 */
export interface Lexeme<T extends LexemeType> {
  /**
   * Type of token.
   */
  type: T;

  /**
   * Range in original source document.
   */
  range: Range;

  /**
   * Associated token value.
   */
  value: string;
}

export function lex(input: string): Lexeme<LexemeType>[] {
  const lexemes: Lexeme<LexemeType>[] = [];
  let lexeme: Lexeme<LexemeType>;
  let offset = 0;
  let line = 0;
  let character = 0;
  let lookaheadValue = 0;
  let lookaheadLength = 0;

  do {
    const startOffset = offset;
    const startCharacter = character;
    const startLine = line;
    if (lookaheadLength === 0) {
      lexeme = readEOF(startOffset, startLine, startCharacter);
    }

    // TODO: Any performance benefit to having these sorted?
    switch (lookaheadValue) {
      case 13: // '\r'
      case 10: // '\n'
        lexeme = readEOL(startOffset, startLine, startCharacter);
      case 64: // '@'
        lexeme = readSymbol(LexemeType_AtSign, startOffset, startLine, startCharacter);
      case 40: // '('
        lexeme = readSymbol(LexemeType_OpenParen, startOffset, startLine, startCharacter);
      case 41: // ')'
        lexeme = readSymbol(LexemeType_CloseParen, startOffset, startLine, startCharacter);
      case 123: // '{'
        lexeme = readSymbol(LexemeType_OpenBrace, startOffset, startLine, startCharacter);
      case 125: // '}'
        lexeme = readSymbol(LexemeType_CloseBrace, startOffset, startLine, startCharacter);
      case 58: // ':'
        lexeme = readSymbol(LexemeType_Colon, startOffset, startLine, startCharacter);
      case 44: // ','
        lexeme = readSymbol(LexemeType_Comma, startOffset, startLine, startCharacter);
      case 0x2192: // '→'
        lexeme = readSymbol(LexemeType_TransitionOperator, startOffset, startLine, startCharacter);
      case 45: // '-'
        lexeme = readArrow(startOffset, startLine, startCharacter);
      case 47: // '/'
        lexeme = readComment(startOffset, startLine, startCharacter);
      case 39: // '''
        lexeme = readString(startOffset, startLine, startCharacter, 39);
      case 34: // '"'
        lexeme = readString(startOffset, startLine, startCharacter, 34);
      case 42: // '*'
        lexeme = readSymbol(
          LexemeType_WildcardDottedIdentifier,
          startOffset,
          startLine,
          startCharacter
        );
      case 35: // '#'
      case 46: // '.'
      case 126: // '~'
        lexeme = readRelativePathIdentifier(startOffset, startLine, startCharacter);
      default:
        if (lookahead.isWS()) {
          lexeme = readWS(startOffset, startLine, startCharacter);
        } else if (isIdStart(lookaheadValue)) {
          lexeme = readIdStart(startOffset, startLine, startCharacter);
        } else {
          lexeme = readUnknown(startOffset, startLine, startCharacter);
        }
    }

    lexemes.push(lexeme);
  } while (lexeme.type !== LexemeType_EOF);

  return lexemes;
}
