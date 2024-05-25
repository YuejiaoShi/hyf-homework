function findDanishLetters(str) {
  const letters = str.trim().replace(" ", "").split("");
  const danishLetters = ["å", "æ", "ø"];
  const objOfDanishLetters = letters.reduce((obj, letter) => {
    if (danishLetters.includes(letter)) {
      obj[letter] = (obj[letter] || 0) + 1;
    }
    return obj;
  }, {});
  const total = Object.values(objOfDanishLetters).reduce(
    (sum, num) => sum + num,
    0
  );
  // Object.values(objOfDanishLetters) => output: [1, 1, 2, 4]
  objOfDanishLetters.total = total;

  const orderedObj = { total, ...objOfDanishLetters }; //
  return orderedObj;
}

const danishString = "Jeg har en blå bil";
console.log(findDanishLetters(danishString)); // returns {total: 1, å: 1}

const danishString2 = "Blå grød med røde bær";
console.log(findDanishLetters(danishString2)); // returns {total: 4, æ: 1, ø: 2, å: 1}
