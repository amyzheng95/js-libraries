async function helper(requests, fn, count, arr, finalCallBack) {
  if (requests.length <= count.count) {
    return;
  }
  const current = count.count;
  count.count = count.count + 1;
  arr[current] = new Promise(() => fn(requests[current],finalCallBack)).then(
    helper(requests, fn, count, arr, finalCallBack)
  );
}

async function makeRequests(requests, n, fn, finalCallBack) {
  let count = { count: 0 };
  const arr = [];

  for (let i = 0; i < n; i++) {
    helper(requests, fn, count, arr, finalCallBack);
    count.count = count.count + 1;
  }

  console.log("we will wait: ", await Promise.all(arr));
}

const printRsp = (resp) => {
  console.log(resp);
};

function getUserId(id, callback) {
  const time = 100 + Math.random();
  setTimeout(() => {
    callback(`User:  ${id}`);
  }, time);
}

makeRequests([1, 2, 3, 4, 5], 2, getUserId, printRsp);
