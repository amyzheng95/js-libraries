function deepClone(value) {
  const type = typeof value;
  if (!value || type === "string" || type === "boolean" || type === "number")
    return value;

  if (Array.isArray(value)) {
    return value.map((i) => {
      if (typeof i === "object") {
        return cloneObj(i);
      } else {
        return i;
      }
    });
  }

  if (type === "object") {
    return cloneObj(value);
  }
  return value;
}

function cloneObj(obj) {
  const newObj = {};
  for (let key in obj) {
    if (typeof obj[key] === "object") newObj[key] = cloneObj(obj[key]);
    else newObj[key] = obj[key];
  }
  return newObj;
}

console.log(deepClone("foo"));
console.log(deepClone(123));
console.log(deepClone({ role: "foo" }));
console.log(deepClone({ user: { role: "admin", id: "123" } }));
console.log(deepClone([{ a: { id: "foo" } }, { b: { id: "baz" } }]));
