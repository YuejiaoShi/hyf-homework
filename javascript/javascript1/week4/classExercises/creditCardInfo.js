function isValid(arr) {
  const reversed = arr.reverse();
  let sumMulti = 0;
  let sumRest = 0;
  let sum = 0;
  for (let i = 1; i < reversed.length; i = i + 2) {
    doubled = reversed[i] * 2
    if (doubled >9 ){
      doubled -= 9;
    }
    sumMulti += doubled;
  }
  for (let i = 0; i < reversed.length; i = i + 2) {
    sumRest =  sumRest+ reversed[i];
  }
  
  sum = sumMulti + sumRest;
  if (sum % 10 === 0) {
    return true;
  }
  return false;
}

function getCardInfo(num) {
  const digits = String(num).split("").map(Number);
  if (isValid(digits)) {
    if (
      digits.length === 15 &&
      digits[0] === 3 &&
      (digits[1] === 4 || digits[1] === 7)
    ) {
      return "American Express";
    } else if (
      digits.length === 16 &&
      digits[0] === 5 &&
      [1, 2, 3, 4, 5].includes(digits[1])
    ) {
      return "MasterCard";
    } else if (
      (digits.length === 13 || digits.length === 16) &&
      digits[0] === 4
    ) {
      return "Visa";
    } else {return "Invalid Card Number";}
  }
  return "Invalid Card Number";
}
console.log(getCardInfo(4781321334789876));
