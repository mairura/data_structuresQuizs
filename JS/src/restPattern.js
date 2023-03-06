//Rest Pattern
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

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
};

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 3, 2, 1, 4);
