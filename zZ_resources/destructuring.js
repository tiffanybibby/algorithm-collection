/* Destructuring */

// Assign variables from objects
var voxel = {x: 3.6, y: 7.4, z: 6.54 };

const {x, y, z} = voxel;
console.log(x);
const {x : a, y : b, z : c} = voxel;
console.log(b);

// Assign variables from nested objects
const nest = {
  start: { x: 5, y: 6},
  end: { x: 6, y: -9 }
};
const { start : { x: startX, y: startY }} = nest;
console.log(startX);

// Assign Variables from Arrays
//const [q,,, r] = [1, 2, 3, 4, 5];
//console.log(q, r);

// Rest Operator to Reassign Array Elements
const [q, r, ...rest] = [1, 2, 3, 4, 5];
console.log(q, r);
console.log(rest);

// Pass an Object as a Function's Parameters
const profileUpdate = ({ name, age }) => {
  // do something with these variables
}