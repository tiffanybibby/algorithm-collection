## Mini Algorithm Exercise

"Translate to Roman Numerals"

> Language: JavaScript
>
> Difficulty: Medium

### Objectives

- Create a function which takes a given integer, `num`, and translates the integer into Roman numerals.
- Do not use a `for` loop.
- The output should be a string.

> i.e.:
>
> input => `2020`
>
> output => `'MMXX'`

### Notes

- **No for loops allowed.** Refer to the [Airbnb Style Guide](https://github.com/airbnb/javascript#iterators-and-generators) for more on why "for loops" are disadvantageous, compared to other iterators.

### solution

```js
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
```
