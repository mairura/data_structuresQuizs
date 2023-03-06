const prompt = require("prompt-sync")();

//Object Destructuring
const restaurant = {
  name: "Classico Italiano",
  categories: ["Italian", "Pizzeria", "Vegeterian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Salad"],
  mainMenu: ["Pizza", "Risotto", "Pasta"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, //opens 24hrs
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, address, time }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
};

//Spread operator - used mostly in the right hand side of = operator
const arr = [7, 8, 9];
const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr); //Can get th elements of an array individually

//Create a new menu list
const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

//Copy of array
const mainMenuCopy = [...restaurant.mainMenu]; //Call this shallow copy of menu

//JOin 2 arrays
const menu = [...mainMenuCopy, ...newMenu];
console.log("Print Join menu:", menu);

//Spread operator works on all iterables: arrays, strings, maps, sets NOT Objects. Works in almost all build in js Data Structures
const str = "Brian";
const letters = [...str, " ", "O."];
console.log("Works on strings:", letters);
// console.log(...letters);

//Call oderPasta function
const ingredients = [
  prompt("Let's make pasta! Ingredients 1?"),
  prompt("Ingredients 2?"),
  prompt("Ingredients 3?"),
];
console.log(ingredients);

restaurant.orderPasta(...ingredients);

//Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Guiseppe" };
console.log(newRestaurant);

const restaurantCOpy = { ...restaurant };
restaurantCOpy.name = "Ristorante Roma";
console.log(restaurantCOpy.name);
console.log(restaurant.name);
