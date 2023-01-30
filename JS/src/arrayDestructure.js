//Array Destructuring
const array = [3, 4, 5];
const [a, b, c] = array;
console.log("Array:", a, b, c);

const restaurant = {
  name: "Classico Italiano",
  location: ["Italian", "Pizzeria", "Vegeterian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic", "Bread", "Salad"],
  mainMenu: ["Pizza", "Risotto", "Pasta"],
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
