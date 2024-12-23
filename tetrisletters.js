/***************************************************************
 * JavaScript translation of your C++ code with "fall_instr_let"
 * arrays for ASCII 33..90 and the lookup function getFallinstrByAscii.
 **************************************************************/

/**
 * Each "fall_instr_let" in C++ is represented as a plain JS object:
 * {
 *   blocktype: number,
 *   color: number,
 *   x_pos: number,
 *   y_stop: number,
 *   num_rot: number
 * }
 */

// -------------------------------------------------------------
// ASCII 33 - '!'
// -------------------------------------------------------------
const a33 = [
    { blocktype: 0, color: 0, x_pos: 2, y_stop: 16, num_rot: 0 },
    { blocktype: 2, color: 5, x_pos: 3, y_stop: 13, num_rot: 2 },
    { blocktype: 1, color: 3, x_pos: 1, y_stop: 13, num_rot: 2 },
    { blocktype: 7, color: 1, x_pos: 1, y_stop: 10, num_rot: 3 },
    { blocktype: 7, color: 6, x_pos: 3, y_stop: 10, num_rot: 0 },
  ];
  
  // -------------------------------------------------------------
  // ASCII 34 - '"'
  // -------------------------------------------------------------
  const a34 = [
    { blocktype: 7, color: 0, x_pos: 1, y_stop: 11, num_rot: 3 },
    { blocktype: 7, color: 1, x_pos: 4, y_stop: 11, num_rot: 3 },
    { blocktype: 7, color: 2, x_pos: 1, y_stop: 10, num_rot: 1 },
    { blocktype: 7, color: 5, x_pos: 4, y_stop: 10, num_rot: 1 },
  ];
  
  // -------------------------------------------------------------
  // ASCII 35 - '#'
  // -------------------------------------------------------------
  const a35 = [
    { blocktype: 7, color: 0, x_pos: 0, y_stop: 16, num_rot: 2 },
    { blocktype: 7, color: 5, x_pos: 4, y_stop: 16, num_rot: 1 },
    { blocktype: 0, color: 6, x_pos: 2, y_stop: 15, num_rot: 0 },
    { blocktype: 7, color: 3, x_pos: 0, y_stop: 14, num_rot: 2 },
    { blocktype: 7, color: 1, x_pos: 4, y_stop: 14, num_rot: 1 },
    { blocktype: 6, color: 3, x_pos: 0, y_stop: 12, num_rot: 2 },
    { blocktype: 6, color: 4, x_pos: 3, y_stop: 12, num_rot: 2 },
    { blocktype: 6, color: 6, x_pos: 0, y_stop: 10, num_rot: 0 },
    { blocktype: 6, color: 7, x_pos: 3, y_stop: 10, num_rot: 0 },
  ];
  
  // -------------------------------------------------------------
  // ASCII 36 - '$'
  // -------------------------------------------------------------
  const a36 = [
    { blocktype: 2, color: 2, x_pos: 0, y_stop: 16, num_rot: 3 },
    { blocktype: 7, color: 0, x_pos: 3, y_stop: 16, num_rot: 1 },
    { blocktype: 7, color: 3, x_pos: 4, y_stop: 14, num_rot: 3 },
    { blocktype: 1, color: 6, x_pos: 2, y_stop: 13, num_rot: 3 },
    { blocktype: 1, color: 7, x_pos: 1, y_stop: 13, num_rot: 1 },
    { blocktype: 7, color: 3, x_pos: 0, y_stop: 12, num_rot: 1 },
    { blocktype: 7, color: 1, x_pos: 1, y_stop: 10, num_rot: 3 },
    { blocktype: 2, color: 2, x_pos: 3, y_stop: 10, num_rot: 1 },
  ];
  
  // -------------------------------------------------------------
  // ASCII 37 - '%'
  // -------------------------------------------------------------
  const a37 = [
    { blocktype: 0, color: 6, x_pos: 4, y_stop: 16, num_rot: 0 },
    { blocktype: 7, color: 1, x_pos: 0, y_stop: 16, num_rot: 3 },
    { blocktype: 7, color: 3, x_pos: 1, y_stop: 15, num_rot: 1 },
    { blocktype: 0, color: 0, x_pos: 2, y_stop: 13, num_rot: 0 },
    { blocktype: 7, color: 5, x_pos: 3, y_stop: 12, num_rot: 0 },
    { blocktype: 7, color: 7, x_pos: 4, y_stop: 10, num_rot: 1 },
    { blocktype: 0, color: 2, x_pos: 0, y_stop: 10, num_rot: 0 },
  ];
  
  // -------------------------------------------------------------
  // ASCII 38 - '&'
  // -------------------------------------------------------------
  const a38 = [
    { blocktype: 2, color: 1, x_pos: 1, y_stop: 16, num_rot: 1 },
    { blocktype: 4, color: 0, x_pos: 4, y_stop: 16, num_rot: 0 },
    { blocktype: 5, color: 4, x_pos: 0, y_stop: 15, num_rot: 0 },
    { blocktype: 6, color: 7, x_pos: 2, y_stop: 14, num_rot: 3 },
    { blocktype: 7, color: 6, x_pos: 1, y_stop: 12, num_rot: 0 },
    { blocktype: 5, color: 3, x_pos: 4, y_stop: 12, num_rot: 0 },
    { blocktype: 5, color: 1, x_pos: 0, y_stop: 11, num_rot: 0 },
    { blocktype: 2, color: 2, x_pos: 2, y_stop: 10, num_rot: 3 },
  ];
  
  // -------------------------------------------------------------
  // ASCII 39 - '''
  // -------------------------------------------------------------
  const a39 = [
    { blocktype: 7, color: 3, x_pos: 2, y_stop: 10, num_rot: 1 },
    { blocktype: 7, color: 0, x_pos: 2, y_stop: 11, num_rot: 3 },
  ];
  
  // -------------------------------------------------------------
  // ASCII 40 - '('
  // -------------------------------------------------------------
  const a40 = [
    { blocktype: 5, color: 0, x_pos: 1, y_stop: 16, num_rot: 1 },
    { blocktype: 2, color: 6, x_pos: 0, y_stop: 14, num_rot: 0 },
    { blocktype: 2, color: 3, x_pos: 0, y_stop: 13, num_rot: 2 },
    { blocktype: 4, color: 5, x_pos: 1, y_stop: 10, num_rot: 1 },
  ];
  
  // -------------------------------------------------------------
  // ASCII 41 - ')'
  // -------------------------------------------------------------
  const a41 = [
    { blocktype: 4, color: 6, x_pos: 2, y_stop: 16, num_rot: 1 },
    { blocktype: 2, color: 0, x_pos: 4, y_stop: 14, num_rot: 0 },
    { blocktype: 2, color: 3, x_pos: 4, y_stop: 13, num_rot: 2 },
    { blocktype: 5, color: 6, x_pos: 2, y_stop: 10, num_rot: 1 },
  ];
  
  // -------------------------------------------------------------
  // ASCII 42 - '*'
  // -------------------------------------------------------------
  const a42 = [
    { blocktype: 4, color: 6, x_pos: 0, y_stop: 14, num_rot: 1 },
    { blocktype: 5, color: 5, x_pos: 3, y_stop: 14, num_rot: 1 },
    { blocktype: 0, color: 2, x_pos: 1, y_stop: 12, num_rot: 0 },
    { blocktype: 0, color: 0, x_pos: 3, y_stop: 12, num_rot: 0 },
    { blocktype: 2, color: 1, x_pos: 3, y_stop: 10, num_rot: 1 },
    { blocktype: 1, color: 2, x_pos: 0, y_stop: 10, num_rot: 3 },
  ];
  
  // -------------------------------------------------------------
  // ASCII 43 - '+'
  // -------------------------------------------------------------
  const a43 = [
    { blocktype: 2, color: 1, x_pos: 2, y_stop: 15, num_rot: 0 },
    { blocktype: 2, color: 6, x_pos: 0, y_stop: 14, num_rot: 3 },
    { blocktype: 0, color: 3, x_pos: 4, y_stop: 13, num_rot: 0 },
    { blocktype: 3, color: 4, x_pos: 0, y_stop: 12, num_rot: 0 },
    { blocktype: 0, color: 2, x_pos: 2, y_stop: 11, num_rot: 0 },
  ];
  
  // -------------------------------------------------------------
  // ASCII 44 - ','
  // -------------------------------------------------------------
  const a44 = [
    { blocktype: 7, color: 4, x_pos: 1, y_stop: 16, num_rot: 3 },
    { blocktype: 7, color: 0, x_pos: 2, y_stop: 15, num_rot: 2 },
  ];
  
  // -------------------------------------------------------------
  // ASCII 45 - '-'
  // -------------------------------------------------------------
  const a45 = [
    { blocktype: 3, color: 1, x_pos: 1, y_stop: 13, num_rot: 0 },
    { blocktype: 2, color: 6, x_pos: 3, y_stop: 13, num_rot: 3 },
    { blocktype: 1, color: 0, x_pos: 0, y_stop: 13, num_rot: 1 },
  ];
  
  // -------------------------------------------------------------
  // ASCII 46 - '.'
  // -------------------------------------------------------------
  const a46 = [
    { blocktype: 0, color: 1, x_pos: 3, y_stop: 16, num_rot: 0 },
  ];
  
  // -------------------------------------------------------------
  // ASCII 47 - '/'
  // -------------------------------------------------------------
  const a47 = [
    { blocktype: 4, color: 6, x_pos: 0, y_stop: 16, num_rot: 1 },
    { blocktype: 7, color: 0, x_pos: 1, y_stop: 14, num_rot: 3 },
    { blocktype: 7, color: 3, x_pos: 2, y_stop: 13, num_rot: 2 },
    { blocktype: 7, color: 5, x_pos: 3, y_stop: 11, num_rot: 0 },
    { blocktype: 7, color: 7, x_pos: 4, y_stop: 10, num_rot: 1 },
  ];
  
  // -------------------------------------------------------------
  // ASCII 48 - '0'
  // -------------------------------------------------------------
  const a48 = [
    { blocktype: 7, color: 0, x_pos: 2, y_stop: 16, num_rot: 3 },
    { blocktype: 6, color: 3, x_pos: 0, y_stop: 16, num_rot: 2 },
    { blocktype: 7, color: 4, x_pos: 4, y_stop: 16, num_rot: 1 },
    { blocktype: 3, color: 2, x_pos: 0, y_stop: 14, num_rot: 1 },
    { blocktype: 6, color: 5, x_pos: 1, y_stop: 14, num_rot: 1 },
    { blocktype: 0, color: 1, x_pos: 4, y_stop: 14, num_rot: 0 },
    { blocktype: 1, color: 3, x_pos: 3, y_stop: 12, num_rot: 3 },
    { blocktype: 6, color: 7, x_pos: 0, y_stop: 11, num_rot: 3 },
    { blocktype: 0, color: 2, x_pos: 2, y_stop: 10, num_rot: 0 },
    { blocktype: 6, color: 3, x_pos: 4, y_stop: 11, num_rot: 1 },
  ];
  
  // -------------------------------------------------------------
  // ASCII 49 - '1'
  // -------------------------------------------------------------
  const a49 = [
    { blocktype: 0, color: 4, x_pos: 0, y_stop: 16, num_rot: 0 },
    { blocktype: 1, color: 2, x_pos: 2, y_stop: 16, num_rot: 1 },
    { blocktype: 1, color: 4, x_pos: 3, y_stop: 16, num_rot: 3 },
    { blocktype: 7, color: 3, x_pos: 2, y_stop: 14, num_rot: 3 },
    { blocktype: 5, color: 1, x_pos: 2, y_stop: 13, num_rot: 0 },
    { blocktype: 6, color: 6, x_pos: 0, y_stop: 11, num_rot: 0 },
    { blocktype: 7, color: 6, x_pos: 0, y_stop: 10, num_rot: 1 },
    { blocktype: 0, color: 0, x_pos: 2, y_stop: 10, num_rot: 0 },
  ];
  
  // -------------------------------------------------------------
  // ASCII 50 - '2'
  // -------------------------------------------------------------
  const a50 = [
    { blocktype: 7, color: 4, x_pos: 0, y_stop: 16, num_rot: 2 },
    { blocktype: 1, color: 2, x_pos: 2, y_stop: 16, num_rot: 1 },
    { blocktype: 1, color: 6, x_pos: 3, y_stop: 16, num_rot: 3 },
    { blocktype: 0, color: 2, x_pos: 0, y_stop: 14, num_rot: 0 },
    { blocktype: 1, color: 3, x_pos: 2, y_stop: 13, num_rot: 3 },
    { blocktype: 1, color: 2, x_pos: 4, y_stop: 13, num_rot: 2 },
    { blocktype: 6, color: 6, x_pos: 3, y_stop: 10, num_rot: 0 },
    { blocktype: 7, color: 0, x_pos: 2, y_stop: 10, num_rot: 1 },
    { blocktype: 0, color: 6, x_pos: 0, y_stop: 10, num_rot: 0 },
  ];
  
  // -------------------------------------------------------------
  // ASCII 51 - '3'
  // -------------------------------------------------------------
  const a51 = [
    { blocktype: 1, color: 2, x_pos: 1, y_stop: 16, num_rot: 3 },
    { blocktype: 1, color: 5, x_pos: 0, y_stop: 16, num_rot: 1 },
    { blocktype: 5, color: 4, x_pos: 4, y_stop: 16, num_rot: 0 },
    { blocktype: 6, color: 6, x_pos: 3, y_stop: 14, num_rot: 2 },
    { blocktype: 0, color: 2, x_pos: 1, y_stop: 13, num_rot: 0 },
    { blocktype: 1, color: 1, x_pos: 3, y_stop: 12, num_rot: 3 },
    { blocktype: 6, color: 5, x_pos: 4, y_stop: 11, num_rot: 1 },
    { blocktype: 1, color: 3, x_pos: 1, y_stop: 10, num_rot: 3 },
    { blocktype: 1, color: 3, x_pos: 0, y_stop: 10, num_rot: 1 },
  ];
  
  // -------------------------------------------------------------
  // ASCII 52 - '4'
  // -------------------------------------------------------------
  const a52 = [
    { blocktype: 2, color: 1, x_pos: 4, y_stop: 16, num_rot: 0 },
    { blocktype: 3, color: 2, x_pos: 4, y_stop: 15, num_rot: 1 },
    { blocktype: 3, color: 3, x_pos: 5, y_stop: 13, num_rot: 3 },
    { blocktype: 1, color: 0, x_pos: 1, y_stop: 13, num_rot: 3 },
    { blocktype: 1, color: 5, x_pos: 0, y_stop: 13, num_rot: 1 },
    { blocktype: 7, color: 1, x_pos: 0, y_stop: 11, num_rot: 3 },
    { blocktype: 7, color: 3, x_pos: 0, y_stop: 10, num_rot: 1 },
    { blocktype: 2, color: 6, x_pos: 4, y_stop: 11, num_rot: 2 },
  ];
  
  // -------------------------------------------------------------
  // ASCII 53 - '5'
  // -------------------------------------------------------------
  const a53 = [
    { blocktype: 2, color: 3, x_pos: 0, y_stop: 16, num_rot: 1 },
    { blocktype: 2, color: 4, x_pos: 1, y_stop: 16, num_rot: 3 },
    { blocktype: 0, color: 6, x_pos: 4, y_stop: 16, num_rot: 0 },
    { blocktype: 0, color: 7, x_pos: 4, y_stop: 14, num_rot: 0 },
    { blocktype: 2, color: 1, x_pos: 1, y_stop: 13, num_rot: 1 },
    { blocktype: 2, color: 5, x_pos: 0, y_stop: 13, num_rot: 2 },
    { blocktype: 3, color: 2, x_pos: 2, y_stop: 12, num_rot: 0 },
    { blocktype: 1, color: 4, x_pos: 0, y_stop: 10, num_rot: 1 },
    { blocktype: 1, color: 1, x_pos: 1, y_stop: 10, num_rot: 3 },
    { blocktype: 0, color: 0, x_pos: 4, y_stop: 10, num_rot: 0 },
  ];
  
  // -------------------------------------------------------------
  // ASCII 54 - '6'
  // -------------------------------------------------------------
  const a54 = [
    { blocktype: 4, color: 4, x_pos: 1, y_stop: 16, num_rot: 1 },
    { blocktype: 4, color: 3, x_pos: 3, y_stop: 16, num_rot: 1 },
    { blocktype: 2, color: 3, x_pos: 0, y_stop: 15, num_rot: 0 },
    { blocktype: 0, color: 0, x_pos: 4, y_stop: 14, num_rot: 0 },
    { blocktype: 3, color: 3, x_pos: 0, y_stop: 14, num_rot: 1 },
    { blocktype: 7, color: 4, x_pos: 1, y_stop: 13, num_rot: 2 },
    { blocktype: 7, color: 2, x_pos: 3, y_stop: 13, num_rot: 1 },
    { blocktype: 6, color: 6, x_pos: 0, y_stop: 11, num_rot: 3 },
    { blocktype: 6, color: 6, x_pos: 3, y_stop: 10, num_rot: 0 },
    { blocktype: 7, color: 4, x_pos: 2, y_stop: 10, num_rot: 1 },
  ];
  
  // -------------------------------------------------------------
  // ASCII 55 - '7'
  // -------------------------------------------------------------
  const a55 = [
    { blocktype: 0, color: 0, x_pos: 2, y_stop: 16, num_rot: 0 },
    { blocktype: 0, color: 5, x_pos: 3, y_stop: 14, num_rot: 0 },
    { blocktype: 2, color: 5, x_pos: 4, y_stop: 12, num_rot: 0 },
    { blocktype: 2, color: 6, x_pos: 2, y_stop: 11, num_rot: 3 },
    { blocktype: 0, color: 0, x_pos: 0, y_stop: 10, num_rot: 0 },
    { blocktype: 3, color: 1, x_pos: 2, y_stop: 9,  num_rot: 0 },
  ];
  
  // -------------------------------------------------------------
  // ASCII 56 - '8'
  // -------------------------------------------------------------
  const a56 = [
    { blocktype: 5, color: 1, x_pos: 0, y_stop: 16, num_rot: 1 },
    { blocktype: 4, color: 4, x_pos: 3, y_stop: 16, num_rot: 1 },
    { blocktype: 2, color: 2, x_pos: 0, y_stop: 14, num_rot: 0 },
    { blocktype: 1, color: 2, x_pos: 4, y_stop: 14, num_rot: 0 },
    { blocktype: 0, color: 5, x_pos: 2, y_stop: 13, num_rot: 0 },
    { blocktype: 0, color: 6, x_pos: 0, y_stop: 11, num_rot: 0 },
    { blocktype: 0, color: 0, x_pos: 4, y_stop: 11, num_rot: 0 },
    { blocktype: 3, color: 1, x_pos: 1, y_stop: 9,  num_rot: 0 },
  ];
  
  // -------------------------------------------------------------
  // ASCII 57 - '9'
  // -------------------------------------------------------------
  const a57 = [
    { blocktype: 2, color: 3, x_pos: 4, y_stop: 16, num_rot: 0 },
    { blocktype: 2, color: 2, x_pos: 4, y_stop: 15, num_rot: 2 },
    { blocktype: 3, color: 7, x_pos: 1, y_stop: 12, num_rot: 0 },
    { blocktype: 6, color: 6, x_pos: 4, y_stop: 12, num_rot: 3 },
    { blocktype: 7, color: 5, x_pos: 0, y_stop: 11, num_rot: 0 },
    { blocktype: 7, color: 4, x_pos: 4, y_stop: 10, num_rot: 1 },
    { blocktype: 1, color: 1, x_pos: 1, y_stop: 10, num_rot: 1 },
  ];
  
  // -------------------------------------------------------------
  // ASCII 58 - ':'
  // -------------------------------------------------------------
  const a58 = [
    { blocktype: 0, color: 1, x_pos: 2, y_stop: 15, num_rot: 0 },
    { blocktype: 0, color: 6, x_pos: 2, y_stop: 11, num_rot: 0 },
  ];
  
  // -------------------------------------------------------------
  // ASCII 59 - ';'
  // -------------------------------------------------------------
  const a59 = [
    { blocktype: 7, color: 3, x_pos: 1, y_stop: 16, num_rot: 3 },
    { blocktype: 7, color: 4, x_pos: 2, y_stop: 15, num_rot: 2 },
    { blocktype: 0, color: 2, x_pos: 2, y_stop: 11, num_rot: 0 },
  ];
  
  // -------------------------------------------------------------
  // ASCII 60 - '<'
  // -------------------------------------------------------------
  const a60 = [
    { blocktype: 7, color: 6, x_pos: 3, y_stop: 16, num_rot: 0 },
    { blocktype: 7, color: 1, x_pos: 1, y_stop: 15, num_rot: 2 },
    { blocktype: 0, color: 3, x_pos: 0, y_stop: 13, num_rot: 0 },
    { blocktype: 7, color: 2, x_pos: 1, y_stop: 11, num_rot: 3 },
    { blocktype: 7, color: 4, x_pos: 3, y_stop: 10, num_rot: 1 },
  ];
  
  // -------------------------------------------------------------
  // ASCII 61 - '='
  // -------------------------------------------------------------
  const a61 = [
    { blocktype: 1, color: 1, x_pos: 2, y_stop: 15, num_rot: 3 },
    { blocktype: 1, color: 2, x_pos: 1, y_stop: 15, num_rot: 1 },
    { blocktype: 1, color: 3, x_pos: 2, y_stop: 11, num_rot: 3 },
    { blocktype: 1, color: 5, x_pos: 1, y_stop: 11, num_rot: 1 },
  ];
  
  // -------------------------------------------------------------
  // ASCII 62 - '>'
  // -------------------------------------------------------------
  const a62 = [
    { blocktype: 7, color: 4, x_pos: 1, y_stop: 16, num_rot: 3 },
    { blocktype: 7, color: 2, x_pos: 3, y_stop: 15, num_rot: 1 },
    { blocktype: 0, color: 5, x_pos: 4, y_stop: 13, num_rot: 0 },
    { blocktype: 7, color: 3, x_pos: 3, y_stop: 11, num_rot: 0 },
    { blocktype: 7, color: 1, x_pos: 1, y_stop: 10, num_rot: 2 },
  ];
  
  // -------------------------------------------------------------
  // ASCII 63 - '?'
  // -------------------------------------------------------------
  const a63 = [
    { blocktype: 7, color: 1, x_pos: 2, y_stop: 16, num_rot: 3 },
    { blocktype: 4, color: 3, x_pos: 2, y_stop: 14, num_rot: 1 },
    { blocktype: 2, color: 2, x_pos: 4, y_stop: 12, num_rot: 0 },
    { blocktype: 2, color: 6, x_pos: 2, y_stop: 11, num_rot: 3 },
    { blocktype: 0, color: 4, x_pos: 0, y_stop: 11, num_rot: 0 },
    { blocktype: 3, color: 5, x_pos: 1, y_stop: 9,  num_rot: 0 },
  ];
  
  // -------------------------------------------------------------
  // ASCII 64 - '@'
  // -------------------------------------------------------------
  const a64 = [
    { blocktype: 6, color: 2, x_pos: 1, y_stop: 16, num_rot: 0 },
    { blocktype: 6, color: 1, x_pos: 3, y_stop: 16, num_rot: 2 },
    { blocktype: 1, color: 3, x_pos: 0, y_stop: 15, num_rot: 0 },
    { blocktype: 1, color: 4, x_pos: 2, y_stop: 13, num_rot: 1 },
    { blocktype: 3, color: 5, x_pos: 0, y_stop: 12, num_rot: 1 },
    { blocktype: 7, color: 6, x_pos: 1, y_stop: 10, num_rot: 1 },
    { blocktype: 6, color: 3, x_pos: 2, y_stop: 10, num_rot: 0 },
    { blocktype: 1, color: 2, x_pos: 4, y_stop: 12, num_rot: 2 },
  ];
  
  // -------------------------------------------------------------
  // ASCII 65 - 'A'
  // -------------------------------------------------------------
  const a65 = [
    { blocktype: 0, color: 2, x_pos: 0, y_stop: 16, num_rot: 0 },
    { blocktype: 0, color: 1, x_pos: 4, y_stop: 16, num_rot: 0 },
    { blocktype: 5, color: 5, x_pos: 3, y_stop: 14, num_rot: 1 },
    { blocktype: 4, color: 2, x_pos: 0, y_stop: 14, num_rot: 1 },
    { blocktype: 4, color: 1, x_pos: 4, y_stop: 13, num_rot: 0 },
    { blocktype: 5, color: 0, x_pos: 0, y_stop: 13, num_rot: 0 },
    { blocktype: 4, color: 3, x_pos: 4, y_stop: 11, num_rot: 0 },
    { blocktype: 5, color: 2, x_pos: 0, y_stop: 11, num_rot: 0 },
    { blocktype: 0, color: 1, x_pos: 2, y_stop: 10, num_rot: 0 },
  ];
  
  // -------------------------------------------------------------
  // ASCII 66 - 'B'
  // -------------------------------------------------------------
  const a66 = [
    { blocktype: 2, color: 7, x_pos: 0, y_stop: 16, num_rot: 0 },
    { blocktype: 1, color: 6, x_pos: 2, y_stop: 16, num_rot: 3 },
    { blocktype: 4, color: 3, x_pos: 4, y_stop: 15, num_rot: 0 },
    { blocktype: 2, color: 1, x_pos: 0, y_stop: 15, num_rot: 2 },
    { blocktype: 2, color: 4, x_pos: 0, y_stop: 13, num_rot: 3 },
    { blocktype: 5, color: 1, x_pos: 3, y_stop: 13, num_rot: 0 },
    { blocktype: 0, color: 7, x_pos: 0, y_stop: 11, num_rot: 0 },
    { blocktype: 4, color: 0, x_pos: 4, y_stop: 11, num_rot: 0 },
    { blocktype: 3, color: 3, x_pos: 0, y_stop: 9,  num_rot: 0 },
  ];
  
  // -------------------------------------------------------------
  // ASCII 67 - 'C'
  // -------------------------------------------------------------
  const a67 = [
    { blocktype: 6, color: 5, x_pos: 1, y_stop: 16, num_rot: 0 },
    { blocktype: 6, color: 3, x_pos: 3, y_stop: 16, num_rot: 2 },
    { blocktype: 7, color: 1, x_pos: 0, y_stop: 15, num_rot: 3 },
    { blocktype: 5, color: 7, x_pos: 0, y_stop: 14, num_rot: 0 },
    { blocktype: 7, color: 6, x_pos: 0, y_stop: 12, num_rot: 1 },
    { blocktype: 6, color: 3, x_pos: 0, y_stop: 10, num_rot: 0 },
    { blocktype: 7, color: 6, x_pos: 2, y_stop: 10, num_rot: 2 },
    { blocktype: 7, color: 7, x_pos: 4, y_stop: 10, num_rot: 0 },
  ];
  
  // -------------------------------------------------------------
  // ASCII 68 - 'D'
  // -------------------------------------------------------------
  const a68 = [
    { blocktype: 3, color: 7, x_pos: 0, y_stop: 16, num_rot: 1 },
    { blocktype: 0, color: 2, x_pos: 1, y_stop: 16, num_rot: 0 },
    { blocktype: 5, color: 3, x_pos: 3, y_stop: 16, num_rot: 0 },
    { blocktype: 6, color: 5, x_pos: 4, y_stop: 14, num_rot: 3 },
    { blocktype: 1, color: 1, x_pos: 0, y_stop: 14, num_rot: 2 },
    { blocktype: 6, color: 2, x_pos: 4, y_stop: 12, num_rot: 1 },
    { blocktype: 7, color: 5, x_pos: 0, y_stop: 11, num_rot: 0 },
    { blocktype: 7, color: 3, x_pos: 2, y_stop: 10, num_rot: 3 },
    { blocktype: 6, color: 4, x_pos: 0, y_stop: 10, num_rot: 2 },
  ];
  
  // -------------------------------------------------------------
  // ASCII 69 - 'E'
  // -------------------------------------------------------------
  const a69 = [
    { blocktype: 0, color: 6, x_pos: 4, y_stop: 16, num_rot: 0 },
    { blocktype: 3, color: 2, x_pos: 0, y_stop: 16, num_rot: 0 },
    { blocktype: 3, color: 3, x_pos: 0, y_stop: 15, num_rot: 0 },
    { blocktype: 4, color: 4, x_pos: 0, y_stop: 14, num_rot: 1 },
    { blocktype: 2, color: 1, x_pos: 1, y_stop: 13, num_rot: 3 },
    { blocktype: 2, color: 6, x_pos: 0, y_stop: 13, num_rot: 2 },
    { blocktype: 3, color: 0, x_pos: 0, y_stop: 10, num_rot: 0 },
    { blocktype: 3, color: 4, x_pos: 0, y_stop: 9,  num_rot: 0 },
    { blocktype: 0, color: 2, x_pos: 4, y_stop: 10, num_rot: 0 },
  ];
  
  // -------------------------------------------------------------
  // ASCII 70 - 'F'
  // -------------------------------------------------------------
  const a70 = [
    { blocktype: 2, color: 1, x_pos: 0, y_stop: 16, num_rot: 0 },
    { blocktype: 3, color: 2, x_pos: 0, y_stop: 15, num_rot: 1 },
    { blocktype: 1, color: 3, x_pos: 1, y_stop: 13, num_rot: 0 },
    { blocktype: 5, color: 4, x_pos: 2, y_stop: 13, num_rot: 1 },
    { blocktype: 5, color: 5, x_pos: 0, y_stop: 11, num_rot: 0 },
    { blocktype: 0, color: 6, x_pos: 2, y_stop: 10, num_rot: 2 },
    { blocktype: 0, color: 4, x_pos: 4, y_stop: 10, num_rot: 0 },
  ];
  
  // -------------------------------------------------------------
  // ASCII 71 - 'G'
  // -------------------------------------------------------------
  const a71 = [
    { blocktype: 6, color: 7, x_pos: 1, y_stop: 16, num_rot: 0 },
    { blocktype: 7, color: 4, x_pos: 3, y_stop: 16, num_rot: 2 },
    { blocktype: 4, color: 2, x_pos: 4, y_stop: 15, num_rot: 0 },
    { blocktype: 3, color: 1, x_pos: 0, y_stop: 15, num_rot: 1 },
    { blocktype: 3, color: 0, x_pos: 1, y_stop: 15, num_rot: 1 },
    { blocktype: 0, color: 2, x_pos: 0, y_stop: 11, num_rot: 2 },
    { blocktype: 6, color: 6, x_pos: 3, y_stop: 10, num_rot: 0 },
    { blocktype: 6, color: 7, x_pos: 1, y_stop: 10, num_rot: 2 },
  ];
  
  // -------------------------------------------------------------
  // ASCII 72 - 'H'
  // -------------------------------------------------------------
  const a72 = [
    { blocktype: 0, color: 6, x_pos: 0, y_stop: 16, num_rot: 0 },
    { blocktype: 1, color: 5, x_pos: 4, y_stop: 16, num_rot: 0 },
    { blocktype: 1, color: 2, x_pos: 0, y_stop: 14, num_rot: 0 },
    { blocktype: 1, color: 1, x_pos: 4, y_stop: 15, num_rot: 2 },
    { blocktype: 3, color: 7, x_pos: 1, y_stop: 13, num_rot: 1 },
    { blocktype: 0, color: 3, x_pos: 2, y_stop: 13, num_rot: 2 },
    { blocktype: 3, color: 4, x_pos: 4, y_stop: 12, num_rot: 1 },
    { blocktype: 3, color: 5, x_pos: 5, y_stop: 12, num_rot: 1 },
    { blocktype: 2, color: 1, x_pos: 0, y_stop: 11, num_rot: 2 },
  ];
  
  // -------------------------------------------------------------
  // ASCII 73 - 'I'
  // -------------------------------------------------------------
  const a73 = [
    { blocktype: 6, color: 5, x_pos: 0, y_stop: 16, num_rot: 0 },
    { blocktype: 4, color: 1, x_pos: 2, y_stop: 16, num_rot: 0 },
    { blocktype: 0, color: 2, x_pos: 4, y_stop: 16, num_rot: 0 },
    { blocktype: 4, color: 7, x_pos: 2, y_stop: 14, num_rot: 0 },
    { blocktype: 6, color: 6, x_pos: 2, y_stop: 12, num_rot: 3 },
    { blocktype: 0, color: 2, x_pos: 4, y_stop: 10, num_rot: 0 },
    { blocktype: 7, color: 1, x_pos: 0, y_stop: 10, num_rot: 0 },
    { blocktype: 6, color: 3, x_pos: 1, y_stop: 10, num_rot: 2 },
  ];
  
  // -------------------------------------------------------------
  // ASCII 74 - 'J'
  // -------------------------------------------------------------
  const a74 = [
    { blocktype: 1, color: 7, x_pos: 1, y_stop: 16, num_rot: 3 },
    { blocktype: 6, color: 2, x_pos: 0, y_stop: 16, num_rot: 1 },
    { blocktype: 6, color: 3, x_pos: 3, y_stop: 15, num_rot: 3 },
    { blocktype: 6, color: 4, x_pos: 3, y_stop: 13, num_rot: 1 },
    { blocktype: 6, color: 2, x_pos: 4, y_stop: 11, num_rot: 1 },
    { blocktype: 0, color: 6, x_pos: 2, y_stop: 10, num_rot: 0 },
    { blocktype: 0, color: 1, x_pos: 0, y_stop: 10, num_rot: 0 },
  ];
  
  // -------------------------------------------------------------
  // ASCII 75 - 'K'
  // -------------------------------------------------------------
  const a75 = [
    { blocktype: 0, color: 2, x_pos: 4, y_stop: 16, num_rot: 0 },
    { blocktype: 3, color: 6, x_pos: 0, y_stop: 16, num_rot: 1 },
    { blocktype: 2, color: 2, x_pos: 1, y_stop: 16, num_rot: 2 },
    { blocktype: 6, color: 7, x_pos: 3, y_stop: 15, num_rot: 1 },
    { blocktype: 0, color: 5, x_pos: 1, y_stop: 13, num_rot: 0 },
    { blocktype: 3, color: 4, x_pos: 0, y_stop: 12, num_rot: 1 },
    { blocktype: 1, color: 2, x_pos: 1, y_stop: 11, num_rot: 0 },
    { blocktype: 7, color: 0, x_pos: 3, y_stop: 11, num_rot: 1 },
    { blocktype: 7, color: 1, x_pos: 4, y_stop: 10, num_rot: 2 },
  ];
  
  // -------------------------------------------------------------
  // ASCII 76 - 'L'
  // -------------------------------------------------------------
  const a76 = [
    { blocktype: 1, color: 3, x_pos: 3, y_stop: 16, num_rot: 3 },
    { blocktype: 1, color: 1, x_pos: 2, y_stop: 16, num_rot: 1 },
    { blocktype: 0, color: 0, x_pos: 0, y_stop: 16, num_rot: 0 },
    { blocktype: 2, color: 4, x_pos: 0, y_stop: 14, num_rot: 0 },
    { blocktype: 2, color: 2, x_pos: 0, y_stop: 13, num_rot: 2 },
    { blocktype: 0, color: 6, x_pos: 0, y_stop: 10, num_rot: 0 },
  ];
  
  // -------------------------------------------------------------
  // ASCII 77 - 'M'
  // -------------------------------------------------------------
  const a77 = [
    { blocktype: 1, color: 0, x_pos: 0, y_stop: 16, num_rot: 0 },
    { blocktype: 2, color: 1, x_pos: 4, y_stop: 16, num_rot: 0 },
    { blocktype: 1, color: 3, x_pos: 0, y_stop: 15, num_rot: 2 },
    { blocktype: 2, color: 3, x_pos: 4, y_stop: 15, num_rot: 2 },
    { blocktype: 0, color: 5, x_pos: 2, y_stop: 13, num_rot: 0 },
    { blocktype: 4, color: 6, x_pos: 0, y_stop: 12, num_rot: 1 },
    { blocktype: 5, color: 2, x_pos: 3, y_stop: 12, num_rot: 3 },
    { blocktype: 6, color: 2, x_pos: 4, y_stop: 11, num_rot: 3 },
    { blocktype: 6, color: 1, x_pos: 0, y_stop: 11, num_rot: 1 },
  ];
  
  // -------------------------------------------------------------
  // ASCII 78 - 'N'
  // -------------------------------------------------------------
  const a78 = [
    { blocktype: 1, color: 6, x_pos: 0, y_stop: 16, num_rot: 0 },
    { blocktype: 2, color: 1, x_pos: 4, y_stop: 16, num_rot: 0 },
    { blocktype: 1, color: 3, x_pos: 0, y_stop: 15, num_rot: 2 },
    { blocktype: 2, color: 0, x_pos: 4, y_stop: 15, num_rot: 2 },
    { blocktype: 4, color: 4, x_pos: 2, y_stop: 13, num_rot: 0 },
    { blocktype: 2, color: 6, x_pos: 0, y_stop: 12, num_rot: 0 },
    { blocktype: 1, color: 1, x_pos: 4, y_stop: 12, num_rot: 0 },
    { blocktype: 1, color: 2, x_pos: 4, y_stop: 11, num_rot: 2 },
    { blocktype: 2, color: 4, x_pos: 0, y_stop: 11, num_rot: 2 },
  ];
  
  // -------------------------------------------------------------
  // ASCII 79 - 'O'
  // -------------------------------------------------------------
  const a79 = [
    { blocktype: 4, color: 1, x_pos: 0, y_stop: 16, num_rot: 0 },
    { blocktype: 5, color: 0, x_pos: 4, y_stop: 16, num_rot: 0 },
    { blocktype: 0, color: 4, x_pos: 2, y_stop: 16, num_rot: 0 },
    { blocktype: 6, color: 4, x_pos: 0, y_stop: 14, num_rot: 3 },
    { blocktype: 6, color: 5, x_pos: 4, y_stop: 14, num_rot: 1 },
    { blocktype: 6, color: 6, x_pos: 0, y_stop: 12, num_rot: 1 },
    { blocktype: 6, color: 2, x_pos: 4, y_stop: 12, num_rot: 3 },
    { blocktype: 0, color: 1, x_pos: 3, y_stop: 10, num_rot: 0 },
    { blocktype: 0, color: 4, x_pos: 1, y_stop: 10, num_rot: 0 },
  ];
  
  // -------------------------------------------------------------
  // ASCII 80 - 'P'
  // -------------------------------------------------------------
  const a80 = [
    { blocktype: 0, color: 6, x_pos: 0, y_stop: 16, num_rot: 0 },
    { blocktype: 4, color: 2, x_pos: 0, y_stop: 14, num_rot: 1 },
    { blocktype: 5, color: 4, x_pos: 2, y_stop: 13, num_rot: 3 },
    { blocktype: 7, color: 5, x_pos: 4, y_stop: 12, num_rot: 0 },
    { blocktype: 6, color: 0, x_pos: 0, y_stop: 13, num_rot: 1 },
    { blocktype: 4, color: 1, x_pos: 0, y_stop: 11, num_rot: 0 },
    { blocktype: 7, color: 2, x_pos: 4, y_stop: 11, num_rot: 2 },
    { blocktype: 3, color: 4, x_pos: 1, y_stop: 9,  num_rot: 0 },
  ];
  
  // -------------------------------------------------------------
  // ASCII 81 - 'Q'
  // -------------------------------------------------------------
  const a81 = [
    { blocktype: 5, color: 2, x_pos: 3, y_stop: 16, num_rot: 1 },
    { blocktype: 4, color: 0, x_pos: 1, y_stop: 15, num_rot: 1 },
    { blocktype: 7, color: 3, x_pos: 4, y_stop: 14, num_rot: 0 },
    { blocktype: 0, color: 5, x_pos: 0, y_stop: 14, num_rot: 0 },
    { blocktype: 6, color: 6, x_pos: 4, y_stop: 13, num_rot: 3 },
    { blocktype: 0, color: 3, x_pos: 0, y_stop: 12, num_rot: 0 },
    { blocktype: 7, color: 1, x_pos: 4, y_stop: 11, num_rot: 1 },
    { blocktype: 6, color: 2, x_pos: 0, y_stop: 10, num_rot: 0 },
    { blocktype: 6, color: 5, x_pos: 2, y_stop: 10, num_rot: 2 },
  ];
  
  // -------------------------------------------------------------
  // ASCII 82 - 'R'
  // -------------------------------------------------------------
  const a82 = [
    { blocktype: 0, color: 2, x_pos: 4, y_stop: 16, num_rot: 0 },
    { blocktype: 0, color: 3, x_pos: 0, y_stop: 16, num_rot: 0 },
    { blocktype: 2, color: 1, x_pos: 4, y_stop: 14, num_rot: 2 },
    { blocktype: 1, color: 0, x_pos: 1, y_stop: 14, num_rot: 1 },
    { blocktype: 2, color: 6, x_pos: 0, y_stop: 14, num_rot: 2 },
    { blocktype: 7, color: 1, x_pos: 4, y_stop: 11, num_rot: 3 },
    { blocktype: 7, color: 0, x_pos: 0, y_stop: 11, num_rot: 3 },
    { blocktype: 7, color: 4, x_pos: 0, y_stop: 10, num_rot: 1 },
    { blocktype: 2, color: 5, x_pos: 2, y_stop: 10, num_rot: 3 },
  ];
  
  // -------------------------------------------------------------
  // ASCII 83 - 'S'
  // -------------------------------------------------------------
  const a83 = [
    { blocktype: 6, color: 2, x_pos: 0, y_stop: 16, num_rot: 2 },
    { blocktype: 6, color: 7, x_pos: 2, y_stop: 16, num_rot: 0 },
    { blocktype: 7, color: 3, x_pos: 4, y_stop: 15, num_rot: 3 },
    { blocktype: 0, color: 5, x_pos: 3, y_stop: 14, num_rot: 0 },
    { blocktype: 1, color: 6, x_pos: 2, y_stop: 13, num_rot: 1 },
    { blocktype: 6, color: 0, x_pos: 0, y_stop: 13, num_rot: 3 },
    { blocktype: 5, color: 1, x_pos: 0, y_stop: 11, num_rot: 0 },
    { blocktype: 0, color: 1, x_pos: 2, y_stop: 10, num_rot: 0 },
    { blocktype: 7, color: 2, x_pos: 4, y_stop: 10, num_rot: 0 },
  ];
  
  // -------------------------------------------------------------
  // ASCII 84 - 'T'
  // -------------------------------------------------------------
  const a84 = [
    { blocktype: 0, color: 3, x_pos: 2, y_stop: 16, num_rot: 0 },
    { blocktype: 3, color: 2, x_pos: 2, y_stop: 14, num_rot: 1 },
    { blocktype: 3, color: 1, x_pos: 3, y_stop: 14, num_rot: 1 },
    { blocktype: 2, color: 5, x_pos: 2, y_stop: 10, num_rot: 1 },
    { blocktype: 2, color: 6, x_pos: 3, y_stop: 10, num_rot: 3 },
    { blocktype: 0, color: 1, x_pos: 0, y_stop: 10, num_rot: 0 },
  ];
  
  // -------------------------------------------------------------
  // ASCII 85 - 'U'
  // -------------------------------------------------------------
  const a85 = [
    { blocktype: 6, color: 1, x_pos: 4, y_stop: 16, num_rot: 1 },
    { blocktype: 0, color: 4, x_pos: 2, y_stop: 16, num_rot: 0 },
    { blocktype: 6, color: 3, x_pos: 0, y_stop: 16, num_rot: 3 },
    { blocktype: 4, color: 5, x_pos: 4, y_stop: 14, num_rot: 0 },
    { blocktype: 5, color: 6, x_pos: 0, y_stop: 14, num_rot: 0 },
    { blocktype: 6, color: 1, x_pos: 4, y_stop: 12, num_rot: 3 },
    { blocktype: 6, color: 0, x_pos: 0, y_stop: 12, num_rot: 1 },
    { blocktype: 7, color: 4, x_pos: 4, y_stop: 10, num_rot: 1 },
    { blocktype: 7, color: 5, x_pos: 0, y_stop: 10, num_rot: 2 },
  ];
  
  // -------------------------------------------------------------
  // ASCII 86 - 'V'
  // -------------------------------------------------------------
  const a86 = [
    { blocktype: 6, color: 0, x_pos: 1, y_stop: 16, num_rot: 3 },
    { blocktype: 7, color: 1, x_pos: 3, y_stop: 16, num_rot: 1 },
    { blocktype: 6, color: 4, x_pos: 3, y_stop: 14, num_rot: 0 },
    { blocktype: 1, color: 0, x_pos: 1, y_stop: 14, num_rot: 1 },
    { blocktype: 2, color: 6, x_pos: 0, y_stop: 14, num_rot: 2 },
    { blocktype: 7, color: 1, x_pos: 4, y_stop: 13, num_rot: 2 },
    { blocktype: 7, color: 3, x_pos: 0, y_stop: 11, num_rot: 3 },
    { blocktype: 7, color: 4, x_pos: 4, y_stop: 11, num_rot: 0 },
    { blocktype: 7, color: 3, x_pos: 4, y_stop: 10, num_rot: 2 },
    { blocktype: 7, color: 5, x_pos: 0, y_stop: 10, num_rot: 1 },
  ];
  
  // -------------------------------------------------------------
  // ASCII 87 - 'W'
  // -------------------------------------------------------------
  const a87 = [
    { blocktype: 2, color: 0, x_pos: 1, y_stop: 16, num_rot: 2 },
    { blocktype: 1, color: 1, x_pos: 3, y_stop: 16, num_rot: 2 },
    { blocktype: 3, color: 4, x_pos: 5, y_stop: 15, num_rot: 1 },
    { blocktype: 3, color: 3, x_pos: 0, y_stop: 15, num_rot: 1 },
    { blocktype: 2, color: 1, x_pos: 4, y_stop: 13, num_rot: 2 },
    { blocktype: 1, color: 2, x_pos: 0, y_stop: 13, num_rot: 2 },
    { blocktype: 0, color: 6, x_pos: 0, y_stop: 10, num_rot: 0 },
    { blocktype: 0, color: 4, x_pos: 4, y_stop: 10, num_rot: 0 },
  ];
  
  // -------------------------------------------------------------
  // ASCII 88 - 'X'
  // -------------------------------------------------------------
  const a88 = [
    { blocktype: 7, color: 6, x_pos: 0, y_stop: 16, num_rot: 1 },
    { blocktype: 7, color: 7, x_pos: 4, y_stop: 16, num_rot: 2 },
    { blocktype: 3, color: 2, x_pos: 1, y_stop: 14, num_rot: 0 },
    { blocktype: 0, color: 5, x_pos: 2, y_stop: 13, num_rot: 0 },
    { blocktype: 3, color: 6, x_pos: 1, y_stop: 11, num_rot: 0 },
    { blocktype: 7, color: 3, x_pos: 4, y_stop: 10, num_rot: 3 },
    { blocktype: 7, color: 1, x_pos: 0, y_stop: 10, num_rot: 0 },
  ];
  
  // -------------------------------------------------------------
  // ASCII 89 - 'Y'
  // -------------------------------------------------------------
  const a89 = [
    { blocktype: 0, color: 2, x_pos: 2, y_stop: 16, num_rot: 0 },
    { blocktype: 1, color: 7, x_pos: 2, y_stop: 14, num_rot: 0 },
    { blocktype: 7, color: 6, x_pos: 3, y_stop: 13, num_rot: 1 },
    { blocktype: 6, color: 5, x_pos: 3, y_stop: 11, num_rot: 0 },
    { blocktype: 7, color: 6, x_pos: 4, y_stop: 10, num_rot: 2 },
    { blocktype: 6, color: 2, x_pos: 1, y_stop: 12, num_rot: 1 },
    { blocktype: 2, color: 1, x_pos: 0, y_stop: 11, num_rot: 2 },
  ];
  
  // -------------------------------------------------------------
  // ASCII 90 - 'Z'
  // -------------------------------------------------------------
  const a90 = [
    { blocktype: 2, color: 5, x_pos: 0, y_stop: 16, num_rot: 1 },
    { blocktype: 1, color: 3, x_pos: 3, y_stop: 16, num_rot: 3 },
    { blocktype: 3, color: 1, x_pos: 1, y_stop: 15, num_rot: 0 },
    { blocktype: 0, color: 0, x_pos: 2, y_stop: 14, num_rot: 0 },
    { blocktype: 7, color: 6, x_pos: 3, y_stop: 13, num_rot: 2 },
    { blocktype: 1, color: 1, x_pos: 4, y_stop: 11, num_rot: 2 },
    { blocktype: 4, color: 7, x_pos: 3, y_stop: 11, num_rot: 0 },
    { blocktype: 7, color: 6, x_pos: 1, y_stop: 10, num_rot: 3 },
    { blocktype: 7, color: 2, x_pos: 0, y_stop: 10, num_rot: 1 },
  ];
  
  // -------------------------------------------------------------
  // The blocksPerChar array (64 entries) for ASCII 33..90
  // (Indices: 0 => '!', 1 => '"', ..., up to 57 => 'Z')
  // -------------------------------------------------------------
  const blocksPerChar = [
    5, 4, 9, 8, 7, 8, 2, 4, 4, 6, 5, 2, 3, 1, 5, 10,
    8, 9, 9, 8, 10,10,6, 8, 7, 2, 3, 5, 4, 5, 6, 8,
    9, 9, 8, 9, 9, 7, 8, 9, 8, 7, 9, 6, 9, 9, 9, 8,
    9, 9, 9, 6, 9, 10,8, 7, 7, 9
  ];
  
  /**
   * getFallinstrByAscii(num, blockindex)
   * 
   * Returns the block (object) from the correct array for the given
   * ASCII code (33..90) and the given index in that array.
   * If the code is outside 33..90, it defaults to ASCII 90 ('Z').
   */
  function getFallinstrByAscii(num, blockindex) {
    switch (num) {
      case 33: return a33[blockindex];
      case 34: return a34[blockindex];
      case 35: return a35[blockindex];
      case 36: return a36[blockindex];
      case 37: return a37[blockindex];
      case 38: return a38[blockindex];
      case 39: return a39[blockindex];
      case 40: return a40[blockindex];
      case 41: return a41[blockindex];
      case 42: return a42[blockindex];
      case 43: return a43[blockindex];
      case 44: return a44[blockindex];
      case 45: return a45[blockindex];
      case 46: return a46[blockindex];
      case 47: return a47[blockindex];
      case 48: return a48[blockindex];
      case 49: return a49[blockindex];
      case 50: return a50[blockindex];
      case 51: return a51[blockindex];
      case 52: return a52[blockindex];
      case 53: return a53[blockindex];
      case 54: return a54[blockindex];
      case 55: return a55[blockindex];
      case 56: return a56[blockindex];
      case 57: return a57[blockindex];
      case 58: return a58[blockindex];
      case 59: return a59[blockindex];
      case 60: return a60[blockindex];
      case 61: return a61[blockindex];
      case 62: return a62[blockindex];
      case 63: return a63[blockindex];
      case 64: return a64[blockindex];
      case 65: return a65[blockindex];
      case 66: return a66[blockindex];
      case 67: return a67[blockindex];
      case 68: return a68[blockindex];
      case 69: return a69[blockindex];
      case 70: return a70[blockindex];
      case 71: return a71[blockindex];
      case 72: return a72[blockindex];
      case 73: return a73[blockindex];
      case 74: return a74[blockindex];
      case 75: return a75[blockindex];
      case 76: return a76[blockindex];
      case 77: return a77[blockindex];
      case 78: return a78[blockindex];
      case 79: return a79[blockindex];
      case 80: return a80[blockindex];
      case 81: return a81[blockindex];
      case 82: return a82[blockindex];
      case 83: return a83[blockindex];
      case 84: return a84[blockindex];
      case 85: return a85[blockindex];
      case 86: return a86[blockindex];
      case 87: return a87[blockindex];
      case 88: return a88[blockindex];
      case 89: return a89[blockindex];
      case 90: return a90[blockindex];
      default:
        // fallback to 'Z' if num is outside 33..90
        return a90[blockindex];
    }
  }
  