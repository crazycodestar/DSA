const getNthFib = (n) => {
  if (n <= 1) return n;
  return getNthFib(n-1) + getNthFib(n-2);
}

// test case
console.log(getNthFib(5))
