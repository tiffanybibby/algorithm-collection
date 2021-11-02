const matchLastName = (fullNames, lastName) => {
  if (!lastName) {
    return "No Lookup Value Provided";
  }
  return (result = fullNames.find((name) => name.last === lastName.last));
};

console.log(
  matchLastName(
    [
      { first: "Dan", last: "Dalgatov" },
      { first: "David", last: "Whitlatch" },
      { first: "Stefon", last: "Simmons" },
      { first: "Ashley", last: "Kildunne" },
      { first: "Anna", last: "Schneider" },
    ],
    { last: "Kildunne" }
  )
);
