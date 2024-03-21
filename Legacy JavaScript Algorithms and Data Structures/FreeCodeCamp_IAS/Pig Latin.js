function translatePigLatin(str) {

  return /^[aeiou]/i.test(str) ?
         str.concat("way") :

         str.match(/[aeiou]+/i) === null ?
         str.concat("ay") :
         
         str.concat(`${str.match(/^[^aeiou]+/i)}ay`)
            .replace(/^[^aeiou]+/i, "")
         
}

translatePigLatin("consonant");
console.log(translatePigLatin("rhythm"))
