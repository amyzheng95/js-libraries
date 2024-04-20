function difference(array, values) {
  const set1 = new Set(array.filter(x => x!==""));
  const set2 = new Set(values);
  const result = [];
  
  for (let x of set1) {
    if (!set2.has(x)) {
      result.push(x);
    }
  }
  return result;
}

console.log(difference([1, , 3], [2]));
console.log(difference([1, 2, 3], []));
console.log(difference([1, 2, 3], [2, 3, 4]))