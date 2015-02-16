// A list
//
// Objects, as generic blobs of values, can be used to build all sorts of data structures. A common data structure is the list (not to be confused with the array). A list is a nested set of objects, with the first object holding a reference to the second, the second to the third, and so on.
//

var list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};

// A linked list
// A nice thing about lists is that they can share parts of their structure. For example, if I create two new values {value: 0, rest: list} and {value: -1, rest: list} (with list referring to the variable defined earlier), they are both independent lists, but they share the structure that makes up their last three elements. In addition, the original list is also still a valid three-element list.
//
// Write a function arrayToList that builds up a data structure like the previous one when given [1, 2, 3] as argument, and write a listToArray function that produces an array from a list. Also write the helper functions prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list, or undefined when there is no such element.
//
// If you haven’t already, also write a recursive version of nth.

// Your code here.
// Building up a list is best done back to front. So arrayToList could iterate over the array backward (see previous exercise) and, for each element, add an object to the list. You can use a local variable to hold the part of the list that was built so far and use a pattern like list = {value: X, rest: list} to add an element.
//

var arrayToList = function(array){
  var list = {};
  var pointer = null;
  for (var i = array.length -1; i >= 0; i--){
    var x = array[i];
    if (i != array.length -1){
      pointer = list;
    }
    list = { value: x, rest: pointer };
  }
  return list;
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}

var listToArray = function(list){
  var returnArray = [];
  for (var node = list; node; node = node.rest) {
    returnArray.push(node.value);
  }
  return returnArray;
}

console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]


// Prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list,
var prepend = function(element, list){
  var pointer = list;
  var x = element;
  var list = { value: x, rest: pointer };
  return list;
}

console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}

var nth = function(list, index){
  var array = listToArray(list);
  return array[index];
}

console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
