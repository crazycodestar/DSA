const swap = (array, index1, index2) => {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0, arrayLength = array.length - 1; j < arrayLength - i; j++) {
      if (array[j] > array[j+1]) {
        swap(array, j, j + 1);
      }
    }
  }
  return array;
}

// test case
console.log(bubbleSort([6, 1, 2, 3, 4, 5]))
console.log(bubbleSort([3, 2, 1, 4]))
