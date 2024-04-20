function selectionSort(arr) {
    let min = arr[0];
    let p = 0

    for(let i = 0; i < arr.length; i++){
      for(let j = i+1; j < arr.length; j++){
        if(arr[j]<min){
            min = arr[j];
            p=j;
        }
      }

      arr[p] = arr[i];
      arr[i] = min;
      console.log("i: ", i)
      console.log("arr: ", arr)
      p=i+1
      min = i<arr.length-1? arr[i+1]: arr[arr.length-1];
      console.log("min: ", min)
    }
    return arr;
  }

  console.log(selectionSort([9, 3, 6, 2, 1, 11]))

  //[1, 3, 6, 2, 9, 11]
  //[1, 2, 6, 3, 9, 11]
  //[1, 2, 3, 6, 9, 11]
