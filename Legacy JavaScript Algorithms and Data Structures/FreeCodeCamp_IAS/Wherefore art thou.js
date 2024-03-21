function whatIsInAName(collection, source) {
  const arr = [];
  // Only change code below this line
  
  arr.push(...collection.filter((element) => {

    let valuesExist = Object.entries(source).every((valuePair) => {
      
      return element.hasOwnProperty(valuePair[0]) &&
      element[valuePair[0]] === valuePair[1] ?
      true : false
    });

    return valuesExist ? true : false;
  })
  
  );

  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });