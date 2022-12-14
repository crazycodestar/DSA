const PascalTriangleNthValue = (row, column) => {
  if (row == 0) {
    return 0;
  }
  if (row == 1 && column == 1) {
    return 1;
  } 
  if (row == 1) {
    return 0;
  }

  return  PascalTriangleNthValue(row - 1, column) + PascalTriangleNthValue(row - 1, column - 1);
}

// tesst case
const result = PascalTriangleNthValue(6,3)
console.log(result, typeof result);
