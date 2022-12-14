const insertionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let value = array[i]
    for (let j = i -1; j > -1 && array[j] > value; j--) {
      array[j+1] = array[j];
    }
    array[j+1] = value;
  }
  return array;
}

// test case
console.log(selectionSort([7, 4, 5, 9, 8, 2, 1]))
console.log(selectionSort([3, 2, 1, 4]))
