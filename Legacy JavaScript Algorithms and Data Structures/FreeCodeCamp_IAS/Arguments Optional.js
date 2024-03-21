function addTogether(a, b) {
  
    if(typeof a === 'number' && typeof b === 'number') return a+b;
   
    if(typeof a !== 'number' || arguments.length > 1 && typeof b !== 'number') return undefined;
   
   return function callback(b) {
     return typeof b === 'number' ? a + b : undefined;
     }
   }
   
   addTogether(2,3);