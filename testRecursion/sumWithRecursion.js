const sumWithRecursion = (n) => {
  if (0 == n) {
    return 1;
  } else {
    return 1 + sumWithRecursion(n -1)
  }
}

// test
console.log(sumWithRecursion(10))
