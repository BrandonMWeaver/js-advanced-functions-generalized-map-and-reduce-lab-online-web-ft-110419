function map(array, func) {
  let newArray = [];
  for (const element of array) {
    newArray.push(func(element));
  }
  return newArray;
}

function reduce(array, func, start = 0) {
  let returnValue = start;
  for (let i = start > 0 ?) {
    returnValue = func(element, returnValue);
  }
  return returnValue;
}
