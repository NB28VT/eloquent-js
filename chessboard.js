// Chess board
//
// Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board.
//
// Passing this string to console.log should show something like this:
//
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
// When you have a program that generates this pattern, define a variable size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.


// COME BACK AND REFACTOR

var board = "";
var columnSize = 8;
var rowSize = 4;

var row = "";
// Row builder
for (var rowSquare= 1; rowSquare < rowSize + 1; rowSquare++)
  {
    row += "# ";
  }

for (var rowNumber = 1; rowNumber < columnSize +1 ; rowNumber++)
  {
    if (rowNumber % 2 == 0)
      board += row + " \n" ;
    else
      board += " " + row + "\n";
  }

console.log(board);
