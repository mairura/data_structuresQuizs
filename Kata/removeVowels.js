//Use regex formula
function removeVowel(str) {
  return str.replace(/[aeiou]/gi, "");
}

// Its more of same as disemvowel = str => str.replace(/[aeiou]/gi,'');

//You can loop over through all characters of a string and remove all vowel
function disVowel(str) {
  var strArr = str.split("");
  for (let x = 0; x < str.length; x++) {
    var char = str[x].toLowerCase();
    if (
      char == "a" ||
      char == "e" ||
      char == "i" ||
      char == "o" ||
      char == "u"
    ) {
      strArr[x] = "";
    }
  }
  return strArr.join("");
}

//You can define vowel and check if they are in the string then remove them using includes method
function disemvowel(str) {
  var vowels = ["a", "e", "i", "o", "u"];
  var strArr = str.split("");
  for (var x = 0; x < str.length; x++) {
    var char = str[x].toLowerCase();
    if (vowels.include(char)) {
      strArr[x] = "";
    }
  }
  return strArr.join("");
}

//Another approach can be
function disemvowel(str) {
  return (str || "").replace(/[aeiou]/gi, "");
}
