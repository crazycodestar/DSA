const sumWithLoop = (n) => {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += 1;
  }
  return sum;
}

// test
console.log(sumWithLoop(10))
