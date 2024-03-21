function smallestCommons(arr) {

    let sortedArr = arr.slice().sort((a,b) => a < b ? -1 : 1);
    let isSmallestCommon = false;
    let smallestCommon;
    let counter = 0;
  
    while(!isSmallestCommon) {
      counter++;
      smallestCommon = sortedArr[0] * counter;
  
      for(let i = sortedArr[0]; i <= sortedArr[sortedArr.length - 1]; i++) {
        if(smallestCommon % i) break;
  
        if(i === sortedArr[sortedArr.length - 1]) isSmallestCommon = true;
      }
  
    }
         return smallestCommon;
  }
  
  smallestCommons([1,5]);
  console.log(smallestCommons([1,5]))