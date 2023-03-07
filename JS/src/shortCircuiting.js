console.log("----- OR -------");

//Using non-boolean values with logical operators
console.log(3 || "Teddy");

//What logical operators can do:
//--use ANY data type, return ANY data type, short-circuiting
console.log("" || "Jonas");
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || "" || "Hello" || 23 || null);

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

// restaurant.numGuests = 23;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log("Guest1:", guest1);

const guest2 = restaurant.numGuests || 10;
console.log("Guest2:", guest2);

console.log("-------- AND --------");
//Works opposite of OR operator
console.log(0 && "Jonas");
