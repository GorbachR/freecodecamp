function steamrollArray(arr, newArr = []) {

    arr.forEach((item) => {
  
    if(!Array.isArray(item)) {newArr.push(item); return}
  
    steamrollArray(item, newArr);
    }) 
    console.log(newArr)
  
    return newArr
   
  }
  
  steamrollArray([1, [2], [3, [[4]]]]);