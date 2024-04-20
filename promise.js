// Promises are async
// They are non-blocking even when JS is only single threaded
// Promise has 3 states
// 1. pending : initial state
// 2. fullfilled (settled) : operation completed
// 3. rejected (settled): operation failed

//Q: When to use new Promise? How is Promise.resolve and Promise.reject difference from
// Promise

// Promise.all
// Returns all the response in an array
// If there is one reject it rejects everything
function promiseAll(requests) {
  const arr = Array(requests.length);
  let fufilled = requests.length;

  return new Promise((resolve, reject) => {
    requests.forEach((r, i) => {
      Promise.resolve(
        r.then((a) => (arr[i] = a)),
        (err) => reject(err)
      );
      fufilled--;
      if (fufilled === 0) {
        resolve(arr);
      }
    });
  });
}

// Promise.race
// Returns the first resolved
// Rejects if one rejects
// Stays pending if nothing reolves or rejects
function promiseRace(requests) {
  return new Promise((resolve, reject) => {
    requests.forEach((r) => {
      Promise.resolve(r).then(resolve, reject);
      // Cannot use catch cause it will not work if reject happened
      // right after being resolved.
    });
  });
}

// Promise.reject
// returns a Promise wrapping the reason
function PromiseReject(r) {
  return Promise.reject(r);
}

// Relationship between await, async and Promise

const p1 = new Promise((resolve, reject) => {
  setTimeout(resolve("yolo"), 100);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(resolve(42), 200);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(reject("ATTENTION 50"), 100);
});

// const p4 = new Promise((resolve, reject) => {
//   setTimeout(resolve("ATTENTION 32"), 200);
// });

const toResolveAll = async () => {
  const arr = [p1, p2];
  const resolved1 = await Promise.all(arr);
  const resolved2 = await promiseAll(arr);
  console.log("Promise.all: ", resolved1);
  console.log("promiseAll: ", resolved2);
};

const toResolveRace = async () => {
  const arr = [p1, p3];
  const resolved1 = await Promise.race(arr).catch((error) =>
    console.log(error)
  );
  const resolved2 = await promiseRace(arr).catch((error) => console.log(error));
  console.log("Promise.race: ", resolved1);
  console.log("promiseRace: ", resolved2);
};

const toReject = async () => {
  const rejected1 = await PromiseReject("reject?").catch((error) =>
    console.log(error)
  );
  const rejected2 = await Promise.reject("reject?").catch((error) =>
    console.log(error)
  );
    console.log("PromiseReject: ", rejected1);
  console.log("Promise.reject: ", rejected2);
};

// toResolveAll();
// toResolveRace();
toReject();
