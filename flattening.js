// Flattening
//
// Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the input arrays.
//

function flatten(arrays) {
  return arrays.reduce(function(a,b) { return (a.concat(b)) });
}

var arrays = [[1, 2, 3], [4, 5], [6]];
flatten(arrays);



// Your code here.
// → [1, 2, 3, 4, 5, 6]
