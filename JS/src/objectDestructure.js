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
};

const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);
//Changing name

const {
  name: restaurantName,
  openingHours: Hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, Hours, tags);
