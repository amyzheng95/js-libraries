function rangeRight(start = 0, end, step = 1) {
  if (!end) {
    end = start;
    start = 0;
  }

  if (end < start && step > 0) step = -1*step;

  let range = Math.max(start - end, end - start);
  
  if(step!=0){
    range = Math.floor(range)/(step>0? step: step*-1)
  }

  const result = [];

  while (range > 0) {
    result.push((end -= step));
    range--;
  }

  return result;
}

console.log(rangeRight(8, -2, -3))