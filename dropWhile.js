function dropWhile(array, predicate) {
  let index = 0;

  while (index < array.length && predicate(array[index])) {
    index++;
  }
  return array.slice(index, array.length);
}

console.log(dropWhile([1, 2, 3, 4, 5], (value) => value < 3))
