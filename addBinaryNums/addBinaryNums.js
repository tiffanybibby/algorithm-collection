function addBinaryNumbers(arr) {
  const num = arr.join("");
  return parseInt(num, 2);
}
console.log(addBinaryNumbers([1, 1, 1, 0, 1]));
