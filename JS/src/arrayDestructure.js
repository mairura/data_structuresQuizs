//Array Destructuring
const array = [3, 4, 5];
const [a, b, c] = array;
console.log("Array:", a, b, c);

const restaurant = {
  name: "Classico Italiano",
  location: ["Italian", "Pizzeria", "Vegeterian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Salad"],
  mainMenu: ["Pizza", "Risotto", "Pasta"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const [first, second] = restaurant.location;
console.log(first, second);
//You can omit second item
const [first1, , third] = restaurant.location;
console.log(first1, third);

//Switch data
let [main, secondary] = restaurant.location;
console.log("Switch Case:", main, secondary);
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log("Results of switch:",main, secondary);
[main, secondary] = [secondary, main];
console.log(main, secondary);

//Order
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//Nested array
const nested = [2, 4, [5, 6]];
const [kwanza, , mwisho] = nested;
console.log(kwanza, mwisho);

//Each element
const [i, , [j, k]] = nested;
console.log(i, j, k);
