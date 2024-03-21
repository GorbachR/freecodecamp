function pairElement(str) {

return str.split("").map((item) => {
    
    switch (item) {
      case 'A':
      return [item, 'T']
      case 'T':
      return [item, 'A']
      case 'G':
      return [item, 'C']
      case 'C':
      return [item, 'G']
    }
  } )
 
}

pairElement("GCG");
console.log(pairElement("GCG"))