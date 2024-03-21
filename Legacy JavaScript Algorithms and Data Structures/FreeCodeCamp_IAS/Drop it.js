function dropElements(arr, func) {
  
  let indexToDrop;

  for(let i = 0; i <= arr.length - 1; i++) {
    if(func(arr[i])) {
      indexToDrop = i;
      break;
    }
  }

  return indexToDrop === undefined ? [] : arr.slice(indexToDrop);
}

dropElements([1, 2, 3], function(n) {return n < 3; });