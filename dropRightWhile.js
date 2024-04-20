// function dropRightWhile(array, predicate) {
//   const arr = []
//   for(let x of array){
//     if(predicate(x)){
//       return arr;
//     }
//     arr.push(x)
//   }
//   return arr;
// }

function dropRightWhile(array, predicate) {
  let last = array.length-1;
  
  for(let i = array.length-1; i >=0 ; i--){
    console.log(predicate(array[i], i, array))
    if(!predicate(array[i], i, array)) {
      last = i;
      break;
    }
    if(i === 0 && last === array.length-1) return[]
  }
  
  return array.slice(0, last+1)
}

console.log(dropRightWhile([1, 2, 3, 4, 5], (value) => value < 6));
