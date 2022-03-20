/**
 * isArrayLengthOdd(numbers):
 * - receives array `numbers`
 * - returns true if array has an odd number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthOdd([1, 2, 3]) -> true
 * isArrayLengthOdd([1, 2, 3, 4]) -> flase
 */
function isArrayLengthOdd(numbers) {
  let num = numbers.length;
  if (num % 2 === 0) {
    return false;
  } else {
    return true;
  }
}

let nA = [2, 3, 4, 5, 6, 7];
isArrayLengthOdd(nA);

/**
 * isArrayLengthEven(numbers):
 * - receives array `numbers`
 * - returns true if array has an even number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthEven([1, 2, 3]) -> false
 * isArrayLengthEven([1, 2, 3, 4]) -> true
 */
function isArrayLengthEven(numbers) {
  let num = numbers.length;
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

let nB = [2, 3, 4];
isArrayLengthEven(nB);

/**
 * addLailaToArray(instructors):
 * - receives array `instructors`
 * - returns a new array that's a copy of array `instructors` with additional string "Laila"
 *
 * e.g.
 * addLailaToArray(["Mshary", "Hasan"]) -> ["Mshary", "Hasan", "Laila"]
 */
function addLailaToArray(instructors) {
  instructors.push("Laila");
  return instructors;
}
let a1 = ["Mshary", "Hasan"];
addLailaToArray(a1);

/**
 * eliminateTeam(teams):
 * - receives array `teams`
 * - removes the last element from the array and return it
 *
 * e.g.
 * eliminateTeam(["Brazil", "Germany", "Italy"]) -> "Italy"
 */
function eliminateTeam(teams) {
  let tempo = teams.pop();
  return tempo;
}
let a2 = ["Brazil", "Germany", "Italy"];
eliminateTeam(a2);

/**
 * secondHalfOfArrayIfItIsEven(fruits):
 * - receives array `fruits`
 * - returns a new array that's the second half of the original array if it has an even number of elements
 * - returns an empty array if it has an odd number of elements
 *
 * e.g.
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]) -> ["banana", "kiwi"]
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi", "blueberry"]) -> []
 */
function secondHalfOfArrayIfItIsEven(fruits) {
  if (isArrayLengthEven(fruits)) {
    return fruits.splice(fruits.length / 2, fruits.length / 2); //SPLIES CUTS AND RETURNS THE CUT PART
  } else {
    return fruits = [];
  }
}
let a3 = ["apple", "orange", "banana", "kiwi"];
console.log(secondHalfOfArrayIfItIsEven(a3));
/**
 * youGottaCalmDown(shout):
 * - receives a string `shout`
 * - returns the string `shout` with at most one exclamation mark (!) at the end.
 *
 * e.g.
 * youGottaCalmDown("HI!!!!!!!!!!") -> "HI!"
 * youGottaCalmDown("Taylor Schwifting!!!!!!!!!!!") -> "Taylor Shwifting!"
 * youGottaCalmDown("Hellooooo") -> "Hellooooo"
 *
 * Hint:
 * - Use number method .indexOf()
 * - Use string method .slice()
 */
function youGottaCalmDown(shout) {
  let num = shout.indexOf("!");
  return shout.slice(0, (num + 1));
}

let words = "HI!!!!";
youGottaCalmDown(words);


module.exports = {
  isArrayLengthOdd,
  isArrayLengthEven,
  addLailaToArray,
  eliminateTeam,
  secondHalfOfArrayIfItIsEven,
  youGottaCalmDown,
};
