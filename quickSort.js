const swap = (array, index1, index2) => {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

const quickSort = (array) => {
  const quickSortHelper = (array, startIndex, endIndex) => {
    if (startIndex >= endIndex) return;
    const pivot = array[startIndex];
    // console.log("smaller array")
    const logArray = [];
    for (let i = startIndex; i < endIndex + 1; i++) {
      logArray.push(array[i]);
    }
    // move pivot to ending position;
    let pos1 = startIndex + 1;
    let pos2 = endIndex;
    // check if pointers are the same or out of bounds
    
    if (pos1 == pos2) {
      if (pivot > pos2) return swap(array, startIndex, pos2);
      return;
    }

    while (pos1 < pos2) {
      while (pos1 < endIndex) {
        if (array[pos1] > pivot) break;
        pos1++;
      }

      while (pos2 > startIndex) {
        if (array[pos2] < pivot) break;
        pos2--;
      }

      if (pos1 < pos2) {
        swap(array, pos1, pos2);
      }
    }
    // swap pivot to the middle
    swap(array, pos2, startIndex);
    quickSortHelper(array, startIndex, pos2 -1);
    quickSortHelper(array, pos2 + 1, endIndex);
  }
  quickSortHelper(array, 0, array.length - 1);
  return array;
}

// test case
console.log(quickSort([6, 1, 2, 3, 4, 5]), "answer")
console.log(quickSort([3, 2, 1, 4]), "answer")
