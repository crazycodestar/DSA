var maze = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
    [1, 1, 1, 0, 1, 0, 0, 1, 1, 1],
    [0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    [0, 1, 1, 1, 1, 0, 1, 1, 1, 0],
    [0, 1, 0, 0, 1, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 2],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

function Maze(maze) {

    function walk(column, row) {
        if(maze[column][row] == 2) {
            console.log("We solved the maze at (" + column + ", " + row + ")");
        } else if(maze[column][row] == 1) {
            console.log("At valid position (" + column + ", " + row + ")");
            maze[column][row] = 9;
            if(column < maze.length - 1) {
                walk(column + 1, row);
            }
            if(row < maze[column].length - 1) {
                walk(column, row + 1);
            }
            if(column > 0) {
                walk(column - 1, row);
            }
            if(row > 0) {
                walk(column, row - 1);
            }
        }
    };
    walk(3,0);
};

Maze(maze);
// format Maze
const formatMaze = (maze) => {
  for (let column = 0; column < maze.length; column++) {
    console.log(`${maze[column]}`, "\n");
  }
}
formatMaze(maze);
