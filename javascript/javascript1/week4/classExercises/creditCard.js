function formatCreditCardNumber(num) {
  const numArray = num.toString().split("");
  const arrToPrint = [];
  const objToPrint = { original: null, formatted: null };

  for (let i = 0; i < numArray.length; i += 4) {
    arrToPrint.push(numArray.slice(i, i + 4).join(""));
  }
  const formatted = arrToPrint.join(" ");
  objToPrint.original = num;
  objToPrint.formatted = formatted;

  return objToPrint;
}

const formattedCreditCardObject = formatCreditCardNumber(123456789);
console.log(formattedCreditCardObject);
