function fib(num) {
  const fibSeq = [0, 1];

  for (let i = 2; i < num; i++) {
    let fibNum = fibSeq[0] + fibSeq[1];
    fibSeq[0] = fibSeq[1];
    fibSeq[1] = fibNum;
  }
  console.log(fibSeq[1]);
}

fib(1000);

// function fib(num) {
//     if (num ===1) {
//         return 0;
//     } else if (num === 2){
//         return 1;
//     } else {
//         let fibNum = fib(num-1) + fib(num-2);
//     return fibNum;
//     }

// }
// console.log(fib(1000000));
