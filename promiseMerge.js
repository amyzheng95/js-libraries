function promiseMerge(p1, p2) {
  return new Promise((resolve, reject) => {
    Promise.all([p1, p2]).then((arr) => {
      let [a, b] = [arr[0], arr[1]];
      const typeA = typeof a;
      const typeB = typeof b;
      if (typeA !== typeB) reject("Unsupported data types");

      if (typeA === "number" && typeB === "number") {
        resolve(a + b);
      }

      if (typeA === "string" && typeB === "string") {
        resolve(`${a}${b}`);
      }

      if (Array.isArray(a) && Array.isArray(b)) {
        resolve([...a, ...b]);
      }

      if (typeA === "object" && typeB === "object") {
        resolve({ ...a, ...b });
      }

      reject("Unsupported data types");
    });
  });
}

const toPromiseMerge = async () => {
  const promise = promiseMerge(
    new Promise((resolve) => setTimeout(() => resolve(1), 5)),
    new Promise((_, reject) => setTimeout(() => reject(2), 10))
  );
};

toPromiseMerge();
