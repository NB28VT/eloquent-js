// Arrays have a method reverse, which changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument in order to reverse its elements. Neither may use the standard reverse method.
//
// Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you expect to be useful in more situations? Which one is more efficient?
//
// Your code here.

// unshift array
var reverseArray = function(array){
  var new_array = [];
  for (var i = 0; i < array.length; i++){
    new_array.unshift(array[i]);
  }
  return new_array;
};


// push reverse
var reverseArray = function(array){
  var new_array = [];
  for (var i = array.length -1; i >= 0; i--){
    new_array.push(array[i]);
  }
  return new_array;
};

console.log(reverseArray(["A", "B", "C"]));







// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
