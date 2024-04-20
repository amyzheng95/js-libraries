function meanBy(array, iteratee) {
  if (array.length === 0) return NaN;

  let sum = 0;

  array.map((a) => {
    if(!iteratee(a)) return NaN
    sum += iteratee(a);
  });

  return sum/array.length
}

console.log(meanBy([{ n: 1 }, { n: 2 }, { n: 3 }], (o) => o.n));
