// JS Nuggets: How do you check if one string contains another string?

var string = "JS Nuggets is great!",
    substring = "great";

console.log(string.indexOf(substring) !== -1);

console.log(string.includes(substring));