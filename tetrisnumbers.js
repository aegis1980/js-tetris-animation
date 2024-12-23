/*****************************************************
 * JavaScript equivalent of:
 * typedef struct { int blocktype, color, x_pos, y_stop, num_rot; } fall_instr;
 * 
 * In JS, we just store objects { blocktype, color, x_pos, y_stop, num_rot }.
 *****************************************************/

// ----------------- num_0 -----------------
const num_0 = [
  { blocktype: 2, color: 5, x_pos: 4, y_stop: 16, num_rot: 0 },
  { blocktype: 4, color: 7, x_pos: 2, y_stop: 16, num_rot: 1 },
  { blocktype: 3, color: 4, x_pos: 0, y_stop: 16, num_rot: 1 },
  { blocktype: 6, color: 6, x_pos: 1, y_stop: 16, num_rot: 1 },
  { blocktype: 5, color: 1, x_pos: 4, y_stop: 14, num_rot: 0 },
  { blocktype: 6, color: 6, x_pos: 0, y_stop: 13, num_rot: 3 },
  { blocktype: 5, color: 1, x_pos: 4, y_stop: 12, num_rot: 0 },
  { blocktype: 5, color: 1, x_pos: 0, y_stop: 11, num_rot: 0 },
  { blocktype: 6, color: 6, x_pos: 4, y_stop: 10, num_rot: 1 },
  { blocktype: 6, color: 6, x_pos: 0, y_stop: 9,  num_rot: 1 },
  { blocktype: 5, color: 1, x_pos: 1, y_stop: 8,  num_rot: 1 },
  { blocktype: 2, color: 5, x_pos: 3, y_stop: 8,  num_rot: 3 },
];

// ----------------- num_1 -----------------
const num_1 = [
  { blocktype: 2, color: 5, x_pos: 4, y_stop: 16, num_rot: 0 },
  { blocktype: 3, color: 4, x_pos: 4, y_stop: 15, num_rot: 1 },
  { blocktype: 3, color: 4, x_pos: 5, y_stop: 13, num_rot: 3 },
  { blocktype: 2, color: 5, x_pos: 4, y_stop: 11, num_rot: 2 },
  { blocktype: 0, color: 0, x_pos: 4, y_stop: 8,  num_rot: 0 },
];

// ----------------- num_2 -----------------
const num_2 = [
  { blocktype: 0, color: 0, x_pos: 4, y_stop: 16, num_rot: 0 },
  { blocktype: 3, color: 4, x_pos: 0, y_stop: 16, num_rot: 1 },
  { blocktype: 1, color: 2, x_pos: 1, y_stop: 16, num_rot: 3 },
  { blocktype: 1, color: 2, x_pos: 1, y_stop: 15, num_rot: 0 },
  { blocktype: 3, color: 4, x_pos: 1, y_stop: 12, num_rot: 2 },
  { blocktype: 1, color: 2, x_pos: 0, y_stop: 12, num_rot: 1 },
  { blocktype: 2, color: 5, x_pos: 3, y_stop: 12, num_rot: 3 },
  { blocktype: 0, color: 0, x_pos: 4, y_stop: 10, num_rot: 0 },
  { blocktype: 3, color: 4, x_pos: 1, y_stop: 8,  num_rot: 0 },
  { blocktype: 2, color: 5, x_pos: 3, y_stop: 8,  num_rot: 3 },
  { blocktype: 1, color: 2, x_pos: 0, y_stop: 8,  num_rot: 1 },
];

// ----------------- num_3 -----------------
const num_3 = [
  { blocktype: 1, color: 2, x_pos: 3, y_stop: 16, num_rot: 3 },
  { blocktype: 2, color: 5, x_pos: 0, y_stop: 16, num_rot: 1 },
  { blocktype: 3, color: 4, x_pos: 1, y_stop: 15, num_rot: 2 },
  { blocktype: 0, color: 0, x_pos: 4, y_stop: 14, num_rot: 0 },
  { blocktype: 3, color: 4, x_pos: 1, y_stop: 12, num_rot: 2 },
  { blocktype: 1, color: 2, x_pos: 0, y_stop: 12, num_rot: 1 },
  { blocktype: 3, color: 4, x_pos: 5, y_stop: 12, num_rot: 3 },
  { blocktype: 2, color: 5, x_pos: 3, y_stop: 11, num_rot: 0 },
  { blocktype: 3, color: 4, x_pos: 1, y_stop: 8,  num_rot: 0 },
  { blocktype: 1, color: 2, x_pos: 0, y_stop: 8,  num_rot: 1 },
  { blocktype: 2, color: 5, x_pos: 3, y_stop: 8,  num_rot: 3 },
];

// ----------------- num_4 -----------------
const num_4 = [
  { blocktype: 0, color: 0, x_pos: 4, y_stop: 16, num_rot: 0 },
  { blocktype: 0, color: 0, x_pos: 4, y_stop: 14, num_rot: 0 },
  { blocktype: 3, color: 4, x_pos: 1, y_stop: 12, num_rot: 0 },
  { blocktype: 1, color: 2, x_pos: 0, y_stop: 12, num_rot: 1 },
  { blocktype: 2, color: 5, x_pos: 0, y_stop: 10, num_rot: 0 },
  { blocktype: 2, color: 5, x_pos: 3, y_stop: 12, num_rot: 3 },
  { blocktype: 3, color: 4, x_pos: 4, y_stop: 10, num_rot: 3 },
  { blocktype: 2, color: 5, x_pos: 0, y_stop: 9,  num_rot: 2 },
  { blocktype: 3, color: 4, x_pos: 5, y_stop: 10, num_rot: 1 },
];

// ----------------- num_5 -----------------
const num_5 = [
  { blocktype: 0, color: 0, x_pos: 0, y_stop: 16, num_rot: 0 },
  { blocktype: 2, color: 5, x_pos: 2, y_stop: 16, num_rot: 1 },
  { blocktype: 2, color: 5, x_pos: 3, y_stop: 15, num_rot: 0 },
  { blocktype: 3, color: 4, x_pos: 5, y_stop: 16, num_rot: 1 },
  { blocktype: 3, color: 4, x_pos: 1, y_stop: 12, num_rot: 0 },
  { blocktype: 1, color: 2, x_pos: 0, y_stop: 12, num_rot: 1 },
  { blocktype: 2, color: 5, x_pos: 3, y_stop: 12, num_rot: 3 },
  { blocktype: 0, color: 0, x_pos: 0, y_stop: 10, num_rot: 0 },
  { blocktype: 3, color: 4, x_pos: 1, y_stop: 8,  num_rot: 2 },
  { blocktype: 1, color: 2, x_pos: 0, y_stop: 8,  num_rot: 1 },
  { blocktype: 2, color: 5, x_pos: 3, y_stop: 8,  num_rot: 3 },
];

// ----------------- num_6 -----------------
const num_6 = [
  { blocktype: 2, color: 5, x_pos: 0, y_stop: 16, num_rot: 1 },
  { blocktype: 5, color: 1, x_pos: 2, y_stop: 16, num_rot: 1 },
  { blocktype: 6, color: 6, x_pos: 0, y_stop: 15, num_rot: 3 },
  { blocktype: 6, color: 6, x_pos: 4, y_stop: 16, num_rot: 3 },
  { blocktype: 5, color: 1, x_pos: 4, y_stop: 14, num_rot: 0 },
  { blocktype: 3, color: 4, x_pos: 1, y_stop: 12, num_rot: 2 },
  { blocktype: 2, color: 5, x_pos: 0, y_stop: 13, num_rot: 2 },
  { blocktype: 3, color: 4, x_pos: 2, y_stop: 11, num_rot: 0 },
  { blocktype: 0, color: 0, x_pos: 0, y_stop: 10, num_rot: 0 },
  { blocktype: 3, color: 4, x_pos: 1, y_stop: 8,  num_rot: 0 },
  { blocktype: 1, color: 2, x_pos: 0, y_stop: 8,  num_rot: 1 },
  { blocktype: 2, color: 5, x_pos: 3, y_stop: 8,  num_rot: 3 },
];

// ----------------- num_7 -----------------
const num_7 = [
  { blocktype: 0, color: 0, x_pos: 4, y_stop: 16, num_rot: 0 },
  { blocktype: 1, color: 2, x_pos: 4, y_stop: 14, num_rot: 0 },
  { blocktype: 3, color: 4, x_pos: 5, y_stop: 13, num_rot: 1 },
  { blocktype: 2, color: 5, x_pos: 4, y_stop: 11, num_rot: 2 },
  { blocktype: 3, color: 4, x_pos: 1, y_stop: 8,  num_rot: 2 },
  { blocktype: 2, color: 5, x_pos: 3, y_stop: 8,  num_rot: 3 },
  { blocktype: 1, color: 2, x_pos: 0, y_stop: 8,  num_rot: 1 },
];

// ----------------- num_8 -----------------
const num_8 = [
  { blocktype: 3, color: 4, x_pos: 1, y_stop: 16, num_rot: 0 },
  { blocktype: 6, color: 6, x_pos: 0, y_stop: 16, num_rot: 1 },
  { blocktype: 3, color: 4, x_pos: 5, y_stop: 16, num_rot: 1 },
  { blocktype: 1, color: 2, x_pos: 2, y_stop: 15, num_rot: 3 },
  { blocktype: 4, color: 7, x_pos: 0, y_stop: 14, num_rot: 0 },
  { blocktype: 1, color: 2, x_pos: 1, y_stop: 12, num_rot: 3 },
  { blocktype: 6, color: 6, x_pos: 4, y_stop: 13, num_rot: 1 },
  { blocktype: 2, color: 5, x_pos: 0, y_stop: 11, num_rot: 1 },
  { blocktype: 4, color: 7, x_pos: 0, y_stop: 10, num_rot: 0 },
  { blocktype: 4, color: 7, x_pos: 4, y_stop: 11, num_rot: 0 },
  { blocktype: 5, color: 1, x_pos: 0, y_stop: 8,  num_rot: 1 },
  { blocktype: 5, color: 1, x_pos: 2, y_stop: 8,  num_rot: 1 },
  { blocktype: 1, color: 2, x_pos: 4, y_stop: 9,  num_rot: 2 },
];

// ----------------- num_9 -----------------
const num_9 = [
  { blocktype: 0, color: 0, x_pos: 0, y_stop: 16, num_rot: 0 },
  { blocktype: 3, color: 4, x_pos: 2, y_stop: 16, num_rot: 0 },
  { blocktype: 1, color: 2, x_pos: 2, y_stop: 15, num_rot: 3 },
  { blocktype: 1, color: 2, x_pos: 4, y_stop: 15, num_rot: 2 },
  { blocktype: 3, color: 4, x_pos: 1, y_stop: 12, num_rot: 2 },
  { blocktype: 3, color: 4, x_pos: 5, y_stop: 12, num_rot: 3 },
  { blocktype: 5, color: 1, x_pos: 0, y_stop: 12, num_rot: 0 },
  { blocktype: 1, color: 2, x_pos: 2, y_stop: 11, num_rot: 3 },
  { blocktype: 5, color: 1, x_pos: 4, y_stop: 9,  num_rot: 0 },
  { blocktype: 6, color: 6, x_pos: 0, y_stop: 10, num_rot: 1 },
  { blocktype: 5, color: 1, x_pos: 0, y_stop: 8,  num_rot: 1 },
  { blocktype: 6, color: 6, x_pos: 2, y_stop: 8,  num_rot: 2 },
];

/*****************************************************
 * 4) blocksPerNumber array
 *    The C++ code used macros like SIZE_NUM_0 = 12, ...
 *    In JavaScript, we can just store these lengths,
 *    or rely on the .length property of each array.
 *****************************************************/
const blocksPerNumber = [
  num_0.length, // 12
  num_1.length, // 5
  num_2.length, // 11
  num_3.length, // 11
  num_4.length, // 9
  num_5.length, // 11
  num_6.length, // 12
  num_7.length, // 7
  num_8.length, // 13
  num_9.length  // 12
];

/*****************************************************
 * 5) getFallinstrByNum function
 *    In C++, you had a big "if" or "switch". 
 *    We can do the same in JavaScript.
 *****************************************************/
function getFallinstrByNum(num, blockIndex) {
  switch (num) {
    case 0:  return num_0[blockIndex];
    case 1:  return num_1[blockIndex];
    case 2:  return num_2[blockIndex];
    case 3:  return num_3[blockIndex];
    case 4:  return num_4[blockIndex];
    case 5:  return num_5[blockIndex];
    case 6:  return num_6[blockIndex];
    case 7:  return num_7[blockIndex];
    case 8:  return num_8[blockIndex];
    case 9:  return num_9[blockIndex];
    default: return num_9[blockIndex]; 
      // fallback to '9' if something unexpected
  }
}