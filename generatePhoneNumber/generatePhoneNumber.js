const generatePhoneNumber = (nums) => {
  if (typeof nums === "number") {
    nums = nums.toString();
  } else {
    nums = nums.join("");
  }
  return `${nums.slice(0, 3)}-${nums.slice(3, 6)}-${nums.slice(6)}`;
};

console.log(generatePhoneNumber(1234567890));
