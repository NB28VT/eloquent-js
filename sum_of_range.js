// The sum of a range
//
// The introduction of this book alluded to the following as a nice way to compute the sum of a range of numbers:
//
// console.log(sum(range(1, 10)));
// Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.
//

myRange = function(start, end){
  var array = [];
  for(var num = start; num <= end; num++){
    array.push(num);
  }
  return array;
};


// Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the previous program and see whether it does indeed return 55.
//


sumRange = function(array){
  var sum = 0;
  for(var i = 0; i <= array.length -1; i++){
    sum += array[i];
  }
  return sum;
};

// Run the program
console.log(sumRange(myRange(1,10)));


// As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used to build up the array. If no step is given, the array elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].

mySteppedRange = function(start, end, step){
  if (step == undefined) {
    step = 1;
  }

  var array = [];

  if (step < 0) {
    for(var num = end; num >= start; num += step){
      array.push(num);
    }
  } else {
    for(var num = start; num <= end; num += step){
      array.push(num);
    }
  }
  return array;
};

console.log(sumRange(mySteppedRange(1,10)));


//
// console.log(sum(range(1, 10)));
// // → 55
// console.log(range(5, 2, -1));
// // → [5, 4, 3, 2]
