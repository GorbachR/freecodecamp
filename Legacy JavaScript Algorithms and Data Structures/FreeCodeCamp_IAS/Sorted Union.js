function uniteUnique(...arr) {

  let unitedArr = [];

  arr.forEach((inputArr) => {

    inputArr.forEach((number) => {

      if(unitedArr.indexOf(number) !== -1) return

      unitedArr.push(number)
    })

  })

  return unitedArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);