function makeCounter(initialValue = 0) {
    let count = initialValue-1;
    return function counter(){
      count = count + 1;
      return count;
    }
}

const counter = makeCounter();

console.log(counter());
console.log(counter());