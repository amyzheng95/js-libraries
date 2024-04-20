function promiseAll(iterable) {
  return new Promise((resolved, rejected) => {
    const arr = [];
    let finished = iterable.length;

    if(finished === 0){
        resolved(arr)
    }
    
    iterable.forEach((p, i) => {
      Promise.resolve(p).then((v) => {
        arr[i] = v;
        finished--;
        if(finished === 0){
            console.log("arr: ", arr);
            resolved(arr)
        }
      }, (error) => {
        rejected(error)
      });
    });
  });
}

function getUser(id, wait) {
  const time = Math.random(100) * wait;
  return new Promise((resolved, rejected) => {
    setTimeout(resolved(`USER: ${id}`), time);
  });
}

const resp = promiseAll([getUser(1, 100), getUser(2, 200), getUser(3, 300)]);
resp.then(v => console.log("resp: ", v) )

