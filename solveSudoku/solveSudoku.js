const getNextEmpty = (board, row) => {
  for (let i = row || 0; i < 9; i++) {
    for (j = 0; j < 9; j++) {
      if (board[i][j] == ".") return [i, j]
    }
  }

  return [-1, -1];
}

const solveSudoku = function(board) {
  const solveSudokuHelper = (board, lastRow, lastCol) => {
    const [row, col] = getNextEmpty(board, lastRow, lastCol)
    if (row == -1) return board;

    const possibleValues = new Set(new Array(9).fill(0).map((_, index) => `${index + 1}`));
    // find potential fit would make for a better algorithm
    // remove from row
    for (let i = 0; i < 9; i++) {
      if (board[i][col] != ".") possibleValues.delete(board[i][col]);
    }
    // delete column
    for (let j = 0; j < 9; j++) {
      if (board[row][j] != ".") possibleValues.delete(board[row][j]);
    }
    // delete box
    const startRow = Math.ceil((row + 1) / 3) * 3 - 3;
    const startCol = Math.ceil((col + 1) / 3) * 3 - 3;

    for (let i = startRow; i < startRow + 3; i++) {
      for (let j = startCol; j < startCol + 3; j++) {
        if (board[i][j] != ".") possibleValues.delete(board[i][j]);
      }
    }
    // end
    const iterable = possibleValues.values();

    while (true) {
      const nextValue = iterable.next().value;
      if (!nextValue) {
        board[row][col] = ".";
        return false; // indicating  -> dead end
      }

      board[row][col] = nextValue;
      if (solveSudokuHelper(board, row, col)) return board;
    }
  }

  return solveSudokuHelper(board);

};

// test case
const array = [["5", "3", ".", ".", "7", ".", ".", ".", "."], ["6", ".", ".", "1", "9", "5", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", "6", "."], ["8", ".", ".", ".", "6", ".", ".", ".", "3"], ["4", ".", ".", "8", ".", "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]];
solveSudoku(array);
