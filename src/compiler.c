#include "emscripten.h"

EMSCRIPTEN_KEEPALIVE
int lex() {
  return 1;
}

EMSCRIPTEN_KEEPALIVE
int tokenize() {
  return 2;
}

EMSCRIPTEN_KEEPALIVE
int parse() {
  return 3;
}

EMSCRIPTEN_KEEPALIVE
int process() {
  return 4;
}

EMSCRIPTEN_KEEPALIVE
int analyze() {
  return 5;
}

// Do we need to link in here?
EMSCRIPTEN_KEEPALIVE
int link() {
  return 6;
}