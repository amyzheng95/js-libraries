function fill(array, value, start = 0, end = array.length) {
  if (start < 0) {
    start = array.length + start;
  }

  if (end < 0) {
    end = array.length + end;
  }

  if(start < 0){
    start = 0;
  }

  if(end > array.length){
    end = array.length;
  }

  if (start > end) return array;

  for (let i = start; i < end; i++) {
    array[i] = value;
  }

  return array;
}

console.log(fill([1, 2, 3], '*', 1, 10))