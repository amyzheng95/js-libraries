function chunk(array, size = 1) {
    const resp = []
    let count = size;
    let temp = []
    for(let i = 0; i < array.length; i++){
      
      if(count === 0){
        resp.push(temp)
        temp = []
        count = size;
      } 
  
      temp.push(array[i])
      count--;
    }

    resp.push(temp);
    return resp;
  }

  console.log(chunk(['a', 'b', 'c', 'd']));