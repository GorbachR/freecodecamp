function fearNotLetter(str) {

let missingChar = str.split("").find((char, ind, arr) => {

    if(ind + 1 === arr.length) return

    return char.charCodeAt() + 1 !== arr[ind + 1].charCodeAt()
  }
)

return missingChar ? 
String.fromCharCode(missingChar.charCodeAt() + 1) :
missingChar
}

fearNotLetter("abce");