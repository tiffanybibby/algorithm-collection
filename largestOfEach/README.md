> This is a mini algorithm practice from General Assembly SEI.

## Mini Algorithm Exercise

> _Title: "Largest of Each"_
>
> _Difficulty: Medium_

### Objectives

- Create a function which takes one argument– an array of arrays of integers– `arr`.
- Create a new array which takes the largest element from each array.
- The output should be an array.

_i.e.:_

```js
// input
[
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
][
  // output
  (5, 27, 39, 1001)
];
```

#### Notes

- No `for` loops allowed.

### Solution

```js
const largestOfEach = (arr) => {
  const result = [];
  let i = 0;
  while (result.length < arr.length) {
    result.push(Math.max(...arr[i]));
    i++;
  }
  return result;
};
```
