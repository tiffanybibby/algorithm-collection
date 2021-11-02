# Match Last Names

### Objectives

- Create a function which takes two arguments:
  - an array of objects that consist of first and last name properties.
  - an object with a last name property.
- The function should return the object from the array that matches the last name provided in the second argument.

### Edge Case

- If the second argument is not given, return **'No Lookup Value Provided'**

### Match Last Name

- For e.g., if given the following array of objects:

```js
[
  {
    first: "Mike",
    last: "Tyson",
  },
  {
    first: "Michael",
    last: "Jordan",
  },
];
```

and this object:

```js
{
  last: "Jordan";
}
```

this object should be returned:

```js
  {
    first: "Michael",
    last: "Jordan"
  }
```
