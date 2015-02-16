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


// The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument in order to reverse its elements. Neither may use the standard reverse method.
// //
// hint
// The trick is to swap the first and last elements, then the second and second-to-last, and so on. You can do this by looping over half the length of the array (use Math.floor to round down—you don’t need to touch the middle element in an array with an odd length) and swapping the element at position i with the one at position array.length - 1 - i. You can use a local variable to briefly hold on to one of the elements, overwrite that one with its mirror image, and then put the value from the local variable in the place where the mirror image used to be.


var reverseArrayInPlace = function(array){
  for(i = 0; i < Math.floor(array.length/2); i++){
    var value = array[i];
      array[i] = array[(array.length - 1 - i)];
      array[(array.length - 1 - i)] = value;
  }
  return array;
}

var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);



// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
