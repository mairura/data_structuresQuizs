function reverseWords(str) {
  // Go for it
  let reservedString = str.split("").reverse().join("");
  //Take into consideration the space between the methods
  let soln = reservedString.split(" ").reverse().join(" ");
  return soln;
}
//Can also be simplified to this
function reverseWords(str) {
  // Go for it
  //split words into seperate arrays
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
}
