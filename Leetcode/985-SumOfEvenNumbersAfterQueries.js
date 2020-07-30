// We have an array A of integers, and an array queries of queries.

// For the i-th query val = queries[i][0], index = queries[i][1], we add val to A[index].  Then, the answer to the i-th query is the sum of the even values of A.

// (Here, the given index = queries[i][1] is a 0-based index, and each query permanently modifies the array A.)

// Return the answer to all queries.  Your answer array should have answer[i] as the answer to the i-th query.

var sumEvenAfterQueries = function(A, queries) {
  let res = [];
  let sum = 0;
  for (let i = 0; i < A.length; i++) {
    let q = queries[i];
    let idx = q[1];
    let num = q[0];
    A[idx] += num;

    for (let el of A) {
      if (el % 2 === 0) {
        sum += el;
      }
    }
    res.push(sum);
    sum = 0;
  }
  return res;
};

sumEvenAfterQueries(
  [1, 2, 3, 4],
  [
    [1, 0],
    [-3, 1],
    [-4, 0],
    [2, 3]
  ]
);
