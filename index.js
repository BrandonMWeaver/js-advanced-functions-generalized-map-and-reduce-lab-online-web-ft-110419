function map(array, func) {
  let newArray = [];
  for (const element of array) {
    newArray.push(func(element));
  }
  return newArray;
}

function reduce(array, start = 0, func) {
  for (const element of array) {
    func(element);
  }
}
