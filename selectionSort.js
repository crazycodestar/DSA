const swap = (array, index1, index2) => {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) minIndex = j;
    }
    if (i != minIndex) swap(array, i, minIndex);
  }
  return array;
}

// test case
console.log(selectionSort([7, 4, 5, 9, 8, 2, 1]))
console.log(selectionSort([3, 2, 1, 4]))
