export const LexemeType_Unknown = 0;

// Symbols
export const LexemeType_AtSign = 1;
export const LexemeType_OpenParen = 2;
export const LexemeType_CloseParen = 3;
export const LexemeType_OpenBrace = 4;
export const LexemeType_CloseBrace = 5;
export const LexemeType_Colon = 6;
export const LexemeType_Comma = 7;
export const LexemeType_TransitionOperator = 8;
export const LexemeType_String = 9;

// Keywords
export const LexemeType_Machine = 10;
export const LexemeType_External = 11;
export const LexemeType_Action = 12;
export const LexemeType_Activity = 13;
export const LexemeType_Condition = 14;
export const LexemeType_Delay = 15;
export const LexemeType_Emits = 16;
export const LexemeType_Raises = 17;
export const LexemeType_Sends = 18;
export const LexemeType_To = 19;
export const LexemeType_Initial = 20;
export const LexemeType_Parallel = 21;
export const LexemeType_Final = 22;
export const LexemeType_Deep = 23;
export const LexemeType_History = 24;
export const LexemeType_State = 25;
export const LexemeType_Entry = 26;
export const LexemeType_Exit = 27;
export const LexemeType_Spawn = 28;
export const LexemeType_From = 29;
export const LexemeType_On = 30;
export const LexemeType_Raised = 31;
export const LexemeType_Finished = 32;
export const LexemeType_After = 33;
export const LexemeType_Now = 34;
export const LexemeType_Default = 35;
export const LexemeType_If = 36;
export const LexemeType_Do = 37;

// Identifiers
export const LexemeType_Identifier = 38;
export const LexemeType_DottedIdentifier = 39;
export const LexemeType_WildcardDottedIdentifier = 40;
export const LexemeType_DottedPathIdentifier = 41;

// Trivia
export const LexemeType_DocBlockComment = 42;
export const LexemeType_DocLineComment = 43;
export const LexemeType_BlockComment = 44;
export const LexemeType_LineComment = 45;

// Control characters
export const LexemeType_WS = 46;
export const LexemeType_EOL = 47;
export const LexemeType_BOF = 48;
export const LexemeType_EOF = 49;

/**
 * Lexeme type.
 */
export type LexemeType =
  | typeof LexemeType_Unknown
  | typeof LexemeType_AtSign
  | typeof LexemeType_OpenParen
  | typeof LexemeType_CloseParen
  | typeof LexemeType_OpenBrace
  | typeof LexemeType_CloseBrace
  | typeof LexemeType_Colon
  | typeof LexemeType_Comma
  | typeof LexemeType_TransitionOperator
  | typeof LexemeType_String
  | typeof LexemeType_Machine
  | typeof LexemeType_External
  | typeof LexemeType_Action
  | typeof LexemeType_Activity
  | typeof LexemeType_Condition
  | typeof LexemeType_Delay
  | typeof LexemeType_Emits
  | typeof LexemeType_Raises
  | typeof LexemeType_Sends
  | typeof LexemeType_To
  | typeof LexemeType_Initial
  | typeof LexemeType_Parallel
  | typeof LexemeType_Final
  | typeof LexemeType_Deep
  | typeof LexemeType_History
  | typeof LexemeType_State
  | typeof LexemeType_Entry
  | typeof LexemeType_Exit
  | typeof LexemeType_Spawn
  | typeof LexemeType_From
  | typeof LexemeType_On
  | typeof LexemeType_Raised
  | typeof LexemeType_Finished
  | typeof LexemeType_After
  | typeof LexemeType_Now
  | typeof LexemeType_Default
  | typeof LexemeType_If
  | typeof LexemeType_Do
  | typeof LexemeType_Identifier
  | typeof LexemeType_DottedIdentifier
  | typeof LexemeType_WildcardDottedIdentifier
  | typeof LexemeType_DottedPathIdentifier
  | typeof LexemeType_DocBlockComment
  | typeof LexemeType_DocLineComment
  | typeof LexemeType_BlockComment
  | typeof LexemeType_LineComment
  | typeof LexemeType_WS
  | typeof LexemeType_EOL
  | typeof LexemeType_BOF
  | typeof LexemeType_EOF;
