function promiseRace(iterable) {
  return new Promise((resolve, reject) => {
    for (const p in iterable)
      p.then((a) => resolve(a)).catch((error) => reject(b));
  });
}; 

const p0 = new Promise((resolve) => {
    setTimeout(() => {
      resolve(42);
    }, 100);
  });
  const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Err!');
    }, 400);
  });

  async function letsWait(){
    console.log(await promiseRace([p0, p1]));
  }
  
letsWait();