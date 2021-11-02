function twoArrays(k, A, B) {
  // Sort each array. One descending and one ascending
  A = A.sort((a, b) => a - b);
  B = B.sort((a, b) => b - a);
  // Start the loop from index of 0 to n
  for (let i = 0; i < A.length; i++) {
    if (A[i] + B[i] < k) {
      // Add each element from each array at index of i
      // if the addition is less than k return 'NO'
      return "NO";
    }
  }
  // if the whole loop goes through, return YES
  return "YES";
}
