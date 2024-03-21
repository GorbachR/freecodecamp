function sumAll(arr) {

    const sortedArr = arr.slice().sort((a,b) => a < b ? -1 : 1)
    const newArr = [];
  
    for(let i = sortedArr[0]; i <= sortedArr[1]; i++) {
  
      newArr.push(i);
    }
  
    return newArr.reduce((acc, curr) => acc + curr);
  
  }
  
  sumAll([1, 4]);