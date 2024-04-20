function promiseAny(iterable) {
  if (iterable.length === 0) {
    return Promise.reject(console.log([]));
  }

  let numberOfErrors = 0;
  let errors = [];

  return new Promise((resolve, reject) => {
    for (let p in iterable) {
      p.then((v) => {
        resolve(v);
      }).catch((e) => {
        numberOfErrors++;
        errors.push(e);
      });
    }
    if (numberOfErrors === iterable.length) reject(console.log(errors));
  });
}

const p1 = Promise.reject("I'm some error");
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(42);
  }, 100);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(22);
  }, 50);
});

promiseAny([p1, p2, p3])
  .then((v) => console.log(v))
  .catch((error) => console.log("yolo"));
