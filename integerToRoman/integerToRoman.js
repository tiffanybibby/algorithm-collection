var intToRoman = function (num) {
  const letters = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ];
  let result = "";
  letters.map((array) => {
    let letter = array[0].repeat(Math.floor(num / array[1]));
    result += letter;
    num %= array[1];
  });
  return result;
};
