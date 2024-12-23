/*
 * This code is based on work by Tobias Blum (https://github.com/toblum/TetrisAnimation/)
 * Original code is licensed under the GNU Lesser General Public License (LGPL).
 * See the original file for details.
 * 
 * This code is licensed under the GNU Lesser General Public License (LGPL) 
 * You can find a copy of the license at https://www.gnu.org/licenses/lgpl-3.0.en.html
 * 
 * Modifications made by Jon Robinson (aegis1980
 * - Translated code from C++ (for Arduino with LED matrix) to JavaScript in browser
 * - Subclassed TetrisMatrixClock s
 */


/****************************************************
 * Constants (adapt to your needs)
 ****************************************************/
const TETRIS_MAX_NUMBERS = 8;             // e.g., max digits
const TETRIS_DISTANCE_BETWEEN_DIGITS = 7; // example spacing
const TETRIS_Y_DROP_DEFAULT = 16;         // default drop distance
// ... define any other needed constants ...


/****************************************************
 * The TetrisMatrixDraw class in JavaScript
 ****************************************************/





class TetrisMatrixDraw {
  /**
   * @param {CanvasRenderingContext2D} ctx - The 2D context from an HTML <canvas>.
   */
  constructor(ctx) {
    // Canvas 2D context or some drawing interface
    this.ctx = ctx;
    
    // Replace Adafruit-style colors with your own color palette (CSS strings, e.g. "#FF0000")
    // Below is just an example palette:
    this.tetrisColors = [
      "#FF0000", // color index 0
      "#00FF00", // color index 1
      "#0000FF", // color index 2
      "#FFFF00", // color index 3
      "#FF00FF", // color index 4
      "#00FFFF", // color index 5
      "#FFFFFF"  // color index 6
    ];
    
    // Example color usage
    this.tetrisWHITE = "#FFFFFF";
    
    // Outline color and toggle
    this.outLineColour = "#000000";
    this.drawOutline = true;
    
    // Scale factor
    this.scale = 1;
    
    // The array that tracks digit/char states (like numstates[] in your code)
    this.numstates = new Array(TETRIS_MAX_NUMBERS);
    
    // Keep track of how many digits or letters we’re actually using
    this.sizeOfValue = 0;
    
    this.resetNumStates();
  }
  
  /****************************************************
   * Reset all states
   ****************************************************/
  resetNumStates() {
    for (let i = 0; i < TETRIS_MAX_NUMBERS; i++) {
      this.numstates[i] = {
        num_to_draw: -1,
        fallindex: 0,
        blockindex: 0,
        x_shift: 0
      };
    }
  }

  /****************************************************
   * drawLargerBlock – draws a “scaled-up” single block
   ****************************************************/
  drawLargerBlock(x_pos, y_pos, scale, color) {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(x_pos, y_pos, scale, scale);
    
    if (this.drawOutline) {
      this.ctx.strokeStyle = this.outLineColour;
      this.ctx.strokeRect(x_pos, y_pos, scale, scale);
    }
  }

  /****************************************************
   * drawLargerShape – uses multiple scaled blocks
   ****************************************************/
  drawLargerShape(scale, blocktype, color, x_pos, y_pos, num_rot) {
    // Precompute offsets
    const offset1 = 1 * scale;
    const offset2 = 2 * scale;
    const offset3 = 3 * scale;
    
    // Square
    if (blocktype === 0) {
      this.drawLargerBlock(x_pos,          y_pos,          scale, color);
      this.drawLargerBlock(x_pos + offset1,y_pos,          scale, color);
      this.drawLargerBlock(x_pos,          y_pos - offset1,scale, color);
      this.drawLargerBlock(x_pos + offset1,y_pos - offset1,scale, color);
      return;
    }
    
    // L-Shape
    if (blocktype === 1) {
      if (num_rot === 0) {
        this.drawLargerBlock(x_pos,              y_pos, scale, color);
        this.drawLargerBlock(x_pos + offset1,    y_pos, scale, color);
        this.drawLargerBlock(x_pos,              y_pos - offset1, scale, color);
        this.drawLargerBlock(x_pos,              y_pos - offset2, scale, color);
        return;
      }
      else if (num_rot === 1) {
        this.drawLargerBlock(x_pos,              y_pos, scale, color);
        this.drawLargerBlock(x_pos,              y_pos - offset1, scale, color);
        this.drawLargerBlock(x_pos + offset1,    y_pos - offset1, scale, color);
        this.drawLargerBlock(x_pos + offset2,    y_pos - offset1, scale, color);
        return;
      }
      else if (num_rot === 2) {
        this.drawLargerBlock(x_pos + offset1,    y_pos, scale, color);
        this.drawLargerBlock(x_pos + offset1,    y_pos - offset1, scale, color);
        this.drawLargerBlock(x_pos + offset1,    y_pos - offset2, scale, color);
        this.drawLargerBlock(x_pos,              y_pos - offset2, scale, color);
        return;
      }
      else if (num_rot === 3) {
        this.drawLargerBlock(x_pos,              y_pos, scale, color);
        this.drawLargerBlock(x_pos + offset1,    y_pos, scale, color);
        this.drawLargerBlock(x_pos + offset2,    y_pos, scale, color);
        this.drawLargerBlock(x_pos + offset2,    y_pos - offset1, scale, color);
        return;
      }
    }
    
    // L-Shape (reverse)
    if (blocktype === 2) {
      // ... replicate all the offset logic, similar to above ...
      if (num_rot === 0) {
        this.drawLargerBlock(x_pos,              y_pos, scale, color);
        this.drawLargerBlock(x_pos + offset1,    y_pos, scale, color);
        this.drawLargerBlock(x_pos + offset1,    y_pos - offset1, scale, color);
        this.drawLargerBlock(x_pos + offset1,    y_pos - offset2, scale, color);
        return;
      }
      else if (num_rot === 1) {
        this.drawLargerBlock(x_pos,              y_pos, scale, color);
        this.drawLargerBlock(x_pos + offset1,    y_pos, scale, color);
        this.drawLargerBlock(x_pos + offset2,    y_pos, scale, color);
        this.drawLargerBlock(x_pos,              y_pos - offset1, scale, color);
        return;
      }
      else if (num_rot === 2) {
        this.drawLargerBlock(x_pos,              y_pos, scale, color);
        this.drawLargerBlock(x_pos,              y_pos - offset1, scale, color);
        this.drawLargerBlock(x_pos,              y_pos - offset2, scale, color);
        this.drawLargerBlock(x_pos + offset1,    y_pos - offset2, scale, color);
        return;
      }
      else if (num_rot === 3) {
        this.drawLargerBlock(x_pos,              y_pos - offset1, scale, color);
        this.drawLargerBlock(x_pos + offset1,    y_pos - offset1, scale, color);
        this.drawLargerBlock(x_pos + offset2,    y_pos - offset1, scale, color);
        this.drawLargerBlock(x_pos + offset2,    y_pos, scale, color);
        return;
      }
    }
    
    // I-Shape
    if (blocktype === 3) {
      if (num_rot === 0 || num_rot === 2) {
        // Horizontal
        this.drawLargerBlock(x_pos,              y_pos, scale, color);
        this.drawLargerBlock(x_pos + offset1,    y_pos, scale, color);
        this.drawLargerBlock(x_pos + offset2,    y_pos, scale, color);
        this.drawLargerBlock(x_pos + offset3,    y_pos, scale, color);
        return;
      }
      // If it’s vertical, etc...
      this.drawLargerBlock(x_pos, y_pos, scale, color);
      this.drawLargerBlock(x_pos, y_pos - offset1, scale, color);
      this.drawLargerBlock(x_pos, y_pos - offset2, scale, color);
      this.drawLargerBlock(x_pos, y_pos - offset3, scale, color);
      return;
    }
    
    // S-Shape
    if (blocktype === 4) {
      if (num_rot === 0 || num_rot === 2) {
        this.drawLargerBlock(x_pos + offset1, y_pos, scale, color);
        this.drawLargerBlock(x_pos,           y_pos - offset1, scale, color);
        this.drawLargerBlock(x_pos + offset1, y_pos - offset1, scale, color);
        this.drawLargerBlock(x_pos,           y_pos - offset2, scale, color);
        return;
      }
      // Otherwise...
      this.drawLargerBlock(x_pos,           y_pos, scale, color);
      this.drawLargerBlock(x_pos + offset1, y_pos, scale, color);
      this.drawLargerBlock(x_pos + offset1, y_pos - offset1, scale, color);
      this.drawLargerBlock(x_pos + offset2, y_pos - offset1, scale, color);
      return;
    }
    
    // S-Shape (reversed)
    if (blocktype === 5) {
      if (num_rot === 0 || num_rot === 2) {
        this.drawLargerBlock(x_pos,          y_pos, scale, color);
        this.drawLargerBlock(x_pos,          y_pos - offset1, scale, color);
        this.drawLargerBlock(x_pos + offset1,y_pos - offset1, scale, color);
        this.drawLargerBlock(x_pos + offset1,y_pos - offset2, scale, color);
        return;
      }
      // Else
      this.drawLargerBlock(x_pos + offset1, y_pos, scale, color);
      this.drawLargerBlock(x_pos + offset2, y_pos, scale, color);
      this.drawLargerBlock(x_pos,           y_pos - offset1, scale, color);
      this.drawLargerBlock(x_pos + offset1, y_pos - offset1, scale, color);
      return;
    }
    
    // Half cross
    if (blocktype === 6) {
      if (num_rot === 0) {
        this.drawLargerBlock(x_pos,           y_pos, scale, color);
        this.drawLargerBlock(x_pos + offset1, y_pos, scale, color);
        this.drawLargerBlock(x_pos + offset2, y_pos, scale, color);
        this.drawLargerBlock(x_pos + offset1, y_pos - offset1, scale, color);
        return;
      }
      else if (num_rot === 1) {
        this.drawLargerBlock(x_pos,           y_pos, scale, color);
        this.drawLargerBlock(x_pos,           y_pos - offset1, scale, color);
        this.drawLargerBlock(x_pos,           y_pos - offset2, scale, color);
        this.drawLargerBlock(x_pos + offset1, y_pos - offset1, scale, color);
        return;
      }
      else if (num_rot === 2) {
        this.drawLargerBlock(x_pos + offset1, y_pos, scale, color);
        this.drawLargerBlock(x_pos,           y_pos - offset1, scale, color);
        this.drawLargerBlock(x_pos + offset1, y_pos - offset1, scale, color);
        this.drawLargerBlock(x_pos + offset2, y_pos - offset1, scale, color);
        return;
      }
      // else if (num_rot === 3) ...
      this.drawLargerBlock(x_pos + offset1, y_pos, scale, color);
      this.drawLargerBlock(x_pos,           y_pos - offset1, scale, color);
      this.drawLargerBlock(x_pos + offset1, y_pos - offset1, scale, color);
      this.drawLargerBlock(x_pos + offset1, y_pos - offset2, scale, color);
    }
    
    // Corner-shape
    if (blocktype === 7) {
      if (num_rot === 0) {
        this.drawLargerBlock(x_pos,         y_pos, scale, color);
        this.drawLargerBlock(x_pos+offset1, y_pos, scale, color);
        this.drawLargerBlock(x_pos,         y_pos - offset1, scale, color);
        return;
      }
      else if (num_rot === 1) {
        this.drawLargerBlock(x_pos,         y_pos, scale, color);
        this.drawLargerBlock(x_pos,         y_pos - offset1, scale, color);
        this.drawLargerBlock(x_pos+offset1, y_pos - offset1, scale, color);
        return;
      }
      else if (num_rot === 2) {
        this.drawLargerBlock(x_pos+offset1, y_pos, scale, color);
        this.drawLargerBlock(x_pos+offset1, y_pos - offset1, scale, color);
        this.drawLargerBlock(x_pos,         y_pos - offset1, scale, color);
        return;
      }
      // else if (num_rot === 3) ...
      this.drawLargerBlock(x_pos,         y_pos, scale, color);
      this.drawLargerBlock(x_pos+offset1, y_pos, scale, color);
      this.drawLargerBlock(x_pos+offset1, y_pos - offset1, scale, color);
    }
  }
  
  /****************************************************
   * setNumState – updates a digit’s internal state
   ****************************************************/
  setNumState(index, value, x_shift) {
    if (index < TETRIS_MAX_NUMBERS) {
      console.log("Setting value:", value);
      this.numstates[index].num_to_draw = value;
      this.numstates[index].x_shift = x_shift;
      this.numstates[index].fallindex = 0;
      this.numstates[index].blockindex = 0;
    }
  }
  

  
  /****************************************************
   * setNumbers – example function for a numeric value
   ****************************************************/
  setNumbers(value, forceRefresh=false) {
    const strValue = String(value);
    if (strValue.length <= TETRIS_MAX_NUMBERS) {
      this.sizeOfValue = strValue.length;
      let currentXShift = 0;
      
      for (let pos = 0; pos < this.sizeOfValue; pos++) {
        currentXShift = TETRIS_DISTANCE_BETWEEN_DIGITS * this.scale * pos;
        const number = parseInt(strValue.substring(pos, pos+1));
        
        if (forceRefresh || number !== this.numstates[pos].num_to_draw) {
          this.setNumState(pos, number, currentXShift);
        } else {
          this.numstates[pos].x_shift = currentXShift;
        }
      }
    } else {
      console.log("Number too long");
    }
  }
  
  /****************************************************
   * setText – sets arbitrary text (ASCII letters)
   ****************************************************/
  setText(txt, forceRefresh=false) {
    this.sizeOfValue = txt.length;
    
    for (let pos = 0; pos < this.sizeOfValue; pos++) {
      const currentXShift = TETRIS_DISTANCE_BETWEEN_DIGITS * this.scale * pos;
      const letter = txt.charAt(pos);
      const asciiVal = letter.charCodeAt(0);
      
      if (forceRefresh || asciiVal !== this.numstates[pos].num_to_draw) {
        this.setNumState(pos, asciiVal, currentXShift);
      } else {
        this.numstates[pos].x_shift = currentXShift;
      }
    }
  }
  
  /****************************************************
   * drawText – animates falling letters
   ****************************************************/
  drawText(x, yFinish) {
    let finishedAnimating = true;
    
    const scaledYOffset = (this.scale > 1) ? this.scale : 1;
    const y = yFinish - (TETRIS_Y_DROP_DEFAULT * this.scale);
    
    // For each character position
    for (let numpos = 0; numpos < this.sizeOfValue; numpos++) {
      const state = this.numstates[numpos];
      
      // Only if we have a valid ASCII character (>= 33 for '!')
      if (state.num_to_draw >= 33) {
        // If we still have shapes to drop...
        // blocksPerChar[...] tells how many shapes for that character
        const asciiIndex = state.num_to_draw - 33;
        if (state.blockindex < blocksPerChar[asciiIndex]) {
          finishedAnimating = false;
          const current_fall = getFallinstrByAscii(state.num_to_draw, state.blockindex);
          
          // Determine dynamic rotation as in your code
          let rotations = current_fall.num_rot;
          if (rotations === 1) {
            if (state.fallindex < current_fall.y_stop / 2) rotations = 0;
          }
          else if (rotations === 2) {
            if (state.fallindex < current_fall.y_stop / 3) rotations = 0;
            else if (state.fallindex < (current_fall.y_stop / 3) * 2) rotations = 1;
          }
          else if (rotations === 3) {
            if (state.fallindex < current_fall.y_stop / 4) rotations = 0;
            else if (state.fallindex < (current_fall.y_stop / 4) * 2) rotations = 1;
            else if (state.fallindex < (current_fall.y_stop / 4) * 3) rotations = 2;
          }
          
          // Draw falling shape

          this.drawLargerShape(
            this.scale,
            current_fall.blocktype,
            this.tetrisColors[current_fall.color],
            x + (current_fall.x_pos * this.scale) + state.x_shift,
            y + (state.fallindex * scaledYOffset) - scaledYOffset,
            rotations
          );
          
          
          state.fallindex++;
          if (state.fallindex > current_fall.y_stop) {
            state.fallindex = 0;
            state.blockindex++;
          }
        }
        
        // Draw already dropped shapes
        if (state.blockindex > 0) {
          for (let i = 0; i < state.blockindex; i++) {
            const fallen_block = getFallinstrByAscii(state.num_to_draw, i);
            this.drawLargerShape(
              this.scale,
              fallen_block.blocktype,
              this.tetrisColors[fallen_block.color],
              x + (fallen_block.x_pos * this.scale) + state.x_shift,
              y + (fallen_block.y_stop * scaledYOffset) - scaledYOffset,
              fallen_block.num_rot
            );
            
          }
        }
      }
    }
    return finishedAnimating;
  }
  
  /****************************************************
   * drawNumbers – animates falling digits
   ****************************************************/
  drawNumbers(x, yFinish, displayColon=false) {
    let finishedAnimating = true;
    
    const scaledYOffset = (this.scale > 1) ? this.scale : 1;
    const y = yFinish - (TETRIS_Y_DROP_DEFAULT * this.scale);
    
    for (let numpos = 0; numpos < this.sizeOfValue; numpos++) {
      const state = this.numstates[numpos];
      
      // If we have a valid digit
      if (state.num_to_draw >= 0) {
        // If still shapes to drop
        if (state.blockindex < blocksPerNumber[state.num_to_draw]) {
          finishedAnimating = false;
          
          const current_fall = getFallinstrByNum(state.num_to_draw, state.blockindex);
          
          // Dynamic rotation logic
          let rotations = current_fall.num_rot;
          if (rotations === 1) {
            if (state.fallindex < current_fall.y_stop / 2) rotations = 0;
          }
          else if (rotations === 2) {
            if (state.fallindex < current_fall.y_stop / 3) rotations = 0;
            else if (state.fallindex < (current_fall.y_stop / 3) * 2) rotations = 1;
          }
          else if (rotations === 3) {
            if (state.fallindex < current_fall.y_stop / 4) rotations = 0;
            else if (state.fallindex < (current_fall.y_stop / 4) * 2) rotations = 1;
            else if (state.fallindex < (current_fall.y_stop / 4) * 3) rotations = 2;
          }
          
          // Draw falling shape

          this.drawLargerShape(
            this.scale,
            current_fall.blocktype,
            this.tetrisColors[current_fall.color],
            x + (current_fall.x_pos * this.scale) + state.x_shift,
            y + (state.fallindex * scaledYOffset) - scaledYOffset,
            rotations
          );
          
          
          state.fallindex++;
          if (state.fallindex > current_fall.y_stop) {
            state.fallindex = 0;
            state.blockindex++;
          }
        }
        
        // Draw blocks that have already “fallen”
        if (state.blockindex > 0) {
          for (let i = 0; i < state.blockindex; i++) {
            const fallen_block = getFallinstrByNum(state.num_to_draw, i);
            this.drawLargerShape(
              this.scale,
              fallen_block.blocktype,
              this.tetrisColors[fallen_block.color],
              x + (fallen_block.x_pos * this.scale) + state.x_shift,
              y + (fallen_block.y_stop * scaledYOffset) - scaledYOffset,
              fallen_block.num_rot
            );
            
          }
        }
      }
    }
    
    if (displayColon) {
      this.drawColon(x, y, this.tetrisWHITE);
    }
    return finishedAnimating;
  }
  
  /****************************************************
   * drawColon – just draws two squares for the colon
   ****************************************************/
  drawColon(x, y, colonColour) {
    const colonSize = 2 * this.scale;
    const xColonPos = x + (TETRIS_DISTANCE_BETWEEN_DIGITS * 2 * this.scale);
    
    this.ctx.fillStyle = colonColour;
    this.ctx.fillRect(xColonPos, y + (12 * this.scale), colonSize, colonSize);
    this.ctx.fillRect(xColonPos, y + (8 * this.scale),  colonSize, colonSize);
  }
  
  /****************************************************
   * calculateWidth – how wide the drawn text/numbers?
   ****************************************************/
  calculateWidth() {
    // Very rough approximation
    return (this.sizeOfValue * TETRIS_DISTANCE_BETWEEN_DIGITS) - 1;
  }
}




class TetrisMatrixClock extends TetrisMatrixDraw {


  /**
   * @param {CanvasRenderingContext2D} ctx - The 2D context from an HTML <canvas>.
   */
  constructor(ctx,scale = 5) {
    super(ctx); // Call the constructor of the Parent class
    this.scale = scale

    this.setTime(this.getFormattedTime())
    // Keep track of the current minute
    this.lastMinute = new Date().getMinutes();

    setInterval(() => {
      const now = new Date();
      const currentMinute = now.getMinutes();

      // Check if minute has changed
      if (currentMinute !== this.lastMinute) {
          // Minute just changed!

          const hours = String(now.getHours()).padStart(2, '0');   // "00"–"23"
          const minutes = String(now.getMinutes()).padStart(2, '0'); // "00"–"59"

          this.setTime(this.getFormattedTime(),true)
          
          // Update lastMinute
          this.lastMinute = currentMinute;
      }
    }, 1000); // Check every 1000ms (1 second)
  }

  getFormattedTime(){
    const now = new Date();
    
    const hours = String(now.getHours()).padStart(2, '0');   // "00"–"23"
    const minutes = String(now.getMinutes()).padStart(2, '0'); // "00"–"59"

    return `${hours}:${minutes}`; 
  }

  /****************************************************
   * setTime – example function for setting a “time” string
   *   e.g. "12:34"
   ****************************************************/
  setTime(timeString, forceRefresh=false) {
    this.sizeOfValue = 4;
    // Remove the colon
    const justDigits = timeString.replace(":", "");
    
    for (let pos = 0; pos < 4; pos++) {
      let xOffset = pos * TETRIS_DISTANCE_BETWEEN_DIGITS * this.scale;
      // Extra offset if past second digit
      if (pos >= 2) {
        xOffset += (3 * this.scale);
      }
      
      const charStr = justDigits.substring(pos, pos+1);
      const number = (charStr !== " ") ? parseInt(charStr) : -1;
      
      // Only change if different or forced
      if (forceRefresh || number !== this.numstates[pos].num_to_draw) {
        this.setNumState(pos, number, xOffset);
      }
    }
  }

}