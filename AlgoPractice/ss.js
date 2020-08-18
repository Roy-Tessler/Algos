function solution(A, K, L) {
  let idx = [];
  if (A.length < K + L) {
    return -1;
  }
  let max = 0;
  let temp = 0;
  let max2 = 0;

  for (let i = 0; i < A.length; i++) {
    temp = 0;
    for (let j = i; j < i + K; j++) {
      temp += A[j];
    }
    if (temp > max) {
      max = temp;
      idx = [];
      idx.push(i);
      temp = 0;
    }
  }
  A.splice(idx[0], K);
  for (let i = 0; i < A.length; i++) {
    temp = 0;
    for (let j = i; j < i + L; j++) {
      temp += A[j];
    }
    if (temp > max2) {
      max2 = temp;
      idx = [];
      idx.push(i);
      temp = 0;
    }
  }

  let total = max + max2;
  return total;
}
