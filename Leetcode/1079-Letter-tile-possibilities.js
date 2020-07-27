// You have a set of tiles, where each tile has one letter tiles[i] printed on it.  Return the number of possible non-empty sequences of letters you can make.

// Example 1:

// Input: "AAB"
// Output: 8
// Explanation: The possible sequences are "A", "B", "AA", "AB", "BA", "AAB", "ABA", "BAA".

var numTilePossibilities = function(tiles) {
  let res = 0;

  const dfs = list => {
    if (!list.length) return;
    for (let i = 0; i < list.length; i += 1) {
      if (list[i] === list[i - 1]) continue;
      const num = list[i];
      res += 1;
      list.splice(i, 1);
      dfs(list);
      list.splice(i, 0, num);
    }
  };
  dfs(tiles.split("").sort());
  return res;
};
