// function curry(func) {
//   return function curried(...args) {
//     console.log("func: ", func);
//     console.log("func length: ", func.length);
//     console.log("args: ", args);
//     console.log("arg length: ", args.length);
//     if (args.length >= func.length) {
//       return func.apply(this, args);
//     }

//     return (arg) => {
//       arg === undefined
//         ? curried.apply(this, args)
//         : curried.apply(this, [...args, arg]);
//     };
//   };
// }

function curry(func) {
    return function curried(...args) {
      if (args.length >= func.length) {
        return func.apply(this, args);
      }
  
      return (arg) =>
        arg === undefined
          ? curried.apply(this, args)
          : curried.apply(this, [...args, arg]);
    };
  }

function add(a, b, c) {
  return a + b + c;
}

const curryAdd = curry(add);
const curryAdd1 = curryAdd();
const curryAdd2 = curryAdd1(2);
const curryAdd3 = curryAdd2(3);

console.log( "1: ", curryAdd1);
console.log( "2: ", curryAdd2);
console.log( "3: ", curryAdd3(4));


