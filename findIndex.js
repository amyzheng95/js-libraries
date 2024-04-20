function findIndex(array, predicate, fromIndex = 0) {
  const arr = array.slice(fromIndex, array.length);

  for (let i = 0; i < arr.length; i++) {
    if (predicate(arr[i])) return arr[i];
  }
  return -1;
}

console.log(findIndex([4, 12, 8, 130, 44], (num) => num % 2 === 0))
