## Mini Algorithm Exercise

_Title: "Sharing Elements"_

_Difficulty: Medium_

### Objectives

- Create a function which takes two arguments, a given array, `arr`, and a number, `size`.
- Using the elements from `arr`, the function should create _new arrays_ which consist of a maximum of `size` elements.
- Any remaining elements should be placed in the final array.
- The output should be an array of arrays.

> i.e.:
>
> input => `[a, b, c, d, e, f, g, h, i], 4`
>
> output => `[[a, b, c, d], [e, f, g, h], [i]]`

### Restrictions

- No `for` loops allowed.

### Solutions

```js
const sharingElements = (arr, size) => {
  let result = [];
  while (arr.length > 0) {
    result.push(arr.splice(0, size));
  }
  return result;
};
```
