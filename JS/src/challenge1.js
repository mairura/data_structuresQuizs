const game = {
  team1: "Bayern Munich",
  team2: "Borrusia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4.0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1. One player array for each of the teams
const [players1, players2] = game.players;
console.log(players1, players2);

// 2. First player in the array is gk. Creat varibale for GK(gk) with goalkeepers name
// and one array to contain the rest of the players (fieldPlayers)
// const gk = game.players[0][0];
// console.log("Print BM GK:", gk);
// const fieldPlayers = game.players[0];
// const bmFieldPlayers = [...fieldPlayers];
// console.log("Print BM fieldPlayers:", bmFieldPlayers);

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3. Array of all Players from both teams
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4. Add team mates to the original team number Thiago, Coutinho, Perisic
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);

// 5. Create variable for game.odds
const team1 = game.odds.team1;
console.log("Odds for team1:", team1);
const draw = game.odds.x;
console.log("Odds for draw:", draw);
const team2 = game.odds.team2;
console.log("Odds for team2:", team2);
