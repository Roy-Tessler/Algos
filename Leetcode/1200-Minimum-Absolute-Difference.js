// Given an array of distinct integers arr, find all pairs of elements with the minimum absolute difference of any two elements.

// Return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows

// a, b are from arr
// a < b
// b - a equals to the minimum absolute difference of any two elements in arr

// Example 1:

// Input: arr = [4,2,1,3]
// Output: [[1,2],[2,3],[3,4]]
// Explanation: The minimum absolute difference is 1. List all pairs with difference equal to 1 in ascending order.

var minimumAbsDifference = function(arr) {
  arr.sort((n1, n2) => n1 - n2);

  let result = [];
  for (let i = 1; i < arr.length; i += 1) {
    const diff = arr[i] - arr[i - 1];
    if (!result.length || result[0][1] - result[0][0] === diff) {
      result.push([arr[i - 1], arr[i]]);
    } else if (result[0][1] - result[0][0] > diff) {
      result = [[arr[i - 1], arr[i]]];
    }
  }
  return result;
};
