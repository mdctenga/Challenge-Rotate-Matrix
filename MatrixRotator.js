/*  MatrixRotator(matrix)
 *
 *  @param matrix                        a multidimensional array containing the matrix
 *
 *  @public property matrix              the matrix
 *
 *  @public method rotate(direction)     direction is either
 *                                       Direction.CW or Direction.CWW
 *        @returns the rotated matrix
 */
exports.MatrixRotator = MatrixRotator;
var Direction = require("./Direction").Direction;

function MatrixRotator(matrix){
  this.matrix = matrix;
  console.log(matrix);
};

//                                         |-- Must be Direction.CW
//                                         v        or Direction.CCW
MatrixRotator.prototype.rotate = function(direction) {
  // do work here

  // must be a valid Direction, see Direction.js

  console.log(Direction.CW);
  console.log(Direction.CCW);





};