function updateGrid(grid, selectedColumn, value) {
 for (var i = grid[selectedColumn].length - 1; i >= 0; i--) {
   if (grid[selectedColumn][i] === 0) {
     grid[selectedColumn][i] = value;
     return grid;
   }
 }
 return grid;
}

function flattenArray(grid) {
  var length = (grid.length * grid[0].length);
  var flat = new Array(length);
  var period = grid.length;
  for (var i = 0; i < grid.length ; i++) {
    for (var k = 0; k < grid[i].length; k++) {
      var q = i + (period * k);
      flat[q] = grid[i][k];
    }
  }
  return flat;
}
