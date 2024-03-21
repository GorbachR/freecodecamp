function sumFibs(num) {

  let sum = 1;
  for(let i = 1, j = 1, temp; i <= num; temp = i, i += j, j = temp) {
    if( i % 2 !== 0) sum += i;
  }
  
  return sum;
}

sumFibs(4);