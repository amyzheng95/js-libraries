function range(start = 0, end, step = 1) {
  const arr = [];

  if (start < 0 && !end) step = -1;

  if (!end) {
    end = start;
    start = 0;
  }
  console.log("end: ", end);
  console.log("start: ", start);

  if (start === end || start > end) return [];

  if (step === 0) {
    let range = Math.max(start - end, end - start);
    while (range > 0) {
      arr.push(start);
      range--;
    }
  } else {
    for (let i = start; start < end ? i < end : i > end; i += step) {
      arr.push(i);
    }
  }
  return arr;
}

console.log(range(-4));
