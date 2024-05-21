const position = [
  ["x", "o", " "],
  [" ", "o", " "],
  [" ", "o", "x"],
];

function getRenderedGame(arr) {
  let arrToPrint = ["*******", "", "", "", "*******"];
  let first = [];

  for (let i = 0; i < arr.length; i++) {
    let arrayToJoin = [];
    for (let j = 0; j < 7; j++) {
      if (j % 2 === 0) {
        arrayToJoin.push("*");
      } else {
        arrayToJoin.push(arr[i][Math.floor(j / 2)]);
      }
    }
    first.push(arrayToJoin.join(""));
  }

  for (let i = 1; i <= 3; i++) {
    arrToPrint[i] = first[i - 1];
  }

  for (let item of arrToPrint) {
    console.log(item);
  }
}
const renderedGame = getRenderedGame(position);

function checkLine(line) {
  if (line.every((cell) => cell === "x")) return "x";
  if (line.every((cell) => cell === "o")) return "o";
  return undefined;
}

function getGameInfo(arr) {
  for (let i = 0; i < arr.length; i++) {
    const rowWinner = checkLine(arr[i]);
    if (rowWinner)
      return {
        winner: rowWinner,
        loser: rowWinner === "x" ? "o" : "x",
        hasEnded: true,
      };
  }
  for (let j = 0; j < 3; j++) {
    const columnWinner = checkLine([arr[0][j], arr[1][j], arr[2][j]]);
    if (columnWinner)
      return {
        winner: columnWinner,
        loser: columnWinner === "x" ? "o" : "x",
        hasEnded: true,
      };
  }
  // Check diagonals
  const diagonal1 = checkLine([arr[0][0], arr[1][1], arr[2][2]]);
  const diagonal2 = checkLine([arr[0][2], arr[1][1], arr[2][0]]);
  if (diagonal1)
    return {
      winner: diagonal1,
      loser: diagonal1 === "x" ? "o" : "x",
      hasEnded: true,
    };
  if (diagonal2)
    return {
      winner: diagonal2,
      loser: diagonal2 === "x" ? "o" : "x",
      hasEnded: true,
    };

  //check if the game ended.
  const flatArr = arr.flat();
  const hasEnded = !flatArr.includes(" ");

  //Determine next player
  let xCount = 0;
  let oCount = 0;

  for (let i = 0; i < position.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === "x") {
        xCount++;
      } else if (arr[i][j] === "o") {
        oCount++;
      }
    }
  }
  let nextPlayer = xCount <= oCount ? "x" : "o";

  return {
    winner: undefined,
    loser: undefined,
    hasEnded: hasEnded,
    nextPlayer: hasEnded ? undefined : nextPlayer,
  };

  // check next player
}
const gameInfo = getGameInfo(position);
console.log(gameInfo);
