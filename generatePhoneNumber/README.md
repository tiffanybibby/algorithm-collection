## Mini Algorithm Exercise

"Generate Phone Number"

> Language: JavaScript
>
> Difficulty: Medium

### Objectives

- Create a function which takes a given argument consisting of numbers, `nums`.
- The output should be a new string that is a valid US phone number.

> i.e.:
>
> input => `8885653421`
>
> output => `'888-565-3421'`

### Notes

- You must account for various data types for the argument input. (`nums` can be **either** an integer or an array of integers.)
- You do **not** need to account for `+1`, the United States country code.
- **No for loops allowed.** Refer to the [Airbnb Style Guide](https://github.com/airbnb/javascript#iterators-and-generators) for more on why "for loops" are disadvantageous, compared to other iterators.

### Solution

```js
const generatePhoneNumber = (nums) => {
  if (typeof nums === "number") {
    nums = nums.toString();
  } else {
    nums = nums.join("");
  }
  return `${nums.slice(0, 3)}-${nums.slice(3, 6)}-${nums.slice(6)}`;
};
```
