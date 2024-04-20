function uniqueArray(array) {
    if(array.length <= 1) return array
    const set = new Set(array);
    return [...set]
}

console.log(uniqueArray([2, 3]))