function myReplace(str, before, after) {

  return before.search(/^[A-Z]/) === -1 ?
         str.replace(new RegExp(`${before}`, 'g'), `${after.toLowerCase()}`) :
         str.replace(new RegExp(`${before}`, 'g'), 
         `${after.replace(/^[a-z]/, after[0].toUpperCase())}`)        
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");