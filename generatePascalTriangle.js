const generatePascalTriangle = (row) => {
  const PascalTriangleCache = new Array(row).fill(0).map(() => new Array(row).fill(0));
  const PascalTriangleNthValue = (row, column) => {
    console.log("position", row, column);
    if (row == 0) {
      return 0;
    }
    if (row == 1 && column == 1) {
      return 1;
    } 
    if (row == 1) {
      return 0;
    }

    const topLeft = PascalTriangleNthValue(row - 1, column - 1)
    const topRight = PascalTriangleNthValue(row - 1, column)

    console.log("values", topLeft, topRight);

    // add topLeft and topRight to cache
    PascalTriangleCache[Math.max(0, row - 2)][Math.max(0, column - 2)] = topLeft;
    PascalTriangleCache[Math.max(0, row - 2)][Math.max(0, column - 1)] = topRight;

    console.log(PascalTriangleCache);

    return topLeft + topRight
  }

  for (let column = 1; column <= row; column++) {
    console.log("running")
    const result = PascalTriangleNthValue(row, column);
    PascalTriangleCache[row - 1][Math.max(0, column -1)] = result;
    console.log("after", PascalTriangleCache);
  }
  return PascalTriangleCache
}

// tesst case
console.log(generatePascalTriangle(3))
