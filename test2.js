const API_URL_2 = "https://1zq5d.wiremockapi.cloud/array";
const API_URL = "https://1zq5d.wiremockapi.cloud/json/1";

const getArray = async () => {
  const resp = await fetch(API_URL_2)
    .then((rsp) => {
      if (!rsp.ok) throw new Error("Error fetching Array");
      return rsp.json();
    })
    .catch((error) => {
      throw new Error("Network Error", error);
    });
  return resp;
};

const getJson = async () => {
  const resp = await fetch(API_URL)
    .then((rsp) => {
      if (!rsp.ok) throw new Error("Error fetching Array");
      return rsp.json();
    })
    .catch((error) => {
      throw new Error("Network Error", error);
    });
  return resp;
};

const modifyArray = async () => {
  const arr = await getArray();

  console.log("====== Things to do with array ======");
  console.log("Array: ", arr);
  // Add things to the Array
  arr.push("hungry");
  console.log("add: ", arr);
  // Loop through the Array
  console.log("loop: ");
  arr.forEach((e, i) => console.log(`${i}: ${e}`));
  // Delete things from the Array
  delete arr[0];
  console.log("delete: ", arr);
  // Sort the array
  arr.sort();
  console.log("Sorted array: ", arr);
  console.log("====================================");
};

const modifyJSON = async () => {
  const obj = await getJson();

  console.log("====== Things to do with json ======");
  console.log("obj: ", obj);
  // Add things to JSON
  obj["hello"] = "it's me";
  console.log("add: ", obj);
  // Loop through the JSON keys
  console.log("loop: ");
  Object.keys(obj).forEach((key, i) => {
    console.log(`${i}: ${key}`);
  });
  // Delete items from JSON
  delete obj.hello;
  console.log("delete: ", obj);
  console.log("====================================");
};

const sortArray = (arr) => {
  console.log("===========array============");
  const arr2 = [1, 2, 3];
  const filtered = arr.filter((number) => number % 2 === 0);
  console.log("filtered: ", filtered);
  const find = arr.find((number) => number % 2 === 0);
  console.log("find: ", find);
  const includes = arr.includes(2);
  console.log("includes: ", includes);
  // Add element at position
  const add = arr.splice(1, 0, 3);
  console.log("add: ", add);

  const concat = arr.concat(arr2);
  console.log("concat: ", concat);
  console.log("============================");
};

const createMap = () => {
  const map = new Map();
};

const createSet = () => {
  const set = new Set();
};

const createQueue = (arr) => {
  console.log("===========queue============");

  const queue = arr;
  console.log("queue: ", queue);
  // dequeue first element in array
  if (queue.length > 0) queue.shift();
  console.log("dequeue: ", queue);
  // enqueue
  queue.push(10);
  console.log("enqueue: ", queue);
  // is empty
  isEmpty = queue.length === 0;
  console.log("isEmpty: ", isEmpty);
  console.log("============================");
};

const createStack = (arr) => {
  console.log("===========stack============");
  const stack = arr;
  console.log("============================");
};

class Node {
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}

class Tree {
    constructor(){
        this.root = null
    }
    // insert(value){
    //     const newNode = new Node();
    //     if(!this.root){
    //         this.root = newNode;
    //     }else{
    //         if()
    //     }
    // }
}


const createTree = () => {};

modifyArray();
modifyJSON();
sortArray([1, 2, 3, 4, 5]);
createQueue([1, 2, 3, 4, 5]);
