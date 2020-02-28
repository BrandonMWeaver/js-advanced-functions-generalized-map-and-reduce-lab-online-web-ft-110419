function map(array, func) {
  let newArray = [];
  for (const element of array) {
    newArray.push(func(element));
  }
  return newArray;
}

function reduce(array, func, start) {
  let returnValue = !!start ?;
  for (let i = start > 0 ? 1 : 0; i < array.length; i++) {
    returnValue = func(array[i], returnValue);
  }
  return returnValue;
}
