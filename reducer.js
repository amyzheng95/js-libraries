// Attempt second
// TODO

Array.prototype.myReduce = function (callbackFn, initialValue) {
    // initial Value [], {}, undefined, primitive type
    let result = initialValue === undefined? this[0]: initialValue

    if(initialValue === undefined && this.length === 0){
        throw new Error("Reduce of empty array with no initial value")
    }

    for(let i = initialValue === undefined? 1:0; i < this.length ; i++){
        if(Object.hasOwn(this, i)){
            result = callbackFn(result, this[i], i, this);
        }
    }

    return result;
};

const adding = (a, b) => {
  return a + b;
};


const times = (a, b) => {
    return a * b;
};

const multiplyByIndex = (prev, curr, index) =>
  prev + curr * index;

// const combineArr = (arr1, arr2) => {
//     return [...arr1, arr2]
// }

const combineArr = (prev, curr) => [...prev, curr];
const combineObj = (prev, curr) => ({ ...prev, ...curr });


// console.log([1, 2, 3].myReduce(adding, 0));
// console.log([1, 2, 3].reduce(adding, 0));

// console.log([1, 2, 3].myReduce(times, 20));
// console.log([1, 2, 3].reduce(times, 20));

// console.log(["a", "b", "c"].myReduce(adding, 0));
// console.log(["a", "b", "c"].reduce(adding, 0));

console.log([1, 2, 3].myReduce(combineArr, []));
console.log([1, 2, 3].reduce(combineArr, []));

console.log([1, 2, 3].myReduce(multiplyByIndex, 0));
console.log([1, 2, 3].reduce(multiplyByIndex, 0));

console.log([{ foo: 1 }, {}].myReduce(combineObj, {}));
const arr = [1,2,3,,4]
for(let i = 0; i < arr.length; i++){
    console.log("element: ", arr[i])
    console.log("hasOwn nothing", Object.hasOwn(arr, i))
}
    




