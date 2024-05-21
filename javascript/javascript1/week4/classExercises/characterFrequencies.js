
function getCharacterFrequencies(str) {
  const strWithoutSpace = str.trim().replace(" ", "");
  const letters = strWithoutSpace.split("");
  const frequencies = {};
  const objToPrint = { characters: [], length: strWithoutSpace.length };

  for (let char of letters) {
    if (frequencies[char]) {
      frequencies[char]++;
    } else {
      frequencies[char] = 1;
    }
  }

  for (let char in frequencies) {
    objToPrint.characters.push({ character: char, count: frequencies[char] });
  }
  return objToPrint;
}
console.log(getCharacterFrequencies("ha ppy"));
