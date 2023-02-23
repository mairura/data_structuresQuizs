function reverseWords(str) {
  // Go for it
  let reservedString = str.split("").reverse().join("");
  //Take into consideration the space between the methods
  let soln = reservedString.split(" ").reverse().join(" ");
  return soln;
}
