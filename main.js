/*******************************************************
 * TETRIS TEXT ANIMATION (inspired by TetrisAnimation)
 ******************************************************/

const canvas = document.getElementById('tetrisCanvas');
const ctx = canvas.getContext('2d');

// ~~~~~~~~~~~~~~ CONFIG ~~~~~~~~~~~~~~
const BLOCK_SIZE = 4;           // size of each "pixel" cell on the canvas
const PIXEL_COLUMNS = canvas.width / BLOCK_SIZE; 
const PIXEL_ROWS = canvas.height / BLOCK_SIZE; 
const SCROLL_SPEED = 100;       // milliseconds between shifting left
const LETTER_SPACING = 1;       // columns of space after each character

// TETRIS block colors (one for each tetromino type)
const TETRIS_COLORS = [
  '#00f0f0', // I-piece (Cyan)
  '#0000f0', // J-piece (Blue)
  '#f0a000', // L-piece (Orange)
  '#f0f000', // O-piece (Yellow)
  '#00f000', // S-piece (Green)
  '#a000f0', // T-piece (Purple)
  '#f00000', // Z-piece (Red)
];

// ~~~~~~~~~~~~~~ 5x7 FONT ~~~~~~~~~~~~~~
// Each letter is a 5 wide x 7 tall pattern.
// 1 = "on pixel", 0 = "off pixel"
// Example uses uppercase letters, a few symbols, and digits. 
// You can expand as needed.
const FONT_5x7 = {
  'A': [
    '01110',
    '10001',
    '10001',
    '11111',
    '10001',
    '10001',
    '10001'
  ],
  'B': [
    '11110',
    '10001',
    '10001',
    '11110',
    '10001',
    '10001',
    '11110'
  ],
  'C': [
    '01110',
    '10001',
    '10000',
    '10000',
    '10000',
    '10001',
    '01110'
  ],
  // ... Add the rest of the alphabet
  ' ': [ // space, all off
    '00000',
    '00000',
    '00000',
    '00000',
    '00000',
    '00000',
    '00000'
  ],
  '0': [
    '01110',
    '10001',
    '10011',
    '10101',
    '11001',
    '10001',
    '01110'
  ],
  '1': [
    '00100',
    '01100',
    '00100',
    '00100',
    '00100',
    '00100',
    '01110'
  ],
  // ... Add 2-9, punctuation, etc.
};

// ~~~~~~~~~~~~~~ BUILD THE MESSAGE BUFFER ~~~~~~~~~~~~~~

// Example text. You can prompt user for input or do anything else.
const message = "HELLO TETRIS 123";

// Convert the message into a 2D grid (rows x columns) of 1/0
// wide enough to hold all letters plus spacing
let messageGrid = buildMessageGrid(message);

function buildMessageGrid(msg) {
  // For each character, we get a 7-row, 5-col pattern
  // plus 1 column of spacing
  // So each character uses 5 + LETTER_SPACING columns
  const charWidth = 5;
  const charHeight = 7;

  // total width needed
  const totalWidth = msg.length * (charWidth + LETTER_SPACING);
  // create array of rows
  let grid = [];
  for (let r = 0; r < charHeight; r++) {
    // each row is totalWidth columns
    grid[r] = new Array(totalWidth).fill(0);
  }

  let currentCol = 0;
  for (let i = 0; i < msg.length; i++) {
    const ch = msg[i].toUpperCase();
    const pattern = FONT_5x7[ch] || FONT_5x7[' ']; // fallback to space if not found

    // Copy the 5 columns of this pattern
    for (let r = 0; r < charHeight; r++) {
      for (let c = 0; c < charWidth; c++) {
        grid[r][currentCol + c] = (pattern[r][c] === '1') ? 1 : 0;
      }
    }

    // Move the writing cursor
    currentCol += (charWidth + LETTER_SPACING);
  }

  return grid;
}

// ~~~~~~~~~~~~~~ ANIMATION STATE ~~~~~~~~~~~~~~
let offset = PIXEL_COLUMNS; // start the text off-screen to the right

// We'll shift everything left until the entire message has scrolled past
// Then we can either loop or keep it blank
let lastScrollTime = 0;

// ~~~~~~~~~~~~~~ MAIN ANIMATION LOOP ~~~~~~~~~~~~~~
function animate(timestamp) {
  requestAnimationFrame(animate);

  // Check if it's time to scroll left
  if (timestamp - lastScrollTime > SCROLL_SPEED) {
    offset--;
    lastScrollTime = timestamp;

    // If message fully scrolled off the left side, reset offset
    if (offset < -messageGrid[0].length) {
      offset = PIXEL_COLUMNS;
    }
  }

  // Draw the entire frame
  drawFrame();
}

function drawFrame() {
  // Clear canvas
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // For each row and column *of the message*,
  // compute where it shows on the canvas
  const rows = messageGrid.length;        // 7
  const cols = messageGrid[0].length;     // total message width in "font pixels"

  // Loop over each pixel in the message
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (messageGrid[r][c] === 1) {
        // The x on the canvas:
        const canvasX = (c + offset) * BLOCK_SIZE;
        // The y on the canvas:
        const canvasY = r * BLOCK_SIZE;

        // Only draw if it's on screen
        if (
          canvasX + BLOCK_SIZE >= 0 && 
          canvasX < canvas.width
        ) {
          // Pick a Tetris color for variety
          // You could randomize per pixel, or do something else
          const color = TETRIS_COLORS[(r + c) % TETRIS_COLORS.length];

          drawBlock(canvasX, canvasY, color);
        }
      }
    }
  }
}

// Simple function to draw a "Tetris block"
function drawBlock(x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, BLOCK_SIZE, BLOCK_SIZE);

  // optional stroke to mimic Tetris tile edges
  ctx.strokeStyle = shadeColor(color, -0.4);
  ctx.strokeRect(x, y, BLOCK_SIZE, BLOCK_SIZE);
}

// A utility to darken/lighten a hex color
function shadeColor(color, percent) {
  let R = parseInt(color.substring(1,3),16);
  let G = parseInt(color.substring(3,5),16);
  let B = parseInt(color.substring(5,7),16);

  R = parseInt(R * (1 + percent));
  G = parseInt(G * (1 + percent));
  B = parseInt(B * (1 + percent));

  R = (R<255)?((R>0)?R:0):255;
  G = (G<255)?((G>0)?G:0):255;
  B = (B<255)?((B>0)?B:0):255;

  const RR = (R.toString(16).length==1) ? "0"+R.toString(16) : R.toString(16);
  const GG = (G.toString(16).length==1) ? "0"+G.toString(16) : G.toString(16);
  const BB = (B.toString(16).length==1) ? "0"+B.toString(16) : B.toString(16);

  return "#"+RR+GG+BB;
}

// Start animation
requestAnimationFrame(animate);
