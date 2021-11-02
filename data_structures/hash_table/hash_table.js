class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  // Set Pseudocode
  //  - Write a function called set that accepts a key and a value
  set(key, value) {
    //  - Hash the key and store the result in a variable called index
    let index = this._hash(key);
    //  - First, check to see if there is anything in keyMap at that index (hint: if statement), if there isn't then create an empty array at that index
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    //  - Then, push [key/value] pair into keyMap at index (hint: outside of the if statement)
    this.keyMap[index].push([key, value]);
  }

  // Get Pseudocode
  //  - Write a function that accepts a key
  get(key) {
    //  - Hash the key and store the result in a variable called index
    let index = this._hash(key);
    //  - First check to see if the index at keyMap exists
    if (this.keyMap[index]) {
      //  - If it does, loop through the nested array (length of keyMap at index)
      for (let i = 0; i < this.keyMap[index].length; i++) {
        //     - if the key passed to the function (keyMap at index at i at 0) matches the key passed to the function, return that element's value
        if (key === this.keyMap[index][i][0]) {
          return this.keyMap[index][i][1];
        }
      }
    }
    //  - If the key isn't found, returns undefined
    return undefined;
  }
}

let ht = new HashTable(17);
ht.set("maroon", "#800000");
ht.set("yellow", "#FFFF00");
ht.set("olive", "#80800");
ht.set("salmon", "#FA8072");
ht.set("lightcoral", "#F08080");
ht.set("mediumvioletred", "#C71585");
ht.set("plum", "#DDA0DD");
console.log(ht);
ht.get("mediumvioletred");
