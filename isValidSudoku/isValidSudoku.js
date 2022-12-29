const isValidSudoku = function(board) {
  const checkRow = (row, col) => {
    for (let i = 0; i < board[row].length; i++) {
      if (board[row][i] == ".") continue;
      if (board[row][i] == board[row][col] && i != col) {
        return false;
      }
    }
    return true;
  };

  const checkColumn = (row, col) => {
    for (let j = 0; j < board.length; j++) {
      if (board[j][col] == ".") continue;
      if (board[j][col] == board[row][col] && row != j) {
        return false;
      }
    }
    return true;
  };

  const checkBox = (row, col) => {
    const startRow = Math.ceil((row + 1) / 3) * 3 - 3;
    const startCol = Math.ceil((col + 1) / 3) * 3 - 3;

    for (let i = startRow; i < startRow + 3; i++) {
      for (let j = startCol; j < startCol + 3; j++) {
        if (board[i][j] == ".") continue;
        if (board[i][j] == board[row][col] && (row != i && col != j)) {
          return false;
        }
      }
    }
    return true;
  }

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      if (board[row][col] == ".") continue;
      if (!checkRow(row, col) || !checkColumn(row, col) || !checkBox(row, col)) return false;
    }
  }
  return true;
};

module.exports = isValidSudoku;
