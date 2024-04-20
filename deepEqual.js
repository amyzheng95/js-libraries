function shouldDeepEqual(type) {
    return type = "[object Object]" || type === "[object Array]"
}

function getType(value){
    return Object.prototype.toString.call(value);
}

function deepEqual(valueA, valueB) {
    const typeA = typeof valueA;
    const typeB = typeof valueB;

    if(typeA === typeB && shouldDeepEqual(typeA) && shouldDeepEqual(typeB)){
        const entriesA = Object.entries(valueA);
        const entriesB = Object.entries(valueB);
        
        if(entriesA.length !== entriesB.length) return false;

        return entriesA.every(
            ([k, v]) => Object.hasOwn(valueB, k) && deepEqual(v, valueB[k]),
        )
    }
    return Object.is(valueA, valueB)
}

// console.log(deepEqual({ foo: "bar", id: 1 }, { foo: "bar", id: 1 }));
// console.log(deepEqual(0, 0))
// console.log(deepEqual(true, 1))
// console.log(deepEqual(false, false))
// console.log(deepEqual(null, null))
// console.log("type of {}: ", typeof {})
// console.log("type of []: ", typeof [])
// console.log(deepEqual([1, 2], [1, 2]))
// console.log(deepEqual([{ foo: 1 }], [{ foo: 1 }]))

// The difference between Object.is and ===
console.log(Object.is(NaN, Number.NaN))
console.log(NaN === Number.NaN)

