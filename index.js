function map(array, func) {
  let newArray = [];
  for (const element of array) {
    newArray.push(func(element));
  }
  return newArray;
}

function reduce(array, func, start = 0) {
  let returnValue = start;
  for (const element of array) {
    returnValue = func(element, start);
  }
  return returnValue;
}
