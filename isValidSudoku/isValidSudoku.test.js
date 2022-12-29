const isValidSudoku = require("./isValidSudoku");
const { array1, array2, array3 } = require("./arraySet");

describe("is valid sudoku", () => {
  it("determine row", () => {
    expect(isValidSudoku(array1)).toBe(true)
  })
  it("determine column", () => {
    expect(isValidSudoku(array2)).toBe(false);
  })
  it("determine box", () => {
    expect(isValidSudoku(array3)).toBe(false);
  })
})
