function canYouSpotTheProblem() {
  "use strict";
  for (counter = 0; counter < 10; counter++)
    console.log("Happy happy");
}

////////////
"use strict";
function Person(name) { this.name = name};

var ferdinand = Person("Ferdinand");

//////////////


function promptNumber(question) {
  var result = Number(prompt(question, " "));
  if(isNaN(result)) return null;

  else return result;

}

console.log(promptNumber("How many people do you see?"));

///// Exception handling

function PromptDirection(question){
  var result = prompt(question, "");
  if (result.toLowerCase() == "left") return "L";
  if (result.toLowerCase() == "right") return "R";
  throw new Error("Invalid direction" + result);
}

function look(){
  if (promptDirection("Which way?") === "L")
    return "a house";
  else
    return "two angry bears";
}


try {
console.log("You see", look())
} catch (error) {
  console.log("Something went wrong " + error);
}
