function flatten(value) {
  let flattened = [];

  value.forEach((v) => {
    if (Array.isArray(v)) {
      console.log("is array: ", flattened)
      flattened = [...flattened, ...flatten(v)];
  console.log("combined ", flattened)

    }
    else{
        flattened.push(v);
    }
  });
  console.log("return ", flattened)
  return flattened;
}

console.log(flatten([1, [2]]))