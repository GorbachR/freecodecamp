function sumPrimes(num) {

  let sum = 2;

  for(let i = 3; i <= num; i += 2) {
      let isPrime = 1;

      for(let j = 3; j <= Math.sqrt(i); j+= 2)
      {
        if(!(i % j)) isPrime = 0;
      }

      if(isPrime === 1) sum+= i;
        
  }
  console.log(sum)
  return sum;
}
sumPrimes(10);
console.log(sumPrimes(13))

/*Used the principles outlined here to solve this:
https://stackoverflow.com/questions/5811151/why-do-we-check-up-to-the-square-root-of-a-number-to-determine-if-the-number-is */