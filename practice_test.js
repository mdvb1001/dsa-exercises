

function solution(A) {
  let positiveNums = new Set();

  // Step 1: Create a set of positive numbers
  for (let num of A) {
    if (num > 0) {
      positiveNums.add(num);
    }
  }

  // Step 2: Find the smallest positive integer that does not occur in A
  let smallestMissing = 1;
  while (positiveNums.has(smallestMissing)) {
    smallestMissing++;
  }

  return smallestMissing;
}