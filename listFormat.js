function listFormat(items, options) {
  let arr = items.filter((x) => x && x !== "");
  if (arr.length === 0) return "";
  if (arr.length === 1) return arr[0];

  if (options && options.sorted) {
    arr.sort();
  }

  if (options && options.unique) {
    const set = new Set(arr);
    arr = [...set];
  }

  if (
    options &&
    options.length &&
    options.length < arr.length &&
    options.length > 0
  ) {
    const resp = [];
    for (let i = 0; i < options.length; i++) {
      resp.push(arr[i]);
    }
    const other = arr.length - options.length;
    return (
      resp.join(", ") + ` and ${other} ${other === 1 ? "other" : "others"}`
    );
  }
  const newArr = arr.slice(0, arr.length - 1);
  const last = arr[arr.length - 1];

  if (items.length === 1) return items[0];
  return newArr.join(", ") + " and " + last;
}

console.log(
  listFormat(["Bob", "Ben", "Tim", "Jane", "John", "Bob"], {
    length: 3,
    unique: true,
  })
);

console.log(
  listFormat(["Bob", "Ben", "Tim", "Jane", "John"], {
    length: 3,
    unique: true,
    sorted: true,
  })
);
