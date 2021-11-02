// Find a largest value of each array

const largestOfEach = (arr) => {
  const result = [];
  let i = 0;
  while (result.length < arr.length) {
    result.push(Math.max(...arr[i]));
    i++;
  }
  return result;
};

console.log(
  largestOfEach([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);
