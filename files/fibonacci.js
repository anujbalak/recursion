//Fibonacci Sequence - A sequence of numbers in which each number equals the sum of the two preceding numbers

// ==> 0, 1, 1, 2, 3, 5, 8, 13, 21, ...

//iteration way
function fibs(n) {
  let arr = [];
  for (let i = 0; i < n; ++i) {
    if (i < 2) {
      arr.push(i);
    } else {
      let nextValue = arr[i - 1] + arr[i - 2];
      arr.push(nextValue);
    }
  }
  return arr;
}

//recursion way
function fibsValue(n) {
  let arr = [];
  if (n < 2) {
    return n;
  } else {
    let firstValue = fibsValue(n - 1);
    let secondValue = fibsValue(n - 2);
    let value = firstValue + secondValue;
    return value;
  }
}

function fibsRec(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(fibsValue(i));
  }
  return arr;
}

let findRec = fibsRec(14);
console.log(findRec);
